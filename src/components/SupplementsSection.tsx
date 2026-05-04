import { motion } from "framer-motion";
import apparelVest from "@/assets/apparel-vest.jpeg";

export default function SupplementsSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-2xl bg-card md:grid md:grid-cols-2"
        >
          <div className="aspect-square w-full overflow-hidden md:aspect-auto md:h-full">
            <img
              src={apparelVest}
              alt="Member wearing official Total Fitness Oldham vest in the gym"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-8 text-center md:p-12 md:text-left">
            <span className="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-semibold text-primary">
              At Reception
            </span>
            <h2 className="mt-4 text-4xl text-foreground md:text-5xl">
              SUPPLEMENTS & APPAREL IN-HOUSE
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Need a top-up? We stock a range of trusted supplements behind the counter
              at reception - protein, pre-workout, shakers and more. You can also grab
              official Total Fitness Oldham apparel while you're there - jumpers, vests
              and shirts. Just ask the team and we'll sort you out before or after your
              session.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
