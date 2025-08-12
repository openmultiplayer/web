---
title: fopen
sidebar_label: fopen
description: باز کردن یک فایل (برای خوندن یا نوشتن).
tags: ["file management"]
---

<LowercaseNote />

## توضیحات

باز کردن یک فایل (برای خوندن یا نوشتن).

| نام                                     | توضیحات                                                                                                                                |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| const filename[]                         | مسیر فایلی که باز میشه (اگر فقط نام فایل مشخص بشه، فایل با همون نام در پوشه 'scriptfiles' باز میشه). |
| [filemode:mode](../resources/file-modes) | حالتی که فایل با اون باز میشه (پیش‌فرض: io_readwrite).                                                                                    |

## برگشتی

handle فایل رو برمیگردونه. این handle برای خوندن و نوشتن استفاده میشه.

0 اگر باز کردن فایل موفق نبود.

## مثال‌ها

**حالت io_read:**

```c
// "file.txt" رو در حالت "read only" باز کن
new File:handle = fopen("file.txt", io_read);

// "buf" رو initialize کن
new buf[128];

// چک کن که آیا فایل باز شده
if (handle)
{
    // موفق

    // کل فایل رو بخون
    while(fread(handle, buf))
    {
        print(buf);
    }

    // فایل رو ببند
    fclose(handle);
}
else
{
    // خطا
    print("The file \"file.txt\" does not exists, or can't be opened.");
}
```

<br />

**حالت io_write:**

```c
// "file.txt" رو در حالت "write only" باز کن
new File:handle = fopen("file.txt", io_write);

// چک کن که آیا فایل باز شده
if (handle)
{
    // موفق

    // "I just wrote here!" رو توی این فایل بنویس
    fwrite(handle, "I just wrote here!");

    // فایل رو ببند
    fclose(handle);
}
else
{
    // خطا
    print("Failed to open file \"file.txt\".");
}

```

<br />

**حالت io_readwrite:**

```c
// "file.txt" رو در حالت "read and write" باز کن

new File:handle = fopen("file.txt", io_readwrite);

// "buf" رو initialize کن
new buf[128];

// چک کن که آیا فایل باز شده
if (handle)
{
    // موفق

    // کل فایل رو بخون
    while(fread(handle, buf))
    {
        print(buf);
    }

    // pointer فایل رو روی اولین byte بگذار
    fseek(handle, _, seek_begin);

    // "I just wrote here!" رو توی این فایل بنویس
    fwrite(handle, "I just wrote here!");

    // فایل رو ببند
    fclose(handle);
}
else
{
    // خطا
    print("The file \"file.txt\" does not exists, or can't be opened.");
}
```

<br />

**حالت io_append:**

```c
// "file.txt" رو در حالت "append only" باز کن
new File:handle = fopen("file.txt", io_append);

// چک کن که آیا فایل باز شده
if (handle)
{
    // موفق

    // "This is a text.\r\n" رو append کن
    fwrite(handle, "This is a text.\r\n");

    // فایل رو ببند
    fclose(handle);
}
else
{
    // خطا
    print("Failed to open file \"file.txt\".");
}
```

## نکات

:::warning

اگر از `io_read` استفاده کنی و فایل وجود نداشته باشه، یک reference NULL برمیگردونه. استفاده از reference های نامعتبر در توابع فایل سرورت رو crash میکنه!

:::

## توابع مرتبط

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
- [fmatch](fmatch): چک کردن pattern ها با نام فایل.
- [ftell](ftell): گرفتن موقعیت فعلی در فایل.
- [fflush](fflush): flush کردن فایل روی دیسک (مطمئن شدن از تکمیل همه write ها).
- [fstat](fstat): برگرداندن اندازه و timestamp فایل.
- [frename](frename): تغییر نام فایل.
- [fcopy](fcopy): کپی کردن فایل.
- [filecrc](filecrc): برگرداندن مقدار CRC 32-bit فایل.
- [diskfree](diskfree): برگرداندن فضای خالی دیسک.
- [fattrib](fattrib): تنظیم attribute های فایل.
- [fcreatedir](fcreatedir): ایجاد یک directory.

## منابع مرتبط

- [File Modes](../resources/file-modes)