import { useEffect, useState } from "react";

const STORAGE_KEY = "viewMode";
const DESKTOP_WIDTH = 1280;

type Mode = "mobile" | "desktop";

function applyMode(mode: Mode) {
  let meta = document.querySelector('meta[name="viewport"]') as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "viewport";
    document.head.appendChild(meta);
  }
  if (mode === "desktop") {
    meta.content = `width=${DESKTOP_WIDTH}, initial-scale=${window.innerWidth / DESKTOP_WIDTH}`;
  } else {
    meta.content = "width=device-width, initial-scale=1";
  }
}

export default function ViewToggle() {
  const [mode, setMode] = useState<Mode>("mobile");

  useEffect(() => {
    const saved = (localStorage.getItem(STORAGE_KEY) as Mode | null) ?? "mobile";
    setMode(saved);
    applyMode(saved);
  }, []);

  const toggle = () => {
    const next: Mode = mode === "mobile" ? "desktop" : "mobile";
    setMode(next);
    localStorage.setItem(STORAGE_KEY, next);
    applyMode(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${mode === "mobile" ? "desktop" : "mobile"} view`}
      className="fixed bottom-24 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg ring-2 ring-background transition-transform active:scale-95"
    >
      {mode === "mobile" ? (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <rect x="2" y="4" width="20" height="14" rx="2" />
          <path d="M8 20h8M12 18v2" strokeLinecap="round" />
        </svg>
      ) : (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <rect x="6" y="2" width="12" height="20" rx="2" />
          <path d="M11 18h2" strokeLinecap="round" />
        </svg>
      )}
    </button>
  );
}
