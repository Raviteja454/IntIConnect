import { Resend } from "resend";

export async function POST(req: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const contactToEmail = process.env.CONTACT_TO_EMAIL ?? "inticonnect.services@gmail.com";

  if (!resendApiKey) {
    console.error("[contact] Missing RESEND_API_KEY");
    return Response.json(
      { error: "Server misconfiguration: RESEND_API_KEY is missing" },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(resendApiKey);
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    const result = await resend.emails.send({
      from: "IntiConnect <onboarding@resend.dev>",
      to: contactToEmail,
      subject: `New Contact Form Message from ${name}`,
      replyTo: email,
      html: `
        <div>
          <h2>New Contact Request</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Message:</b><br/>${message}</p>
        </div>
      `,
    });

    console.log("[contact] Email sent", {
      to: contactToEmail,
      // resend returns a typed payload; log id safely without `any`
      resendMessageId: (result as { id?: string } | undefined)?.id,
    });

    return Response.json({ success: true });
  } catch (error: unknown) {
    console.error("[contact] Failed to send email", error);

    return Response.json(
      {
        error: "Failed to send message",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
