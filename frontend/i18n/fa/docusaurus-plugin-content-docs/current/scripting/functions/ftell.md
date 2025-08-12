---
title: ftell
sidebar_label: ftell
description: گرفتن موقعیت فعلی توی فایل.
tags: ["file management"]
---

<VersionWarn version='omp v1.1.0.2612' />

<LowercaseNote />

## توضیحات

موقعیت فعلی توی فایل رو بگیر.

| نام        | توضیحات                                  |
| ----------- | -------------------------------------------- |
| File:handle | دستگیره فایل. (از fopen برگردونده میشه). |

## برگشتی

موقعیت فعلی، نسبت به شروع فایل.

## مثال‌ها

```c
// باز کردن "file.txt" با حالت "فقط خوندن"
new File:handle = fopen("file.txt", io_read);

// چک کن که فایل باز شده یا نه
if (handle)
{
    // موفق بود

    printf("Current position: %d", ftell(handle));

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
- [ftemp](ftemp): ساختن یه فایل موقت.
- [fremove](fremove): حذف فایل.
- [fwrite](fwrite): نوشتن توی فایل.
- [fputchar](fputchar): گذاشتن یه کاراکتر توی فایل.
- [fgetchar](fgetchar): گرفتن یه کاراکتر از فایل.
- [fblockwrite](fblockwrite): نوشتن بلوک‌های داده توی فایل.
- [fblockread](fblockread): خوندن بلوک‌های داده از فایل.
- [fseek](fseek): پریدن به یه کاراکتر خاص توی فایل.
- [flength](flength): گرفتن طول فایل.
- [fexist](fexist): چک کردن که فایل وجود داره یا نه.
- [fmatch](fmatch): چک کردن که پترن‌ها با اسم فایل مچ کنن یا نه.
- [fflush](fflush): ذخیره کردن فایل روی دیسک (مطمئن شو که همه نوشته‌ها کامل شدن).
- [fstat](fstat): برگردوندن سایز و timestamp فایل.
- [frename](frename): تغییر نام فایل.
- [fcopy](fcopy): کپی کردن فایل.
- [filecrc](filecrc): برگردوندن مقدار CRC 32-bit فایل.
- [diskfree](diskfree): برگردوندن فضای خالی دیسک.
- [fattrib](fattrib): تنظیم attribute های فایل.
- [fcreatedir](fcreatedir): ساختن پوشه.