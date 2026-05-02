import { motion } from "framer-motion";

export default function SunbedSection() {
  return (
    <section id="sunbed" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-card p-10 text-center md:p-14"
        >
          <span className="text-5xl">☀️</span>
          <h2 className="mt-4 text-5xl text-primary md:text-6xl">TOP UP YOUR TAN</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            On-site sunbed available for members and walk-ins. Quick, convenient and
            the perfect finish to your workout — get that holiday glow without leaving the gym.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
