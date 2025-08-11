---
title: fattrib
sidebar_label: fattrib
description: تنظیم ویژگی‌های فایل.
tags: ["file management"]
---

<VersionWarn version='omp v1.1.0.2612' />

<LowercaseNote />

## توضیحات

تنظیم ویژگی‌های فایل.

| نام             | توضیحات                                                                                                         |
| ---------------- | --------------------------------------------------------------------------------------------------------------- |
| const filename[] | نام فایل.                                                                                                       |
| timestamp = 0    | زمان آخرین تغییر فایل. زمانی که این پارامتر روی صفر تنظیم شود، زمان فایل تغییر نخواهد کرد.                        |
| attrib = 0x0F    | ماسک بیتی با ویژگی‌های جدید فایل. زمانی که روی 0x0F تنظیم شود، ویژگی‌های فایل تغییر نخواهند کرد.              |

## مقادیر بازگشتی

**true** در صورت موفقیت، **false** در صورت شکست.

## مثال‌ها

```c
// تغییر زمان تغییر فایل به 'Thu Mar 07 2024 06:28:15'
if (fattrib("file.txt", 1709792895))
{
    // موفقیت
    print("File attributes was set.");
}
else
{
    // خطا
    print("The file \"file.txt\" does not exists, or can't set the attributes.");
}
```

## نکات

:::tip

- زمان به تعداد ثانیه‌ها از نیمه شب در 1 ژانویه 1970 است: شروع دوره سیستم UNIX.
- ویژگی‌های فایل ماسک بیتی هستند.
- معنای هر بیت بستگی به سیستم فایل زیرین دارد (مثل FAT، NTFS، etx2 و غیره).

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
- [diskfree](diskfree): برگرداندن فضای خالی دیسک.
- [fcreatedir](fcreatedir): ایجاد دایرکتوری.