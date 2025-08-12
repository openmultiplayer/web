---
title: gettime
sidebar_label: gettime
description: زمان فعلی سرور رو دریافت می‌کنه که در متغیرهای &hour، &minute و &second ذخیره می‌شه.
tags: ["time"]
---

<LowercaseNote />

## توضیحات

زمان فعلی سرور رو دریافت می‌کنه که در متغیرهای &hour، &minute و &second ذخیره می‌شه.

| نام      | توضیحات                                                |
| --------- | ---------------------------------------------------------- |
| &hour=0   | متغیری برای ذخیره ساعت که به صورت reference پاس داده می‌شه.    |
| &minute=0 | متغیری برای ذخیره دقیقه که به صورت reference پاس داده می‌شه.  |
| &second=0 | متغیری برای ذخیره ثانیه که به صورت reference پاس داده می‌شه. |

## مقادیر برگشتی

خود تابع یه Unix Timestamp برمی‌گردونه.

## مثال‌ها

```c
new
	hours,
	minutes,
	seconds,
	timestamp;

timestamp = gettime(hours, minutes, seconds);
printf("%02d:%02d:%02d", hours, minutes, seconds);
printf("Seconds since midnight 1st January 1970: %d", timestamp);
```

## نکات

:::tip

این تابع برای اندازه‌گیری بازه‌های زمانی با استفاده از ویژگی timestamp مفیده. این خصوصاً کاربردی هست اگه بخوای بعضی عملکردها رو بر اساس زمان محدود کنی (مثلاً یه command که فقط هر 30 ثانیه یکبار اجرا می‌شه). با این روش نیازی نیست به timer متکی باشی.

:::

## توابع مرتبط

- [getdate](getdate): دریافت تاریخ فعلی سرور.