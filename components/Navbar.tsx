import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-white">
          IntiConnect
        </Link>

        <nav className="flex items-center gap-6 text-sm text-slate-200">
          <Link href="/#hero" className="hover:text-blue-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-400">
            About
          </Link>
          <Link href="/services" className="hover:text-blue-400">
            Services
          </Link>
          <Link href="/contact" className="hover:text-blue-400">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}