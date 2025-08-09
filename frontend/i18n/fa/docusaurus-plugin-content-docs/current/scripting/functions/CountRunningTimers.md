---
title: CountRunningTimers
sidebar_label: CountRunningTimers
description: دریافت تایمرهای در حال اجرا.
tags: ["timer"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

دریافت تایمرهای در حال اجرا. ([SetTimer](SetTimer) & [SetTimerEx](SetTimerEx))

## مقادیر بازگشتی

مقدار تعداد تایمرهای در حال اجرا را برمی‌گرداند.

## مثال‌ها

```c
printf("Running timers: %d", CountRunningTimers()); // تایمرهای در حال اجرا
```

## توابع مرتبط

- [SetTimer](SetTimer): تنظیم یک تایمر.
- [SetTimerEx](SetTimerEx): تنظیم یک تایمر با پارامترها.
- [KillTimer](KillTimer): از بین بردن (متوقف کردن) یک تایمر در حال اجرا.
