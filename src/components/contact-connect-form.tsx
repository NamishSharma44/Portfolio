"use client";

import { FormEvent, useState } from "react";

type ContactConnectFormProps = {
  recipientEmail: string;
};

const topicOptions = ["Hiring", "Freelance", "Collaboration", "Other"] as const;

type TopicOption = (typeof topicOptions)[number];

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ContactConnectForm({ recipientEmail }: ContactConnectFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState<TopicOption>("Hiring");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; text: string; nextSteps?: string[] } | null>(null);

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
    topic?: string;
  }>({});

  const validateFields = () => {
    const nextErrors: {
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
      topic?: string;
    } = {};

    const normalizedName = name.trim();
    const normalizedEmail = email.trim();
    const normalizedPhone = phone.trim();
    const normalizedMessage = message.trim();

    if (normalizedName.length < 2) {
      nextErrors.name = "Please enter your full name.";
    }

    if (!isValidEmail(normalizedEmail)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!topicOptions.includes(topic)) {
      nextErrors.topic = "Please choose a contact topic.";
    }

    if (normalizedPhone && !/^[+\d\s().-]{7,20}$/.test(normalizedPhone)) {
      nextErrors.phone = "Please enter a valid phone number or leave it blank.";
    }

    if (normalizedMessage.length < 20) {
      nextErrors.message = "Please add at least 20 characters so I can understand your request clearly.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult(null);

    if (!validateFields()) {
      setResult({
        ok: false,
        text: "Please fix the highlighted fields and submit again.",
      });
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          topic,
          message: message.trim(),
          recipientEmail,
        }),
      });

      const payload = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !payload.ok) {
        setResult({
          ok: false,
          text: payload.error ?? "Unable to send your message right now. Please try again.",
        });
        return;
      }

      setResult({
        ok: true,
        text: "Message sent successfully. I will review your note and get back to you soon.",
        nextSteps: [
          "You can also connect with me on LinkedIn for a faster intro.",
          "If this is time-sensitive, add your timeline in a follow-up email.",
        ],
      });
      setName("");
      setEmail("");
      setPhone("");
      setTopic("Hiring");
      setMessage("");
      setErrors({});
    } catch {
      setResult({
        ok: false,
        text: "Network error while sending message. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            aria-invalid={Boolean(errors.name)}
            className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-300/60 ${
              errors.name ? "border-rose-300/65" : "border-white/10"
            }`}
          />
          {errors.name && <p className="mt-1 text-xs text-rose-300">{errors.name}</p>}
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            aria-invalid={Boolean(errors.email)}
            className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-300/60 ${
              errors.email ? "border-rose-300/65" : "border-white/10"
            }`}
          />
          {errors.email && <p className="mt-1 text-xs text-rose-300">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs uppercase tracking-[0.14em] text-cyan-100/90">Topic</label>
          <select
            value={topic}
            onChange={(event) => setTopic(event.target.value as TopicOption)}
            aria-invalid={Boolean(errors.topic)}
            className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-300/60 ${
              errors.topic ? "border-rose-300/65" : "border-white/10"
            }`}
          >
            {topicOptions.map((item) => (
              <option key={item} value={item} className="bg-slate-900 text-slate-100">
                {item}
              </option>
            ))}
          </select>
          {errors.topic && <p className="mt-1 text-xs text-rose-300">{errors.topic}</p>}
        </div>

        <div>
          <input
            type="tel"
            placeholder="Your Phone Number (optional)"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-300/60 ${
              errors.phone ? "border-rose-300/65" : "border-white/10"
            }`}
          />
          {errors.phone && <p className="mt-1 text-xs text-rose-300">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
          rows={5}
          aria-invalid={Boolean(errors.message)}
          className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-sm leading-6 text-slate-100 outline-none transition focus:border-cyan-300/60 ${
            errors.message ? "border-rose-300/65" : "border-white/10"
          }`}
        />
        {errors.message ? (
          <p className="mt-1 text-xs text-rose-300">{errors.message}</p>
        ) : (
          <p className="mt-1 text-xs text-slate-400">Minimum 20 characters.</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSending}
        className="rounded-xl bg-cyan-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSending ? "Sending..." : "Send Email to Connect"}
      </button>

      {result && (
        <div
          className={`rounded-xl border px-4 py-3 text-sm ${
            result.ok
              ? "border-emerald-300/35 bg-emerald-300/10 text-emerald-200"
              : "border-rose-300/35 bg-rose-300/10 text-rose-200"
          }`}
          role="status"
          aria-live="polite"
        >
          <p>{result.text}</p>
          {result.ok && result.nextSteps && (
            <div className="mt-2 text-xs text-emerald-100/90">
              <p className="font-semibold uppercase tracking-[0.12em]">Next steps</p>
              <p className="mt-1">1. {result.nextSteps[0]}</p>
              <p>2. {result.nextSteps[1]}</p>
            </div>
          )}
        </div>
      )}
    </form>
  );
}
