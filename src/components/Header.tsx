import { useState, useEffect } from "react";
import logo from "@/assets/logo.jpeg";

const INSTAGRAM_URL = "https://www.instagram.com/totalfitnessoldham1?igsh=MThkajdvMmU4aDBuag==";
const FACEBOOK_URL = "https://www.facebook.com/share/1Fzcn6KGgZ/?mibextid=wwXIfr";

const links = [
  { label: "About", href: "#about" },
  { label: "Memberships", href: "#memberships" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/90 shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Total Fitness Oldham" className="h-10 w-10 rounded-full object-cover" />
          <span className="text-2xl text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            TOTAL FITNESS <span className="text-primary">OLDHAM</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:01616284711"
            className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Call Us
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="bg-background/95 px-6 pb-6 backdrop-blur-md md:hidden">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:01616284711"
            className="mt-2 block rounded-lg bg-primary py-3 text-center font-semibold text-primary-foreground"
          >
            Call Us
          </a>
        </div>
      )}
    </header>
  );
}
