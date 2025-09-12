---
title: SetSVarInt
sidebar_label: SetSVarInt
description: یه متغیر سرور از نوع عدد صحیح تنظیم می‌کنه.
tags: ["server variable", "svar"]
---

<VersionWarn version='SA-MP 0.3.7 R2' />

## توضیحات

یه متغیر سرور از نوع عدد صحیح تنظیم می‌کنه.

| نام          | توضیحات                      |
| ------------ | -------------------------------- |
| const svar[] | نام متغیر سرور. |
| value        | عدد صحیحی که باید تنظیم بشه.           |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناکام بود. نام متغیر null هست یا بیشتر از 40 کاراکتر داره.

## مثال‌ها

```c
// "Version" ro set kon
SetSVarInt("Version", 37);

// versioni ke server dare ro print mikone
printf("Version: %d", GetSVarInt("Version"));
```

## توابع مرتبط

- [GetSVarInt](GetSVarInt): متغیر سرور پلیر رو به صورت عدد صحیح دریافت می‌کنه.
- [SetSVarString](SetSVarString): یه رشته برای متغیر سرور تنظیم می‌کنه.
- [GetSVarString](GetSVarString): رشته‌ای که قبلاً از متغیر سرور تنظیم شده رو دریافت می‌کنه.
- [SetSVarFloat](SetSVarFloat): یه مقدار float برای متغیر سرور تنظیم می‌کنه.
- [GetSVarFloat](GetSVarFloat): مقدار float ای که قبلاً از متغیر سرور تنظیم شده رو دریافت می‌کنه.
- [DeleteSVar](DeleteSVar): یه متغیر سرور رو حذف می‌کنه.