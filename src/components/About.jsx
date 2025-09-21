import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Heart, 
  Target, 
  Users, 
  Award, 
  BookOpen, 
  Globe,
  Lightbulb,
  Star,
  Crown,
  Sparkles,
  Feather,
  Scroll
} from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "الشغف بالتعليم",
      description: "نؤمن بأن التعلم رحلة ممتعة ومثيرة، ونسعى لجعل كل لحظة تعليمية مليئة بالحماس والإلهام"
    },
    {
      icon: Target,
      title: "التميز والجودة",
      description: "نلتزم بتقديم أعلى معايير الجودة في المحتوى التعليمي والتجربة التفاعلية"
    },
    {
      icon: Users,
      title: "المجتمع التعليمي",
      description: "نبني مجتمعاً تعليمياً متفاعلاً يدعم كل طالب في رحلته لتعلم اللغة العربية"
    },
    {
      icon: Globe,
      title: "الوصول العالمي",
      description: "نسعى لنشر جمال اللغة العربية وثقافتها في جميع أنحاء العالم"
    }
  ]

  const team = [
    {
      name: "د. أحمد محمد الأستاذ",
      role: "مؤسس ومدير الأكاديمية",
      description: "دكتوراه في اللغة العربية وآدابها، خبرة 20 عاماً في التعليم",
      image: "/src/assets/arabic-calligraphy.jpg"
    },
    {
      name: "أ. فاطمة علي النحوي",
      role: "رئيسة قسم النحو والصرف",
      description: "ماجستير في النحو العربي، متخصصة في تبسيط قواعد النحو",
      image: "/src/assets/geometric-pattern.jpg"
    },
    {
      name: "د. عمر حسن البلاغي",
      role: "أستاذ البلاغة والأدب",
      description: "دكتوراه في البلاغة العربية، شاعر ومؤلف معروف",
      image: "/src/assets/islamic-pattern.jpg"
    }
  ]

  const achievements = [
    { icon: Users, number: "10,000+", label: "طالب متخرج" },
    { icon: BookOpen, number: "50+", label: "دورة تعليمية" },
    { icon: Award, number: "15", label: "جائزة تعليمية" },
    { icon: Globe, number: "25+", label: "دولة حول العالم" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-gradient-to-r from-amber-500 to-emerald-600 text-white px-4 py-2 mb-6">
              <Scroll className="w-4 h-4 mr-2" />
              عن الأكاديمية العربية
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              رسالتنا في خدمة اللغة العربية
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              نحن أكثر من مجرد منصة تعليمية. نحن حراس اللغة العربية وناشرو جمالها وثقافتها الغنية. 
              رسالتنا هي جعل تعلم اللغة العربية تجربة ممتعة ومثرية للجميع، من المبتدئين إلى المتقدمين.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-amber-200/50 shadow-xl">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-gray-800">رؤيتنا</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    أن نكون المنصة الرائدة عالمياً في تعليم اللغة العربية، ونساهم في نشر الثقافة العربية 
                    وتعزيز الهوية اللغوية للأجيال القادمة في جميع أنحاء العالم.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="h-full bg-white/80 backdrop-blur-sm border-emerald-200/50 shadow-xl">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-gray-800">رسالتنا</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    تقديم تعليم متميز ومبتكر للغة العربية باستخدام أحدث التقنيات التعليمية، 
                    وبناء مجتمع تعليمي متفاعل يحتفي بجمال اللغة العربية وثراء تراثها.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="bg-gradient-to-r from-amber-500 to-emerald-600 text-white px-4 py-2 mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              قيمنا الأساسية
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              ما نؤمن به
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              قيمنا هي البوصلة التي توجه كل ما نقوم به في الأكاديمية العربية
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-amber-200/50 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="bg-gradient-to-r from-amber-500 to-emerald-600 text-white px-4 py-2 mb-4">
              <Crown className="w-4 h-4 mr-2" />
              فريقنا المتميز
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              خبراء اللغة العربية
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              نخبة من أفضل المتخصصين في اللغة العربية وعلومها
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-amber-200/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl font-bold text-gray-800">
                      {member.name}
                    </CardTitle>
                    <p className="text-amber-600 font-medium">{member.role}</p>
                  </CardHeader>
                  
                  <CardContent className="text-center">
                    <p className="text-gray-600 leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="bg-gradient-to-r from-amber-500 to-emerald-600 text-white px-4 py-2 mb-4">
              <Award className="w-4 h-4 mr-2" />
              إنجازاتنا
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              أرقام تتحدث عن نفسها
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="bg-white/80 backdrop-blur-sm border-amber-200/50 shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-800 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {achievement.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-amber-500 to-emerald-600 text-white shadow-2xl border-0 p-12">
              <CardContent className="space-y-6">
                <Feather className="w-16 h-16 mx-auto mb-6" />
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  انضم إلى رحلتنا
                </h2>
                <p className="text-xl leading-relaxed mb-8">
                  كن جزءاً من مجتمعنا التعليمي المتنامي واكتشف جمال اللغة العربية معنا. 
                  رحلة التعلم تبدأ بخطوة واحدة.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-amber-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors">
                    ابدأ التعلم الآن
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-amber-600 transition-colors">
                    تواصل معنا
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About

