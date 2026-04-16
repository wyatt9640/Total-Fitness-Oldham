import { useEffect, useState } from "react";
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

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}

          <div className="flex items-center gap-4 border-l border-border pl-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary transition-opacity hover:opacity-80"
            >
              Instagram
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary transition-opacity hover:opacity-80"
            >
              Facebook
            </a>
          </div>

          <a
            href="tel:01616284711"
            className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Call Us
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen((open) => !open)}
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
        <div className="border-t border-border bg-background/95 px-6 pb-6 backdrop-blur-md md:hidden">
          <div className="space-y-1 pt-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-3 text-foreground transition-colors hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-border bg-card p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">Socials</p>
            <div className="mt-3 space-y-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg bg-secondary px-4 py-3 font-medium text-foreground transition-colors hover:text-primary"
              >
                Instagram
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg bg-secondary px-4 py-3 font-medium text-foreground transition-colors hover:text-primary"
              >
                Facebook
              </a>
            </div>
          </div>

          <a
            href="tel:01616284711"
            className="mt-4 block rounded-lg bg-primary py-3 text-center font-semibold text-primary-foreground"
          >
            Call Us
          </a>
        </div>
      )}
    </header>
  );
}
