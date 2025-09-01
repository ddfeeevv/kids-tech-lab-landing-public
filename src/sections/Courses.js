import React from 'react';
import { motion } from 'framer-motion';
import { Printer, Cpu, Blocks, Monitor, Zap, Target, Users, Clock } from 'lucide-react';

const Courses = () => {
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

  const courses = [
    {
      icon: Printer,
      title: "3D-печать",
      description: "Изучаем основы 3D-моделирования и печати. Создаем собственные игрушки, украшения и полезные предметы.",
      features: ["Tinkercad", "3D-принтер", "Моделирование", "Печать"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Cpu,
      title: "Arduino",
      description: "Программируем микроконтроллеры, создаем умные устройства и автоматизированные системы.",
      features: ["Программирование", "Схемы", "Датчики", "Автоматизация"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: Blocks,
      title: "Лего-подобные наборы",
      description: "Конструируем роботов и механизмы, изучаем принципы работы различных устройств.",
      features: ["Конструирование", "Робототехника", "Механика", "Логика"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      icon: Monitor,
      title: "Основы компьютерной грамотности",
      description: "Изучаем работу с компьютером, безопасность в интернете и основы программирования.",
      features: ["Компьютер", "Интернет", "Безопасность", "Программирование"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    }
  ];

  const benefits = [
    { icon: Zap, title: "Практические проекты", desc: "Каждое занятие — это создание реального проекта" },
    { icon: Target, title: "Индивидуальный подход", desc: "Учитываем интересы и способности каждого ребенка" },
    { icon: Users, title: "Работа в команде", desc: "Учимся сотрудничать и делиться идеями" },
    { icon: Clock, title: "Гибкий график", desc: "Занятия в удобное время для детей и родителей" }
  ];

  return (
    <section id="courses" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Что мы изучаем
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Современные технологии, которые помогут детям развить логическое мышление, 
            творческие способности и подготовиться к цифровому будущему
          </motion.p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className={`${course.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full`}>
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
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Почему выбирают нас
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
