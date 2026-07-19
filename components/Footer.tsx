import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-black/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-8 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} IntiConnect. All rights reserved.</div>
        <div className="flex gap-4">
          <Link href="/about" className="hover:text-blue-400">
            About
          </Link>
          <Link href="/services" className="hover:text-blue-400">
            Services
          </Link>
          <Link href="/contact" className="hover:text-blue-400">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

