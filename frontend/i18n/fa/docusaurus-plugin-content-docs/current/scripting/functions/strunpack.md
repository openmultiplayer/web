---
title: strunpack
sidebar_label: strunpack
description: این تابع برای unpack کردن یک رشته استفاده میشه.
tags: ["string"]
---

<LowercaseNote />

## توضیحات

این تابع برای unpack کردن یک رشته استفاده می‌شود.

| نام                         | توضیحات                                                                 |
| --------------------------- | --------------------------------------------------------------------------- |
| dest[]                      | رشته مقصد که می‌خوای رشته unpack شده رو توش ذخیره کنی، به صورت reference پاس داده میشه. |
| const source[]              | رشته اصلی و منبع که pack شده.                                         |
| maxlength = sizeof (string) | حداکثر اندازه‌ای که می‌خوای درج کنی.                                                 |

## مقدار برگشتی

تعداد کاراکترهایی که pack شده‌اند.

## مثال‌ها

```c
new string[17];
new pstring[17 char] = !"Hi, how are you?";
strunpack(string, pstring);
```

## توابع مرتبط

- [ispacked](ispacked): چک کن که آیا رشته داده شده pack هست یا نه.
- [strpack](strpack): این تابع برای pack کردن یک رشته استفاده میشه.
- [strcmp](strcmp): دو رشته رو با هم مقایسه کن تا ببینی یکی هستن یا نه.
- [strfind](strfind): توی یک رشته دنبال رشته‌ای دیگه بگرد.
- [strins](strins): متن رو توی یک رشته درج کن.
- [strlen](strlen): طول یک رشته رو بدست بیار.
- [strmid](strmid): قسمتی از یک رشته رو توی رشته‌ای دیگه کپی کن.
- [strpack](strpack): یک رشته رو توی رشته مقصد pack کن.
- [strval](strval): یک رشته رو به عدد تبدیل کن.
- [strcat](strcat): دو رشته رو به هم وصل کن.
- [strdel](strdel): قسمتی از یک رشته رو پاک کن.
