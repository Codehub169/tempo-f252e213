import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image'; // Assuming visual-who-knew.svg will be used as an image

const StorySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3, // Trigger animation when 30% of the section is visible
  });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.3, duration: 0.5 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const whoKnewVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0, 
      transition: { type: 'spring', stiffness: 100, damping: 10, delay: 0.5 }
    },
  };

  return (
    <motion.section
      id="story"
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="py-20 md:py-32 bg-primary text-neutral-dark"
    >
      <div className="container mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Text Content */}
        <motion.div variants={itemVariants} className="max-w-lg mx-auto md:mx-0 text-center md:text-left">
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-heading font-medium mb-6">
            The <span className="text-accent">hueneu</span> Story
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg font-body mb-4 opacity-90">
            <strong className="font-semibold">Hue</strong>: A burst of creative color, the unexpected spark, the vibrant life we infuse into every design. It's the bold idea, the playful twist, the visual poetry that captures attention.
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg font-body mb-6 opacity-90">
            <strong className="font-semibold">Neu</strong>: The grounding neutrality, the calm canvas, the intentional balance that underpins our creativity. It's the quiet confidence, the sophisticated simplicity, the space for stories to breathe and resonate.
          </motion.p>
          <motion.p variants={itemVariants} className="text-xl font-body font-medium italic opacity-90">
            Together, they create designs that are both quietly profound and boldly expressive — a balance that often makes you think, "Who Knew?"
          </motion.p>
        </motion.div>

        {/* "Who Knew?" Visual Pop-out */}
        <motion.div 
          variants={whoKnewVariants} 
          className="relative flex justify-center items-center h-64 md:h-auto mt-8 md:mt-0"
        >
          {/* Placeholder for visual-who-knew.svg - replace with actual SVG/Image component */}
          {/* For a real SVG, you might import it as a component or use an <img> tag */}
          {/* <Image src="/visual-who-knew.svg" width={300} height={300} alt="Who Knew? visual concept" className="max-w-xs md:max-w-sm"/> */}
          <div className="w-60 h-60 md:w-80 md:h-80 bg-accent rounded-full flex items-center justify-center shadow-xl transform transition-all duration-500 hover:scale-105">
            <span className="text-4xl md:text-5xl font-heading text-white transform -rotate-6">Who Knew?</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StorySection;
