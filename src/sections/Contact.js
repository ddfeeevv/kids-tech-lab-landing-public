import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    childName: '',
    childAge: '',
    interests: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [childNameError, setChildNameError] = useState('');

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

  // Валидация имени (без цифр)
  const validateName = (name) => {
    return !/\d/.test(name);
  };

  // Валидация узбекского номера телефона
  const validateUzbekPhone = (phone) => {
    // Убираем все пробелы, дефисы и плюсы
    const cleanPhone = phone.replace(/[\s\-+]/g, '');
    
    // Проверяем различные форматы:
    // 998XXXXXXXXX (12 цифр, начинается с 998)
    // 90XXXXXXXX (9 цифр, начинается с 90)
    // 907882475 (9 цифр, начинается с 90)
    
    if (cleanPhone.length === 12 && cleanPhone.startsWith('998')) {
      return /^998[0-9]{9}$/.test(cleanPhone);
    } else if (cleanPhone.length === 9 && cleanPhone.startsWith('90')) {
      return /^90[0-9]{7}$/.test(cleanPhone);
    }
    
    return false;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'childAge') {
      // Проверяем, что введены только цифры
      if (value === '') {
        setAgeError('');
      } else if (!/^\d+$/.test(value)) {
        setAgeError(t('contact.form.ageNumberError'));
      } else {
        const age = parseInt(value);
        if (age < 8 || age > 16) {
          setAgeError(t('contact.form.ageError'));
        } else {
          setAgeError('');
        }
      }
    }

    if (name === 'name') {
      if (value === '') {
        setNameError('');
      } else if (!validateName(value)) {
        setNameError(t('contact.form.nameError'));
      } else {
        setNameError('');
      }
    }

    if (name === 'childName') {
      if (value === '') {
        setChildNameError('');
      } else if (!validateName(value)) {
        setChildNameError(t('contact.form.nameError'));
      } else {
        setChildNameError('');
      }
    }

    if (name === 'phone') {
      if (value === '') {
        setPhoneError('');
      } else if (!validateUzbekPhone(value)) {
        setPhoneError(t('contact.form.phoneError'));
      } else {
        setPhoneError('');
      }
    }
    
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Проверяем все поля перед отправкой
    if (!/^\d+$/.test(formData.childAge)) {
      setAgeError(t('contact.form.ageNumberError'));
      return;
    }
    
    const age = parseInt(formData.childAge);
    if (age < 8 || age > 16) {
      setAgeError(t('contact.form.ageError'));
      return;
    }

          if (!validateName(formData.name)) {
        setNameError(t('contact.form.nameError'));
        return;
      }

      if (!validateName(formData.childName)) {
        setChildNameError(t('contact.form.nameError'));
        return;
      }

    if (!validateUzbekPhone(formData.phone)) {
      setPhoneError(t('contact.form.phoneError'));
      return;
    }
    
    // Нормализуем номер телефона для отправки
    const normalizePhone = (phone) => {
      const cleanPhone = phone.replace(/[\s\-+]/g, '');
      if (cleanPhone.length === 12 && cleanPhone.startsWith('998')) {
        return `+${cleanPhone}`;
      } else if (cleanPhone.length === 9 && cleanPhone.startsWith('90')) {
        return `+998${cleanPhone}`;
      }
      return phone;
    };

    // Формируем сообщение для Telegram
    const message = `
<b>🚀 Новая заявка на запись в Tech Kids Lab</b>

👤 <b>Родитель:</b> ${formData.name}
📞 <b>Телефон:</b> ${normalizePhone(formData.phone)}

👶 <b>Ребенок:</b> ${formData.childName}
🎂 <b>Возраст:</b> ${formData.childAge}
🎯 <b>Интересы:</b> ${formData.interests}

💬 <b>Сообщение:</b> ${formData.message}

⏰ <i>Время отправки: ${new Date().toLocaleString('ru-RU')}</i>
    `;

    
    // Отправляем заявку через Telegram Bot API
    setIsSending(true);
    setSendError('');
    
    const sendToTelegram = async () => {
      // Получаем токен из переменных окружения
      const botToken = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
      const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID;
      
      if (!botToken || !chatId) {
        setSendError('Ошибка конфигурации. Обратитесь к администратору.');
        setIsSending(false);
        return;
      }
      
      try {
        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML'
          })
        });
        
        if (response.ok) {
          setIsSending(false);
          setIsSubmitted(true);
        } else {
          setSendError(t('contact.form.sendError'));
          setIsSending(false);
        }
      } catch (error) {
        setSendError(t('contact.form.sendError'));
        setIsSending(false);
      }
    };
    
    // Отправляем заявку
    sendToTelegram();
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      title: t('contact.info.telegram'),
      value: "@ddfeeevv",
      link: "https://t.me/ddfeeevv",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: t('contact.info.phone'),
      value: "+998 90 788 24 75",
      link: "tel:+998907882475",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: t('contact.info.address'),
      value: t('contact.info.addressValue'),
      link: "https://maps.google.com/?q=2nd+Hamroz+Lane,+10A,+Mirabad+District",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Clock,
      title: t('contact.info.workingHours'),
      value: t('contact.info.workingHoursValue'),
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
              {t('contact.form.success.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('contact.form.success.message')}
            </p>
            <motion.button
              onClick={() => setIsSubmitted(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              {t('contact.form.success.again')}
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
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            {t('contact.title')}
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {t('contact.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('contact.form.title')}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Parent Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.parentName')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
                        nameError ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder={t('contact.form.parentNamePlaceholder')}
                    />
                    {nameError && (
                      <p className="mt-2 text-sm text-red-600">{nameError}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.phone')}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
                        phoneError ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder={t('contact.form.phonePlaceholder')}
                    />
                    {phoneError && (
                      <p className="mt-2 text-sm text-red-600">{phoneError}</p>
                    )}
                  </div>
                </div>

                {/* Child Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.childName')}
                    </label>
                    <input
                      type="text"
                      name="childName"
                      value={formData.childName}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
                        childNameError ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder={t('contact.form.childNamePlaceholder')}
                    />
                    {childNameError && (
                      <p className="mt-2 text-sm text-red-600">{childNameError}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.childAge')}
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleInputChange}
                      maxLength="2"
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
                        ageError ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder={t('contact.form.agePlaceholder')}
                    />
                    {ageError && (
                      <p className="mt-2 text-sm text-red-600">{ageError}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.interests')}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { value: "3d-printing", label: t('courseCards.3d-printing.title'), icon: "🖨️" },
                      { value: "arduino", label: t('courseCards.arduino.title'), icon: "🔧" },
                      { value: "robotics", label: t('courseCards.robotics.title'), icon: "🤖" },
                      { value: "programming", label: t('courseCards.it.title'), icon: "💻" }
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
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileHover={{ scale: isSending ? 1 : 1.02 }}
                  whileTap={{ scale: isSending ? 1 : 0.98 }}
                  className={`w-full btn-primary flex items-center justify-center space-x-2 ${
                    isSending ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSending ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>{t('contact.form.sending')}</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>{t('contact.form.submit')}</span>
                    </>
                  )}
                </motion.button>
                
                {sendError && (
                  <p className="mt-2 text-sm text-red-600 text-center">{t('contact.form.sendError')}</p>
                )}
              </form>
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('contact.info.title')}
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
              <h4 className="text-xl font-bold mb-4">{t('contact.info.quickContact.title')}</h4>
              <p className="mb-6 opacity-90">
                {t('contact.info.quickContact.message')}
              </p>
              <motion.a
                href="https://t.me/ddfeeevv"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {t('contact.info.quickContact.button')}
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
