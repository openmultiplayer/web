---
title: SetSVarString
sidebar_label: SetSVarString
description: یه متغیر سرور از نوع رشته تنظیم می‌کنه.
tags: ["server variable", "svar"]
---

<VersionWarn version='SA-MP 0.3.7 R2' />

## توضیحات

یه متغیر سرور از نوع رشته تنظیم می‌کنه.

| نام              | توضیحات                                |
| ---------------- | ------------------------------------------ |
| const svar[]     | نام متغیر سرور.           |
| const value[]    | رشته‌ای که باید تنظیم بشه.                      |
| OPEN_MP_TAGS:... | تعداد نامحدودی آرگومان از هر tag ای. |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناکام بود. نام متغیر null هست یا بیشتر از 40 کاراکتر داره.

## مثال‌ها

```c
// "Version" ro set kon
SetSVarString("Version", "0.3.7");

// versioni ke server dare ro print mikone
new string[5 + 1];
GetSVarString("Version", string, sizeof(string));
printf("Version: %s", string);
```

## توابع مرتبط

- [SetSVarInt](SetSVarInt): یه عدد صحیح برای متغیر سرور تنظیم می‌کنه.
- [GetSVarInt](GetSVarInt): متغیر سرور پلیر رو به صورت عدد صحیح دریافت می‌کنه.
- [GetSVarString](GetSVarString): رشته‌ای که قبلاً از متغیر سرور تنظیم شده رو دریافت می‌کنه.
- [SetSVarFloat](SetSVarFloat): یه مقدار float برای متغیر سرور تنظیم می‌کنه.
- [GetSVarFloat](GetSVarFloat): مقدار float ای که قبلاً از متغیر سرور تنظیم شده رو دریافت می‌کنه.
- [DeleteSVar](DeleteSVar): یه متغیر سرور رو حذف می‌کنه.