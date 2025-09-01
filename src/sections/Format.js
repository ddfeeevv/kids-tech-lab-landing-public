import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, Calendar, MapPin, Coffee, Wifi, Car, Heart } from 'lucide-react';

const Format = () => {
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
      title: "Размер группы",
      description: "6-10 детей",
      details: "Небольшие группы позволяют уделить внимание каждому ребенку и создать комфортную атмосферу для обучения",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Clock,
      title: "Длительность",
      description: "2 часа в день",
      details: "Оптимальное время для концентрации внимания детей с перерывами на отдых и игры",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Calendar,
      title: "График",
      description: "Гибкий расписание",
      details: "Занятия проводятся в удобное время для детей и родителей, включая выходные дни",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: MapPin,
      title: "Место",
      description: "Домашняя атмосфера",
      details: "Уютная обстановка в доме преподавателя создает комфортную среду для обучения",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const advantages = [
    { icon: Coffee, title: "Чай и печенье", desc: "Вкусные перекусы для детей" },
    { icon: Wifi, title: "Wi-Fi", desc: "Быстрый интернет для всех устройств" },
    { icon: Car, title: "Парковка", desc: "Удобная парковка рядом с домом" },
    { icon: Heart, title: "Забота", desc: "Индивидуальный подход к каждому" }
  ];

  const schedule = [
    { time: "10:00-10:15", activity: "Приветствие и знакомство" },
    { time: "10:15-11:00", activity: "Основная часть занятия" },
    { time: "11:00-11:15", activity: "Перерыв с чаем и печеньем" },
    { time: "11:15-12:00", activity: "Практическая работа" },
    { time: "12:00-12:15", activity: "Подведение итогов" }
  ];

  return (
    <section id="format" className="section-padding bg-white">
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
            Формат занятий
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Создаем комфортную и эффективную среду для обучения, где каждый ребенок 
            может раскрыть свой потенциал
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



        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Готовы начать обучение?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Запишитесь на пробное занятие и убедитесь, что вашему ребенку понравится 
              изучать технологии в нашей уютной атмосфере
            </p>
            <motion.a
              href="https://t.me/your_telegram_username"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Записаться на пробное занятие
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Format;
