import { ShieldCheck, Target, Users, Sparkles } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-32">

      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white">
          About IntiConnect
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
          We are a customer experience outsourcing company helping
          e-commerce businesses deliver exceptional support through
          Email Support and Live Chat Support.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mt-24 grid items-center gap-12 md:grid-cols-2">

        <div>
          <h2 className="text-3xl font-bold text-white">
            Our Mission
          </h2>

          <p className="mt-6 text-slate-300 leading-7">
            At IntiConnect, our mission is to help online businesses
            create meaningful customer experiences by providing fast,
            reliable, and professional support. We believe every customer
            interaction is an opportunity to build trust and loyalty.
          </p>

          <p className="mt-4 text-slate-400 leading-7">
            We act as an extension of your team, ensuring your customers
            always receive timely and empathetic assistance while you
            focus on growing your business.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-10 backdrop-blur-xl">
          <h3 className="text-2xl font-bold text-blue-400">
            Support That Builds Loyalty.
          </h3>

          <p className="mt-4 text-slate-300">
            Every conversation matters. We make sure your customers feel
            heard, valued, and supported at every step.
          </p>
        </div>

      </div>

      {/* Values Section */}
      <div className="mt-28 text-center">
        <h2 className="text-3xl font-bold text-white">
          Our Core Values
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-4">

          <ValueCard
            icon={<ShieldCheck />}
            title="Reliability"
            text="Consistent and dependable support for every customer."
          />

          <ValueCard
            icon={<Users />}
            title="Customer Focus"
            text="Every decision is centered around customer satisfaction."
          />

          <ValueCard
            icon={<Target />}
            title="Precision"
            text="Accurate, clear, and effective communication always."
          />

          <ValueCard
            icon={<Sparkles />}
            title="Quality"
            text="High-quality support that reflects your brand image."
          />

        </div>
      </div>

      {/* CTA */}
      <div className="mt-28 rounded-3xl border border-slate-800 bg-slate-900 px-10 py-16 text-center text-white">

        <h2 className="text-3xl font-bold">
          Let’s Build Better Customer Experiences Together
        </h2>

        <p className="mt-4 text-slate-300">
          Partner with IntiConnect and elevate your customer support.
        </p>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-blue-700"
          >
            Contact Us
          </Link>
        </div>

      </div>

    </main>
  );
}

/* ---------------- COMPONENT ---------------- */

function ValueCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition hover:-translate-y-1 hover:shadow-lg">

      <div className="text-blue-400">
        {icon}
      </div>

      <h3 className="mt-4 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-slate-300">
        {text}
      </p>

    </div>
  );
}