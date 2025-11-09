import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, MessageCircle, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navigation = ({ showBackButton = false, onBack }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const { currentLanguage, changeLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showLanguageMenu && !event.target.closest('.language-selector')) {
        setShowLanguageMenu(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showLanguageMenu]);

  const languages = [
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'uz', name: "O'zbekcha", flag: '🇺🇿' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];



  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            {showBackButton && (
              <motion.button
                onClick={onBack}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mr-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
              >
                <ArrowLeft size={20} className="text-gray-600" />
              </motion.button>
            )}
            <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TKL</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Tech Kids Lab</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {[
              { name: t('nav.about'), href: '#about' },
              { name: t('nav.contacts'), href: '#contact' },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-primary-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            
            {/* Language Selector */}
            <div className="relative language-selector">
              <motion.button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              >
                <span className="text-lg">
                  {languages.find(lang => lang.code === currentLanguage)?.flag}
                </span>
                <span className="text-sm font-medium text-gray-700">
                  {languages.find(lang => lang.code === currentLanguage)?.code.toUpperCase()}
                </span>
              </motion.button>
              
              {showLanguageMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[140px] z-50"
                >
                  {languages.map((language) => (
                    <button
                      key={language.code}
                                             onClick={() => {
                         changeLanguage(language.code);
                         setShowLanguageMenu(false);
                       }}
                      className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200 ${
                        currentLanguage === language.code ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-lg">{language.flag}</span>
                      <span className="text-sm font-medium">{language.name}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
            
            <motion.a
              href="https://t.me/ddfeeevv"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>{t('nav.writeTelegram')}</span>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { name: t('nav.about'), href: '#about' },
                { name: t('nav.contacts'), href: '#contact' },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-600 hover:text-primary-600 transition-colors duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile Language Selector */}
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-gray-700 mb-2">Язык / Til / Language</div>
                <div className="flex space-x-2">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                                             onClick={() => {
                         changeLanguage(language.code);
                         setIsOpen(false);
                       }}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
                        currentLanguage === language.code 
                          ? 'bg-primary-100 text-primary-600' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <span className="text-lg">{language.flag}</span>
                      <span className="text-sm font-medium">{language.code.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <a
                href="https://t.me/ddfeeevv"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 btn-primary text-center"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.writeTelegram')}
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
