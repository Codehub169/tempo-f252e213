import { motion } from 'framer-motion';
import AnimatedLogo from './AnimatedLogo';
import ScrollIndicator from './ScrollIndicator';

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2 + 0.5, // Delay after logo animation (0.5s for logo)
        duration: 0.8,
        ease: 'easeOut'
      }
    })
  };

  return (
    <section 
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative text-center bg-secondary p-8 overflow-hidden"
    >
      {/* Animated Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mb-8 md:mb-12"
      >
        <AnimatedLogo />
      </motion.div>

      {/* Tagline */}
      <motion.h1 
        custom={0} 
        variants={textVariants} 
        initial="hidden" 
        animate="visible" 
        className="text-3xl sm:text-4xl md:text-5xl font-heading font-medium text-neutral-dark mb-4"
      >
        Where stories find their aesthetic.
      </motion.h1>

      {/* Subtext */}
      <motion.p 
        custom={1} 
        variants={textVariants} 
        initial="hidden" 
        animate="visible" 
        className="text-lg sm:text-xl md:text-2xl font-body text-neutral-dark opacity-80 mb-12 md:mb-16 max-w-xl mx-auto"
      >
        Designs that whisper loud stories.
      </motion.p>

      {/* Scroll Down Indicator */}
      <motion.div
        custom={2}
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <ScrollIndicator />
      </motion.div>
    </section>
  );
};

export default HeroSection;
