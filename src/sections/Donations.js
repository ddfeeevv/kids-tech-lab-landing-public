import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Gift, Users, Target, Shield, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Donations = () => {
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

  const benefits = [
    {
      icon: Gift,
      title: t('donations.benefits.materials.title'),
      description: t('donations.benefits.materials.description')
    },
    {
      icon: Users,
      title: t('donations.benefits.moreChildren.title'),
      description: t('donations.benefits.moreChildren.description')
    },
    {
      icon: Target,
      title: t('donations.benefits.expansion.title'),
      description: t('donations.benefits.expansion.description')
    },
    {
      icon: Shield,
      title: t('donations.benefits.transparency.title'),
      description: t('donations.benefits.transparency.description')
    }
  ];

  return (
    <section id="donations" className="section-padding bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
              <Heart size={40} className="text-white" />
            </div>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            {t('donations.title')}
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            {t('donations.subtitle')}
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Appeal */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('donations.whySupport.title')}
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  {t('donations.whySupport.description')}
                </p>
                <p>
                  {t('donations.whySupport.materials')}
                </p>
                <p>
                  {t('donations.whySupport.transparency')}
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">{t('donations.howToHelp.title')}</h4>
              <ul className="space-y-3 text-green-50">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>{t('donations.howToHelp.financial')}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>{t('donations.howToHelp.equipment')}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>{t('donations.howToHelp.sharing')}</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Column - Benefits */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-6"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold text-gray-900 text-center lg:text-left"
            >
              {t('donations.benefits.title')}
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon size={24} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="bg-white rounded-2xl p-8 shadow-xl text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
              <FileText size={32} className="text-white" />
            </div>
          </motion.div>
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 mb-4"
          >
            {t('donations.cta.title')}
          </motion.h3>
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            {t('donations.cta.subtitle')}
          </motion.p>
          <motion.div variants={itemVariants}>
            <motion.a
              href="https://t.me/ddfeeevv"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Heart size={20} className="mr-2" />
              {t('donations.cta.button')}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Donations;
