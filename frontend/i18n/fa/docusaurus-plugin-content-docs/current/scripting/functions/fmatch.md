---
title: fmatch
sidebar_label: fmatch
description: نام فایلی که با pattern مطابقت داره رو پیدا کنه.
tags: ["file management"]
---

<LowercaseNote />

## توضیحات

نام فایلی که با pattern مطابقت داره رو پیدا میکنه.

| نام                     | توضیحات                                                              |
| ------------------------ | ------------------------------------------------------------------------ |
| const filename[]         | string که نتیجه توش ذخیره میشه، به صورت packed string برمیگردونه.           |
| const pattern[]          | pattern که باید match بشه. میتونه wildcard داشته باشه.               |
| index                    | شماره فایل، در صورتی که چندین match وجود داشته باشه. (پیش‌فرض: 0) |
| size = sizeof (filename) | بیشترین اندازه پارامتر name                                       |

## برگشتی

**true** - موفق (فایل با pattern مطابقت داره)

**false** - ناموفق (فایل وجود نداره یا pattern مطابقت نداره)

## مثال‌ها

```c
if (fmatch("file.txt", "*.txt"))
{
    print("The file matches the pattern.");
}
else
{
    print("The file \"file.txt\" does not exists, or pattern does not match.");
}
```

## نکات

:::warning

این تابع روی سرور open.mp کار میکنه ولی روی سرور SA:MP نه.

:::

## توابع مرتبط

- [fopen](fopen): باز کردن یک فایل.
- [fclose](fclose): بستن یک فایل.
- [ftemp](ftemp): ایجاد یک stream فایل موقت.
- [fremove](fremove): حذف کردن یک فایل.
- [fwrite](fwrite): نوشتن در فایل.
- [fread](fread): خواندن فایل.
- [fputchar](fputchar): قرار دادن یک کاراکتر در فایل.
- [fgetchar](fgetchar): گرفتن یک کاراکتر از فایل.
- [fblockwrite](fblockwrite): نوشتن بلوک‌های داده در فایل.
- [fblockread](fblockread): خواندن بلوک‌های داده از فایل.
- [fseek](fseek): پرش به یک کاراکتر خاص در فایل.
- [flength](flength): گرفتن طول فایل.
- [fexist](fexist): چک کردن وجود فایل.
- [ftell](ftell): گرفتن موقعیت فعلی در فایل.
- [fflush](fflush): flush کردن فایل روی دیسک (مطمئن شدن از تکمیل همه write ها).
- [fstat](fstat): برگرداندن اندازه و timestamp فایل.
- [frename](frename): تغییر نام فایل.
- [fcopy](fcopy): کپی کردن فایل.
- [filecrc](filecrc): برگرداندن مقدار CRC 32-bit فایل.
- [diskfree](diskfree): برگرداندن فضای خالی دیسک.
- [fattrib](fattrib): تنظیم attribute های فایل.
- [fcreatedir](fcreatedir): ایجاد یک directory.