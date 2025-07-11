export interface User {
  id: string;
  email: string;
  name: string;
  picture: string;
  verified_email: boolean;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}