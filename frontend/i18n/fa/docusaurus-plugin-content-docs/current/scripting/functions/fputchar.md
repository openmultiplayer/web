---
title: fputchar
sidebar_label: fputchar
description: نوشتن یک کاراکتر در فایل.
tags: ["file management"]
---

<LowercaseNote />

## توضیحات

یک کاراکتر رو در یک فایل می‌نویسه.

| نام         | توضیحات                                                                 |
| ----------- | ----------------------------------------------------------------------- |
| File:handle | هندل فایل که استفاده می‌شه، که قبلاً توسط fopen() باز شده.                |
| value       | کاراکتری که در فایل نوشته می‌شه.                                        |
| bool:utf8   | اگه `true` باشه، در حالت UTF8 می‌نویسه، وگرنه در extended ASCII. (پیش‌فرض: `true`) |

## مقدار بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
// باز کردن "file.txt" در حالت "write only"
new File:handle = fopen("file.txt", io_write);

if (handle)
{
    // موفق

    // نوشتن کاراکتر "e" در "file.txt"
    fputchar(handle, 'e', false);

    // بستن "file.txt"
    fclose(handle);
}
else
{
    // خطا
    print("Failed to open \"file.txt\".");
}
```

## نکات

:::warning

استفاده از هندل نامعتبر سرور شما رو کرش می‌کنه! یه هندل معتبر با استفاده از [fopen](fopen) یا [ftemp](ftemp) بگیرین.

:::

## توابع مرتبط

- [fopen](fopen): باز کردن یک فایل.
- [fclose](fclose): بستن یک فایل.
- [ftemp](ftemp): ایجاد یک جریان فایل موقت.
- [fremove](fremove): حذف یک فایل.
- [fwrite](fwrite): نوشتن در یک فایل.
- [fread](fread): خواندن یک فایل.
- [fgetchar](fgetchar): گرفتن یک کاراکتر از فایل.
- [fblockwrite](fblockwrite): نوشتن بلوک‌های داده در فایل.
- [fblockread](fblockread): خواندن بلوک‌های داده از فایل.
- [fseek](fseek): پرش به یک کاراکتر خاص در فایل.
- [flength](flength): گرفتن طول فایل.
- [fexist](fexist): بررسی، اگه فایل وجود داشته باشه.
- [fmatch](fmatch): بررسی، اگه الگوها با نام فایل مطابقت داشته باشن.
- [ftell](ftell): گرفتن موقعیت فعلی در فایل.
- [fflush](fflush): فلاش کردن فایل روی دیسک (اطمینان از تکمیل تمام نوشته‌ها).
- [fstat](fstat): برگرداندن اندازه و زمان فایل.
- [frename](frename): تغییر نام فایل.
- [fcopy](fcopy): کپی فایل.
- [filecrc](filecrc): برگرداندن مقدار CRC 32-bit فایل.
- [diskfree](diskfree): برگرداندن فضای خالی دیسک.
- [fattrib](fattrib): تنظیم خصوصیات فایل.
- [fcreatedir](fcreatedir): ایجاد یک دایرکتوری.