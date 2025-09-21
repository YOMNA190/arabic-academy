import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import Navigation from './components/Navigation.jsx'
import Courses from './components/Courses.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import { 
  BookOpen, 
  Users, 
  Award, 
  Star, 
  Play, 
  ChevronRight, 
  Globe, 
  Heart,
  Sparkles,
  Crown,
  Feather,
  Scroll
} from 'lucide-react'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const courses = [
    {
      title: "أساسيات اللغة العربية",
      description: "تعلم الحروف والكلمات الأساسية بطريقة تفاعلية ممتعة",
      level: "مبتدئ",
      duration: "8 أسابيع",
      students: 1250,
      rating: 4.9,
      image: "/src/assets/arabic-calligraphy.jpg"
    },
    {
      title: "النحو والصرف",
      description: "إتقان قواعد النحو والصرف العربي بأسلوب مبسط",
      level: "متوسط",
      duration: "12 أسبوع",
      students: 890,
      rating: 4.8,
      image: "/src/assets/geometric-pattern.jpg"
    },
    {
      title: "البلاغة والأدب",
      description: "استكشاف جمال البلاغة العربية والأدب الكلاسيكي",
      level: "متقدم",
      duration: "16 أسبوع",
      students: 650,
      rating: 4.9,
      image: "/src/assets/islamic-pattern.jpg"
    }
  ]

  const testimonials = [
    {
      name: "أحمد محمد",
      role: "طالب جامعي",
      content: "الأكاديمية العربية غيرت نظرتي للغة العربية. التعلم أصبح ممتعاً وسهلاً!",
      rating: 5
    },
    {
      name: "فاطمة علي",
      role: "معلمة",
      content: "منصة رائعة تجمع بين الأصالة والحداثة في تعليم اللغة العربية.",
      rating: 5
    },
    {
      name: "عمر حسن",
      role: "مهندس",
      content: "استطعت تحسين مهاراتي في اللغة العربية بفضل المحتوى المتميز.",
      rating: 5
    }
  ]

  const stats = [
    { icon: Users, value: "10,000+", label: "طالب نشط" },
    { icon: BookOpen, value: "50+", label: "دورة تعليمية" },
    { icon: Award, value: "95%", label: "معدل النجاح" },
    { icon: Globe, value: "25+", label: "دولة" }
  ]

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/src/assets/islamic-pattern.jpg')] bg-repeat bg-center"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center space-x-2"
                >
                  <Badge className="bg-gradient-to-r from-amber-500 to-emerald-600 text-white px-4 py-2">
                    <Sparkles className="w-4 h-4 mr-2" />
                    منصة تعليمية متطورة
                  </Badge>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-5xl lg:text-7xl font-bold leading-tight"
                >
                  <span className="bg-gradient-to-r from-amber-600 via-emerald-600 to-amber-600 bg-clip-text text-transparent">
                    اكتشف جمال
                  </span>
                  <br />
                  <span className="text-gray-800">اللغة العربية</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-xl text-gray-600 leading-relaxed max-w-lg"
                >
                  انطلق في رحلة تعليمية استثنائية لتعلم اللغة العربية بأساليب حديثة وتفاعلية. 
                  من الأساسيات إلى الإتقان، نحن معك في كل خطوة.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-amber-500 to-emerald-600 hover:from-amber-600 hover:to-emerald-700 text-white shadow-xl px-8 py-4 text-lg"
                >
                  <Play className="w-5 h-5 mr-2" />
                  ابدأ رحلتك الآن
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-amber-300 text-amber-700 hover:bg-amber-50 px-8 py-4 text-lg"
                  onClick={() => setCurrentPage('courses')}
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  استكشف الدورات
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative"
            >
              <div className="relative">
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-400 to-emerald-500 rounded-full opacity-20 blur-xl"
                ></motion.div>
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-emerald-400 to-amber-500 rounded-full opacity-20 blur-xl"
                ></motion.div>
                
                {/* Main Image Container */}
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-sm border border-amber-200/50">
                  <img 
                    src="/src/assets/arabic-calligraphy.jpg" 
                    alt="الخط العربي الجميل" 
                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  />
                  
                  {/* Floating Cards */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-amber-200/50"
                  >
                    <div className="flex items-center space-x-2">
                      <Crown className="w-5 h-5 text-amber-500" />
                      <span className="text-sm font-medium text-gray-700">تعلم متميز</span>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.7 }}
                    className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-emerald-200/50"
                  >
                    <div className="flex items-center space-x-2">
                      <Heart className="w-5 h-5 text-emerald-500" />
                      <span className="text-sm font-medium text-gray-700">بحب وشغف</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="bg-gradient-to-r from-amber-500 to-emerald-600 text-white px-4 py-2 mb-4">
              <Feather className="w-4 h-4 mr-2" />
              دوراتنا المميزة
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              اختر مسارك التعليمي
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              دورات متنوعة تناسب جميع المستويات، مصممة بعناية لتحقيق أفضل النتائج التعليمية
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-amber-200/50 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-gray-700">
                        {course.level}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>المدة: {course.duration}</span>
                        <span>{course.students} طالب</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                          <span className="text-sm text-gray-600 mr-2">{course.rating}</span>
                        </div>
                        
                        <Button 
                          size="sm" 
                          className="bg-gradient-to-r from-amber-500 to-emerald-600 hover:from-amber-600 hover:to-emerald-700 text-white"
                        >
                          ابدأ الآن
                          <ChevronRight className="w-4 h-4 mr-1" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-amber-300 text-amber-700 hover:bg-amber-50 px-8 py-4 text-lg"
              onClick={() => setCurrentPage('courses')}
            >
              عرض جميع الدورات
              <ChevronRight className="w-5 h-5 mr-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="bg-gradient-to-r from-amber-500 to-emerald-600 text-white px-4 py-2 mb-4">
              <Heart className="w-4 h-4 mr-2" />
              آراء طلابنا
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              قصص نجاح ملهمة
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <Card className="bg-white/80 backdrop-blur-sm border-amber-200/50 shadow-xl p-8">
                  <CardContent className="space-y-6">
                    <div className="flex justify-center space-x-1 mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed italic">
                      "{testimonials[currentTestimonial].content}"
                    </blockquote>
                    
                    <div className="pt-4">
                      <div className="font-bold text-gray-800 text-lg">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-gray-600">
                        {testimonials[currentTestimonial].role}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-gradient-to-r from-amber-500 to-emerald-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Scroll className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">الأكاديمية العربية</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                منصة تعليمية متطورة لتعلم اللغة العربية بأساليب حديثة وتفاعلية
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setCurrentPage('home')} className="hover:text-amber-400 transition-colors">الرئيسية</button></li>
                <li><button onClick={() => setCurrentPage('courses')} className="hover:text-amber-400 transition-colors">الدورات</button></li>
                <li><button onClick={() => setCurrentPage('about')} className="hover:text-amber-400 transition-colors">عن الأكاديمية</button></li>
                <li><button onClick={() => setCurrentPage('contact')} className="hover:text-amber-400 transition-colors">تواصل معنا</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">الدورات</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-amber-400 transition-colors">أساسيات اللغة</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">النحو والصرف</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">البلاغة والأدب</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">الخط العربي</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">تواصل معنا</h4>
              <div className="space-y-2 text-gray-400">
                <p>info@arabic-academy.com</p>
                <p>+966 50 123 4567</p>
                <p>الرياض، المملكة العربية السعودية</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 الأكاديمية العربية. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  )

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'courses':
        return <Courses />
      case 'about':
        return <About />
      case 'contact':
        return <Contact />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderCurrentPage()}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App

