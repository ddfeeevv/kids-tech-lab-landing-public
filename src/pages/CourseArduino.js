import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Cpu, Clock, Users, Target, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseArduino = () => {
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

  const features = [
    "Основы программирования микроконтроллеров",
    "Работа с датчиками и светодиодами",
    "Создание умных устройств",
    "Автоматизация простых процессов",
    "Понимание принципов работы электроники",
    "Разработка собственных проектов"
  ];

  const schedule = [
    { week: "1-2 неделя", topic: "Знакомство с Arduino, основы программирования" },
    { week: "3-4 неделя", topic: "Работа со светодиодами и кнопками" },
    { week: "5-6 неделя", topic: "Подключение датчиков и считывание данных" },
    { week: "7-8 неделя", topic: "Создание умных устройств и автоматизация" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <Link 
            to="/"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Назад к курсам
          </Link>
          
          <motion.div variants={itemVariants} className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Cpu size={40} className="text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Arduino</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Изучите основы программирования микроконтроллеров и создавайте умные устройства!
            </p>
            <div className="mt-6">
              <span className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full text-lg font-semibold shadow-lg">
                🎁 БЕСПЛАТНО!
              </span>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {/* Course Info */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">О курсе</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                На этом курсе дети научатся программировать микроконтроллеры Arduino, 
                подключать различные датчики и создавать умные устройства. 
                Мы изучим основы электроники и программирования в простой и понятной форме.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Clock size={20} className="text-primary-600 mr-2" />
                  <span className="text-gray-600">8 недель</span>
                </div>
                <div className="flex items-center">
                  <Users size={20} className="text-primary-600 mr-2" />
                  <span className="text-gray-600">6-10 детей</span>
                </div>
                <div className="flex items-center">
                  <Target size={20} className="text-primary-600 mr-2" />
                  <span className="text-gray-600">8-12 лет</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-green-600 mr-2" />
                  <span className="text-gray-600">Бесплатно</span>
                </div>
              </div>
            </motion.div>

            {/* What You'll Learn */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Чему научитесь</h2>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {/* Schedule */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Программа курса</h2>
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <div key={index} className="flex items-start p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{item.week}</div>
                      <div className="text-gray-600 text-sm">{item.topic}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Готовы начать?</h3>
              <p className="mb-6 opacity-90">
                Запишитесь на бесплатный курс Arduino и создайте свое первое умное устройство!
              </p>
              <a
                href="https://t.me/ddfeeevv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-green-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Записаться на курс
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CourseArduino;
