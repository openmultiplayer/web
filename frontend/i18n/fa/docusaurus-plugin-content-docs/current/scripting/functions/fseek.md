---
title: fseek
sidebar_label: fseek
description: تغییر موقعیت فعلی توی فایل.
tags: ["file management"]
---

<LowercaseNote />

## توضیحات

موقعیت فعلی توی فایل رو تغییر بده. میتونی جلو یا عقب بری.

| نام                                                | توضیحات                                                                 |
| --------------------------------------------------- | --------------------------------------------------------------------------- |
| File:handle                                         | دستگیره فایلی که باید استفاده بشه. از fopen برمیگرده.                                  |
| position                                            | موقعیت جدید توی فایل، نسبت به پارامتر whence (ببین پایین). |
| [seek_whence:whence](../resources/file-seek-whence) | موقعیت شروعی که پارامتر position به اون ربط داره.                  |

## برگشتی

موقعیت جدید؛ نسبت به شروع فایل.

## مثال‌ها

```c
// باز کردن "file.txt" با حالت "فقط خوندن"
new File:handle = fopen("file.txt", io_read);

// اگه "file.txt" باز شده
if (handle)
{
    // موفق بود

    // پریدن به اولین بایت "file.txt"، و پرینت موقعیتش
    printf("Begin of file position: %d", fseek(handle, 0, seek_start));

    // پریدن به آخرین بایت "file.txt"، و پرینت موقعیتش
    printf("End of file position: %d", fseek(handle, 0, seek_end));

    // موندن توی همون بایت "file.txt"، و پرینت موقعیتش
    printf("Currrent file position: %d", fseek(handle, 0, seek_current));

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

استفاده از دستگیره نامعتبر سرور رو کرش میکنه! با [fopen](fopen) یا [ftemp](ftemp) یه دستگیره معتبر بگیر.

:::

## توابع مرتبط

- [fopen](fopen): باز کردن فایل.
- [fclose](fclose): بستن فایل.
- [ftemp](ftemp): ساختن یه فایل موقت.
- [fremove](fremove): حذف فایل.
- [fwrite](fwrite): نوشتن توی فایل.
- [fread](fread): خوندن فایل.
- [fputchar](fputchar): گذاشتن یه کاراکتر توی فایل.
- [fgetchar](fgetchar): گرفتن یه کاراکتر از فایل.
- [fblockwrite](fblockwrite): نوشتن بلوک‌های داده توی فایل.
- [fblockread](fblockread): خوندن بلوک‌های داده از فایل.
- [flength](flength): گرفتن طول فایل.
- [fexist](fexist): چک کردن که فایل وجود داره یا نه.
- [fmatch](fmatch): چک کردن که پترن‌ها با اسم فایل مچ کنن یا نه.
- [ftell](ftell): گرفتن موقعیت فعلی توی فایل.
- [fflush](fflush): ذخیره کردن فایل روی دیسک (مطمئن شو که همه نوشته‌ها کامل شدن).
- [fstat](fstat): برگردوندن سایز و timestamp فایل.
- [frename](frename): تغییر نام فایل.
- [fcopy](fcopy): کپی کردن فایل.
- [filecrc](filecrc): برگردوندن مقدار CRC 32-bit فایل.
- [diskfree](diskfree): برگردوندن فضای خالی دیسک.
- [fattrib](fattrib): تنظیم attribute های فایل.
- [fcreatedir](fcreatedir): ساختن پوشه.

## منابع مرتبط

- [File Seek Whence](../resources/file-seek-whence)