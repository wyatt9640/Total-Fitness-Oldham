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
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";
import gallery6 from "@/assets/gallery-6.jpeg";
import gallery7 from "@/assets/gallery-7.jpeg";
import gallery9 from "@/assets/gallery-9.jpeg";
import gallery10 from "@/assets/gallery-10.jpeg";
import gallery11 from "@/assets/gallery-11.jpeg";
import gallery12 from "@/assets/gallery-12.jpeg";
import gallery13 from "@/assets/gallery-13.jpeg";
import gallery14 from "@/assets/gallery-14.jpeg";
import gallery15 from "@/assets/gallery-15.jpeg";
import gallery16 from "@/assets/gallery-16.jpeg";

const featured = [
  { src: gallery5, alt: "Member training with dumbbells in the mirror" },
  { src: gallery14, alt: "Member training with foot on the bench at the cable machine" },
  { src: gallery10, alt: "Member boxing training with speed ball" },
];

const slideshowPhotos = [
  { src: gallery1, alt: "Members training together on cable machines" },
  { src: gallery2, alt: "Member using the leg press" },
  { src: gallery3, alt: "Members having a chat between sets" },
  { src: gallery6, alt: "Friends supporting each other during a workout" },
  { src: gallery7, alt: "Personal training session at Total Fitness" },
  { src: gallery15, alt: "Member doing seated dumbbell curls in Total Fitness vest" },
  { src: gallery9, alt: "Member pushing the Hyrox sled" },
  { src: gallery11, alt: "Member doing renegade rows with dumbbells" },
  { src: gallery12, alt: "Member performing a barbell squat" },
  { src: gallery13, alt: "Member training on the incline bench press" },
  { src: gallery16, alt: "Member bench pressing with spotters and friends watching on" },
];

export default function GallerySection() {
  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: false }));

  return (
    <section id="gallery" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl text-primary md:text-6xl">THE PEOPLE</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            The heart and soul of Total Fitness Oldham — our amazing members.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {featured.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="overflow-hidden rounded-xl"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="aspect-[4/5] h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
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
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="aspect-square w-full object-cover"
                      loading="lazy"
                    />
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
