---
title: fstat
sidebar_label: fstat
description: برگردوندن سایز و timestamp فایل.
tags: ["file management"]
---

<VersionWarn version='omp v1.1.0.2612' />

<LowercaseNote />

## توضیحات

سایز و timestamp فایل رو برمیگردونه.

| نام             | توضیحات                                                                                                                                                                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| const filename[] | اسم فایل.                                                                                                                                                                                                                             |
| &size            | اگه تابع موفق باشه، این پارامتر سایز فایل رو نگه میداره.                                                                                                                                                              |
| &timestamp       | اگه تابع موفق باشه، این پارامتر زمان آخرین تغییر فایل رو نگه میداره.                                                                                                                                      |
| &attrib          | اگه تابع موفق باشه، این پارامتر attribute های فایل رو نگه میداره.                                                                                                                                                          |
| &inode           | اگه تابع موفق باشه، این پارامتر شماره inode فایل رو نگه میداره. شماره inode یه شماره‌ست که فایل رو به طور یونیک شناسایی میکنه، و معمولاً موقعیت فیزیکی (شروع) فایل رو روی دیسک یا مموری کارت نشون میده. |

## برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع نتونست اجرا بشه. (فایل وجود نداره)

## مثال‌ها

```c
new 
    size,
    timestamp,
    attrib,
    inode;

if (fstat("file.txt", size, timestamp, attrib, inode))
{
    // موفق بود

    printf("size = %d, timestamp = %d, attrib = %d, inode = %d", size, timestamp, attrib, inode);
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
- [ftell](ftell): گرفتن موقعیت فعلی توی فایل.
- [fflush](fflush): ذخیره کردن فایل روی دیسک (مطمئن شو که همه نوشته‌ها کامل شدن).
- [frename](frename): تغییر نام فایل.
- [fcopy](fcopy): کپی کردن فایل.
- [filecrc](filecrc): برگردوندن مقدار CRC 32-bit فایل.
- [diskfree](diskfree): برگردوندن فضای خالی دیسک.
- [fattrib](fattrib): تنظیم attribute های فایل.
- [fcreatedir](fcreatedir): ساختن پوشه.