"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

    if (formspreeId) {
      try {
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });
        if (res.ok) {
          setStatus("success");
          form.reset();
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
    } else {
      // Fallback: pre-fill a mailto link (works without a backend)
      const name = (data.get("name") as string) || "";
      const email = (data.get("email") as string) || "";
      const company = (data.get("company") as string) || "";
      const message = (data.get("message") as string) || "";
      const body = [
        `Name: ${name}`,
        email ? `Email: ${email}` : "",
        company ? `Company: ${company}` : "",
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n");
      window.location.href = `mailto:hello@nitsof.com?subject=${encodeURIComponent(
        "Project Brief — " + name
      )}&body=${encodeURIComponent(body)}`;
      setStatus("idle");
    }
  }

  if (status === "success") {
    return (
      <div className="cta-success">
        Message sent — we&rsquo;ll be in touch within one working day.
      </div>
    );
  }

  return (
    <form className="cta-form" onSubmit={handleSubmit}>
      <div className="cta-field">
        <label htmlFor="cf-name">Your name</label>
        <input
          id="cf-name"
          name="name"
          type="text"
          placeholder="Alex Chen"
          required
          autoComplete="name"
        />
      </div>
      <div className="cta-field">
        <label htmlFor="cf-email">Email address</label>
        <input
          id="cf-email"
          name="email"
          type="email"
          placeholder="alex@acmecorp.com"
          required
          autoComplete="email"
        />
      </div>
      <div className="cta-field">
        <label htmlFor="cf-company">Company or website</label>
        <input
          id="cf-company"
          name="company"
          type="text"
          placeholder="acmecorp.com"
          autoComplete="organization"
        />
      </div>
      <div className="cta-field">
        <label htmlFor="cf-message">What are you trying to build?</label>
        <textarea
          id="cf-message"
          name="message"
          placeholder="We need to ship X by Y and our current approach isn't working because…"
          required
        />
      </div>
      {status === "error" && (
        <p style={{ color: "var(--signal)", fontFamily: "var(--font-mono)", fontSize: "12px" }}>
          Something went wrong. Try emailing us directly at hello@nitsof.com
        </p>
      )}
      <button
        className="cta-submit"
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send brief"}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </button>
    </form>
  );
}
