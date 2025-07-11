import { useState, useEffect } from 'react';
import { User, AuthState } from '../types/auth';

// Google OAuth configuration
const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

declare global {
  interface Window {
    google: any;
    gapi: any;
  }
}

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    initializeGoogleAuth();
  }, []);

  const initializeGoogleAuth = async () => {
    try {
      // Check if Google Client ID is configured
      if (!GOOGLE_CLIENT_ID || GOOGLE_CLIENT_ID === 'your_actual_google_client_id_here') {
        setAuthState(prev => ({
          ...prev,
          loading: false,
          error: 'Google Client ID not configured. Please add VITE_GOOGLE_CLIENT_ID to your .env file.',
        }));
        return;
      }

      // Load Google API script
      if (!window.google) {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
        
        script.onload = () => {
          window.google.accounts.id.initialize({
            client_id: GOOGLE_CLIENT_ID,
            callback: handleCredentialResponse,
          });
        };
      }

      // Check if user is already signed in
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setAuthState({
          isAuthenticated: true,
          user: JSON.parse(storedUser),
          loading: false,
          error: null,
        });
      } else {
        setAuthState(prev => ({ ...prev, loading: false }));
      }
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        loading: false,
        error: 'Failed to initialize Google authentication',
      }));
    }
  };

  const handleCredentialResponse = async (response: any) => {
    try {
      setAuthState(prev => ({ ...prev, loading: true }));
      
      // Decode the JWT token
      const credential = response.credential;
      const payload = JSON.parse(atob(credential.split('.')[1]));
      
      const user: User = {
        id: payload.sub,
        email: payload.email,
        name: payload.name,
        picture: payload.picture,
        verified_email: payload.email_verified,
      };

      localStorage.setItem('user', JSON.stringify(user));
      
      setAuthState({
        isAuthenticated: true,
        user,
        loading: false,
        error: null,
      });
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        loading: false,
        error: 'Failed to sign in with Google',
      }));
    }
  };

  const signIn = () => {
    if (window.google) {
      window.google.accounts.id.prompt();
    }
  };

  const signOut = () => {
    localStorage.removeItem('user');
    setAuthState({
      isAuthenticated: false,
      user: null,
      loading: false,
      error: null,
    });
  };

  return {
    ...authState,
    signIn,
    signOut,
  };
};