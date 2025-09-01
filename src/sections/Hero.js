import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Cpu, Printer, BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const floatingIcons = [
    { Icon: Cpu, delay: 0, x: 20, y: 10 },
    { Icon: Printer, delay: 0.5, x: -30, y: 20 },
    { Icon: BookOpen, delay: 1, x: 40, y: -10 },
    { Icon: Sparkles, delay: 1.5, x: -20, y: 30 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-20">
      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: x + 50, y: y + 50 }}
          animate={{ 
            opacity: [0, 0.3, 0.6, 0.3, 0],
            x: [x + 50, x, x - 20, x, x + 50],
            y: [y + 50, y, y - 20, y, y + 50],
          }}
          transition={{
            duration: 8,
            delay: delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute hidden lg:block"
          style={{ left: `${50 + x}%`, top: `${30 + y}%` }}
        >
          <Icon size={32} className="text-primary-300" />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Main Title */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-gray-900"
              whileHover={{ scale: 1.02 }}
            >
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                {t('hero.title')}
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              {t('hero.subtitle')}
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="mt-4"
            >
              <span className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full text-lg font-semibold shadow-lg">
                {t('hero.freeBanner')}
              </span>
            </motion.div>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-500 max-w-3xl mx-auto"
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.a
              href="#courses"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4 shadow-xl"
            >
              {t('hero.viewCourses')}
            </motion.a>
            <motion.a
              href="https://t.me/ddfeeevv"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-8 py-4"
            >
              {t('hero.signUp')}
            </motion.a>
          </motion.div>

          {/* Features */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 max-w-4xl mx-auto"
          >
            {[
              { icon: Cpu, title: t('courseCards.arduino.title'), desc: t('courseCards.arduino.description').split('.')[0] },
              { icon: Printer, title: t('courseCards.3d-printing.title'), desc: t('courseCards.3d-printing.description').split('.')[0] },
              { icon: BookOpen, title: t('courseCards.it.title'), desc: t('courseCards.it.description').split('.')[0] }
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <feature.icon size={40} className="text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>


    </section>
  );
};

export default Hero;
