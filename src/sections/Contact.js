import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    childName: '',
    childAge: '',
    interests: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ageError, setAgeError] = useState('');

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'childAge') {
      const age = parseInt(value);
      if (value === '') {
        setAgeError('');
      } else if (isNaN(age) || age < 8 || age > 12) {
        setAgeError('Мы занимаемся только с детьми от 8 до 12 лет');
      } else {
        setAgeError('');
      }
    }
    
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Проверяем возраст перед отправкой
    const age = parseInt(formData.childAge);
    if (isNaN(age) || age < 8 || age > 12) {
      setAgeError('Мы занимаемся только с детьми от 8 до 12 лет');
      return;
    }
    
    // Здесь будет отправка данных в Telegram бота
    const message = `
Новая заявка на запись в Kids Tech Lab:

👤 Родитель: ${formData.name}
📞 Телефон: ${formData.phone}
📧 Email: ${formData.email}

👶 Ребенок: ${formData.childName}
🎂 Возраст: ${formData.childAge}
🎯 Интересы: ${formData.interests}

💬 Сообщение: ${formData.message}
    `;

    const telegramUrl = `https://t.me/ddfeeevv?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank');
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      title: "Telegram",
      value: "@ddfeeevv",
      link: "https://t.me/ddfeeevv",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Телефон",
      value: "+998 90 788 24 75",
      link: "tel:+998907882475",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Адрес",
      value: "2-й проезд Хамроз, 10А, Мирабадский район",
      link: "https://maps.google.com/?q=2-й+проезд+Хамроз,+10А,+Мирабадский+район",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Clock,
      title: "Время работы",
      value: "Пн и Пт: 10:00-12:00, Связь в любое время",
      link: "#",
      color: "from-purple-500 to-pink-500"
    }
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="section-padding bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-2xl p-12 shadow-xl"
          >
            <CheckCircle size={80} className="text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Заявка отправлена!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Спасибо за интерес к нашим курсам! Мы свяжемся с вами в ближайшее время 
              для обсуждения деталей записи.
            </p>
            <motion.button
              onClick={() => setIsSubmitted(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Отправить еще одну заявку
            </motion.button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
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
            Записаться на занятие
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Готовы начать увлекательное путешествие в мир технологий? 
            Заполните форму ниже, и мы свяжемся с вами для записи на пробное занятие
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Форма записи
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Parent Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="ivan@example.com"
                  />
                </div>

                {/* Child Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Имя ребенка *
                    </label>
                    <input
                      type="text"
                      name="childName"
                      value={formData.childName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      placeholder="Алексей"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Возраст ребенка *
                    </label>
                    <input
                      type="number"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleInputChange}
                      min="8"
                      max="12"
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
                        ageError ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Введите возраст от 8 до 12"
                    />
                    {ageError && (
                      <p className="mt-2 text-sm text-red-600">{ageError}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Интересы ребенка
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { value: "3d-printing", label: "3D-печать", icon: "🖨️" },
                      { value: "arduino", label: "Arduino", icon: "🔧" },
                      { value: "robotics", label: "Робототехника", icon: "🤖" },
                      { value: "programming", label: "Программирование", icon: "💻" }
                    ].map((option) => (
                      <label key={option.value} className="flex items-center p-4 border border-gray-300 rounded-lg hover:bg-primary-50 cursor-pointer transition-all duration-200">
                        <input
                          type="radio"
                          name="interests"
                          value={option.value}
                          checked={formData.interests === option.value}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                          formData.interests === option.value 
                            ? 'border-primary-500 bg-primary-500' 
                            : 'border-gray-300'
                        }`}>
                          {formData.interests === option.value && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                        <span className="text-2xl mr-2">{option.icon}</span>
                        <span className="text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Дополнительная информация
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder="Расскажите о ваших пожеланиях или вопросах..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Отправить заявку</span>
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Контактная информация
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center mr-4 shadow-lg`}>
                      <info.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{info.title}</div>
                      <div className="text-gray-600">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Contact */}
            <motion.div variants={itemVariants} className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Быстрая связь</h4>
              <p className="mb-6 opacity-90">
                Есть вопросы? Свяжитесь с нами прямо сейчас через Telegram!
              </p>
              <motion.a
                href="https://t.me/ddfeeevv"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Написать в Telegram
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
