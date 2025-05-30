import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  const handleClick = () => {
    // Scrolls to the start of the next logical section (e.g., element with id='story')
    // This assumes your next section has an id. Adjust if necessary.
    const nextSection = document.getElementById('story'); // Or the ID of the section below the hero
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: scroll down by viewport height if no specific section found
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-primary cursor-pointer group"
      animate={{
        y: [0, 8, 0], // Bouncing effect - reduced amplitude slightly
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      onClick={handleClick}
      title="Scroll down to learn more"
    >
      <ChevronDown size={32} className="opacity-80 group-hover:opacity-100 transition-opacity" />
      <span className="mt-1 text-xs font-body tracking-wider opacity-70 group-hover:opacity-90 transition-opacity">SCROLL</span>
    </motion.div>
  );
};

export default ScrollIndicator;
