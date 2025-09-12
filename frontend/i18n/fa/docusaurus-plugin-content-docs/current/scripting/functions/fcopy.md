---
title: fcopy
sidebar_label: fcopy
description: کپی کردن یک فایل.
tags: ["file management"]
---

<VersionWarn version='omp v1.1.0.2612' />

<LowercaseNote />

## توضیحات

کپی کردن یک فایل.

| نام           | توضیحات                                                                   |
| -------------- | ------------------------------------------------------------------------- |
| const source[] | نام فایل (موجود) که باید کپی شود، اختیاری شامل مسیر.                      |
| const target[] | نام فایل جدید، اختیاری شامل مسیر کامل.                                     |

## مقادیر بازگشتی

**true** در صورت موفقیت، **false** در صورت شکست.

## مثال‌ها

```c
if (fcopy("example.txt", "file.txt"))
{
    // موفقیت
    printf("The file \"example.txt\" copied to \"file.txt\" successfully.");
}
else
{
    // خطا
    print("The file \"example.txt\" does not exists, or can't be opened.");
}
```

## نکات

:::warning

اگر فایل مقصد از قبل وجود داشته باشد، بازنویسی خواهد شد.

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
- [filecrc](filecrc): برگرداندن مقدار CRC 32-بیتی فایل.
- [diskfree](diskfree): برگرداندن فضای خالی دیسک.
- [fattrib](fattrib): تنظیم ویژگی‌های فایل.
- [fcreatedir](fcreatedir): ایجاد دایرکتوری.