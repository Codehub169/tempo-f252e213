import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Instagram, AlertCircle, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // null, 'success', or 'error'
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid.';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json(); // Always try to parse JSON

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmissionStatus('error');
        console.error('Submission error:', responseData.message || 'Something went wrong');
      }
    } catch (error) {
      setSubmissionStatus('error');
      console.error('Network error or JSON parsing error:', error);
    }
    setIsSubmitting(false);
  };

  const animationVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: 'easeOut' }
    },
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="py-20 md:py-32 bg-primary text-neutral-darkest"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
    >
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.h2 
          className="text-4xl md:text-5xl font-heading font-bold text-center mb-4"
          variants={animationVariants}
        >
          Let's Work Together
        </motion.h2>
        <motion.p 
          className="text-lg font-body text-center mb-12 text-neutral-dark"
          variants={animationVariants}
        >
          Have a project in mind or just want to say hello? Send a note.
        </motion.p>

        <motion.form 
          onSubmit={handleSubmit} 
          className="bg-secondary p-8 md:p-12 rounded-xl shadow-xl space-y-6 relative overflow-hidden border border-neutral-light"
          variants={animationVariants}
          style={{ boxShadow: '0 10px 25px -5px rgba(166, 163, 158, 0.1), 0 8px 10px -6px rgba(166, 163, 158, 0.1)' }}
        >
          <div className="absolute top-0 left-0 w-16 h-16 bg-accent opacity-10 rounded-full -translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
          
          <div>
            <label htmlFor="name" className="block text-sm font-body font-medium text-neutral-darkest mb-1">Your Name</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              value={formData.name} 
              onChange={handleChange} 
              className={`w-full px-4 py-3 bg-white border ${errors.name ? 'border-error' : 'border-neutral-light'} rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-300 font-body text-neutral-darkest placeholder-neutral-medium`}
              placeholder="What should we call you?"
            />
            {errors.name && <p className="text-error text-xs mt-1 flex items-center"><AlertCircle size={14} className="mr-1"/>{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-body font-medium text-neutral-darkest mb-1">Your Email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={formData.email} 
              onChange={handleChange} 
              className={`w-full px-4 py-3 bg-white border ${errors.email ? 'border-error' : 'border-neutral-light'} rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-300 font-body text-neutral-darkest placeholder-neutral-medium`}
              placeholder="Where can we reach you?"
            />
            {errors.email && <p className="text-error text-xs mt-1 flex items-center"><AlertCircle size={14} className="mr-1"/>{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-body font-medium text-neutral-darkest mb-1">Your Story (or Message)</label>
            <textarea 
              name="message" 
              id="message" 
              rows="5" 
              value={formData.message} 
              onChange={handleChange} 
              className={`w-full px-4 py-3 bg-white border ${errors.message ? 'border-error' : 'border-neutral-light'} rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors duration-300 font-body text-neutral-darkest placeholder-neutral-medium`}
              placeholder="Tell us about your project or idea..."
            ></textarea>
            {errors.message && <p className="text-error text-xs mt-1 flex items-center"><AlertCircle size={14} className="mr-1"/>{errors.message}</p>}
          </div>
          
          <motion.button 
            type="submit" 
            disabled={isSubmitting} 
            className="w-full bg-accent text-white font-body font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-secondary transition-all duration-300 ease-in-out flex items-center justify-center space-x-2 group shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
            whileHover={!isSubmitting ? { scale: 1.03 } : {}}
            whileTap={!isSubmitting ? { scale: 0.97 } : {}}
          >
            {isSubmitting ? (
              <>
                <motion.div 
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                  ></motion.div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send size={18} />
                <span>Let’s design your story</span>
              </>
            )}
          </motion.button>

          {submissionStatus && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className={`mt-4 p-3 rounded-lg flex items-center space-x-2 text-sm ${submissionStatus === 'success' ? 'bg-success-light text-success-dark' : 'bg-error-light text-error-dark'}`}
            >
              {submissionStatus === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
              <p>
                {submissionStatus === 'success'
                  ? 'Message sent successfully! We\'ll be in touch soon.'
                  : 'Oops! Something went wrong. Please try again later.'}
              </p>
            </motion.div>
          )}
        </motion.form>

        <motion.div 
          className="mt-12 text-center"
          variants={animationVariants}
        >
          <p className="font-body text-neutral-dark mb-2">Connect with us on Instagram:</p>
          <a 
            href="https://instagram.com/hueneu_" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-accent hover:text-opacity-80 font-semibold transition-colors duration-300 group"
          >
            <Instagram size={20} className="mr-2 group-hover:scale-110 transition-transform"/> 
            @hueneu_
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
