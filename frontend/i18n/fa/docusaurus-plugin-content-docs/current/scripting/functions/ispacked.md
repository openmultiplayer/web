---
title: ispacked
sidebar_label: ispacked
description: چک می‌کنه که آیا رشته داده شده packed هست یا نه.
tags: ["string"]
---

<LowercaseNote />

## توضیحات

چک می‌کنه که آیا رشته داده شده packed هست یا نه.

| نام            | توضیحات                      |
| -------------- | ---------------------------- |
| const string[] | رشته‌ای که باید چک بشه.       |

## مقادیر برگشتی

**1** اگه رشته packed باشه، **0** اگه unpacked باشه.

## مثال‌ها

```c
// Create a packed string
new string[24 char];

if (ispacked(string))
{
   print("The string is packed.");
}
```

## توابع مرتبط

- [strpack](strpack): pack کردن یه رشته.
- [strunpack](strunpack): این تابع می‌تونه برای unpack کردن یه رشته استفاده بشه.