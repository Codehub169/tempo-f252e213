import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhyHueneuSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      id="why-hueneu"
      className="py-20 md:py-32 bg-secondary text-neutral-dark min-h-[60vh] flex items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-heading font-bold mb-10 text-primary leading-tight"
          variants={itemVariants}
        >
          Why hueneu?
        </motion.h2>
        <motion.p 
          className="text-xl md:text-2xl font-body mb-8 leading-relaxed"
          variants={itemVariants}
        >
          We don’t just design—<span className="text-accent font-semibold">we decode stories.</span>
        </motion.p>
        <motion.p 
          className="text-xl md:text-2xl font-body leading-relaxed"
          variants={itemVariants}
        >
          Designs that speak quietly but <span className="italic">stay with you.</span>
        </motion.p>
        <motion.div variants={itemVariants} className="mt-12">
          <p className="text-lg font-body text-neutral-medium">
            Embracing calm, cultivating mystery, and crafting balance in every detail.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyHueneuSection;
