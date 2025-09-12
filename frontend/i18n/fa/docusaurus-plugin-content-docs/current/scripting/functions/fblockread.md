---
title: fblockread
sidebar_label: fblockread
description: این تابع به شما امکان خواندن داده از فایل، بدون کدگذاری و پایان‌دهنده‌های خط را می‌دهد.
tags: ["file management"]
---

<LowercaseNote />

## توضیحات

این تابع به شما امکان خواندن داده از فایل، بدون کدگذاری و پایان‌دهنده‌های خط را می‌دهد

| نام                   | توضیحات                                   |
| ---------------------- | ---------------------------------------- |
| File:handle            | هندل فایل برای استفاده، باز شده با ()fopen |
| buffer                 | بافر برای ذخیره داده‌های خوانده شده.      |
| size = sizeof (buffer) | تعداد سلول‌های برای خواندن.                 |

## مقادیر بازگشتی

تعداد سلول‌های خوانده شده. صفر، اگر به انتهای فایل رسیده باشد.

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

// باز کردن "file.bin" در حالت "فقط خواندنی"
new File:handle = fopen("file.bin", io_read);

// اعلان "file_len"
new file_len;

// بررسی اینکه آیا "file.bin" باز است
if (handle)
{
    // موفقیت

    // دریافت طول فایل "file.bin"
    file_len = flength(handle);

    // اگر فایل به اندازه مساوی با آرایه بزرگ‌تر باشد
    if (file_len == (some_enum*4))
    {
        // موفقیت

        // خواندن از "file.bin" به درون "some_data"
        fblockread(handle, some_data);
    }
    else
    {
        // خطا
        print("\"file.bin\" is not compatible with the array.");
    }

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
- [fblockwrite](fblockwrite): نوشتن بلوک‌های داده در فایل.
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