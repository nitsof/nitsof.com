"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = (data.get("name") as string) || "";
    const company = (data.get("company") as string) || "";
    const message = (data.get("message") as string) || "";
    const body = [
      `Name: ${name}`,
      company ? `Company: ${company}` : "",
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:hello@nitsof.com?subject=${encodeURIComponent(
      "Project Brief — " + name
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="cta-success" style={{ display: "block" }}>
        Message sent — we&apos;ll be in touch within one working day.
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
      <button className="cta-submit" type="submit">
        Send brief
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
