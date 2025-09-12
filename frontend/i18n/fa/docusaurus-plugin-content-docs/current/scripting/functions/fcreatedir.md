---
title: fcreatedir
sidebar_label: fcreatedir
description: ساخت یک دایرکتوری.
tags: ["file management"]
---

<VersionWarn version='omp v1.1.0.2612' />

<LowercaseNote />

## توضیحات

یک دایرکتوری ایجاد می‌کند.

| نام            | توضیحات                                                            |
| --------------- | ---------------------------------------------------------------------- |
| const dirname[] | نام دایرکتوری برای ساخت، اختیاری شامل مسیر کامل. |

## مقدار برگشتی

**true** در صورت موفقیت، **false** در صورت شکست.

## مثال‌ها

```c
if (fcreatedir("logs"))
{
    // موفقیت
    printf("The directory \"logs\" created successfully.");
}
else
{
    // خطا
    print("Failed to create the directory \"logs\"");
}
```

## نکات

:::tip

برای حذف دوباره دایرکتوری، از [fremove](fremove) استفاده کنید. دایرکتوری باید قبل از حذف خالی باشد.

:::

## توابع مرتبط

- [fopen](fopen): باز کردن یک فایل.
- [fclose](fclose): بستن یک فایل.
- [ftemp](ftemp): ساخت یک جریان فایل موقت.
- [fremove](fremove): حذف یک فایل.
- [fwrite](fwrite): نوشتن در یک فایل.
- [fputchar](fputchar): قرار دادن یک کاراکتر در فایل.
- [fgetchar](fgetchar): گرفتن یک کاراکتر از فایل.
- [fblockwrite](fblockwrite): نوشتن بلوک‌های داده در یک فایل.
- [fblockread](fblockread): خواندن بلوک‌های داده از یک فایل.
- [fseek](fseek): پرش به یک کاراکتر خاص در فایل.
- [flength](flength): گرفتن طول فایل.
- [fexist](fexist): بررسی وجود یک فایل.
- [fmatch](fmatch): بررسی تطبیق الگوها با نام فایل.
- [ftell](ftell): گرفتن موقعیت فعلی در فایل.
- [fflush](fflush): فلاش کردن فایل روی دیسک (اطمینان از تکمیل تمام نوشته‌ها).
- [fstat](fstat): برگردان دادن اندازه و زمان فایل.
- [frename](frename): تغییر نام یک فایل.
- [fcopy](fcopy): کپی کردن یک فایل.
- [filecrc](filecrc): برگرداندن مقدار CRC 32-bit یک فایل.
- [diskfree](diskfree): برگرداندن فضای خالی دیسک.
- [fattrib](fattrib): تنظیم خصوصیات فایل.