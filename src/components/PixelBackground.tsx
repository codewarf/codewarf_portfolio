import { motion } from "motion/react";

const pixels = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 8 + 4,
  delay: Math.random() * 2,
  duration: Math.random() * 3 + 2,
  color: `hsl(${Math.random() * 360}, 70%, 60%)`,
}));

export function PixelBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
      {pixels.map((pixel) => (
        <motion.div
          key={pixel.id}
          className="absolute rounded-sm"
          style={{
            left: `${pixel.x}%`,
            top: `${pixel.y}%`,
            width: pixel.size,
            height: pixel.size,
            background: pixel.color,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: pixel.duration,
            delay: pixel.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}