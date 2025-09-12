---
title: fwrite
sidebar_label: fwrite
description: متن رو توی فایل بنویس.
tags: ["file management"]
---

<LowercaseNote />

## توضیحات

متن رو توی فایل بنویس.

| نام           | توضیحات                                             |
| -------------- | ------------------------------------------------------- |
| File:handle    | دستگیره فایلی که میخوای توش بنویسی (از fopen برگردونده میشه). |
| const string[] | متنی که میخوای توی فایل بنویسی.             |

## برگشتی

طول متن نوشته شده به صورت integer.

## مثال‌ها

```c
// باز کردن "file.txt" با حالت "فقط نوشتن"
new File:handle = fopen("file.txt", io_write);

// چک کن که فایل باز شده یا نه
if (handle)
{
    // موفق بود

    // نوشتن "I just wrote here!" توی این فایل
    fwrite(handle, "I just wrote here!");

    // بستن فایل
    fclose(handle);
}
else
{
    // خطا
    print("Failed to open file \"file.txt\".");
}
```

<br />

```c
// باز کردن "file.txt" با حالت "خوندن و نوشتن"
new File:handle = fopen("file.txt");

// شروع کردن "buf"
new buf[128];

// چک کن که فایل باز شده یا نه
if (handle)
{
    // موفق بود

    // خوندن کل فایل
    while(fread(handle, buf))
    {
        print(buf);
    }

    // pointer فایل رو به اولین بایت بذار
    fseek(handle, _, seek_begin);

    // نوشتن "I just wrote here!" توی این فایل
    fwrite(handle, "I just wrote here!");

    // بستن فایل
    fclose(handle);
}
else
{
    // خطا
    print("The file \"file.txt\" does not exists, or can't be opened.");
}
```

<br />

```c
// باز کردن "file.txt" با حالت "فقط اضافه کردن"
new File:handle = fopen("file.txt", io_append);

// چک کن که فایل باز شده یا نه
if (handle)
{
    // موفق بود

    // اضافه کردن "This is a test.\r\n"
    fwrite(handle, "This is a test.\r\n");

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

:::tip

این تابع توی فایل با UTF-8 مینویسه، که از بعضی کاراکترهای زبان‌های محلی پشتیبانی نمیکنه.

:::

:::warning

استفاده از دستگیره نامعتبر سرور رو کرش میکنه! با [fopen](fopen) یا [ftemp](ftemp) یه دستگیره معتبر بگیر.

:::

## توابع مرتبط

- [fopen](fopen): باز کردن فایل.
- [fclose](fclose): بستن فایل.
- [ftemp](ftemp): ساختن یه فایل موقت.
- [fremove](fremove): حذف فایل.
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