import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Cpu, Printer, Blocks, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


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

  // Изображения галереи
  const galleryImages = [
    {
      id: 1,
      category: "3D-печать",
      description: "Дети создают свои первые 3D-модели",
      imageUrl: "/images/gallery/photo1.jpg",
      alt: "Дети работают с 3D-принтером",
      icon: Printer,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      category: "Arduino",
      description: "Программирование светодиодов и датчиков",
      imageUrl: "/images/gallery/photo2.jpg",
      alt: "Занятия по Arduino",
      icon: Cpu,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      category: "Конструирование",
      description: "Сборка роботов из конструктора",
      imageUrl: "/images/gallery/photo3.jpg",
      alt: "Дети собирают роботов",
      icon: Blocks,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 4,
      category: "IT-направление",
      description: "Изучение основ программирования",
      imageUrl: "/images/gallery/photo4.jpg",
      alt: "Урок программирования",
      icon: Cpu,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 5,
      category: "3D-моделирование",
      description: "Создание сложных 3D-проектов",
      imageUrl: "/images/gallery/photo5.jpg",
      alt: "3D-моделирование на компьютере",
      icon: Printer,
      color: "from-indigo-500 to-blue-500"
    },
    {
      id: 6,
      category: "Электроника",
      description: "Работа с микросхемами и платами",
      imageUrl: "/images/gallery/photo6.jpg",
      alt: "Изучение электронных компонентов",
      icon: Cpu,
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 7,
      category: "Робототехника",
      description: "Программирование роботов",
      imageUrl: "/images/gallery/photo7.jpg",
      alt: "Программирование роботов",
      icon: Blocks,
      color: "from-teal-500 to-green-500"
    },
    {
      id: 8,
      category: "Проектная работа",
      description: "Командные технические проекты",
      imageUrl: "/images/gallery/photo8.jpg",
      alt: "Командная работа над проектом",
      icon: Blocks,
      color: "from-red-500 to-pink-500"
    }
  ];

  const filteredImages = galleryImages;

  // Функции для работы с модальным окном
  const openModal = useCallback((image, index) => {
    // Отключаем модальное окно на мобильных устройствах
    if (window.innerWidth < 768) {
      return;
    }
    setSelectedImage(image);
    setCurrentImageIndex(index);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const goToNext = useCallback(() => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  }, [currentImageIndex, filteredImages]);

  const goToPrevious = useCallback(() => {
    const prevIndex = currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  }, [currentImageIndex, filteredImages]);

  // Закрытие модального окна по ESC
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'hidden'; // Предотвращаем прокрутку фона
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage, currentImageIndex, goToNext, goToPrevious, closeModal]);

  return (
    <section id="gallery" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
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
            {t('gallery.title')}
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {t('gallery.subtitle')}
          </motion.p>
        </motion.div>



        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto"
        >
          <AnimatePresence mode="wait">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ y: -5 }}
                className="group md:cursor-pointer"
                onClick={() => openModal(image, index)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg md:hover:shadow-xl transition-all duration-300">
                  {/* Image */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img 
                      src={image.imageUrl} 
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 md:group-hover:scale-105"
                      onError={(e) => {
                        // Fallback к градиенту если изображение не загрузилось
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback gradient (скрыт по умолчанию) */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${image.color} items-center justify-center hidden`}>
                      <div className="text-center text-white">
                        <image.icon size={48} className="mx-auto mb-2" />
                        <p className="text-sm font-medium">{image.category}</p>
                      </div>
                    </div>
                    
                    {/* Hover Overlay - только на больших экранах */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 md:group-hover:bg-opacity-20 transition-all duration-300 items-center justify-center hidden md:flex">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white bg-opacity-90 rounded-full p-2">
                          <Camera size={24} className="text-gray-700" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>


        {/* Modal для просмотра изображений */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
              onClick={closeModal}
            >
              <div className="relative max-w-4xl max-h-[90vh] mx-4">
                {/* Кнопка закрытия */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
                >
                  <X size={24} className="text-white" />
                </button>

                {/* Навигация - предыдущее изображение */}
                {filteredImages.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      goToPrevious();
                    }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
                  >
                    <ChevronLeft size={24} className="text-white" />
                  </button>
                )}

                {/* Навигация - следующее изображение */}
                {filteredImages.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      goToNext();
                    }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
                  >
                    <ChevronRight size={24} className="text-white" />
                  </button>
                )}

                {/* Изображение */}
                <motion.div
                  key={selectedImage.id}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-lg overflow-hidden shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Изображение высокого качества */}
                  <div className="aspect-[4/3] relative min-h-[400px] overflow-hidden">
                    <img 
                      src={selectedImage.imageUrl} 
                      alt={selectedImage.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback к градиенту если изображение не загрузилось
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback gradient (скрыт по умолчанию) */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${selectedImage.color} items-center justify-center hidden`}>
                      <div className="text-center text-white">
                        <selectedImage.icon size={80} className="mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-2">{selectedImage.category}</h3>
                        <p className="text-lg opacity-90">{selectedImage.description}</p>
                        <p className="text-sm opacity-75 mt-4">Изображение не найдено</p>
                      </div>
                    </div>
                  </div>

                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
