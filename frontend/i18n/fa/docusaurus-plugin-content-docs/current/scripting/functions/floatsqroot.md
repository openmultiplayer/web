---
title: floatsqroot
sidebar_label: floatsqroot
description: جذر مربع مقدار داده شده رو محاسبه میکنه.
tags: ["math", "floating-point"]
---

<LowercaseNote />

## توضیحات

جذر مربع مقدار داده شده رو محاسبه میکنه.

| نام        | توضیحات                                |
| ----------- | ------------------------------------------ |
| Float:value | مقداری که جذر مربعش رو محاسبه میکنیم. |

## برگشتی

جذر مربع مقدار ورودی، به صورت float.

## مثال‌ها

```c
new Float:sqroot = floatsqroot(25.0); // برمیگردونه 5.0، چونکه 5x5 = 25
```

## نکات

:::tip

این تابع یک خطای "domain" میده اگر مقدار ورودی منفی باشه. میتونی از [floatabs](floatabs) استفاده کنی تا مقدار مطلق (مثبت) رو بگیری.

:::

## توابع مرتبط

- [floatpower](floatpower): رساندن یک مقدار به توان exponent.
- [floatlog](floatlog): گرفتن logarithm مقدار float.