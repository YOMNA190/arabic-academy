import test from "node:test"
import assert from "node:assert/strict"
import { canIssueCertificate, createCertificatePreview, deriveCourseProgress, nextLearningAction } from "../src/lib/learningProgress.js"

const lessons = [{ id: "letters" }, { id: "words" }, { id: "grammar" }]

test("tracks partial progress and directs learner to remaining lessons", () => {
  const progress = deriveCourseProgress(lessons, ["letters"], 92)
  assert.equal(progress.lessonPercent, 33)
  assert.equal(progress.status, "in_progress")
  assert.equal(nextLearningAction(progress), "أكمل الدروس المتبقية")
})

test("requires full completion and passing assessment before certificate issuance", () => {
  const incomplete = deriveCourseProgress(lessons, ["letters", "words", "grammar"], 65)
  const complete = deriveCourseProgress(lessons, ["letters", "words", "grammar"], 84)
  assert.equal(canIssueCertificate(incomplete), false)
  assert.equal(canIssueCertificate(complete), true)
  assert.equal(nextLearningAction(complete), "حمّل شهادة الإتمام")
})

test("creates a clearly labelled certificate preview only for eligible progress", () => {
  const complete = deriveCourseProgress(lessons, ["letters", "words", "grammar"], 84)
  const preview = createCertificatePreview(complete, { learnerName: "الطالب التجريبي", courseTitle: "أساسيات العربية", issuedAt: "2026-08-23T00:00:00.000Z" })
  assert.equal(preview.reference, "DEMO-AR-20260823-3")
  assert.match(preview.disclaimer, /عرض تفاعلية/)
  assert.equal(createCertificatePreview(deriveCourseProgress(lessons, ["letters"], 100), { learnerName: "x", courseTitle: "y", issuedAt: "2026-08-23T00:00:00.000Z" }), null)
})
