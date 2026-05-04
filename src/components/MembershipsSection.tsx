import { motion } from "framer-motion";

const plans = [
  { name: "Day Pass", price: "£7.99", period: "", desc: "Just want to try us out? Pop in for the day - no strings attached.", highlight: false },
  { name: "1 Month", price: "£26.99", period: "/month", desc: "Get stuck in for a full month and feel the difference.", highlight: false },
  { name: "3 Months", price: "£71.99", period: "/3 months", desc: "Commit to your goals and save. Our most popular choice.", highlight: true },
  { name: "6 Months", price: "£136.99", period: "/6 months", desc: "Serious about change? This is for you.", highlight: false },
  { name: "12 Months", price: "£270", period: "/year", desc: "Best value - go all in for the year and save the most.", highlight: false },
];

export default function MembershipsSection() {
  return (
    <section id="memberships" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl text-primary md:text-6xl">MEMBERSHIPS</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Simple, honest pricing. No hidden fees, no contracts you can't get out of.
            Sign up at reception - we'd love to show you around first.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col rounded-2xl p-6 ${
                plan.highlight
                  ? "bg-primary text-primary-foreground ring-2 ring-primary"
                  : "bg-card text-card-foreground"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-foreground px-4 py-1 text-xs font-bold text-background">
                  MOST POPULAR
                </span>
              )}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-sm opacity-70">{plan.period}</span>}
              </div>
              <p className={`mt-4 text-sm ${plan.highlight ? "opacity-80" : "text-muted-foreground"}`}>
                {plan.desc}
              </p>
              <div className="mt-auto pt-6">
                <p className={`text-center text-xs font-medium uppercase tracking-wider ${plan.highlight ? "opacity-70" : "text-muted-foreground"}`}>
                  Sign up at reception
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 rounded-xl bg-surface p-6 text-center"
        >
          <p className="text-surface-foreground">
            🏋️ All memberships include full gym access, women's section, sauna, group classes & free parking.
            <br />
            <span className="text-sm text-muted-foreground">
              Come visit us at reception and we'll get you sorted - no online sign-up needed.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
