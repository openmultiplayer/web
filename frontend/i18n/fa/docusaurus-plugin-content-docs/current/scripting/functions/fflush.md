---
title: fflush
sidebar_label: fflush
description: کردن فایل روی دیسک (اطمینان از تمام شدن نوشتن‌ها).
tags: ["file management"]
---

<VersionWarn version='omp v1.1.0.2612' />

<LowercaseNote />

## توضیحات

کردن فایل روی دیسک (اطمینان از تمام شدن نوشتن‌ها). در واقع فقط تابع [flength](flength) رو صدا میزنه چون اون مجبوره برای دقت flush کنه.

| نام         | توضیحات                                    |
| ----------- | ------------------------------------------ |
| File:handle | دستگیره فایل. (که بوسیله fopen برگردونده میشه). |

## برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع موفق به اجرا نشد. (دستگیره فایل نامعتبر)

## مثال‌ها

```c
// باز کردن "file.txt" در حالت "فقط اضافه کردن"
new File:handle = fopen("file.txt", io_append);

// چک کردن، اگه فایل باز شده
if (handle)
{
    // موفق

    // اضافه کردن "This is a text.\r\n"
    fwrite(handle, "This is a text.\r\n");

    fflush(handle);

    // بستن فایل
    fclose(handle);
}
else
{
    // خطا
    print("The file \"file.txt\" does not exists, or can't be opened.");
}
```

## توابع مرتبط

- [fopen](fopen): باز کردن فایل.
- [fclose](fclose): بستن فایل.
- [ftemp](ftemp): ساخت جریان فایل موقت.
- [fremove](fremove): حذف فایل.
- [fwrite](fwrite): نوشتن در فایل.
- [fputchar](fputchar): قرار دادن کاراکتر در فایل.
- [fgetchar](fgetchar): گرفتن کاراکتر از فایل.
- [fblockwrite](fblockwrite): نوشتن بلاک‌های داده در فایل.
- [fblockread](fblockread): خواندن بلاک‌های داده از فایل.
- [fseek](fseek): پرش به کاراکتر مشخص در فایل.
- [flength](flength): گرفتن طول فایل.
- [fexist](fexist): چک کردن وجود فایل.
- [fmatch](fmatch): چک کردن تطبیق الگو با نام فایل.
- [ftell](ftell): گرفتن موقعیت فعلی در فایل.
- [fstat](fstat): برگرداندن اندازه و زمان فایل.
- [frename](frename): تغییر نام فایل.
- [fcopy](fcopy): کپی فایل.
- [filecrc](filecrc): برگرداندن مقدار 32-بیتی CRC فایل.
- [diskfree](diskfree): برگرداندن فضای آزاد دیسک.
- [fattrib](fattrib): تنظیم ویژگی‌های فایل.
- [fcreatedir](fcreatedir): ساخت پوشه.