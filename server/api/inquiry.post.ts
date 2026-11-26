import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const { name, email, phone, product, message, website } = (await readBody(event)) || {}

  if (website) return { ok: true } // honeypot: bots fill this hidden field

  if (!name?.trim() || !message?.trim() || !/^\S+@\S+\.\S+$/.test(email || '')) {
    throw createError({ statusCode: 400, statusMessage: 'Please enter your name, a valid email and a message.' })
  }

  const c = useRuntimeConfig()
  const transport = nodemailer.createTransport({
    host: c.smtpHost,
    port: Number(c.smtpPort),
    secure: Number(c.smtpPort) === 465,
    auth: { user: c.smtpUser, pass: c.smtpPass },
  })

  try {
    await transport.sendMail({
      from: `"Website inquiry" <${c.smtpUser}>`,
      to: c.inquiryTo,
      replyTo: `"${String(name).replace(/"/g, '')}" <${email}>`,
      subject: `[Inquiry] ${product || 'General'} - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || '-'}\nInterested in: ${product || '-'}\n\n${message}`,
    })
  } catch (e) {
    console.error('Inquiry mail failed', e)
    throw createError({ statusCode: 500, statusMessage: 'We could not send your message. Please try again later.' })
  }
  return { ok: true }
})
