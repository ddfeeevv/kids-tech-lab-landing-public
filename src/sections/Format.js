import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Format = () => {
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

  const formatDetails = [
    {
      icon: Users,
      title: t('format.details.groupSize.title'),
      description: t('format.details.groupSize.description'),
      details: t('format.details.groupSize.details'),
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Clock,
      title: t('format.details.duration.title'),
      description: t('format.details.duration.description'),
      details: t('format.details.duration.details'),
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Calendar,
      title: t('format.details.schedule.title'),
      description: t('format.details.schedule.description'),
      details: t('format.details.schedule.details'),
      color: "from-orange-500 to-red-500"
    },
    {
      icon: MapPin,
      title: t('format.details.location.title'),
      description: t('format.details.location.description'),
      details: t('format.details.location.details'),
      color: "from-purple-500 to-pink-500"
    }
  ];



  return (
    <section id="format" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            {t('format.title')}
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {t('format.subtitle')}
          </motion.p>
        </motion.div>

        {/* Format Details Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {formatDetails.map((detail, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className={`w-16 h-16 bg-gradient-to-r ${detail.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <detail.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{detail.title}</h3>
                <p className="text-2xl font-bold text-primary-600 mb-3">{detail.description}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{detail.details}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>



      </div>
    </section>
  );
};

export default Format;
