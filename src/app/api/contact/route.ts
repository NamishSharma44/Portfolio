import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  topic?: string;
  message?: string;
};

const allowedTopics = ["Hiring", "Freelance", "Collaboration", "Other"] as const;

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const name = payload.name?.trim() ?? "";
    const email = payload.email?.trim() ?? "";
    const phone = payload.phone?.trim() ?? "Not provided";
    const topic = payload.topic?.trim() ?? "";
    const message = payload.message?.trim() ?? "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!allowedTopics.includes(topic as (typeof allowedTopics)[number])) {
      return NextResponse.json(
        { ok: false, error: "Please choose a valid contact topic." },
        { status: 400 }
      );
    }

    if (message.length < 20) {
      return NextResponse.json(
        { ok: false, error: "Message should be at least 20 characters long." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL ?? "namish907@gmail.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

    if (!apiKey) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Email service is not configured yet. Add RESEND_API_KEY in your environment settings.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `Portfolio ${topic} Request from ${name}`,
      text: [
        "New portfolio connection request",
        "",
        `Topic: ${topic}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>New portfolio connection request</h2>
        <p><strong>Topic:</strong> ${topic}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "Unable to send email right now. Please try again in a moment.",
      },
      { status: 500 }
    );
  }
}
