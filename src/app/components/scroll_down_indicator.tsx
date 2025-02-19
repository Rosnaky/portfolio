import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {

  const scroll = () => {
    window.scrollBy({ top:window.innerHeight, behavior: "smooth" })
  }

  return (
    <div 
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      onClick={scroll}
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </div>
  );
};

export default ScrollIndicator;