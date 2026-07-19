import { Mail, MessageCircle, Clock, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-32">

      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white">
          Our Services
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
          IntiConnect provides professional customer support solutions
          designed for e-commerce businesses. We help you deliver fast,
          reliable, and personalized customer experiences.
        </p>
      </div>

      {/* Services Grid */}
      <div className="mt-20 grid gap-8 md:grid-cols-2">

        <ServiceCard
          icon={<Mail size={28} />}
          title="Email Customer Support"
          description="We handle inquiries, orders, refunds, returns, complaints, and general questions with professionalism and care."
        />

        <ServiceCard
          icon={<MessageCircle size={28} />}
          title="Live Chat Support"
          description="Provide real-time assistance to website visitors, improving conversions and customer satisfaction."
        />

      </div>

      {/* Benefits Section */}
      <div className="mt-28">
        <h2 className="text-3xl font-bold text-center text-white">
          Why Businesses Choose Us
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <BenefitCard
            icon={<Clock />}
            title="Fast Response"
            text="Quick and efficient replies that keep customers satisfied."
          />

          <BenefitCard
            icon={<ShieldCheck />}
            title="Professional Support"
            text="Every interaction is handled with care, clarity, and empathy."
          />

          <BenefitCard
            icon={<Mail />}
            title="Reliable Communication"
            text="Consistent and structured support that reflects your brand."
          />

        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-28 rounded-3xl border border-slate-800 bg-slate-900 px-10 py-16 text-center text-white">

        <h2 className="text-3xl font-bold">
          Ready to improve your customer experience?
        </h2>

        <p className="mt-4 text-slate-300">
          Let IntiConnect become your dedicated support partner.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-blue-700"
        >
          Book a Free Consultation
        </Link>

      </div>

    </main>
  );
}

/* ------------------ Components ------------------ */

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl">

      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
        {icon}
      </div>

      <h3 className="mt-6 text-2xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-300">
        {description}
      </p>

    </div>
  );
}

function BenefitCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:shadow-lg">

      <div className="text-blue-400">
        {icon}
      </div>

      <h4 className="mt-4 text-xl font-semibold text-white">
        {title}
      </h4>

      <p className="mt-2 text-slate-300">
        {text}
      </p>

    </div>
  );
}