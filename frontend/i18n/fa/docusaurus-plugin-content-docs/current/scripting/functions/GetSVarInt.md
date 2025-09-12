---
title: GetSVarInt
sidebar_label: GetSVarInt
description: مقدار یه متغیر سرور integer رو دریافت می‌کنه.
tags: ["server variable", "svar"]
---

<VersionWarn version='SA-MP 0.3.7 R2' />

## توضیحات

مقدار یه متغیر سرور integer رو دریافت می‌کنه.

| نام         | توضیحات                                                                                    |
| ------------ | ---------------------------------------------------------------------------------------------- |
| const svar[] | اسم متغیر سرور (case-insensitive).<br />تو [SetSVarInt](SetSVarInt) تعیین می‌شه. |

## مقادیر برگشتی

مقدار integer متغیر سرور مشخص شده.

هنوز 0 برمی‌گردونه اگه متغیر تنظیم نشده باشه.

## مثال‌ها

```c
// set "Version"
SetSVarInt("Version", 37);

// will print version that server has
printf("Version: %d", GetSVarInt("Version"));
```

## توابع مرتبط

- [SetSVarInt](SetSVarInt): تنظیم یه integer برای متغیر سرور.
- [SetSVarString](SetSVarString): تنظیم یه string برای متغیر سرور.
- [GetSVarString](GetSVarString): دریافت string قبلاً تنظیم شده از متغیر سرور.
- [SetSVarFloat](SetSVarFloat): تنظیم یه float برای متغیر سرور.
- [GetSVarFloat](GetSVarFloat): دریافت float قبلاً تنظیم شده از متغیر سرور.
- [DeleteSVar](DeleteSVar): حذف یه متغیر سرور.