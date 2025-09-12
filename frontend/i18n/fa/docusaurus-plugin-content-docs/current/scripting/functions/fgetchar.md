---
title: fgetchar
sidebar_label: fgetchar
description: خواندن یک کاراکتر از فایل.
tags: ["file management"]
---

<LowercaseNote />

## توضیحات

خواندن یک کاراکتر از فایل.

| نام         | توضیحات                                                                               |
| ----------- | ------------------------------------------------------------------------------------- |
| File:handle | دستگیره فایل که بوسیله fopen برگردونده میشه.                                          |
| value       | این پارامتر استفاده ای نداره، فقط "0" رو بذار.                                          |
| bool:utf8   | اگه `true` باشه، کاراکتر رو به صورت UTF-8 میخونه، در غیر اینصورت extended ASCII. (پیش‌فرض: `true`) |

## برگشتی

اگه موفق باشه، مقدار extended ASCII یا UTF-8 کاراکتر در موقعیت فعلی فایل رو برمیگردونه، در غیر اینصورت EOF (آخر فایل).

## مثال‌ها

```c
// باز کردن "file.txt" در حالت "فقط خواندن"
new File:handle = fopen("file.txt", io_read);

// تعریف "g_char"
new g_char;

// چک کردن، اگه "file.txt" باز شده
if (handle)
{
    // خوندن همه کاراکترها، با نادیده گرفتن UTF-8.
    while((g_char = fgetchar(handle, 0, false)) != EOF)
    {
        // چاپ کاراکتر
        printf("[ \"file.txt\" ] 0x%x", g_char);
    }

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

استفاده از دستگیره نامعتبر سرور رو کرش میکنه! با استفاده از [fopen](fopen) یا [ftemp](ftemp) دستگیره معتبر بگیر.

:::

## توابع مرتبط

- [fopen](fopen): باز کردن فایل.
- [fclose](fclose): بستن فایل.
- [ftemp](ftemp): ساخت جریان فایل موقت.
- [fremove](fremove): حذف فایل.
- [fwrite](fwrite): نوشتن در فایل.
- [fread](fread): خواندن فایل.
- [fputchar](fputchar): قرار دادن کاراکتر در فایل.
- [fblockwrite](fblockwrite): نوشتن بلاک‌های داده در فایل.
- [fblockread](fblockread): خواندن بلاک‌های داده از فایل.
- [fseek](fseek): پرش به کاراکتر مشخص در فایل.
- [flength](flength): گرفتن طول فایل.
- [fexist](fexist): چک کردن وجود فایل.
- [fmatch](fmatch): چک کردن تطبیق الگو با نام فایل.
- [ftell](ftell): گرفتن موقعیت فعلی در فایل.
- [fflush](fflush): کردن فایل روی دیسک (اطمینان از تمام شدن نوشتن‌ها).
- [fstat](fstat): برگرداندن اندازه و زمان فایل.
- [frename](frename): تغییر نام فایل.
- [fcopy](fcopy): کپی فایل.
- [filecrc](filecrc): برگرداندن مقدار 32-بیتی CRC فایل.
- [diskfree](diskfree): برگرداندن فضای آزاد دیسک.
- [fattrib](fattrib): تنظیم ویژگی‌های فایل.
- [fcreatedir](fcreatedir): ساخت پوشه.