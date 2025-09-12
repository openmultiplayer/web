---
title: fclose
sidebar_label: fclose
description: یک فایل را می‌بندد.
tags: ["file management"]
---

<LowercaseNote />

## توضیحات

یک فایل را می‌بندد. فایل‌ها باید همیشه زمانی که اسکریپت دیگر نیازی به آن‌ها ندارد (بعد از خواندن/نوشتن) بسته شوند.

| نام        | توضیحات                                          |
| ----------- | ------------------------------------------------ |
| File:handle | هندل فایل برای بستن. توسط [fopen](fopen) برگردانده شده. |

## مقادیر بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناموفق بود. فایل نتوانست بسته شود. ممکن است از قبل بسته باشد.

## مثال‌ها

```c
// باز کردن "file.txt" در حالت "فقط اضافه کردن"
new File:handle = fopen("file.txt", io_append);

// بررسی اینکه آیا فایل باز است
if (handle)
{
    // موفقیت

    // نوشتن "Hi there!" در فایل
    fwrite(handle, "Hi there!");

    // بستن فایل
    fclose(handle);
}
else
{
    // خطا
    print("Failed to open file \"file.txt\".");
}
```

## نکات

:::warning

استفاده از هندل نامعتبر سرور شما را کرش خواهد کرد! یک هندل معتبر با استفاده از [fopen](fopen) یا [ftemp](ftemp) دریافت کنید.

:::

## توابع مرتبط

- [fopen](fopen): باز کردن یک فایل.
- [ftemp](ftemp): ایجاد جریان فایل موقت.
- [fremove](fremove): حذف یک فایل.
- [fwrite](fwrite): نوشتن در فایل.
- [fread](fread): خواندن فایل.
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
- [fattrib](fattrib): تنظیم ویژگی‌های فایل.
- [fcreatedir](fcreatedir): ایجاد دایرکتوری.