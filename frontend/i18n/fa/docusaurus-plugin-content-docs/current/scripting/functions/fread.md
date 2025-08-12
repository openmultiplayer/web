---
title: fread
sidebar_label: fread
description: خواندن یک خط از یک فایل.
tags: ["file management"]
---

<LowercaseNote />

## توضیحات

یک خط از یک فایل رو می‌خونه.

| نام                    | توضیحات                                                    |
| ---------------------- | ---------------------------------------------------------- |
| File:handle            | هندل فایل که ازش خونده می‌شه (توسط fopen برگردونده شده).   |
| string[]               | آرایه string برای ذخیره متن خونده شده، که با reference پاس می‌شه. |
| size = sizeof (string) | تعداد بایت‌هایی که باید خونده بشن.                          |
| bool:pack              | آیا string باید pack شده باشه؟ (پیش‌فرض: false).             |

## مقدار بازگشتی

طول string (متن خونده شده) به عنوان یک integer.

## مثال‌ها

```c
// باز کردن "file.txt" در حالت "read only"
new File:handle = fopen("file.txt", io_read);

// مقداردهی "buf"
new buf[128];

// بررسی، اگه فایل باز شده باشه
if (handle)
{
    // موفق

    // خواندن کل فایل
    while(fread(handle, buf))
    {
        print(buf);
    }

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
// باز کردن "file.txt" در حالت "read and write"
new File:handle = fopen("file.txt");

// مقداردهی "buf"
new buf[128];

// بررسی، اگه فایل باز باشه
if (handle)
{
    // موفق

    // خواندن کل فایل
    while(fread(handle, buf))
    {
        print(buf);
    }

    // تنظیم اشاره‌گر فایل به اولین بایت
    fseek(handle, _, seek_begin);

    // نوشتن "I just wrote here!" در این فایل
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

## نکات

:::warning

استفاده از هندل نامعتبر سرور شما رو کرش می‌کنه! یه هندل معتبر با استفاده از [fopen](fopen) یا [ftemp](ftemp) بگیرین.

:::

## توابع مرتبط

- [fopen](fopen): باز کردن یک فایل.
- [fclose](fclose): بستن یک فایل.
- [ftemp](ftemp): ایجاد یک جریان فایل موقت.
- [fremove](fremove): حذف یک فایل.
- [fwrite](fwrite): نوشتن در یک فایل.
- [fputchar](fputchar): قرار دادن یک کاراکتر در فایل.
- [fgetchar](fgetchar): گرفتن یک کاراکتر از فایل.
- [fblockwrite](fblockwrite): نوشتن بلوک‌های داده در فایل.
- [fblockread](fblockread): خواندن بلوک‌های داده از فایل.
- [fseek](fseek): پرش به یک کاراکتر خاص در فایل.
- [flength](flength): گرفتن طول فایل.
- [fexist](fexist): بررسی، اگه فایل وجود داشته باشه.
- [fmatch](fmatch): بررسی، اگه الگوها با نام فایل مطابقت داشته باشن.
- [ftell](ftell): گرفتن موقعیت فعلی در فایل.
- [fflush](fflush): فلاش کردن فایل روی دیسک (اطمینان از تکمیل تمام نوشته‌ها).
- [fstat](fstat): برگرداندن اندازه و زمان فایل.
- [frename](frename): تغییر نام فایل.
- [fcopy](fcopy): کپی فایل.
- [filecrc](filecrc): برگرداندن مقدار CRC 32-bit فایل.
- [diskfree](diskfree): برگرداندن فضای خالی دیسک.
- [fattrib](fattrib): تنظیم خصوصیات فایل.
- [fcreatedir](fcreatedir): ایجاد یک دایرکتوری.