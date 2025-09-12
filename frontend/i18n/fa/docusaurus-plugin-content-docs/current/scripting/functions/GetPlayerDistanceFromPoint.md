---
title: GetPlayerDistanceFromPoint
sidebar_label: GetPlayerDistanceFromPoint
description: محاسبه فاصله بین بازیکن و یک نقطه در نقشه.
tags: ["player"]
---

## توضیحات

محاسبه فاصله بین بازیکن و یک نقطه در نقشه.

| نام     | توضیحات                                          |
| -------- | ---------------------------------------------------- |
| playerid | ID بازیکن برای محاسبه فاصله. |
| Float:x  | مختصات X در نقشه.                                |
| Float:y  | مختصات Y در نقشه.                                |
| Float:z  | مختصات Z در نقشه.                                |

## مقادیر برگشتی

فاصله بین بازیکن و نقطه به صورت float.

## مثال‌ها

```c
/* when the player types '/vend' into the chat box, they'll see this.*/
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/vend", true) == 0)
    {
        new
            Float:distance = GetPlayerDistanceFromPoint(playerid, 237.9, 115.6, 1010.2),
            string[64];

        format(string, sizeof(string), "You're %0.2f meters away from the vending machine.", distance);
        SendClientMessage(playerid, 0xA9C4E4FF, string);
        return 1;
    }
    return 0;
}
```

## توابع مرتبط

- [IsPlayerInRangeOfPoint](IsPlayerInRangeOfPoint): بررسی اینکه آیا بازیکن در محدوده یک نقطه است.
- [GetVehicleDistanceFromPoint](GetVehicleDistanceFromPoint): دریافت فاصله بین وسیله نقلیه و نقطه.
- [GetPlayerPos](GetPlayerPos): دریافت موقعیت بازیکن.