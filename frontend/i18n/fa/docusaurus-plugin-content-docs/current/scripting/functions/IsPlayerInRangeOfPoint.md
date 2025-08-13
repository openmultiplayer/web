---
title: IsPlayerInRangeOfPoint
sidebar_label: IsPlayerInRangeOfPoint
description: چک می‌کنه که آیا بازیکن در محدوده یه نقطه هست یا نه.
tags: ["player"]
---

## توضیحات

چک می‌کنه که آیا بازیکن در محدوده یه نقطه هست یا نه. این تابع native سریع‌تر از پیاده‌سازی PAWN با فرمول فاصله هست.

| نام         | توضیحات                                                                    |
| ----------- | -------------------------------------------------------------------------- |
| playerid    | ID بازیکن.                                                                 |
| Float:range | دورترین فاصله‌ای که بازیکن می‌تونه از نقطه داشته باشه تا در محدوده باشه.    |
| Float:x     | مختصات X نقطه‌ای که باید محدوده‌ش چک بشه.                                  |
| Float:y     | مختصات Y نقطه‌ای که باید محدوده‌ش چک بشه.                                  |
| Float:z     | مختصات Z نقطه‌ای که باید محدوده‌ش چک بشه.                                  |

## مقادیر برگشتی

**true** - بازیکن در محدوده نقطه هست.

**false** - بازیکن در محدوده نقطه نیست.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/stadium", true))
    {
        if (IsPlayerInRangeOfPoint(playerid, 7.0, 2695.6880, -1704.6300, 11.8438))
        {
            SendClientMessage(playerid, 0xFFFFFFFF, "You are near the stadium entrance!");
        }
        return 1;
    }
    return 0;
}
```

## توابع مرتبط

- [GetPlayerDistanceFromPoint](GetPlayerDistanceFromPoint): دریافت فاصله بین بازیکن و یه نقطه.
- [GetVehicleDistanceFromPoint](GetVehicleDistanceFromPoint): دریافت فاصله بین وسیله نقلیه و یه نقطه.
- [GetPlayerPos](GetPlayerPos): دریافت موقعیت بازیکن.