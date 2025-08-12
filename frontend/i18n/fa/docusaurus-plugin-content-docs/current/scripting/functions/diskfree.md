---
title: diskfree
sidebar_label: diskfree
description: فضای خالی دیسک را برمی‌گرداند.
tags: ["file management"]
---

<VersionWarn version='omp v1.1.0.2612' />

:::warning

این تابع هنوز پیاده‌سازی نشده است.

:::

<LowercaseNote />

## توضیحات

فضای خالی دیسک را برمی‌گرداند.

| نام                | توضیحات                                                                                                              |
| ------------------- | -------------------------------------------------------------------------------------------------------------------- |
| const volume[] = "" | نام حجم در سیستم‌هایی که چندین دیسک یا چندین کارت حافظه را پشتیبانی می‌کنند. در سیستم‌های تک حجم، اختیاری است. |

## مقادیر بازگشتی

مقدار فضای خالی بر حسب KiB.

## مثال‌ها

```c
new freeSpace = diskfree();

printf("freeSpace = %d KiB", freeSpace);
```

## نکات

:::tip

حداکثر اندازه‌ای که می‌تواند پشتیبانی شود 2048 GiB (2 ترابایت) است.

:::

## توابع مرتبط

- [fopen](fopen): باز کردن یک فایل.
- [fclose](fclose): بستن یک فایل.
- [ftemp](ftemp): ایجاد جریان فایل موقت.
- [fremove](fremove): حذف یک فایل.
- [fwrite](fwrite): نوشتن در فایل.
- [fputchar](fputchar): قرار دادن کاراکتر در فایل.
- [fgetchar](fgetchar): دریافت کاراکتر از فایل.
- [fblockwrite](fblockwrite): نوشتن بلوک‌های داده در فایل.
- [fblockread](fblockread): خواندن بلوک‌های داده از فایل.
- [fseek](fseek): پرش به کاراکتر مشخص در فایل.
- [flength](flength): دریافت طول فایل.
- [fexist](fexist): بررسی وجود فایل.
- [fmatch](fmatch): بررسی تطبیق الگوها با نام فایل.
- [ftell](ftell): دریافت موقعیت فعلی در فایل.
- [fflush](fflush): فلاش کردن فایل روی دیسک (اطمینان از تکمیل همه نوشتن‌ها).
- [fstat](fstat): برگرداندن اندازه و زمان فایل.
- [frename](frename): تغییر نام فایل.
- [fcopy](fcopy): کپی کردن فایل.
- [filecrc](filecrc): برگرداندن مقدار CRC 32-بیتی فایل.
- [fattrib](fattrib): تنظیم ویژگی‌های فایل.
- [fcreatedir](fcreatedir): ایجاد دایرکتوری.