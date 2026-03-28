# استضافة إضافة FaselHD Stremio على Render.com

دليل شامل لاستضافة الإضافة على Render.com المجاني (أفضل من Vercel للـ APIs).

## المميزات على Render.com

✅ **مجاني تماماً** - Free tier قوي  
✅ **يدعم Node.js APIs** - أفضل من Vercel  
✅ **HTTPS تلقائي** - شهادة SSL مجانية  
✅ **سهل الاستخدام** - واجهة بسيطة  
✅ **لا يحتاج قاعدة بيانات** - الإضافة لا تحتاجها  

---

## الخطوة 1: إنشاء حساب Render.com

1. اذهب إلى **https://render.com**
2. اضغط **Sign Up**
3. اختر **Sign up with GitHub**
4. وافق على الأذونات

---

## الخطوة 2: ربط المستودع

1. بعد تسجيل الدخول، اضغط **New +** → **Web Service**
2. اختر **Connect a repository**
3. ابحث عن `faselhd-stremio-addon`
4. اضغط **Connect**

---

## الخطوة 3: التكوين

في صفحة التكوين، تأكد من:

| الخيار | القيمة |
|--------|--------|
| **Name** | faselhd-stremio-addon |
| **Environment** | Node |
| **Region** | (اختر الأقرب لك) |
| **Branch** | main |
| **Build Command** | `pnpm install && pnpm build` |
| **Start Command** | `pnpm start` |
| **Plan** | Free |

---

## الخطوة 4: متغيرات البيئة

اضغط **Add Environment Variable**:

| المتغير | القيمة |
|---------|--------|
| NODE_ENV | production |

(الإضافة لا تحتاج متغيرات أخرى)

---

## الخطوة 5: النشر

1. اضغط **Create Web Service**
2. انتظر البناء (قد يأخذ 3-5 دقائق)
3. ستحصل على رابط مثل: `https://faselhd-stremio-addon-xxxxx.onrender.com`

---

## الخطوة 6: التحقق من الاستضافة

### اختبر الـ Manifest

افتح هذا الرابط في المتصفح:
```
https://YOUR_RENDER_URL/api/stremio/manifest.json
```

يجب أن ترى JSON مثل:
```json
{
  "id": "org.faselhd.stremio",
  "version": "1.0.0",
  "name": "FaselHD Stremio Addon",
  ...
}
```

### اختبر Stream Endpoint

```
https://YOUR_RENDER_URL/api/stremio/stream/movie/tt1254207.json
```

---

## الخطوة 7: تثبيت في Stremio

### رابط الإضافة

```
https://YOUR_RENDER_URL/api/stremio/manifest.json
```

### التثبيت على iPhone

1. افتح **Stremio**
2. اذهب إلى **Add-ons** (الإضافات)
3. اضغط **Discover** (استكشف)
4. ابحث عن **+** أو **Add**
5. الصق الرابط أعلاه
6. اضغط **Install**

---

## استكشاف الأخطاء

### الخطأ: 404 Not Found

**الحل:**
- تأكد من أن البناء نجح (اضغط على Logs)
- تحقق من أن الرابط صحيح
- أعد البناء: اضغط **Manual Deploy**

### الخطأ: Build Failed

**الحل:**
1. اضغط على **Logs** لرؤية الخطأ
2. تأكد من أن `package.json` موجود
3. تأكد من أن جميع الملفات رُفعت على GitHub

### الإضافة بطيئة

**الحل:**
- Render قد تأخذ وقت أطول في الطلب الأول
- الطلبات اللاحقة ستكون أسرع
- إذا استمرت البطء، قد تحتاج لـ Render Pro

---

## التحديثات المستقبلية

### لتحديث الإضافة:

1. عدّل الملفات محلياً
2. اضغط على GitHub:
   ```bash
   git add .
   git commit -m "Update description"
   git push
   ```
3. Render سيعيد البناء تلقائياً

---

## ملاحظات مهمة

- ✅ الإضافة **مجانية تماماً** على Render
- ✅ لا تحتاج **قاعدة بيانات**
- ✅ تدعم **HTTPS تلقائياً**
- ✅ تحديثات **تلقائية** من GitHub
- ⚠️ قد تكون بطيئة قليلاً في الطلب الأول (Cold Start)
- ⚠️ Render قد توقف الخدمة إذا لم تُستخدم لفترة طويلة (يمكن إعادة تفعيلها)

---

## الدعم والمساعدة

إذا واجهت مشاكل:

1. تحقق من **Logs**: Dashboard → Service → Logs
2. تحقق من **Browser Console**: F12 في المتصفح
3. تأكد من أن **GitHub Repository** محدث

---

## الخطوات التالية

بعد الاستضافة الناجحة:

1. **ثبّت الإضافة** في Stremio
2. **اختبر البث** مع أفلام مختلفة
3. **شارك الرابط** مع أصدقائك!

---

**نسخة الدليل:** 1.0  
**آخر تحديث:** مارس 2026  
**الحالة:** جاهز للإنتاج
