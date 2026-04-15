import logo from "@/assets/logo.jpeg";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Total Fitness Oldham" className="h-12 w-12 rounded-full object-cover" />
            <div>
              <p className="text-2xl text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                TOTAL FITNESS <span className="text-primary">OLDHAM</span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Your local gym family since day one.
              </p>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground md:text-right">
            <p>Daniel St, Oldham OL1 3NS</p>
            <a href="tel:01616284711" className="text-primary hover:underline">0161 628 4711</a>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Total Fitness Oldham. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
