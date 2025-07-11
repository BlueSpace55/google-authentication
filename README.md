# SecureAuth - Google Sign In

A beautiful, production-ready Google Sign In application built with React, TypeScript, and Tailwind CSS.

## Features

- 🔐 Google OAuth 2.0 authentication
- 🎨 Beautiful, responsive design
- 🚀 Lightning-fast performance
- 🔒 Enterprise-grade security
- 📱 Mobile-optimized interface
- ⚡ Real-time authentication state
- 🎯 TypeScript for type safety

## Setup

1. **Google Cloud Console Setup**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the Google+ API
   - Create credentials (OAuth 2.0 Client ID)
   - Add your domain to authorized origins

2. **Environment Variables**
   ```bash
   cp .env.example .env
   ```
   Replace `your_google_client_id_here` with your actual Google Client ID

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

## Configuration

### Google OAuth Setup

1. Visit [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Navigate to "Credentials" → "Create Credentials" → "OAuth 2.0 Client ID"
4. Set application type to "Web application"
5. Add authorized origins:
   - `http://localhost:5173` (for development)
   - Your production domain

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_GOOGLE_CLIENT_ID=your_actual_google_client_id_here
```

## Project Structure

```
src/
├── components/
│   ├── Dashboard.tsx          # User dashboard after signin
│   ├── ErrorMessage.tsx       # Error handling component
│   ├── GoogleSigninButton.tsx # Google signin button
│   ├── Landing.tsx            # Landing page
│   └── LoadingSpinner.tsx     # Loading state component
├── hooks/
│   └── useAuth.ts            # Authentication logic
├── types/
│   └── auth.ts               # TypeScript interfaces
├── App.tsx                   # Main app component
├── index.css                 # Tailwind CSS imports
└── main.tsx                  # React entry point
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Google Identity Services** - Authentication
- **Lucide React** - Icons

## Security Features

- OAuth 2.0 authentication flow
- Secure token handling
- Client-side validation
- Protected routes
- Session management
- HTTPS enforcement (production)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - feel free to use this project for personal or commercial use.