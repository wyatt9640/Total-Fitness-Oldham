import { motion } from "framer-motion";

export default function SupplementsSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-card p-8 text-center md:p-12"
        >
          <span className="rounded-full bg-primary/20 px-4 py-1.5 text-sm font-semibold text-primary">
            At Reception
          </span>
          <h2 className="mt-4 text-4xl text-foreground md:text-5xl">
            SUPPLEMENTS & APPAREL IN-HOUSE
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Need a top-up? We stock a range of trusted supplements behind the counter at
            reception - protein, pre-workout, shakers and more. You can also grab
            official Total Fitness Oldham apparel while you're there. Just ask the team
            and we'll sort you out before or after your session.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
