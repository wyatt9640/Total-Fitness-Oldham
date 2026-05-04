import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import womens1 from "@/assets/womens-1.jpeg";
import womens2 from "@/assets/womens-2.jpeg";
import womens3 from "@/assets/womens-3.jpeg";
import womens4 from "@/assets/womens-4.jpeg";
import womens5 from "@/assets/womens-5.jpeg";
import nicole from "@/assets/nicole.jpeg";

const featured = [
  { src: womens1, alt: "Member training on the cable machine in the women's only section", handle: "_chloe_dsouza_" },
  { src: nicole, alt: "Member in the women's only section", handle: "movewithnicolee" },
  { src: womens3, alt: "Members training together on the lat pulldown machines", handle: "_chloe_dsouza_" },
];

const slideshowPhotos = [
  { src: womens2, alt: "Member using the Keiser leg press in the women's only section", handle: "_chloe_dsouza_" },
  { src: womens4, alt: "Members using the Keiser shoulder press machines", handle: "_chloe_dsouza_" },
  { src: womens5, alt: "Member doing battle ropes in the women's only section", handle: "_chloe_dsouza_" },
];

export default function WomensSection() {
  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: false }));

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-primary/20 px-4 py-1.5 text-sm font-semibold text-primary">
            Dedicated Space
          </span>
          <h2 className="mt-4 text-5xl text-foreground md:text-6xl">
            WOMEN'S ONLY SECTION
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We understand that comfort matters. Our dedicated women's only area gives you
            the space to train at your own pace, in your own way - with all the same
            great equipment and a supportive atmosphere.
          </p>
          <ul className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-x-6 gap-y-3 text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary">✓</span>
              Full range of cardio & weights
            </li>
            <li className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary">✓</span>
              Private and comfortable environment
            </li>
            <li className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary">✓</span>
              Female personal trainers available
            </li>
            <li className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary">✓</span>
              Included with all memberships
            </li>
          </ul>
        </motion.div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {featured.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative overflow-hidden rounded-xl"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="aspect-[4/5] h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
              <a
                href={`https://instagram.com/${photo.handle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-sm transition hover:bg-background"
              >
                @{photo.handle}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Carousel
            opts={{ loop: true, align: "start" }}
            plugins={[autoplay.current]}
            className="mx-auto w-full max-w-5xl"
          >
            <CarouselContent>
              {slideshowPhotos.map((photo, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="aspect-square w-full object-cover"
                      loading="lazy"
                    />
                    <a
                      href={`https://instagram.com/${photo.handle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-2 right-2 rounded-full bg-background/80 px-2 py-0.5 text-[10px] font-semibold text-foreground backdrop-blur-sm transition hover:bg-background"
                    >
                      @{photo.handle}
                    </a>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
