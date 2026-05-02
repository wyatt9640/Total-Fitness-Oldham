import { motion } from "framer-motion";
import sunbed1 from "@/assets/sunbed-1.jpeg";
import sunbed2 from "@/assets/sunbed-2.jpeg";

export default function SunbedSection() {
  return (
    <section id="sunbed" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-card p-8 md:p-12"
        >
          <div className="text-center">
            <span className="text-5xl">☀️</span>
            <h2 className="mt-4 text-5xl text-primary md:text-6xl">TOP UP YOUR TAN</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              On-site sunbeds available for members and walk-ins. Choose between our
              powerful stand-up booth or a relaxing lay-down bed - whichever suits you,
              get that holiday glow without leaving the gym.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-xl">
              <img
                src={sunbed1}
                alt="Stand-up sunbed booth at the gym"
                className="aspect-[4/5] w-full object-cover"
              />
              <p className="mt-2 text-center text-sm font-semibold text-foreground">Stand-up booth</p>
            </div>
            <div className="overflow-hidden rounded-xl">
              <img
                src={sunbed2}
                alt="Lay-down sunbed room at the gym"
                className="aspect-[4/5] w-full object-cover"
              />
              <p className="mt-2 text-center text-sm font-semibold text-foreground">Lay-down bed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
