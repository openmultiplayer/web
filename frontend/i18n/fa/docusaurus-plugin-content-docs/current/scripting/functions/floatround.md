---
title: floatround
sidebar_label: floatround
description: یک عدد اعشاری رو به عدد صحیح گرد می‌کنه.
tags: ["math", "floating-point"]
---

<LowercaseNote />

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

یک عدد اعشاری رو به عدد صحیح گرد می‌کنه.

| اسم                     | توضیح                                                                                     |
|--------------------------|------------------------------------------------------------------------------------------------|
| Float:value              | عددی که می‌خوای گردش کنی.                                                                             |
| floatround_method:method | حالت [floatround](../resources/floatroundmodes) که باید استفاده بشه.<br />پیش‌فرض: `floatround_round` |

## مقادیر برگشتی

عدد گرد شده به شکل عدد صحیح.

## مثال‌ها

</div>

```c
new value = floatround(3.3, floatround_ceil);
printf("3.3 rounded to %d", value); // 3.3 rounded to 4
```

<br />

```c
new value = floatround(50.996229);
printf("50.996229 rounded to %d", value); // 50.996229 rounded to 51
```

<br />

```c
new value = floatround(270.0034);
printf("270.0034 rounded to %d", value); // 270.0034 rounded to 270
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [float](float): تبدیل عدد صحیح به اعشاری.
- [floatstr](floatstr): تبدیل رشته به عدد اعشاری.

## منابع مرتبط

- [Floatround Modes](../resources/floatroundmodes)

</div>