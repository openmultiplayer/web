---
title: flength
sidebar_label: flength
description: برگرداندن طول یک فایل.
tags: ["file management"]
---

<LowercaseNote />

## توضیحات

برگرداندن طول یک فایل.

| نام         | توضیحات                                  |
| ----------- | ---------------------------------------- |
| File:handle | دستگیره فایل که بوسیله fopen یا ftemp برگردونده میشه |

## برگشتی

طول فایل، به بایت.

## مثال‌ها

```c
// باز کردن "file.txt" در حالت "فقط خواندن"
new File:handle = fopen("file.txt", io_read);

// اگه "file.txt" باز شده
if (handle)
{
    // موفق

    // چاپ اندازه به بایت "file.txt"
    printf("File size: %d", flength(handle));

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
- [fgetchar](fgetchar): گرفتن کاراکتر از فایل.
- [fblockwrite](fblockwrite): نوشتن بلاک‌های داده در فایل.
- [fblockread](fblockread): خواندن بلاک‌های داده از فایل.
- [fseek](fseek): پرش به کاراکتر مشخص در فایل.
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