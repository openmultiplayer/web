---
title: strfloat
sidebar_label: strfloat
description: تبدیل یک رشته به عدد اعشاری.
tags: ["string", "floating-point"]
---

<VersionWarn version='omp v1.1.0.2612' />

<LowercaseNote />

## توضیحات

تبدیل یک رشته به عدد اعشاری.

| نام            | توضیحات                                  |
| -------------- | ---------------------------------------- |
| const string[] | رشته‌ای که باید به عدد اعشاری تبدیل شود. |

## مقدار بازگشتی

مقدار عدد اعشاری درخواستی.

## مثال‌ها

```c
new string[4] = "6.9"; // یک رشته که یک عدد اعشاری در خود دارد.

new Float:value = strfloat(string);

SetPlayerPos(playerid, 0.0, 0.0, value);
```

## نکات

:::tip

این تابع مشابه [floatstr](floatstr) است.

:::

## توابع مرتبط

- [floatround](floatround): تبدیل یک عدد اعشاری به عدد صحیح (گردکردن).
- [float](float): تبدیل یک عدد صحیح به عدد اعشاری.