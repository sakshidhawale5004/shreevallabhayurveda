import { motion } from "framer-motion";

export function Background3DElements() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden mix-blend-screen">
      {/* Golden Glowing Orb */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.9, 1],
          rotate: [0, 90, -90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-gold/10 opacity-60 blur-[120px]"
        style={{
          boxShadow: "inset 0 0 100px rgba(255,215,0,0.5), 0 0 150px rgba(255,215,0,0.2)"
        }}
      />
      
      {/* Deep Navy/Blue 3D abstract shape effect */}
      <motion.div
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 150, -100, 0],
          scale: [1, 1.1, 0.8, 1],
          rotate: [0, -90, 90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 2
        }}
        className="absolute top-1/3 -left-64 h-[800px] w-[800px] rounded-full bg-blue-900/10 opacity-70 blur-[150px]"
        style={{
          boxShadow: "inset 0 0 100px rgba(30,58,138,0.5), 0 0 150px rgba(30,58,138,0.2)"
        }}
      />

      {/* Floating 3D Geometric Cube / Prism illusion using borders and rotation */}
      <motion.div
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          y: [0, -50, 0],
        }}
        transition={{
          rotateX: { duration: 15, repeat: Infinity, ease: "linear" },
          rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-1/4 right-1/4 h-32 w-32 border-2 border-gold/20 bg-gold/5 shadow-[0_0_30px_rgba(255,215,0,0.15)] opacity-40 backdrop-blur-3xl"
        style={{
          transformStyle: "preserve-3d",
          borderRadius: "30%",
        }}
      />
      
      {/* Secondary Floating Geometric Element */}
      <motion.div
        animate={{
          rotateX: [360, 0],
          rotateY: [360, 0],
          y: [0, 60, 0],
        }}
        transition={{
          rotateX: { duration: 25, repeat: Infinity, ease: "linear" },
          rotateY: { duration: 18, repeat: Infinity, ease: "linear" },
          y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-1/4 left-1/4 h-24 w-24 border border-white/20 bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.1)] opacity-30 backdrop-blur-2xl"
        style={{
          transformStyle: "preserve-3d",
          borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
        }}
      />
    </div>
  );
}
