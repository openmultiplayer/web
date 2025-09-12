---
title: valstr
sidebar_label: valstr
description: تبدیل یک عدد صحیح به رشته.
tags: ["string"]
---

<LowercaseNote />

## توضیحات

تبدیل یک عدد صحیح به رشته.

| نام               | توضیحات                                         |
| ----------------- | ----------------------------------------------- |
| dest              | مقصد رشته.                                      |
| value             | مقداری که باید به رشته تبدیل شود.                 |
| pack *(اختیاری)*   | آیا مقصد بسته‌بندی شود (به طور پیش‌فرض خاموش). |

## مقدار بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گرداند.

## مثال‌ها

```c
new string[4];
new value = 250;
valstr(string, value); // رشته حالا "250" است
```

## نکات

:::warning

ارسال مقدار بالا به این تابع می‌تواند باعث فریز/کرش سرور شود. راه‌حل‌هایی موجود است. در زیر راه‌حلی است که می‌تواند مستقیماً در اسکریپت شما قرار گیرد (قبل از اینکه valstr در جایی استفاده شود). [fixes.inc](https://github.com/pawn-lang/sa-mp-fixes) این راه‌حل را شامل می‌شود.

```c
// راه‌حل valstr توسط Slice
stock FIX_valstr(dest[], value, bool:pack = false)
{
    // format نمی‌تواند cellmin را به درستی مدیریت کند
    static const cellmin_value[] = !"-2147483648";

    if (value == cellmin)
        pack && strpack(dest, cellmin_value, 12) || strunpack(dest, cellmin_value, 12);
    else
        format(dest, 12, "%d", value), pack && strpack(dest, dest, 12);
}
#define valstr FIX_valstr
```

:::

## توابع مرتبط

- [strval](strval): تبدیل یک رشته به عدد صحیح.
- [strcmp](strcmp): مقایسه دو رشته برای بررسی اینکه آیا یکسان هستند.