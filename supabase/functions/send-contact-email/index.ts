// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts"

type ContactMessage = {
  id?: string
  name: string
  email: string
  company?: string | null
  phone?: string | null
  service?: string | null
  message: string
  created_at?: string
}

async function sendWithResend(from: string, to: string, subject: string, html: string) {
  const apiKey = Deno.env.get('RESEND_API_KEY')
  if (!apiKey) {
    console.log('[send-contact-email] RESEND_API_KEY missing; logging instead of sending')
    console.log({ from, to, subject, html })
    return
  }
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ from, to, subject, html })
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Resend error: ${res.status} ${text}`)
  }
}

Deno.serve(async (req) => {
  try {
    const { message } = await req.json() as { message: ContactMessage }
    if (!message || !message.name || !message.email || !message.message) {
      return new Response(JSON.stringify({ error: 'Invalid payload' }), { status: 400 })
    }

    const emailTo = Deno.env.get('EMAIL_TO') ?? 'madison@das.consulting'
    const emailFrom = Deno.env.get('EMAIL_FROM') ?? 'noreply@das.consulting'
    const subject = `New Contact: ${message.name}${message.service ? ` – ${message.service}` : ''}`

    const html = `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${message.name}</p>
      <p><strong>Email:</strong> ${message.email}</p>
      <p><strong>Company:</strong> ${message.company ?? ''}</p>
      <p><strong>Phone:</strong> ${message.phone ?? ''}</p>
      <p><strong>Service:</strong> ${message.service ?? ''}</p>
      <p><strong>Message:</strong></p>
      <pre>${message.message}</pre>
      <p><small>Submitted at: ${message.created_at ?? new Date().toISOString()}</small></p>
    `

    await sendWithResend(emailFrom, emailTo, subject, html)

    return new Response(JSON.stringify({ ok: true }), { headers: { 'Content-Type': 'application/json' } })
  } catch (err) {
    console.error('[send-contact-email] error', err)
    return new Response(JSON.stringify({ error: 'Internal error' }), { status: 500 })
  }
})

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/send-contact-email' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
