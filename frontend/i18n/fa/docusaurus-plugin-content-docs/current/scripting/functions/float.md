---
title: float
sidebar_label: float
description: تبدیل عدد صحیح به اعشاری.
tags: ["floating-point"]
---

<LowercaseNote />

## توضیحات

تبدیل عدد صحیح به اعشاری.

| نام   | توضیحات                           |
| ----- | --------------------------------- |
| value | مقدار صحیح برای تبدیل به اعشاری  |

## برگشتی

عدد صحیح داده شده به صورت اعشاری

## مثال‌ها

```c
new Float:FloatValue;
new Value = 52;
FloatValue = float(Value);   // تبدیل Value(52) به اعشاری و ذخیره‌ش در 'FloatValue' (52.0)
```

## توابع مرتبط

- [floatround](floatround): تبدیل عدد اعشاری به صحیح (گرد کردن).
- [floatstr](floatstr): تبدیل رشته به عدد اعشاری.