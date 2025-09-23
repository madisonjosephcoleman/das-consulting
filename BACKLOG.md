# Backlog

## Email notifications for contact form

- New submission notification to madison@das.consulting
- Auto-reply to sender (receipt + response time + Calendly link)
- Daily/weekly digest of new messages
- Failure/alert notifications (backup email or Slack webhook)
- Assignment routing based on Service Interest

Implementation notes:
- Local testing via Inbucket: http://127.0.0.1:54324
- Production options: Vercel function + provider (Resend/SendGrid/Mailgun) or Supabase Edge Function on contact_messages insert
- Future env vars: EMAIL_FROM, EMAIL_TO, EMAIL_PROVIDER_API_KEY

## Nice-to-haves

- Admin page to view/triage messages (auth-gated)
- Spam protection (honeypot + simple rate limiting)
- Enhanced form validation and error states
