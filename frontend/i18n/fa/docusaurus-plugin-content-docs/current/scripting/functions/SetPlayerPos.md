---
title: SetPlayerPos
sidebar_label: SetPlayerPos
description: موقعیت بازیکن را تنظیم کنید.
tags: ["player"]
---

## توضیحات

موقعیت بازیکن را تنظیم کنید.

| نام     | توضیحات                    |
| -------- | ------------------------------ |
| playerid | شناسه بازیکن. |
| Float:x  | مختصات X برای تنظیم بازیکن.  |
| Float:y  | مختصات Y برای تنظیم بازیکن.  |
| Float:z  | مختصات Z برای تنظیم بازیکن.  |

## مقادیر بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناکام بود. بازیکن متصل نیست.

## مثال‌ها

```c
// بازیکن را به مرکز San Andreas تلپورت کنید
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/spawn", true) == 0)
    {
        SetPlayerPos(playerid, 0.0, 0.0, 3.0);
        return 1;
    }
    return 0;
}
```

## نکته‌ها

::tip

- اگر بازیکن در خودرو باشد، از [RemovePlayerFromVehicle](RemovePlayerFromVehicle) قبل از SetPlayerPos استفاده کنید.

:::

## توابع مرتبط

- [GetPlayerPos](GetPlayerPos): موقعیت بازیکن را دریافت کنید.
- [SetPlayerPosFindZ](SetPlayerPosFindZ): موقعیت بازیکن را تنظیم کنید و Z را به طور خودکار پیدا کنید.
- [SetPlayerFacingAngle](SetPlayerFacingAngle): جهت بازیکن را تنظیم کنید.
- [IsPlayerInRangeOfPoint](IsPlayerInRangeOfPoint): بررسی کنید که آیا بازیکن در برد یک نقطه است.