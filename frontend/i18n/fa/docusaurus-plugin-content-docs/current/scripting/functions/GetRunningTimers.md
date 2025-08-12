---
title: GetRunningTimers
sidebar_label: GetRunningTimers
description: timer های در حال اجرا رو دریافت می‌کنه.
tags: []
---

:::warning

این تابع deprecated شده، [CountRunningTimers](CountRunningTimers) رو ببین.

:::

## توضیحات

timer های در حال اجرا رو دریافت می‌کنه. ([SetTimer](SetTimer) & [SetTimerEx](SetTimerEx))

## مقادیر برگشتی

تعداد timer های در حال اجرا رو برمی‌گردونه.

## مثال‌ها

```c
printf("Running timers: %d", GetRunningTimers());
```

## توابع مرتبط

- [SetTimer](SetTimer): تنظیم یه timer.
- [SetTimerEx](SetTimerEx): تنظیم یه timer با پارامتر.
- [KillTimer](KillTimer): kill کردن (متوقف کردن) یه timer در حال اجرا.