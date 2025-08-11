---
title: fexist
sidebar_label: fexist
description: بررسی وجود یک فایل خاص در دایرکتوری scriptfiles.
tags: ["file management"]
---

<LowercaseNote />

## توضیحات

بررسی می‌کند که آیا یک فایل خاص در دایرکتوری scriptfiles وجود دارد یا نه.

| نام             | توضیحات           |
| ---------------- | --------------------- |
| const filename[] | نام فایل. |

## مقدار برگشتی

تعداد فایل‌هایی که با الگو تطبیق دارند.

## مثال‌ها

```c
// بررسی وجود "file.txt"
if (fexist("file.txt"))
{
    // موفقیت

    // چاپ موفقیت
    print("\"file.txt\" exists.");
}
else
{
    // خطا
    print("\"file.txt\" does not exist.");
}
```

## توابع مرتبط

- [fopen](fopen): باز کردن یک فایل.
- [fclose](fclose): بستن یک فایل.
- [ftemp](ftemp): ساخت یک جریان فایل موقت.
- [fremove](fremove): حذف یک فایل.
- [fwrite](fwrite): نوشتن در یک فایل.
- [fread](fread): خواندن یک فایل.
- [fputchar](fputchar): قرار دادن یک کاراکتر در فایل.
- [fgetchar](fgetchar): گرفتن یک کاراکتر از فایل.
- [fblockwrite](fblockwrite): نوشتن بلوک‌های داده در یک فایل.
- [fblockread](fblockread): خواندن بلوک‌های داده از یک فایل.
- [fseek](fseek): پرش به یک کاراکتر خاص در فایل.
- [flength](flength): گرفتن طول فایل.
- [fmatch](fmatch): بررسی تطبیق الگوها با نام فایل.
- [ftell](ftell): گرفتن موقعیت فعلی در فایل.
- [fflush](fflush): فلاش کردن فایل روی دیسک (اطمینان از تکمیل تمام نوشته‌ها).
- [fstat](fstat): برگردان دادن اندازه و زمان فایل.
- [frename](frename): تغییر نام یک فایل.
- [fcopy](fcopy): کپی کردن یک فایل.
- [filecrc](filecrc): برگرداندن مقدار CRC 32-bit یک فایل.
- [diskfree](diskfree): برگرداندن فضای خالی دیسک.
- [fattrib](fattrib): تنظیم خصوصیات فایل.
- [fcreatedir](fcreatedir): ساخت یک دایرکتوری.