'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '@/lib/data';

export function AboutSection() {
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
      id="about"
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
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Bio */}
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm a passionate full-stack developer with a focus on creating beautiful, 
              functional digital experiences. With expertise in modern web technologies, 
              I bring creative solutions to complex problems.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              When I'm not coding, you can find me exploring new design trends, 
              contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm always excited to collaborate on interesting projects and help teams build amazing products.
            </p>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: '20+', label: 'Projects Completed' },
              { number: '6+', label: 'Months Experience' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '10+', label: 'Technologies' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-foreground/70 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div variants={itemVariants}>
          <h3 className="text-2xl font-bold text-foreground mb-8">Skills & Expertise</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={groupIndex}
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-6 rounded-xl bg-gradient-to-br from-secondary/30 to-secondary/10 border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-primary mb-4">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-colors duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
