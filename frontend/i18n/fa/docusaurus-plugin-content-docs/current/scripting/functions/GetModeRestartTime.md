---
title: GetModeRestartTime
sidebar_label: GetModeRestartTime
description: زمان تأخیر بین بارگیری اسکریپت‌های اصلی رو برحسب ثانیه برمیگردونه.
tags: []
---

<VersionWarn version='omp v1.1.0.2612' />

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

زمان تأخیر بین بارگیری اسکریپت‌های اصلی رو برحسب ثانیه برمیگردونه.

## مقادیر برگشتی

زمان تأخیر رو به صورت مقدار float برمیگردونه.

## مثال‌ها

</div>

```c
SetModeRestartTime(5.0);

new Float:seconds = GetModeRestartTime();
printf("Delay: %.1f", seconds); // Delay: 5.0
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [SetModeRestartTime](SetModeRestartTime): زمان تأخیر بین بارگیری اسکریپت‌های اصلی رو برحسب ثانیه تنظیم می‌کنه.

</div>