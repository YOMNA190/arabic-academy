import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { 
  Scroll,
  Menu,
  X
} from 'lucide-react'

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'courses', label: 'الدورات' },
    { id: 'progress', label: 'لوحة التقدّم' },
    { id: 'about', label: 'عن الأكاديمية' },
    { id: 'contact', label: 'تواصل معنا' }
  ]

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId)
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative z-50 bg-white/80 backdrop-blur-md border-b border-amber-200/50 shadow-lg"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => handleNavClick('home')}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <Scroll className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-emerald-600 bg-clip-text text-transparent">
                الأكاديمية العربية
              </h1>
              <p className="text-sm text-gray-600">رحلة في عالم اللغة العربية</p>
            </div>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-gray-700 hover:text-amber-600 transition-colors duration-300 font-medium ${
                  currentPage === item.id ? 'text-amber-600 border-b-2 border-amber-600' : ''
                }`}
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <motion.div 
            className="hidden md:flex items-center space-x-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-50" onClick={() => handleNavClick('progress')}>
              لوحة التقدّم
            </Button>
            <Button className="bg-gradient-to-r from-amber-500 to-emerald-600 hover:from-amber-600 hover:to-emerald-700 text-white shadow-lg">
              ابدأ التعلم
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-amber-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-amber-200/50"
          >
            <nav className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-right text-gray-700 hover:text-amber-600 transition-colors duration-300 font-medium py-2 ${
                    currentPage === item.id ? 'text-amber-600' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col space-y-2 mt-4">
                <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-50" onClick={() => handleNavClick('progress')}>
                  لوحة التقدّم
                </Button>
                <Button className="bg-gradient-to-r from-amber-500 to-emerald-600 hover:from-amber-600 hover:to-emerald-700 text-white shadow-lg">
                  ابدأ التعلم
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Navigation
