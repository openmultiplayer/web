---
title: SetSVarFloat
sidebar_label: SetSVarFloat
description: یه متغیر سرور از نوع float تنظیم می‌کنه.
tags: ["server variable", "svar"]
---

<VersionWarn version='SA-MP 0.3.7 R2' />

## توضیحات

یه متغیر سرور از نوع float تنظیم می‌کنه.

| نام          | توضیحات                      |
| ------------ | -------------------------------- |
| const svar[] | نام متغیر سرور. |
| Float:value  | مقدار float ای که باید تنظیم بشه.             |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناکام بود. نام متغیر null هست یا بیشتر از 40 کاراکتر داره.

## مثال‌ها

```c
// "Version" ro set kon
SetSVarFloat("Version", 0.37);

// versioni ke server dare ro print mikone
printf("Version: %.2f", GetSVarFloat("Version"));
```

## توابع مرتبط

- [SetSVarInt](SetSVarInt): یه عدد صحیح برای متغیر سرور تنظیم می‌کنه.
- [GetSVarInt](GetSVarInt): متغیر سرور پلیر رو به صورت عدد صحیح دریافت می‌کنه.
- [SetSVarString](SetSVarString): یه رشته برای متغیر سرور تنظیم می‌کنه.
- [GetSVarString](GetSVarString): رشته‌ای که قبلاً از متغیر سرور تنظیم شده رو دریافت می‌کنه.
- [GetSVarFloat](GetSVarFloat): مقدار float ای که قبلاً از متغیر سرور تنظیم شده رو دریافت می‌کنه.
- [DeleteSVar](DeleteSVar): یه متغیر سرور رو حذف می‌کنه.