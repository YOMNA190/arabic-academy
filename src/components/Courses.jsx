import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  BookOpen, 
  Clock, 
  Users, 
  Star, 
  Play, 
  Filter,
  Search,
  ChevronRight,
  Award,
  Target,
  Lightbulb
} from 'lucide-react'

const Courses = () => {
  const [selectedLevel, setSelectedLevel] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const courses = [
    {
      id: 1,
      title: "أساسيات اللغة العربية",
      description: "تعلم الحروف والكلمات الأساسية بطريقة تفاعلية ممتعة. هذه الدورة مصممة للمبتدئين الذين يريدون بناء أساس قوي في اللغة العربية.",
      level: "مبتدئ",
      duration: "8 أسابيع",
      students: 1250,
      rating: 4.9,
      price: "299 ريال",
      image: "/src/assets/arabic-calligraphy.jpg",
      lessons: 24,
      certificate: true,
      features: ["تعلم الحروف العربية", "الكلمات الأساسية", "النطق الصحيح", "تمارين تفاعلية"]
    },
    {
      id: 2,
      title: "النحو والصرف",
      description: "إتقان قواعد النحو والصرف العربي بأسلوب مبسط ومفهوم. دورة شاملة تغطي جميع جوانب النحو العربي.",
      level: "متوسط",
      duration: "12 أسبوع",
      students: 890,
      rating: 4.8,
      price: "499 ريال",
      image: "/src/assets/geometric-pattern.jpg",
      lessons: 36,
      certificate: true,
      features: ["قواعد النحو", "علم الصرف", "الإعراب", "التطبيق العملي"]
    },
    {
      id: 3,
      title: "البلاغة والأدب",
      description: "استكشاف جمال البلاغة العربية والأدب الكلاسيكي. رحلة في عالم الشعر والنثر العربي الأصيل.",
      level: "متقدم",
      duration: "16 أسبوع",
      students: 650,
      rating: 4.9,
      price: "699 ريال",
      image: "/src/assets/islamic-pattern.jpg",
      lessons: 48,
      certificate: true,
      features: ["علم البلاغة", "الشعر العربي", "النثر الأدبي", "التحليل الأدبي"]
    },
    {
      id: 4,
      title: "الخط العربي",
      description: "تعلم فن الخط العربي الجميل بأنواعه المختلفة. من الخط الكوفي إلى خط النسخ والثلث.",
      level: "متوسط",
      duration: "10 أسابيع",
      students: 420,
      rating: 4.7,
      price: "399 ريال",
      image: "/src/assets/arabic-calligraphy.jpg",
      lessons: 30,
      certificate: true,
      features: ["خط النسخ", "الخط الكوفي", "خط الثلث", "التطبيق العملي"]
    },
    {
      id: 5,
      title: "القرآن الكريم وعلومه",
      description: "دراسة القرآن الكريم وعلومه المختلفة. تعلم التجويد والتفسير وأسباب النزول.",
      level: "متقدم",
      duration: "20 أسبوع",
      students: 780,
      rating: 4.9,
      price: "799 ريال",
      image: "/src/assets/islamic-pattern.jpg",
      lessons: 60,
      certificate: true,
      features: ["علم التجويد", "التفسير", "أسباب النزول", "علوم القرآن"]
    },
    {
      id: 6,
      title: "اللهجات العربية",
      description: "استكشاف تنوع اللهجات العربية عبر الوطن العربي. فهم الاختلافات والتشابهات بين اللهجات.",
      level: "متوسط",
      duration: "6 أسابيع",
      students: 320,
      rating: 4.6,
      price: "249 ريال",
      image: "/src/assets/geometric-pattern.jpg",
      lessons: 18,
      certificate: true,
      features: ["اللهجة المصرية", "اللهجة الشامية", "اللهجة الخليجية", "اللهجة المغربية"]
    }
  ]

  const levels = ['all', 'مبتدئ', 'متوسط', 'متقدم']

  const filteredCourses = courses.filter(course => {
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesLevel && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50">
      {/* Header */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-gradient-to-r from-amber-500 to-emerald-600 text-white px-4 py-2 mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              دوراتنا التعليمية
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              اختر دورتك المثالية
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              مجموعة شاملة من الدورات التعليمية المصممة بعناية لتناسب جميع المستويات والاهتمامات في اللغة العربية
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-amber-200/50"
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="ابحث عن دورة..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pr-12 pl-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              {/* Level Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="text-gray-600 font-medium">المستوى:</span>
                <div className="flex gap-2">
                  {levels.map((level) => (
                    <Button
                      key={level}
                      variant={selectedLevel === level ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedLevel(level)}
                      className={selectedLevel === level 
                        ? "bg-gradient-to-r from-amber-500 to-emerald-600 text-white" 
                        : "border-amber-300 text-amber-700 hover:bg-amber-50"
                      }
                    >
                      {level === 'all' ? 'الكل' : level}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full bg-white/90 backdrop-blur-sm border-amber-200/50 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
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
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-amber-500 to-emerald-600 text-white">
                        {course.price}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 leading-relaxed line-clamp-3">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Course Stats */}
                    <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-1" />
                        {course.lessons} درس
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {course.students}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800 text-sm">ما ستتعلمه:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {course.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-600">
                            <Target className="w-3 h-3 mr-1 text-emerald-500" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Rating and Certificate */}
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
                      
                      {course.certificate && (
                        <div className="flex items-center text-xs text-emerald-600">
                          <Award className="w-4 h-4 mr-1" />
                          شهادة معتمدة
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-2">
                      <Button 
                        className="flex-1 bg-gradient-to-r from-amber-500 to-emerald-600 hover:from-amber-600 hover:to-emerald-700 text-white"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        ابدأ الآن
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-amber-300 text-amber-700 hover:bg-amber-50"
                      >
                        تفاصيل
                        <ChevronRight className="w-4 h-4 mr-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Lightbulb className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">لم نجد دورات مطابقة</h3>
              <p className="text-gray-500">جرب تغيير معايير البحث أو المستوى</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Courses

