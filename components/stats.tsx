"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function CountingNumber({
  value,
  duration = 2,
  label,
}: {
  value: number;
  duration?: number;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      let animationFrame: number;

      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.min(Math.floor(value * progress), value));
          animationFrame = requestAnimationFrame(updateCount);
        } else {
          setCount(value);
        }
      };

      animationFrame = requestAnimationFrame(updateCount);
      controls.start({ opacity: 1, y: 0 });

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [inView, value, duration, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      //   className="text-center"
    >
      <div className="text-4xl font-bold text-primary mb-2">
        {count}
        {value > 0 ? "+" : ""}
      </div>
      <div className="text-gray-600">{label}</div>
    </motion.div>
  );
}

export function Stats() {
  const stats = [
    { value: 150, label: "Project Done" },
    { value: 99, label: "Reviews" },
    { value: 5, label: "Years Experience" },
    // { value: 0, label: "Great Achievements In Our Career" },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <hr className="mb-10" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <CountingNumber
              key={index}
              value={stat.value}
              label={stat.label}
              duration={2}
            />
          ))}

          <div className="">
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-primary mb-2animate-bounce">
              Great Achievements In Our Career
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
