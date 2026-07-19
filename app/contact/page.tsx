"use client";

import { useState } from "react";
import { Mail, MessageSquare, User } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      const errBody = await res.json().catch(() => null);
      throw new Error(errBody?.details ?? errBody?.error ?? "Failed");
    }

    setSuccess(true);
    setForm({ name: "", email: "", message: "" });
  } catch (error: unknown) {
    console.error("[contact] submit failed", error);
    const message = error instanceof Error ? error.message : String(error);
    alert(message || "Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
}

  return (
    <main className="mx-auto max-w-5xl px-6 py-32">

      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white">
          Contact Us
        </h1>

        <p className="mt-6 text-lg text-slate-300">
          Let’s discuss how IntiConnect can support your business.
        </p>
      </div>

      {/* Form Container */}
      <div className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/50 p-10 backdrop-blur-xl">

        {success && (
          <div className="mb-8 rounded-xl bg-green-500/10 border border-green-500/20 p-4 text-green-400">
            Your message has been sent successfully. We will get back to you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Your Name
            </label>

            <div className="flex items-center rounded-xl border border-slate-800 bg-slate-950 px-4">
              <User className="text-slate-400" size={18} />

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full bg-transparent px-3 py-4 text-white outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Email Address
            </label>

            <div className="flex items-center rounded-xl border border-slate-800 bg-slate-950 px-4">
              <Mail className="text-slate-400" size={18} />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full bg-transparent px-3 py-4 text-white outline-none"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Message
            </label>

            <div className="flex items-start rounded-xl border border-slate-800 bg-slate-950 px-4">
              <MessageSquare className="mt-4 text-slate-400" size={18} />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your business and support needs..."
                className="h-40 w-full bg-transparent px-3 py-4 text-white outline-none"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:scale-[1.02] hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>
      </div>
    </main>
  );
}