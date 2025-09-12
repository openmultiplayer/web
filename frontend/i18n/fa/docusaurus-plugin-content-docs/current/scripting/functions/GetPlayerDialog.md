---
title: GetPlayerDialog
sidebar_label: GetPlayerDialog
description: شناسه دیالوگی که در حال حاضر به بازیکن نشان داده می‌شود را دریافت می‌کند.
tags: ["player", "dialog"]
---

:::warning

این تابع منسوخ شده است. از [GetPlayerDialogID](GetPlayerDialogID) استفاده کنید.

:::

## توضیحات

شناسه دیالوگی که در حال حاضر به بازیکن نشان داده می‌شود را دریافت می‌کند.

| نام      | توضیحات           |
|----------|-------------------|
| playerid | شناسه بازیکن. |

## مقادیر بازگشتی

شناسه دیالوگ را برمی‌گرداند.

یا **INVALID_DIALOG_ID** اگر بازیکن متصل نباشد یا دیالوگی باز نداشته باشد.

## مثال‌ها

```c
new dialogID = GetPlayerDialog(playerid);
if (dialogID != INVALID_DIALOG_ID)
{
    // The player has an open dialog
}
```

## تابع‌های مرتبط

- [GetPlayerDialogData](GetPlayerDialogData): داده‌های دیالوگی که در حال حاضر به بازیکن نشان داده می‌شود را دریافت می‌کند.
- [ShowPlayerDialog](ShowPlayerDialog): یک کادر دیالوگ همزمان (فقط یکی در هر زمان) به بازیکن نشان می‌دهد.

## کالبک‌های مرتبط

- [OnDialogResponse](../callbacks/OnDialogResponse): زمانی که بازیکن به دیالوگ پاسخ می‌دهد فراخوانی می‌شود.