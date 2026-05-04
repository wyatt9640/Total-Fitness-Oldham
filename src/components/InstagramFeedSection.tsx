import { useEffect } from "react";
import { motion } from "framer-motion";

// TODO: Replace with your real Behold feed ID from https://behold.so
const BEHOLD_FEED_ID = "REPLACE_WITH_YOUR_BEHOLD_FEED_ID";

export default function InstagramFeedSection() {
  useEffect(() => {
    if (document.querySelector('script[data-behold="true"]')) return;
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://w.behold.so/widget.js";
    script.dataset.behold = "true";
    document.body.appendChild(script);
  }, []);

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl text-primary md:text-6xl">FROM THE GRAM</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Follow{" "}
            <a
              href="https://www.instagram.com/totalfitnessoldham1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              @totalfitnessoldham1
            </a>{" "}
            for daily updates from the gym floor.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 overflow-hidden rounded-2xl"
        >
          {/* @ts-expect-error - custom element from Behold widget */}
          <behold-widget feed-id={BEHOLD_FEED_ID}></behold-widget>
        </motion.div>
      </div>
    </section>
  );
}
