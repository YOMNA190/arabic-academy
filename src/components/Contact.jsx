import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  CheckCircle
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      content: "info@arabic-academy.com",
      description: "راسلنا في أي وقت"
    },
    {
      icon: Phone,
      title: "الهاتف",
      content: "+966 50 123 4567",
      description: "متاح من 9 صباحاً إلى 6 مساءً"
    },
    {
      icon: MapPin,
      title: "العنوان",
      content: "الرياض، المملكة العربية السعودية",
      description: "مقرنا الرئيسي"
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      content: "الأحد - الخميس: 9:00 - 18:00",
      description: "الجمعة والسبت: مغلق"
    }
  ]

  const socialLinks = [
    { icon: Facebook, name: "Facebook", color: "text-blue-600" },
    { icon: Twitter, name: "Twitter", color: "text-sky-500" },
    { icon: Instagram, name: "Instagram", color: "text-pink-600" },
    { icon: Youtube, name: "YouTube", color: "text-red-600" }
  ]

  const faqs = [
    {
      question: "كيف يمكنني التسجيل في الدورات؟",
      answer: "يمكنك التسجيل بسهولة من خلال إنشاء حساب جديد واختيار الدورة المناسبة لمستواك."
    },
    {
      question: "هل تقدمون شهادات معتمدة؟",
      answer: "نعم، نقدم شهادات معتمدة لجميع الدورات عند إتمامها بنجاح."
    },
    {
      question: "ما هي طرق الدفع المتاحة؟",
      answer: "نقبل جميع طرق الدفع الإلكتروني المتاحة في المنطقة العربية."
    },
    {
      question: "هل يمكنني الوصول للدورات من الهاتف؟",
      answer: "بالطبع، منصتنا متوافقة مع جميع الأجهزة الذكية والحاسوب."
    }
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
              <MessageCircle className="w-4 h-4 mr-2" />
              تواصل معنا
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              نحن هنا لمساعدتك
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              لديك سؤال أو استفسار؟ فريقنا جاهز للإجابة على جميع أسئلتك ومساعدتك في رحلتك التعليمية
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-amber-200/50 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-800">
                      {info.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-gray-800 mb-2">{info.content}</p>
                    <p className="text-sm text-gray-600">{info.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-white/80 backdrop-blur-sm border-amber-200/50 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-800 text-center">
                    أرسل لنا رسالة
                  </CardTitle>
                  <p className="text-gray-600 text-center">
                    سنرد عليك في أقرب وقت ممكن
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-800 mb-2">تم إرسال رسالتك بنجاح!</h3>
                      <p className="text-gray-600">سنتواصل معك قريباً</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            الاسم الكامل
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                            placeholder="أدخل اسمك الكامل"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            البريد الإلكتروني
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          الموضوع
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          placeholder="موضوع الرسالة"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          الرسالة
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                          placeholder="اكتب رسالتك هنا..."
                        />
                      </div>
                      
                      <Button 
                        type="submit"
                        className="w-full bg-gradient-to-r from-amber-500 to-emerald-600 hover:from-amber-600 hover:to-emerald-700 text-white py-3"
                      >
                        <Send className="w-5 h-5 mr-2" />
                        إرسال الرسالة
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Map & Social */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <Card className="bg-white/80 backdrop-blur-sm border-amber-200/50 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-800 text-center">
                    موقعنا
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gradient-to-br from-amber-100 to-emerald-100 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                      <p className="text-gray-700 font-medium">الرياض، المملكة العربية السعودية</p>
                      <p className="text-sm text-gray-600 mt-2">خريطة تفاعلية قريباً</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="bg-white/80 backdrop-blur-sm border-amber-200/50 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-800 text-center">
                    تابعنا على وسائل التواصل
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social) => (
                      <motion.button
                        key={social.name}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center p-4 border border-amber-200 rounded-xl hover:bg-amber-50 transition-colors"
                      >
                        <social.icon className={`w-6 h-6 ${social.color} mr-2`} />
                        <span className="font-medium text-gray-700">{social.name}</span>
                      </motion.button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Badge className="bg-gradient-to-r from-amber-500 to-emerald-600 text-white px-4 py-2 mb-4">
              <Globe className="w-4 h-4 mr-2" />
              الأسئلة الشائعة
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              أسئلة يكثر طرحها
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-amber-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg font-bold text-gray-800">
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
