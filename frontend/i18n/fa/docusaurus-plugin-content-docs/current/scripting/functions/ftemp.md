---
title: ftemp
sidebar_label: ftemp
description: توی پوشه‌های "tmp"، "temp" یا root یه فایل با اسم تصادفی میسازه برای خوندن و نوشتن.
tags: ["file management"]
---

<LowercaseNote />

## توضیحات

توی پوشه‌های "tmp"، "temp" یا root یه فایل با اسم تصادفی میسازه برای خوندن و نوشتن. فایل بعد از استفاده fclose() روی فایل حذف میشه.

## مثال‌ها

```c
// ساختن یه فایل موقت
new File:t_handle = ftemp();

// تعریف "handle"
new File:handle;

// تعریف "g_char"
new g_char;

// چک کن که فایل موقت باز شده یا نه
if (t_handle)
{
    // موفق بود

    // باز کردن "file.txt" با حالت "فقط خوندن" و چک کردن که فایل باز شده یا نه
    if (handle = fopen("file.txt", io_read))
    {
        // همه کاراکترها رو از "file.txt" بگیر
        while((g_char = fgetchar(handle, 0, false)) != EOF)
        {
            // کاراکتر رو با حروف کوچیک توی فایل موقت بنویس
            fputchar(t_handle, tolower(g_char), false);
        }

        // بستن "file.txt"
        fclose(handle);

        // pointer فایل موقت رو به اولین بایت بذار
        fseek(t_handle, _, seek_begin);

        // باز کردن "file1.txt" با حالت "فقط نوشتن"، و چک کردن که فایل باز شده یا نه
        if (handle = fopen("file1.txt", io_write))
        {
            // موفق بود

            // همه کاراکترها رو از فایل موقت بگیر
            while((g_char = fgetchar(t_handle, 0, false)) != EOF)
            {
                // کاراکتر رو توی "file1.txt" بنویس
                fputchar(handle, g_char, false);
            }

            // بستن "file1.txt"
            fclose(handle);

            // pointer فایل موقت رو به اولین بایت بذار
            fseek(t_handle, _, seek_begin);
        }
        else
        {
            // خطا
            print("Failed to open file \"file1.txt\".");
        }

        // باز کردن "file2.txt" با حالت "فقط نوشتن"، و چک کردن که فایل باز شده یا نه
        if (handle = fopen("file2.txt", io_write))
        {
            // موفق بود

            // همه کاراکترها رو از فایل موقت بگیر
            while((g_char = fgetchar(t_handle, 0, false)) != EOF)
            {
                // کاراکتر رو توی "file2.txt" بنویس
                fputchar(handle, g_char, false);
            }

            // بستن "file2.txt"
            fclose(handle);
        }
        else
        {
            // خطا
            print("Failed to open file \"file2.txt\".");
        }
    }
    else
    {
        // خطا
        print("Failed to open file \"file.txt\".");
    }

    // بستن فایل موقت
    fclose(t_handle);
}
else
{
    // خطا
    print("Failed to create a temporary file stream.");
}
```

## نکات

:::warning

این تابع میتونه سرور رو کرش کنه اگه پوشه درست ساخته نشده باشه.

:::

## توابع مرتبط

- [fopen](fopen): باز کردن فایل.
- [fclose](fclose): بستن فایل.
- [fremove](fremove): حذف فایل.
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