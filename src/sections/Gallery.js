import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera, Users, Cpu, Printer, Blocks } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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

  // Заглушки для фотографий
  const galleryImages = [
    {
      id: 1,
      category: "3D-печать",
      icon: Printer,
      description: "Дети создают свои первые 3D-модели",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      category: "Arduino",
      icon: Cpu,
      description: "Программирование светодиодов и датчиков",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      category: "Конструирование",
      icon: Blocks,
      description: "Сборка роботов из конструктора",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 4,
      category: "Работа в группах",
      icon: Users,
      description: "Командная работа над проектами",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 5,
      category: "3D-печать",
      icon: Printer,
      description: "Печать созданных моделей",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 6,
      category: "Arduino",
      icon: Cpu,
      description: "Создание умных устройств",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 7,
      category: "Конструирование",
      icon: Blocks,
      description: "Изучение механики и физики",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 8,
      category: "Работа в группах",
      icon: Users,
      description: "Презентация проектов",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const categories = ["Все", "3D-печать", "Arduino", "Конструирование", "Работа в группах"];
  const [activeCategory, setActiveCategory] = useState("Все");

  const filteredImages = activeCategory === "Все" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
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
            Фотогалерея
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Посмотрите, как проходят наши занятия и какие удивительные проекты 
            создают наши ученики
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600 shadow-md'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedImage(image)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Placeholder Image */}
                  <div className={`aspect-square bg-gradient-to-br ${image.color} flex items-center justify-center`}>
                    <div className="text-center text-white">
                      <image.icon size={48} className="mx-auto mb-2" />
                      <p className="text-sm font-medium">{image.category}</p>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <Camera size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white bg-opacity-90 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Placeholder Notice */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <Camera size={48} className="text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Фотографии будут добавлены скоро
            </h3>
            <p className="text-gray-600">
              Мы активно фотографируем наши занятия и проекты. 
              Скоро здесь появятся реальные фотографии наших учеников за работой!
            </p>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
              >
                <X size={24} className="text-gray-600" />
              </button>
              
              <div className={`aspect-video bg-gradient-to-br ${selectedImage.color} flex items-center justify-center`}>
                <div className="text-center text-white">
                  <selectedImage.icon size={80} className="mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{selectedImage.category}</h3>
                  <p className="text-lg opacity-90">{selectedImage.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
