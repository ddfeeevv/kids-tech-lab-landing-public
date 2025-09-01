import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const faqs = [
    {
      question: "С какого возраста можно начинать обучение?",
      answer: "Мы принимаем детей от 6 до 12 лет. Для каждого возраста подбираем подходящий уровень сложности и темп обучения. Младшие дети изучают основы через игры и простые проекты, а старшие могут работать с более сложными задачами."
    },
    {
      question: "Нужны ли какие-то специальные знания или навыки?",
      answer: "Никаких специальных знаний не требуется! Мы начинаем с самых основ и постепенно усложняем материал. Главное - это интерес ребенка к технологиям и готовность учиться новому."
    },
    {
      question: "Что нужно приносить на занятия?",
      answer: "Все необходимое оборудование и материалы мы предоставляем. Ребенку нужно принести только хорошее настроение и желание учиться! Если у вас есть собственный ноутбук, можете приносить его для удобства."
    },
    {
      question: "Как часто проходят занятия?",
      answer: "Занятия проходят 1-2 раза в неделю по 2 часа. Мы подбираем удобное время для каждой группы. Также возможны индивидуальные занятия по договоренности."
    },
    {
      question: "Сколько стоит обучение?",
      answer: "Стоимость занятий зависит от выбранного курса и формата обучения. Пробное занятие - бесплатно! Подробную информацию о ценах можно узнать, связавшись с нами в Telegram."
    },
    {
      question: "Можно ли присутствовать родителям на занятиях?",
      answer: "Конечно! Мы приветствуем участие родителей, особенно на первых занятиях. Это помогает ребенку чувствовать себя комфортно, а родителям - понимать, чем занимается их ребенок."
    },
    {
      question: "Что делать, если ребенок пропустил занятие?",
      answer: "Мы всегда готовы помочь наверстать пропущенный материал. Можем провести дополнительное занятие или объяснить тему индивидуально. Главное - не отставать от группы!"
    },
    {
      question: "Безопасно ли оборудование для детей?",
      answer: "Абсолютно безопасно! Все оборудование адаптировано для работы с детьми. Мы используем только сертифицированные материалы и следуем всем правилам безопасности. За детьми постоянно наблюдает преподаватель."
    },
    {
      question: "Можно ли забрать ребенка раньше времени?",
      answer: "Да, конечно. Если вам нужно забрать ребенка раньше, просто предупредите нас заранее. Мы понимаем, что у родителей могут быть разные обстоятельства."
    },
    {
      question: "Что получает ребенок после окончания курса?",
      answer: "После завершения курса каждый ребенок получает сертификат об окончании и все созданные им проекты. Также мы даем рекомендации по дальнейшему развитию в области технологий."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center mb-6">
            <HelpCircle size={48} className="text-primary-600 mr-4" />
            <h2 className="text-4xl font-bold text-gray-900">
              Часто задаваемые вопросы
            </h2>
          </motion.div>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Ответы на самые популярные вопросы о наших курсах и формате обучения
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus size={24} className="text-primary-600" />
                  ) : (
                    <Plus size={24} className="text-primary-600" />
                  )}
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Не нашли ответ на свой вопрос?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Свяжитесь с нами в Telegram, и мы с радостью ответим на все ваши вопросы 
              и поможем выбрать подходящий курс для вашего ребенка
            </p>
            <motion.a
              href="https://t.me/your_telegram_username"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-primary-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Написать в Telegram
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
