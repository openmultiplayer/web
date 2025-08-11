---
title: fblockwrite
sidebar_label: fblockwrite
description: نوشتن داده در فایل به فرمت باینری، با نادیده گرفتن شکست خط و کدگذاری.
tags: ["file management"]
---

<LowercaseNote />

## توضیحات

نوشتن داده در فایل به فرمت باینری، با نادیده گرفتن شکست خط و کدگذاری.

| نام                   | توضیحات                                     |
| ---------------------- | ------------------------------------------- |
| File:handle            | هندل فایل برای استفاده، باز شده با ()fopen. |
| const buffer[]         | داده برای نوشتن در فایل.                    |
| size = sizeof (buffer) | تعداد سلول‌های برای نوشتن.                   |

## مقادیر بازگشتی

این تابع مقدار مشخصی برنمی‌گرداند.

## مثال‌ها

```c
// تعریف "some_enum"
enum _:some_enum
{
    some_data1,
    some_data2[20],
    Float:some_data3
}

// اعلان "some_data"
new some_data[some_enum];

// ...

// باز کردن "file.bin" در حالت "فقط نوشتنی"
new File:handle = fopen("file.bin", io_write);

// بررسی اینکه آیا "file.bin" باز است
if (handle)
{
    // موفقیت

    // نوشتن "some_data" در "file.bin"
    fblockwrite(handle, some_data);

    // بستن "file.bin"
    fclose(handle);
}
else
{
    // خطا
    print("Failed to open \"file.bin\".");
}
```

## نکات

:::warning

استفاده از هندل نامعتبر سرور شما را کرش خواهد کرد! یک هندل معتبر با استفاده از [fopen](fopen) یا [ftemp](ftemp) دریافت کنید.

:::

## توابع مرتبط

- [fopen](fopen): باز کردن یک فایل.
- [fclose](fclose): بستن یک فایل.
- [ftemp](ftemp): ایجاد جریان فایل موقت.
- [fremove](fremove): حذف یک فایل.
- [fwrite](fwrite): نوشتن در فایل.
- [fread](fread): خواندن فایل.
- [fputchar](fputchar): قرار دادن کاراکتر در فایل.
- [fgetchar](fgetchar): دریافت کاراکتر از فایل.
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
- [fattrib](fattrib): تنظیم ویژگی‌های فایل.
- [fcreatedir](fcreatedir): ایجاد دایرکتوری.