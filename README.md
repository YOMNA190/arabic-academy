# Arabic Academy

واجهة تعليمية عربية أولاً تستعرض رحلة تعلم منظمة، من الدرس والتقدّم إلى التقييم وأهلية إصدار الشهادة.

## Overview

مشروع واجهة منتج تفاعلي مبني بـReact وVite وJavaScript. يركّز على تجربة تعلم RTL منظمة وقابلة للفهم، مع عرض صريح للحدود الحالية بدلاً من ادعاء تشغيل إنتاجي أو بيانات طلاب حقيقية.

## Highlights

- **لوحة تقدّم طالب تفاعلية:** استكمال الدروس، نسبة التقدّم، والخطوة التالية.
- **محرك تقدّم قابل للاختبار:** يحتسب الاستكمال، حالة المسار، اجتياز التقييم، وأهلية الشهادة، وينشئ معاينة شهادة مرمزة عند تحقق الشروط.
- **تجربة أدوار:** حالات عرض للطالب والمدرّس والإدارة توضّح قرار كل دور في دورة التعلم وفق التقدم ونتيجة التقييم.
- **واجهة عربية RTL متجاوبة** مع حالات واضحة للوصول إلى الهدف التالي.
- **سلامة المحتوى:** لا توجد تقييمات أو شهادات أو أرقام مستخدمين مختلقة؛ لوحة التقدّم تستخدم بيانات عرض فقط.

## Tech stack

React, JavaScript, Vite, Tailwind CSS, Framer Motion, ESLint, Node test runner

## Getting started

```bash
npm install
npm run dev
```

Open the local URL shown by the development server. For a production build:

```bash
npm run build
npm run preview
```

## Available scripts

| Script | Command |
|---|---|
| `dev` | `vite` |
| `build` | `vite build` |
| `lint` | `eslint .` |
| `test` | `node --test` |
| `preview` | `vite preview` |

## Learning operations case study

تجسّد لوحة التقدّم منطقاً محدوداً لكن فعلياً داخل المتصفح:

| قرار المنتج | التنفيذ الحالي | معيار التحقق |
|---|---|---|
| متى يعد المسار مكتملًا؟ | اكتمال جميع الدروس واجتياز التقييم بدرجة 70% أو أعلى | اختبار `canIssueCertificate` |
| ما هي الخطوة التالية؟ | يحددها المحرك بحسب حالة الدروس ونتيجة التقييم | اختبار `nextLearningAction` |
| من يرى ماذا؟ | حالات واجهة للطالب والمدرّس والإدارة مع قرار دور مشتق من تقدّم الطالب ونتيجته | أزرار أدوار تفاعلية وحالة قرار متغيرة |
| هل تصدر شهادة حقيقية؟ | لا؛ ينشئ الزر معاينة مرمزة بوضوح كـ`DEMO` ولا ينشئ وثيقة أو سجلاً دائماً | اختبار `createCertificatePreview` ورسالة حد داخل الواجهة |

> **حدود المشروع الحالية:** هذه ليست منصة LMS متصلة بقاعدة بيانات أو نظام دخول أو سجل شهادات. وهي دراسة منتج front-end توثق دورة تقدّم قابلة للاختبار، ويمكن توسيعها لاحقاً بخدمات حسابات، محتوى، ومحاولات تقييم محفوظة.

## Project structure

The application code lives in `src/`, static assets are served from `public/`, and the project configuration is kept at the repository root.

## Environment variables

Do not commit credentials or production secrets. Copy the example environment file when one is provided and keep local secrets in `.env.local`.

## Status

هذا المستودع جزء من بورتفوليو Yomna Ali. آخر تحقق محلي موثق: `npm run lint` (دون أخطاء، مع ستة تحذيرات Fast Refresh من مكونات واجهة مولدة)، و`npm test` (ثلاثة اختبارات ناجحة)، و`npm run build` ناجح.

## Author

**Yomna Ali** — Frontend Developer and Digital Experience Builder
[GitHub](https://github.com/YOMNA190)
