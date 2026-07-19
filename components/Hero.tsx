import Link from "next/link";
import {
  Mail,
  MessageCircle,
  Users,
  ShieldCheck,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function Hero() {
  return (
    <main>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative mx-auto max-w-7xl px-6 pb-24 pt-24"
      >
        <div className="flex flex-col items-center text-center">

          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-slate-800 bg-slate-900/40 px-5 py-2 text-sm text-slate-300">
            <ShieldCheck className="mr-2 h-4 w-4 text-blue-400" />
            Customer Experience Outsourcing for E-commerce
          </div>


          {/* Heading */}
          <h1 className="mt-8 max-w-5xl text-5xl font-bold leading-tight text-white md:text-6xl">
            Helping E-commerce Businesses Deliver
            <span className="text-blue-500">
              {" "}Exceptional Customer Support
            </span>
          </h1>


          {/* Description */}
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            IntiConnect is a customer experience outsourcing company focused
            on helping online businesses provide fast, professional, and
            personalized customer support through Email Support and Live Chat
            Support.
          </p>


          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
            With experienced professionals in our team, we act as an extension
            of your business, ensuring every customer interaction is handled
            with care, accuracy, and empathy.
          </p>


          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <Link
              href="/contact"
              className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Start a Conversation
            </Link>


            <Link
              href="/services"
              className="rounded-xl border border-slate-800 bg-slate-900/40 px-8 py-4 font-semibold text-slate-200 transition hover:border-blue-500 hover:text-blue-400"
            >
              Explore Services
            </Link>

          </div>

        </div>



        {/* Service Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">

          <ServiceCard
            icon={<Mail />}
            title="Email Customer Support"
            text="Professional handling of customer inquiries, order questions, returns, refunds, and general assistance."
          />


          <ServiceCard
            icon={<MessageCircle />}
            title="Live Chat Customer Support"
            text="Real-time customer assistance that helps visitors get quick answers and a better shopping experience."
          />

        </div>



        {/* Why IntiConnect */}
        <section className="mt-28">

          <div className="text-center">

            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Support That Builds Loyalty
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-slate-300">
              We believe every customer conversation is an opportunity to build
              trust. Our team provides reliable and personalized support that
              represents your brand professionally.
            </p>

          </div>



          <div className="mt-12 grid gap-8 md:grid-cols-3">

            <BenefitCard
              icon={<Users />}
              title="Experienced Professionals"
              text="Our team brings customer support experience and understands the importance of quality interactions."
            />


            <BenefitCard
              icon={<Clock />}
              title="Timely Responses"
              text="We help businesses provide quick and consistent communication with their customers."
            />


            <BenefitCard
              icon={<ShieldCheck />}
              title="Reliable Support"
              text="Every interaction is handled with professionalism, empathy, and attention to detail."
            />

          </div>

        </section>



        {/* CTA */}
        <section className="mt-28 rounded-3xl border border-slate-800 bg-slate-900 px-8 py-16 text-center">

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Let IntiConnect Become Your Customer Support Partner
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-300">
            Focus on growing your e-commerce business while we help you create
            better customer experiences.
          </p>


          <Link
            href="/contact"
            className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Contact Us
          </Link>

        </section>

      </section>

    </main>
  );
}



function ServiceCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 transition hover:-translate-y-1 hover:border-blue-500">

      <div className="text-blue-400">
        {icon}
      </div>

      <h3 className="mt-5 text-2xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-300">
        {text}
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
    <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">

      <div className="text-blue-400">
        {icon}
      </div>

      <h3 className="mt-4 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 text-slate-300">
        {text}
      </p>

    </div>
  );
}