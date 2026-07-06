import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function ChatbotButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href="https://wa.me/918652621285"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-green-500 to-green-400 shadow-2xl transition-transform hover:scale-110"
      >
        {/* Pulsing rings for 3D/dynamic effect */}
        <span className="absolute inset-0 rounded-full border-2 border-green-400 opacity-0 group-hover:animate-ping"></span>
        <span className="absolute inset-0 -m-2 rounded-full border border-green-300 opacity-0 group-hover:animate-ping" style={{ animationDelay: '0.2s' }}></span>
        
        <MessageCircle className="h-8 w-8 text-white drop-shadow-md" />
        
        {/* Tooltip */}
        <div className="pointer-events-none absolute right-full top-1/2 mr-4 -translate-y-1/2 scale-95 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-semibold text-green-700 opacity-0 shadow-xl transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
          Chat with us
          <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 border-y-4 border-l-8 border-y-transparent border-l-white"></div>
        </div>
      </a>
    </motion.div>
  );
}
