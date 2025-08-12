---
title: AreAllAnimationsEnabled
sidebar_label: AreAllAnimationsEnabled
description: آیا انیمیشن‌های گم شده در برخی نسخه‌ها فعال هستند؟
tags: ["animation"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

آیا انیمیشن‌های گم شده در برخی نسخه‌ها فعال هستند؟

## مقدار بازگشتی

true: فعال.

false: غیرفعال.

## مثال‌ها

```c
if (AreAllAnimationsEnabled())
{
    // کاری انجام دهید
}
```

## توابع مرتبط

- [EnableAllAnimations](EnableAllAnimations): اجازه استفاده از انیمیشن‌های گم شده در برخی نسخه‌ها.
- [ApplyAnimation](ApplyAnimation): اعمال انیمیشن به بازیکن.
- [ClearAnimations](ClearAnimations): پاک کردن هرگونه انیمیشن که بازیکن اجرا می‌کند.

## منابع مرتبط

- [انیمیشن‌ها](../resources/animations)