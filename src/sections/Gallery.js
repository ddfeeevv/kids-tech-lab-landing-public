import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera, Users, Cpu, Printer, Blocks } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Gallery = () => {
  const { t } = useLanguage();


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

  const filteredImages = galleryImages;

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
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Placeholder Image */}
                  <div className={`aspect-square bg-gradient-to-br ${image.color} flex items-center justify-center`}>
                    <div className="text-center text-white">
                      <image.icon size={48} className="mx-auto mb-2" />
                      <p className="text-sm font-medium">{image.category}</p>
                    </div>
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
              {t('gallery.placeholder.title')}
            </h3>
            <p className="text-gray-600">
              {t('gallery.placeholder.description')}
            </p>
          </div>
        </motion.div>
      </div>


    </section>
  );
};

export default Gallery;
