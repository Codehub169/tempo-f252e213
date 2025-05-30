import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Placeholder icons - replace with actual SVG imports or components
const IconPlaceholder = ({ className = 'w-12 h-12 text-accent mb-4' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.25278C12 6.25278 11.0943 3.75 8.43909 3.75C5.78388 3.75 3.75 5.78388 3.75 8.43909C3.75 11.0943 6.25278 12 6.25278 12C6.25278 12 3.75 12.9057 3.75 15.5609C3.75 18.2161 5.78388 20.25 8.43909 20.25C11.0943 20.25 12 17.7472 12 17.7472M12 6.25278C12 6.25278 12.9057 3.75 15.5609 3.75C18.2161 3.75 20.25 5.78388 20.25 8.43909C20.25 11.0943 17.7472 12 17.7472 12C17.7472 12 20.25 12.9057 20.25 15.5609C20.25 18.2161 18.2161 20.25 15.5609 20.25C12.9057 20.25 12 17.7472 12 17.7472M12 6.25278V17.7472" />
  </svg>
);

const services = [
  { name: 'Branding', description: 'Logos that live, identities that resonate.', icon: IconPlaceholder },
  { name: 'Packaging', description: 'Packaging, but make it poetic.', icon: IconPlaceholder },
  { name: 'Social Media', description: 'Scroll-stopping stories for your socials.', icon: IconPlaceholder },
  { name: 'Stationery', description: 'Tangible touches that tell your tale.', icon: IconPlaceholder },
  { name: 'Coffee Table Books', description: 'Curated narratives, beautifully bound.', icon: IconPlaceholder },
  { name: 'Creative Projects', description: 'Your vision, our vibrant execution.', icon: IconPlaceholder },
];

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] } 
    },
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{opacity:0, y:20}} 
          animate={inView ? {opacity:1, y:0} : {}}
          transition={{duration: 0.7, delay:0.1}}
          className="text-3xl sm:text-4xl font-heading font-medium text-neutral-dark mb-6 md:mb-10"
        >
          What We Do
        </motion.h2>
        <motion.p 
           initial={{opacity:0, y:20}} 
           animate={inView ? {opacity:1, y:0} : {}}
           transition={{duration: 0.7, delay:0.2}}
          className="text-lg font-body text-neutral-dark opacity-80 mb-12 md:mb-16 max-w-2xl mx-auto"
        >
          We craft visual narratives that speak volumes. From brand identities to tangible experiences, each project is a story waiting to be told with intention and a touch of the unexpected.
        </motion.p>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-primary p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-out transform hover:-translate-y-1 flex flex-col items-center"
              >
                <Icon />
                <h3 className="text-2xl font-heading font-medium text-neutral-dark mb-3">{service.name}</h3>
                <p className="font-body text-neutral-dark opacity-70 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
