# دليل سريع: استضافة على Render.com (5 دقائق)

## الخطوات السريعة

### 1️⃣ أنشئ حساب Render
- اذهب إلى https://render.com
- اضغط **Sign Up** واختر **GitHub**
- وافق على الأذونات

### 2️⃣ ربط المستودع
- اضغط **New +** → **Web Service**
- اختر **Connect a repository**
- ابحث عن `faselhd-stremio-addon`
- اضغط **Connect**

### 3️⃣ التكوين
- **Build Command:** `pnpm install && pnpm build`
- **Start Command:** `pnpm start`
- **Plan:** Free
- **Environment:** Node
- اضغط **Create Web Service**

### 4️⃣ انتظر 3-5 دقائق ✅

## الرابط النهائي
```
https://YOUR_RENDER_URL/api/stremio/manifest.json
```

## تثبيت في Stremio (iPhone)
1. افتح Stremio
2. Add-ons → Discover → +
3. الصق الرابط أعلاه
4. اضغط Install

---

للتفاصيل الكاملة، اقرأ `RENDER_DEPLOYMENT.md`
