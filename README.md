# React Firebase Auth Integration

A simple React app built with Vite demonstrating Firebase Authentication, React Router v7, and context-based auth state.

## Features

- React 19 with Vite
- Firebase Authentication using email/password and Google sign-in
- Context provider for auth state
- Client-side routing with React Router v7
- Tailwind CSS + daisyUI for layout and styling
- Login and registration pages

## Project Structure

- `src/main.jsx` - app entry point and router setup
- `src/Layout/Root.jsx` - layout component with shared navbar
- `src/Components/Home/Home.jsx` - home page
- `src/Components/Login/Login.jsx` - login page
- `src/Components/Register/Register.jsx` - register page
- `src/Components/NavBar/NavBar.jsx` - navigation bar
- `src/Context/Auth_Context/Auth_Context.jsx` - React auth context
- `src/Context/AuthProvider/AuthProvider.jsx` - auth provider implementation
- `src/Firebase/Firebase.init.js` - Firebase initialization

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the app in the browser at the URL shown in the terminal.

## Build

To build the production bundle:

```bash
npm run build
```

## Notes

- Firebase config is located in `src/Firebase/Firebase.init.js`.
- If you want to use your own Firebase project, replace the config object with your Firebase web app credentials.
- `AuthProvider` wraps the app and exposes auth state to child components through `AuthContext`.

## Scripts

- `npm run dev` - start the Vite development server
- `npm run build` - build the production bundle
- `npm run lint` - run ESLint
- `npm run format` - format files with Prettier
- `npm run format:check` - check formatting with Prettier

## Dependencies

- `react`
- `react-dom`
- `react-router`
- `firebase`
- `tailwindcss`
- `daisyui`
- `@tailwindcss/vite`

---

Made for a React + Firebase authentication demo with Vite.
