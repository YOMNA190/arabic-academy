export function deriveCourseProgress(lessons, completedLessonIds, assessmentScore) {
  const totalLessons = lessons.length
  const completed = lessons.filter((lesson) => completedLessonIds.includes(lesson.id)).length
  const lessonPercent = totalLessons === 0 ? 0 : Math.round((completed / totalLessons) * 100)
  const assessmentPassed = typeof assessmentScore === "number" && assessmentScore >= 70

  return {
    totalLessons,
    completedLessons: completed,
    lessonPercent,
    assessmentPassed,
    status: completed === totalLessons && assessmentPassed ? "completed" : completed > 0 ? "in_progress" : "not_started",
  }
}

export function canIssueCertificate(progress) {
  return progress.totalLessons > 0 && progress.lessonPercent === 100 && progress.assessmentPassed
}

export function nextLearningAction(progress) {
  if (progress.status === "not_started") return "ابدأ الدرس الأول"
  if (progress.lessonPercent < 100) return "أكمل الدروس المتبقية"
  if (!progress.assessmentPassed) return "أعد التقييم النهائي"
  return "حمّل شهادة الإتمام"
}
