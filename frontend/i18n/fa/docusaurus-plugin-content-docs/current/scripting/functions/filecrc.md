---
title: filecrc
sidebar_label: filecrc
description: برگرداندن مقدار 32-بیتی CRC یک فایل.
tags: ["file management"]
---

<VersionWarn version='omp v1.1.0.2612' />

<LowercaseNote />

## توضیحات

برگرداندن مقدار 32-بیتی CRC یک فایل.

| نام              | توضیحات      |
| ---------------- | ------------ |
| const filename[] | نام فایل.    |

## برگشتی

مقدار 32-بیتی CRC فایل، یا **0** اگه فایل نتونه باز بشه.

## مثال‌ها

```c
new crc = filecrc("file.txt");

if (crc)
{
    // موفق
    printf("CRC value = %d", crc);
}
else
{
    // خطا
    print("The file \"file.txt\" does not exists, or can't be opened.");
}
```

## نکات

:::tip

- مقدار CRC اندازه‌گیری مفیدیه برای چک کردن اینکه آیا محتویات فایل در طول انتقال تغییر کرده یا ویرایش شده (به شرطی که مقدار CRC فایل اصلی ذخیره شده باشه).
- مقدار CRC که این تابع برمیگردونه همونیه که در آرشیوهای ZIP (PKZip, WinZip) و ابزارها و فرمت‌های فایل "SFV" استفاده میشه.

:::

## توابع مرتبط

- [fopen](fopen): باز کردن فایل.
- [fclose](fclose): بستن فایل.
- [ftemp](ftemp): ساخت جریان فایل موقت.
- [fremove](fremove): حذف فایل.
- [fwrite](fwrite): نوشتن در فایل.
- [fputchar](fputchar): قرار دادن کاراکتر در فایل.
- [fgetchar](fgetchar): گرفتن کاراکتر از فایل.
- [fblockwrite](fblockwrite): نوشتن بلاک‌های داده در فایل.
- [fblockread](fblockread): خواندن بلاک‌های داده از فایل.
- [fseek](fseek): پرش به کاراکتر مشخص در فایل.
- [flength](flength): گرفتن طول فایل.
- [fexist](fexist): چک کردن وجود فایل.
- [fmatch](fmatch): چک کردن تطبیق الگو با نام فایل.
- [ftell](ftell): گرفتن موقعیت فعلی در فایل.
- [fflush](fflush): کردن فایل روی دیسک (اطمینان از تمام شدن نوشتن‌ها).
- [fstat](fstat): برگرداندن اندازه و زمان فایل.
- [frename](frename): تغییر نام فایل.
- [fcopy](fcopy): کپی فایل.
- [diskfree](diskfree): برگرداندن فضای آزاد دیسک.
- [fattrib](fattrib): تنظیم ویژگی‌های فایل.
- [fcreatedir](fcreatedir): ساخت پوشه.