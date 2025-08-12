---
title: fremove
sidebar_label: fremove
description: حذف فایل.
tags: ["file management"]
---

<LowercaseNote />

## توضیحات

حذف فایل.

| نام             | توضیحات                     |
| ---------------- | ------------------------------- |
| const filename[] | مسیر فایلی که باید حذف بشه. |

## برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع نتونست اجرا بشه. فایل وجود نداره، یا اجازه حذف نداری.

## مثال‌ها

**حذف فایل:**

```c
if (fremove("example.txt"))
{
    print("The file \"example.txt\" removed.");
}
else
{
    print("The file \"example.txt\" does not exists.");
}
```

**حذف پوشه:**

```c
if (fremove("logs"))
{
    print("The directory \"logs\" removed.");
}
else
{
    print("The directory \"logs\" does not exists, or it is not empty.");
}
```

## نکات

:::tip

فایل‌هایی که در حال حاضر باز هستن (fopen) باید اول بسته بشن (fclose) تا بتونن حذف بشن.

:::

:::warning

مسیر فایل باید معتبر باشه.

:::

## توابع مرتبط

- [fopen](fopen): باز کردن فایل.
- [fclose](fclose): بستن فایل.
- [ftemp](ftemp): ساختن یه فایل موقت.
- [fwrite](fwrite): نوشتن توی فایل.
- [fread](fread): خوندن فایل.
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
- [frename](frename): تغییر نام فایل.
- [fcopy](fcopy): کپی کردن فایل.
- [filecrc](filecrc): برگردوندن مقدار CRC 32-bit فایل.
- [diskfree](diskfree): برگردوندن فضای خالی دیسک.
- [fattrib](fattrib): تنظیم attribute های فایل.
- [fcreatedir](fcreatedir): ساختن پوشه.