'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { experiences } from '@/lib/data';

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

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

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      ref={ref}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Experience & Internships
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8 relative">
          {/* Timeline line */}
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent opacity-20"></div>

          {/* Experience items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`relative ${index % 2 === 0 ? 'md:ml-auto md:pl-12 md:text-right' : 'md:mr-auto md:pr-12'} ml-12`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute w-7 h-7 rounded-full border-4 border-background dark:border-card bg-gradient-to-r from-primary to-accent ${
                  index % 2 === 0 ? '-left-[1.65rem] md:left-1/2 md:-ml-3.5' : '-left-[1.65rem] md:left-1/2 md:-ml-3.5'
                } top-2`}
              ></div>

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-6 rounded-xl border border-border/50 bg-gradient-to-br from-secondary/30 to-secondary/10 hover:border-primary/50 transition-all duration-300"
              >
                {/* Header */}
                <div className={`${index % 2 === 0 ? 'md:text-left' : ''}`}>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-primary font-semibold mb-1">{exp.company}</p>
                  <p className="text-sm text-foreground/60 mb-4">{exp.duration}</p>
                </div>

                {/* Description */}
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      whileHover={{ scale: 1.05 }}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors duration-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
