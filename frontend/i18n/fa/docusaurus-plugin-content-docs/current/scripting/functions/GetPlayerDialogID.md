---
title: GetPlayerDialogID
sidebar_label: GetPlayerDialogID
description: دریافت ID دیالوگ نمایش داده شده به بازیکن.
tags: ["player", "dialog"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

دریافت ID دیالوگ نمایش داده شده به بازیکن.

| نام     | توضیحات           |
|----------|-----------------------|
| playerid | ID بازیکن. |

## مقادیر برگشتی

ID دیالوگ را برمی گرداند.

یا **INVALID_DIALOG_ID** اگر بازیکن متصل نباشد یا هیچ دیالوگی باز نداشته باشد.

## مثال‌ها

```c
new dialogID = GetPlayerDialogID(playerid);
if (dialogID != INVALID_DIALOG_ID)
{
    // The player has an open dialog
}
```

## توابع مرتبط

- [GetPlayerDialogData](GetPlayerDialogData): دریافت داده‌های دیالوگ نمایش داده شده به بازیکن.
- [ShowPlayerDialog](ShowPlayerDialog): نمایش دیالوگ به بازیکن (فقط یکی در هر زمان).

## کالبک‌های مرتبط

- [OnDialogResponse](../callbacks/OnDialogResponse): زمانی که بازیکن به دیالوگ پاسخ می‌دهد فراخوانی می‌شود.