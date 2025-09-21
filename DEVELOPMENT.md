# Development Guide

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- pnpm (recommended) or npm
- Supabase CLI (for local development)

### Local Development

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your Supabase credentials
   ```

3. **Start Supabase locally (optional for full local development):**
   ```bash
   # Install Supabase CLI if you haven't already
   npm install -g supabase
   
   # Start local Supabase services
   supabase start
   ```

4. **Start development server:**
   ```bash
   pnpm dev
   ```

5. **Open your browser:**
   - The site will be available at `http://localhost:3000`
   - The server supports hot reloading - changes will automatically refresh

### Available Scripts

- `pnpm dev` - Start development server with hot reloading
- `pnpm build` - Build production version
- `pnpm preview` - Preview production build locally
- `pnpm lint` - Check code for linting issues
- `pnpm lint:fix` - Auto-fix linting issues

### Supabase Integration

This project uses Supabase for backend services. You have two options for development:

#### Option 1: Use Production Supabase (Recommended for quick start)
1. Create a dedicated Supabase project for DAS Consulting at [supabase.com](https://supabase.com)
2. Copy your DAS Consulting project URL and anon key to `.env.local`
3. Start developing immediately

#### Option 2: Use Local Supabase (Recommended for full development)
1. Install Supabase CLI: `npm install -g supabase`
2. Start local services: `supabase start`
3. The local Supabase URL and keys will be displayed
4. Copy them to your `.env.local` file
5. Use `supabase stop` to stop local services when done

**Note**: This project has its own dedicated Supabase instance. Other projects (rent-roll, finops-tool) maintain separate Supabase instances.

### Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Services.jsx    # Services section
│   ├── WhyChooseUs.jsx # Why choose us section
│   ├── CaseStudy.jsx   # Case studies section
│   ├── CTA.jsx         # Call to action section
│   └── Footer.jsx      # Footer
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Global styles

public/
└── logo.png           # Company logo
```

### Making Changes

1. Edit components in `src/components/`
2. The development server will automatically reload
3. Check the browser console for any errors
4. Test on different screen sizes using browser dev tools

### Testing Locally

- **Desktop:** Open `http://localhost:3000`
- **Mobile:** Use browser dev tools or test on actual mobile device
- **Network:** The `--host` flag allows testing from other devices on your network

### Before Committing

1. Run linting: `npm run lint`
2. Fix any issues: `npm run lint:fix`
3. Test the build: `npm run build`
4. Preview the build: `npm run preview`

### Deployment

The site is configured for deployment to Cloudflare Workers/Pages. The build output goes to the `dist/` directory.
