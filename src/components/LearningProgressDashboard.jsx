import { useMemo, useState } from 'react'
import { Award, BookOpen, CheckCircle2, ClipboardCheck, GraduationCap, ShieldCheck, Users } from 'lucide-react'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { canIssueCertificate, createCertificatePreview, deriveCourseProgress, nextLearningAction } from '../lib/learningProgress.js'

const courseLessons = [
  { id: 'letters', title: 'الحروف ومخارجها', duration: '18 دقيقة' },
  { id: 'words', title: 'بناء الكلمات', duration: '24 دقيقة' },
  { id: 'grammar', title: 'جملة عربية سليمة', duration: '31 دقيقة' },
]

const roles = [
  { id: 'student', label: 'الطالب', icon: GraduationCap, detail: 'يتابع الدروس، يحل التقييم ويعرف الخطوة التالية.' },
  { id: 'teacher', label: 'المدرّس', icon: Users, detail: 'يراجع تقدم المجموعة ويحدد الطلاب الذين يحتاجون متابعة.' },
  { id: 'admin', label: 'الإدارة', icon: ShieldCheck, detail: 'تضبط المسارات ومعيار النجاح وسياسة إصدار الشهادة.' },
]

export default function LearningProgressDashboard() {
  const [completedLessonIds, setCompletedLessonIds] = useState(['letters'])
  const [assessmentScore, setAssessmentScore] = useState(62)
  const [activeRole, setActiveRole] = useState('student')
  const [certificate, setCertificate] = useState(null)

  const progress = useMemo(
    () => deriveCourseProgress(courseLessons, completedLessonIds, assessmentScore),
    [completedLessonIds, assessmentScore],
  )
  const certificateEligible = canIssueCertificate(progress)
  const selectedRole = roles.find((role) => role.id === activeRole)
  const roleMessage = activeRole === 'teacher'
    ? (progress.assessmentPassed ? `الطالب اجتاز التقييم، ويتبقى ${progress.totalLessons - progress.completedLessons} درس للمراجعة.` : 'أولوية المتابعة: مراجعة التقييم قبل اعتماد الإتمام.')
    : activeRole === 'admin'
      ? `سياسة العرض الحالية: ${progress.totalLessons} دروس مكتملة ودرجة 70% على الأقل قبل إنشاء المعاينة.`
      : nextLearningAction(progress)

  function toggleLesson(lessonId) {
    setCertificate(null)
    setCompletedLessonIds((current) =>
      current.includes(lessonId) ? current.filter((id) => id !== lessonId) : [...current, lessonId],
    )
  }

  function issueCertificate() {
    const preview = createCertificatePreview(progress, { learnerName: 'الطالب التجريبي', courseTitle: 'أساسيات اللغة العربية', issuedAt: '2026-08-23T00:00:00.000Z' })
    setCertificate(preview)
  }

  return (
    <main dir="rtl" className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <Badge className="bg-amber-100 text-amber-900 border border-amber-200 mb-5">نموذج واجهة تفاعلي ببيانات عرض — لا يمثل سجل طالب حقيقي</Badge>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-3 text-emerald-700 mb-3"><BookOpen className="w-6 h-6" /><span className="font-semibold">Learning Operations</span></div>
              <h1 className="text-4xl font-black text-slate-900">لوحة تقدّم الطالب</h1>
              <p className="text-slate-600 mt-3 max-w-2xl leading-7">تجربة منتج توضح قرار الانتقال بين الدروس، تقييم الاستيعاب، وأهلية إصدار شهادة إتمام من دون ادعاء وجود بيانات تشغيلية حقيقية.</p>
            </div>
            <div className="grid grid-cols-3 gap-2 bg-white/80 border border-amber-100 p-2 rounded-2xl shadow-sm">
              {roles.map((role) => {
                const Icon = role.icon
                return <button key={role.id} onClick={() => setActiveRole(role.id)} className={`rounded-xl px-3 py-3 text-sm font-bold transition ${activeRole === role.id ? 'bg-emerald-700 text-white shadow-md' : 'text-slate-600 hover:bg-amber-50'}`}><Icon className="w-4 h-4 mx-auto mb-1" />{role.label}</button>
              })}
            </div>
          </div>

          <Card className="border-emerald-100 shadow-sm bg-white/90 mb-7">
            <CardContent className="p-6 flex gap-4 items-start">
              <selectedRole.icon className="w-6 h-6 text-emerald-700 mt-0.5 shrink-0" />
              <div><p className="font-bold text-slate-900">عرض {selectedRole.label}</p><p className="text-slate-600 mt-1">{selectedRole.detail}</p><p className="text-sm font-bold text-emerald-800 mt-3">قرار الدور الحالي: {roleMessage}</p></div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-7">
            <Card className="border-amber-100 shadow-sm bg-white/90">
              <CardHeader>
                <div className="flex items-start justify-between gap-5"><div><CardTitle className="text-2xl text-slate-900">أساسيات اللغة العربية</CardTitle><CardDescription className="mt-2">3 دروس · تقييم نهائي بدرجة نجاح 70%</CardDescription></div><Badge className="bg-emerald-50 text-emerald-800">{progress.status === 'completed' ? 'مكتمل' : progress.status === 'in_progress' ? 'قيد التعلّم' : 'لم يبدأ'}</Badge></div>
              </CardHeader>
              <CardContent className="space-y-4">
                {courseLessons.map((lesson, index) => {
                  const completed = completedLessonIds.includes(lesson.id)
                  return <button key={lesson.id} onClick={() => toggleLesson(lesson.id)} className={`w-full text-right flex items-center justify-between gap-4 rounded-2xl border p-4 transition ${completed ? 'border-emerald-200 bg-emerald-50/70' : 'border-slate-200 hover:border-amber-300 hover:bg-amber-50/40'}`}>
                    <span className="flex items-center gap-3"><span className={`grid place-items-center h-8 w-8 rounded-full font-bold ${completed ? 'bg-emerald-700 text-white' : 'bg-slate-100 text-slate-500'}`}>{completed ? <CheckCircle2 className="w-5 h-5" /> : index + 1}</span><span><span className="block font-bold text-slate-800">{lesson.title}</span><span className="text-sm text-slate-500">{lesson.duration}</span></span></span>
                    <span className="text-sm font-semibold text-slate-500">{completed ? 'مكتمل' : 'علّم كمكتمل'}</span>
                  </button>
                })}
              </CardContent>
            </Card>

            <div className="space-y-7">
              <Card className="border-amber-100 shadow-sm bg-white/90"><CardContent className="p-6"><p className="text-sm font-bold text-slate-500">تقدّم الدروس</p><p className="text-5xl font-black text-slate-900 mt-3">{progress.lessonPercent}<span className="text-xl text-slate-400">%</span></p><div className="h-3 rounded-full bg-slate-100 mt-5 overflow-hidden"><div className="h-full bg-gradient-to-l from-emerald-700 to-emerald-400 transition-all" style={{ width: `${progress.lessonPercent}%` }} /></div><p className="text-sm text-slate-600 mt-4">{progress.completedLessons} من {progress.totalLessons} دروس مكتملة</p></CardContent></Card>
              <Card className="border-amber-100 shadow-sm bg-white/90"><CardContent className="p-6"><div className="flex justify-between items-center gap-3"><div><p className="text-sm font-bold text-slate-500">التقييم النهائي</p><p className="text-3xl font-black text-slate-900 mt-2">{assessmentScore}<span className="text-base text-slate-400"> / 100</span></p></div><ClipboardCheck className="w-8 h-8 text-amber-600" /></div><input aria-label="درجة التقييم النهائي" type="range" min="0" max="100" value={assessmentScore} onChange={(event) => setAssessmentScore(Number(event.target.value))} className="w-full mt-5 accent-emerald-700" /><p className={`text-sm mt-3 font-semibold ${progress.assessmentPassed ? 'text-emerald-700' : 'text-amber-700'}`}>{progress.assessmentPassed ? 'اجتاز معيار التقييم.' : 'يتطلب 70% على الأقل لاجتياز التقييم.'}</p></CardContent></Card>
              <Card className={`shadow-sm ${certificateEligible ? 'border-emerald-200 bg-emerald-50' : 'border-slate-200 bg-white'}`}><CardContent className="p-6"><Award className={`w-8 h-8 ${certificateEligible ? 'text-emerald-700' : 'text-slate-400'}`} /><p className="font-black text-lg text-slate-900 mt-3">{nextLearningAction(progress)}</p><p className="text-sm text-slate-600 mt-2">{certificateEligible ? 'تستوفي الدروس والتقييم شروط إصدار معاينة شهادة الإتمام.' : 'تُنشأ المعاينة فقط بعد استكمال جميع الدروس واجتياز التقييم.'}</p><Button disabled={!certificateEligible} onClick={issueCertificate} className="w-full mt-5 bg-emerald-700 hover:bg-emerald-800">إصدار معاينة شهادة</Button>{certificate && <div className="mt-4 rounded-xl border border-emerald-200 bg-white p-4 text-sm"><p className="font-bold text-emerald-800">تم إنشاء معاينة الشهادة</p><p className="mt-2 text-slate-700">{certificate.learnerName} · {certificate.courseTitle}</p><p className="font-mono text-xs text-slate-500 mt-1">{certificate.reference}</p><p className="text-xs text-amber-800 mt-3">{certificate.disclaimer}</p></div>}</CardContent></Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
