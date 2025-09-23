# DAS Consulting Website

This repository contains the source code for [das.consulting](https://das.consulting), a consulting website promoting services in **Cloud Architecture, DevOps, and Development**.  
The site is hosted on **Cloudflare Workers** and integrated with GitHub for CI/CD.

---

## 🌐 Branding & Style
- **Logo Integration**: Teal "M" icon on dark backgrounds.  
- **Colors**:  
  - Primary: `#00BFA6` (Teal)  
  - Secondary: `#FFFFFF` (White)  
  - Background: `#0D1117` (Dark Navy)  
- **Typography**:  
  - Headings: **Poppins / Inter / Montserrat**  
  - Body: **Inter / Roboto / Source Sans Pro**

---

## 📑 Page Structure

### Homepage
- **Hero Section**
  - Headline: *Cloud Architecture. DevOps. Development.*
  - Subheadline: *We design scalable, secure, and automated solutions to move your business forward.*
  - CTA: **Book a Consultation**
  - Background: abstract tech shapes/illustration

- **About DAS Consulting**
  - Short intro about the company
  - Supporting image or graphic

- **Services Section**
  - **Cloud Architecture**  
  - **DevOps Services**  
  - **Custom Development**  
  Each has an icon, short description, and "Learn More" link

- **Why Choose Us**
  - Proven Expertise
  - Automation First
  - Cost Optimization
  - Security by Design

- **Case Study / Example Work Teaser**
  - Placeholder: *Coming soon – client success stories*

- **Call-to-Action Banner**
  - *“Ready to modernize your business? Let’s talk.”*

- **Footer**
  - Logo, quick links, social icons, © DAS Consulting 2025

### Services Pages
- Hero title + supporting graphic
- Intro (2–3 sentences)
- Value props (5–6 bullets)
- CTA: *Let’s Talk*

### Booking Page
- Integrated **Calendly** or **TidyCal**
- Syncs with Google Calendar
- CTA: *Schedule a Call*

---

## 🎨 UX/UI Requirements
- Sticky top navigation bar (transparent on hero, dark background when scrolling)
- Subtle fade-in animations on scroll
- Fully responsive (desktop, tablet, mobile)
- Accessibility: WCAG AA contrast compliance
- Performance target: **90+ Lighthouse score**

---

## 🛠 Tech Stack
- **Hosting**: Vercel
- **Frontend**: React + Vite + TailwindCSS
- **Backend**: Supabase (Database, Auth, Storage)
- **Animations**: Framer Motion
- **Deployment**: GitHub → Vercel for CI/CD
- **Local Development**: Supabase CLI for local testing

---

## ✍️ Copy Drafts

### Tagline
> Cloud Architecture. DevOps. Development.

### Subheadline
> We design scalable, secure, and automated solutions to move your business forward.

### Services
- **Cloud Architecture**: Build secure, scalable cloud foundations tailored to your business.  
- **DevOps Services**: Automate delivery pipelines, monitoring, and operations for speed and reliability.  
- **Development Services**: Create custom applications that solve complex business challenges.  

### CTA Buttons
- **Book a Consultation**  
- **Let’s Talk**

---

## 🚀 Deployment Instructions

### Prerequisites
- Node.js (v16 or higher)
- pnpm
- Supabase account
- Vercel account

### Local Development Setup
1. Clone repo:  
   ```bash
   git clone https://github.com/<your-org>/das-consulting.git
   cd das-consulting
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your Supabase credentials
   ```

4. Start development server:
   ```bash
   pnpm dev
   ```

### Production Deployment
1. Create a dedicated Supabase project for DAS Consulting at [supabase.com](https://supabase.com)
2. Deploy to Vercel:
   - Connect your GitHub repository to Vercel
   - Add environment variables in Vercel dashboard:
     - `VITE_SUPABASE_URL`: Your DAS Consulting Supabase project URL
     - `VITE_SUPABASE_ANON_KEY`: Your DAS Consulting Supabase anon key
3. Deploy and your site will be live!

**Note**: This project uses its own dedicated Supabase instance. Other projects (rent-roll, finops-tool) will have their own separate Supabase instances.

---

## ⚠️ Known limitations (currently intentional)
- Contact form stores messages in Supabase (`public.contact_messages`) only; no emails are sent.
- Email notifications (owner alerts, auto-reply, digests) are deferred. See `BACKLOG.md`.

## 🧪 Local dev tips & conflicts
- Supabase local uses ports:
  - API: `54321`, DB: `54322`, Studio: `54323`, Inbucket: `54324`.
- If ports are in use from another project, stop the other project first, e.g.:
  ```bash
  supabase stop --project-id finops-tool
  ```
- Vite will auto-pick an available port (e.g., `3006`) if `3000` is busy.

---

## ✉️ Email notifications (optional)
Edge Function: `send-contact-email` sends an email when invoked after a successful contact form insert.

Environment variables:
- `EMAIL_TO` — destination address (e.g., `madison@das.consulting`)
- `EMAIL_FROM` — sender identity (e.g., `noreply@das.consulting`)
- `RESEND_API_KEY` — optional; if omitted locally, the function logs instead of sending

Local usage:
1) Ensure Supabase is running: `supabase start`
2) Serve functions: `supabase functions serve --no-verify-jwt --env-file .env.local`
3) Submit the form at `/contact` or call:
   ```bash
   curl -X POST http://127.0.0.1:54321/functions/v1/send-contact-email \
     -H 'Content-Type: application/json' \
     -d '{"message":{"name":"Test","email":"test@example.com","message":"Hello"}}'
   ```
   When `RESEND_API_KEY` is not set, the function prints the email payload to the logs.

Production:
- Set `EMAIL_TO`, `EMAIL_FROM`, and `RESEND_API_KEY` in Vercel. The frontend invokes the function via Supabase Functions API on each successful submission.
