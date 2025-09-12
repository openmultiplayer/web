---
title: GetSVarString
sidebar_label: GetSVarString
description: مقدار یه متغیر سرور string رو دریافت می‌کنه.
tags: ["server variable", "svar"]
---

<VersionWarn version='SA-MP 0.3.7 R2' />

## توضیحات

مقدار یه متغیر سرور string رو دریافت می‌کنه.

| نام                  | توضیحات                                                                                          |
| --------------------- | ---------------------------------------------------------------------------------------------------- |
| const svar[]          | اسم متغیر سرور (case-insensitive).<br />تو [SetSVarString](SetSVarString) تعیین می‌شه. |
| output[]              | آرایه‌ای برای ذخیره مقدار string که به صورت reference پاس داده می‌شه.                                |
| len = sizeof (output) | حداکثر طول string برگردونده شده.                                                           |

## مقادیر برگشتی

طول string.

## مثال‌ها

```c
// set "Version"
SetSVarString("Version", "0.3.7");

// will print version that server has
new string[5 + 1];
GetSVarString("Version", string, sizeof(string));
printf("Version: %s", string);
```

## توابع مرتبط

- [SetSVarInt](SetSVarInt): تنظیم یه integer برای متغیر سرور.
- [GetSVarInt](GetSVarInt): دریافت یه متغیر سرور به صورت integer.
- [SetSVarString](SetSVarString): تنظیم یه string برای متغیر سرور.
- [SetSVarFloat](SetSVarFloat): تنظیم یه float برای متغیر سرور.
- [GetSVarFloat](GetSVarFloat): دریافت float قبلاً تنظیم شده از متغیر سرور.
- [DeleteSVar](DeleteSVar): حذف یه متغیر سرور.