import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Reviews = () => {
  const { t } = useLanguage();
  const [currentReview, setCurrentReview] = useState(0);

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

  const reviews = [
    {
      id: 1,
      name: "Анна Петрова",
      childName: "Максим, 8 лет",
      rating: 5,
      text: "Мой сын просто в восторге от занятий! За месяц научился создавать простые 3D-модели и даже напечатал свою первую игрушку. Преподаватель очень терпеливый и умеет заинтересовать детей.",
      avatar: "👩‍💼"
    },
    {
      id: 2,
      name: "Дмитрий Смирнов",
      childName: "София, 10 лет",
      rating: 5,
      text: "Дочь всегда с нетерпением ждет занятий. Особенно ей нравится программирование Arduino - создала свой первый светящийся браслет! Атмосфера очень домашняя и уютная.",
      avatar: "👨‍💻"
    },
    {
      id: 3,
      name: "Елена Козлова",
      childName: "Артем, 7 лет",
      rating: 5,
      text: "Отличные курсы! Сын стал более усидчивым и внимательным. Преподаватель объясняет все очень понятно, а маленькие группы позволяют уделить внимание каждому ребенку.",
      avatar: "👩‍🏫"
    },
    {
      id: 4,
      name: "Михаил Волков",
      childName: "Даша, 9 лет",
      rating: 5,
      text: "Дочь мечтала стать программистом, и эти занятия помогли ей понять, что это действительно интересно. Теперь дома постоянно что-то изобретает и программирует!",
      avatar: "👨‍🔬"
    },
    {
      id: 5,
      name: "Ольга Морозова",
      childName: "Кирилл, 11 лет",
      rating: 5,
      text: "Сын всегда был увлечен техникой, но здесь он нашел единомышленников. Работа в команде над проектами очень развивает коммуникативные навыки. Рекомендую!",
      avatar: "👩‍🎓"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={20}
        className={i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <section id="reviews" className="section-padding bg-white">
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
            {t('reviews.title')}
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {t('reviews.subtitle')}
          </motion.p>
        </motion.div>

        {/* Main Review Carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative max-w-4xl mx-auto mb-12"
        >
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 md:p-12 shadow-xl">
            <motion.div
              key={currentReview}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Quote Icon */}
              <Quote size={48} className="text-primary-600 mx-auto mb-6" />
              
              {/* Review Text */}
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                "{reviews[currentReview].text}"
              </blockquote>
              
              {/* Rating */}
              <div className="flex justify-center mb-6">
                {renderStars(reviews[currentReview].rating)}
              </div>
              
              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-2xl">
                  {reviews[currentReview].avatar}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900 text-lg">
                    {reviews[currentReview].name}
                  </div>
                  <div className="text-gray-600">
                    {reviews[currentReview].childName}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <button
              onClick={prevReview}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300"
            >
              <ChevronLeft size={24} className="text-primary-600" />
            </button>
            <button
              onClick={nextReview}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300"
            >
              <ChevronRight size={24} className="text-primary-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentReview
                    ? 'bg-primary-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* All Reviews Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {renderStars(review.rating)}
              </div>
              
              {/* Review Text */}
              <p className="text-gray-600 mb-4 leading-relaxed">
                "{review.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-lg">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    {review.name}
                  </div>
                  <div className="text-gray-500 text-xs">
                    {review.childName}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Наши достижения</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-lg opacity-90">Довольных детей</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-lg opacity-90">Бесплатно</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">120+</div>
                <div className="text-lg opacity-90">Проведенных занятий</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
