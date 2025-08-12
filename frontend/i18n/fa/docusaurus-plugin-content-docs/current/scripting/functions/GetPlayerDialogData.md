---
title: GetPlayerDialogData
sidebar_label: GetPlayerDialogData
description: داده‌های دیالوگی که در حال حاضر به بازیکن نشان داده می‌شود را دریافت می‌کند.
tags: ["player", "dialog"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

داده‌های دیالوگی که در حال حاضر به بازیکن نشان داده می‌شود را دریافت می‌کند.

| نام                  | توضیحات                                                           |
|---------------------|-------------------------------------------------------------------|
| playerid            | شناسه بازیکنی که می‌خواهید داده‌هایش را بگیرید.                 |
| &DIALOG_STYLE:style | متغیری برای ذخیره کردن استایل، که با reference پاس می‌شود.        |
| title[]             | آرایی برای ذخیره کردن عنوان، که با reference پاس می‌شود.   |
| titleSize           | اندازه آرایه عنوان.                                            |
| body[]              | آرایی برای ذخیره کردن بدنه، که با reference پاس می‌شود.    |
| bodySize            | اندازه آرایه بدنه.                                             |
| button1[]           | آرایی برای ذخیره کردن دکمو1، که با reference پاس می‌شود. |
| button1Size         | اندازه آرایه دکمو1.                                          |
| button2[]           | آرایی برای ذخیره کردن دکمو2، که با reference پاس می‌شود. |
| button2Size         | اندازه آرایه دکمو2.                                          |

## مقدار بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع اجرا نشد. این یعنی بازیکن متصل نیست یا دیالوگی باز ندارد.

## مثال‌ها

```c
enum
{
    DIALOG_LOGIN
}

ShowPlayerDialog(playerid, DIALOG_LOGIN, DIALOG_STYLE_INPUT, "Login", "Enter your password below:", "Login", "Cancel");

new 
    DIALOG_STYLE:style,
    title[32],
    body[64],
    button1[16],
    button2[16];

GetPlayerDialogData(playerid, style, title, sizeof(title), body, sizeof(body), button1, sizeof(button1), button2, sizeof(button2));
```

## تابع‌های مرتبط

- [ShowPlayerDialog](ShowPlayerDialog): یک کادر دیالوگ همزمان (فقط یکی در هر زمان) به بازیکن نشان می‌دهد.
- [HidePlayerDialog](HidePlayerDialog): دیالوگی که در حال حاضر به بازیکن نشان داده می‌شود را پنهان می‌کند.
- [GetPlayerDialogID](GetPlayerDialogID): شناسه دیالوگی که در حال حاضر به بازیکن نشان داده می‌شود را دریافت می‌کند.

## کالبک‌های مرتبط

- [OnDialogResponse](../callbacks/OnDialogResponse): زمانی که بازیکن به دیالوگ پاسخ می‌دهد فراخوانی می‌شود.