import React from 'react';
import { motion } from 'framer-motion';
import { User, Users, School, GraduationCap, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const stats = [
    { icon: Users, number: "6-10", label: t('about.stats.groupSize') },
    { icon: School, number: t('about.stats.homeNumber'), label: t('about.stats.homeLabel') },
    { icon: Heart, number: "100%", label: t('about.stats.free') },
    { icon: GraduationCap, number: "120+", label: t('about.stats.classesHeld') }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Text Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('about.title')}
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  {t('about.description')}
                </p>
                <p>
                  {t('about.goal')}
                </p>
                <p>
                  {t('about.experience')}
                </p>
              </div>
            </div>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl"
                >
                  <stat.icon size={32} className="text-primary-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Content */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative">
              {/* Main Image Placeholder */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl shadow-2xl flex items-center justify-center"
              >
                <div className="text-center">
                  <User size={120} className="text-primary-600 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">{t('about.teacherPhoto')}</p>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-2xl">🚀</span>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-xl">💡</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">{t('about.mission.title')}</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              {t('about.mission.description')}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
