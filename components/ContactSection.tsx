'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { socialLinks } from '@/lib/data';

// ─── EmailJS Config ────────────────────────────────────────────────────────────
// 1. Sign up at https://www.emailjs.com
// 2. Create a Service (e.g. Gmail) → copy the Service ID
// 3. Create an Email Template → copy the Template ID
//    In the template use these variables: {{from_name}}, {{from_email}}, {{message}}
// 4. Go to Account → API Keys → copy your Public Key
// Replace the three constants below with your actual values:
const EMAILJS_SERVICE_ID  = 'service_fir399h';
const EMAILJS_TEMPLATE_ID = 'template_swg98qr';
const EMAILJS_PUBLIC_KEY  = 'zSzRBfEINyPrwKKGm';
// ──────────────────────────────────────────────────────────────────────────────

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name:  formData.name,
          email: formData.email,
          message:    formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setFormData({ name: '', email: '', message: '' });
      setStatus('success');
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      ref={ref}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            I'm always open to new opportunities and interesting projects. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Let's Connect
            </h3>

            {/* Email */}
            <motion.a
              whileHover={{ x: 5 }}
              href={`mailto:${socialLinks.email}`}
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary/30 transition-colors duration-300 group"
            >
              <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Email</h4>
                <p className="text-foreground/70">{socialLinks.email}</p>
              </div>
            </motion.a>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-secondary/50 hover:bg-primary/20 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-secondary/50 hover:bg-primary/20 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
                className="w-full px-4 py-3 rounded-lg border border-border/50 bg-secondary/20 text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 disabled:opacity-50"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status === 'sending'}
                className="w-full px-4 py-3 rounded-lg border border-border/50 bg-secondary/20 text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 disabled:opacity-50"
                placeholder="john@example.com"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                disabled={status === 'sending'}
                className="w-full px-4 py-3 rounded-lg border border-border/50 bg-secondary/20 text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none disabled:opacity-50"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: status === 'sending' ? 1 : 1.05 }}
              whileTap={{ scale: status === 'sending' ? 1 : 0.95 }}
              type="submit"
              disabled={status === 'sending'}
              className="w-full cursor-pointer px-6 py-3 bg-gradient-to-r from-primary to-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <Send size={20} className={status === 'sending' ? 'animate-pulse' : ''} />
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </motion.button>

            {/* Feedback Messages */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-lg bg-green-500/20 border border-green-500/50 text-green-600 dark:text-green-400 text-sm text-center"
              >
                ✅ Message sent! I'll get back to you soon.
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-600 dark:text-red-400 text-sm text-center"
              >
                ❌ Something went wrong. Please try again or email me directly.
              </motion.div>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}