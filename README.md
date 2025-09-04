# Frontend Project

## Architecture

This project uses a standard Next.js application structure with the following key components:

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Development**: Turbopack for fast development builds
- **Directory Structure**:
  - `/frontend` - Main Next.js application
  - `/frontend/src/app` - App Router pages and layouts
  - `/frontend/public` - Static assets

## Running the Development Server

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the application.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check for code issues
