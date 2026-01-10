"use client";
import { LucideRocket } from "lucide-react";
import {
  useScroll,
  useTransform,
  motion,
  useMotionTemplate,
} from "motion/react";
import Image from "next/image";
import { useRef } from "react";

type Feature = {
  icon: React.ReactNode;
  title: string;
  description: string;
  content: React.ReactNode;
};

const features: Feature[] = [
  {
    icon: <LucideRocket className="h-8 w-8 text-neutral-200" />,
    title: "Sleek Street Racer",
    description:
      "High performance street racing car ready to tear up the asphalt.",
    content: (
      <Image
        src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg"
        alt="street racer car"
        height={500}
        width={500}
        className="rounded-lg"
      />
    ),
  },
  {
    icon: <LucideRocket className="h-8 w-8 text-neutral-200" />,
    title: "Classic Vintage Car",
    description: "A beautifully restored classic car from a golden era.",
    content: (
      <Image
        src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c"
        alt="classic vintage car"
        height={500}
        width={500}
        className="rounded-lg"
      />
    ),
  },
  {
    icon: <LucideRocket className="h-8 w-8 text-neutral-200" />,
    title: "Luxury Sports Coupe",
    description: "A premium sports coupe exuding power and elegance.",
    content: (
      <Image
        src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
        alt="luxury sports coupe"
        height={500}
        width={500}
        className="rounded-lg"
      />
    ),
  },
];

const Card = ({ feature }: { feature: Feature }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // means jab element ka start ajaye and viewport ke end me aane lag jaye means bottom of screen tab start karo animation, and next part means jab element ka end(means bottom part of element) is at viewport(laptop screen) ke start(top of screen) me ajaye tab end kardo animation
  });

  const translateContent = useTransform(scrollYProgress, [0, 1], [-110, 110]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const blur = useTransform(scrollYProgress, [0.5, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8]);

  return (
    <div
      ref={ref}
      key={feature.title}
      className="grid grid-cols-2 gap-20 items-center "
    >
      <motion.div
        style={{
          filter: useMotionTemplate`blur(${blur}px)`,
          scale,
        }}
        className="flex flex-col gap-5 py-60"
      >
        <h2 className="text-4xl flex gap-2 items-center font-bold">
          {feature.icon}
          {feature.title}
        </h2>
        <p>{feature.description}</p>
      </motion.div>
      <motion.div
        style={{
          y: translateContent,
          opacity: opacityContent,
        }}
      >
        {feature.content}
      </motion.div>
    </div>
  );
};

const MotionHook = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-900">
      <div className="flex flex-col gap-10 max-w-4xl mx-auto py-40">
        {features.map((feature) => (
          <Card key={feature.title} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default MotionHook;
