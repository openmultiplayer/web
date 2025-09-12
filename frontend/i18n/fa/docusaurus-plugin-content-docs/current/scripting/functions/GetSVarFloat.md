---
title: GetSVarFloat
sidebar_label: GetSVarFloat
description: مقدار یه متغیر سرور float رو دریافت می‌کنه.
tags: ["server variable", "svar"]
---

<VersionWarn version='SA-MP 0.3.7 R2' />

## توضیحات

مقدار یه متغیر سرور float رو دریافت می‌کنه.

| نام         | توضیحات                                                                                        |
| ------------ | -------------------------------------------------------------------------------------------------- |
| const svar[] | اسم متغیر سرور (case-insensitive).<br />تو [SetSVarFloat](SetSVarFloat) تعیین می‌شه. |

## مقادیر برگشتی

مقدار float متغیر سرور مشخص شده.

هنوز 0.0 برمی‌گردونه اگه متغیر تنظیم نشده باشه.

## مثال‌ها

```c
// set "Version"
SetSVarFloat("Version", 0.37);

// will print version that server has
printf("Version: %.2f", GetSVarFloat("Version"));
```

## توابع مرتبط

- [SetSVarInt](SetSVarInt): تنظیم یه integer برای متغیر سرور.
- [GetSVarInt](GetSVarInt): دریافت یه متغیر سرور به صورت integer.
- [SetSVarString](SetSVarString): تنظیم یه string برای متغیر سرور.
- [GetSVarString](GetSVarString): دریافت string قبلاً تنظیم شده از متغیر سرور.
- [SetSVarFloat](SetSVarFloat): تنظیم یه float برای متغیر سرور.
- [DeleteSVar](DeleteSVar): حذف یه متغیر سرور.