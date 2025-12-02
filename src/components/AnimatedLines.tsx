import { motion } from "framer-motion";

const AnimatedLines = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      {/* Horizontal lines */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`h-line-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent"
          style={{
            width: "100%",
            top: `${(i + 1) * 16}%`,
          }}
          animate={{
            opacity: [0.1, 0.4, 0.1],
            scaleX: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Vertical lines */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`v-line-${i}`}
          className="absolute w-px bg-gradient-to-b from-transparent via-accent to-transparent"
          style={{
            height: "100%",
            left: `${(i + 1) * 16}%`,
          }}
          animate={{
            opacity: [0.1, 0.4, 0.1],
            scaleY: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Diagonal accent lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`d-line-${i}`}
          className="absolute w-0.5 h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent origin-center"
          style={{
            left: `${20 + i * 30}%`,
            transform: "rotate(30deg)",
          }}
          animate={{
            opacity: [0, 0.3, 0],
            y: ["-100%", "100%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 2,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedLines;
