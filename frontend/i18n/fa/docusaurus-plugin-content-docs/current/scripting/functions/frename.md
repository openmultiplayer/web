---
title: frename
sidebar_label: frename
description: تغییر نام فایل.
tags: ["file management"]
---

<VersionWarn version='omp v1.1.0.2612' />

<LowercaseNote />

## توضیحات

تغییر نام فایل.

| نام            | توضیحات                                                     |
| --------------- | --------------------------------------------------------------- |
| const oldname[] | نام فعلی فایل، اختیاری هم میتونه مسیر کامل باشه. |
| const newname[] | نام جدید فایل، اختیاری هم میتونه مسیر کامل باشه.     |

## برگشتی

**true** اگه موفق بود، **false** اگه فیل خورد.

## مثال‌ها

```c
if (frename("example.txt", "file.txt"))
{
    // موفق بود
    printf("File \"example.txt\" renamed to \"file.txt\" successfully.");
}
else
{
    // خطا
    print("The file \"example.txt\" does not exists, or can't be opened.");
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
- [ftell](ftell): گرفتن موقعیت فعلی توی فایل.
- [fflush](fflush): ذخیره کردن فایل روی دیسک (مطمئن شو که همه نوشته‌ها کامل شدن).
- [fstat](fstat): برگردوندن سایز و timestamp فایل.
- [fcopy](fcopy): کپی کردن فایل.
- [filecrc](filecrc): برگردوندن مقدار CRC 32-bit فایل.
- [diskfree](diskfree): برگردوندن فضای خالی دیسک.
- [fattrib](fattrib): تنظیم attribute های فایل.
- [fcreatedir](fcreatedir): ساختن پوشه.