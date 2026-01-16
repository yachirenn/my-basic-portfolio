import React, {useState, useEffect} from "react";
import {motion} from "framer-motion";

export default function BacktoTop() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-2 rounded-full bg-blue-500 text-white shadow-lg transition-all duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      whileHover={{ scale: 1.1 }}
    >
      ↑
    </motion.button>
  );
}