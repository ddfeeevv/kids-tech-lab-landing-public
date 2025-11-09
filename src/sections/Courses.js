import React from 'react';
import { motion } from 'framer-motion';
import { Printer, Zap, Target, Users, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Courses = ({ onCourseSelect }) => {
  const { t } = useLanguage();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const courses = [
    {
      icon: Printer,
      title: t('courseCards.3d-printing.title'),
      description: t('courseCards.3d-printing.description'),
      features: t('courseCards.3d-printing.features'),
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      pageId: "course-3d"
    }
  ];

  const benefits = [
    { icon: Zap, title: t('courses.benefits.practical.title'), desc: t('courses.benefits.practical.desc') },
    { icon: Target, title: t('courses.benefits.individual.title'), desc: t('courses.benefits.individual.desc') },
    { icon: Users, title: t('courses.benefits.team.title'), desc: t('courses.benefits.team.desc') },
    { icon: Clock, title: t('courses.benefits.schedule.title'), desc: t('courses.benefits.schedule.desc') }
  ];

  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
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
            {t('courses.title')}
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {t('courses.subtitle')}
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="mt-6"
          >
            <span className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-full text-xl font-bold shadow-lg">
              {t('courses.freeBanner')}
            </span>
          </motion.div>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-1 max-w-3xl mx-auto gap-8 mb-16"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div 
                className={`${course.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full cursor-pointer`}
                onClick={() => onCourseSelect(course.pageId)}
              >
                {/* Icon */}
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${course.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <course.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 ml-4">{course.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {course.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {course.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className={`w-2 h-2 bg-gradient-to-r ${course.color} rounded-full mr-3`}></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            {t('courses.benefits.title')}
          </motion.h3>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <benefit.icon size={28} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;
