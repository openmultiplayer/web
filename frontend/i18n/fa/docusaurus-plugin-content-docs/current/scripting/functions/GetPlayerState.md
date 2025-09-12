---
title: GetPlayerState
sidebar_label: GetPlayerState
description: دریافت وضعیت فعلی بازیکن.
tags: ["player"]
---

## توضیحات

دریافت وضعیت فعلی بازیکن.

| نام     | توضیحات                                       |
| -------- | ------------------------------------------------- |
| playerid | ID بازیکن برای دریافت وضعیت فعلی‌اش. |

## مقادیر برگشتی

وضعیت فعلی بازیکن به صورت integer (مراجعه کنید به: [Player States](../resources/playerstates)).

## مثال‌ها

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    new PLAYER_STATE:state = GetPlayerState(killerid); // Get the killer's state

    if (state == PLAYER_STATE_DRIVER) // If the killer was in a vehicle
    {
        //It's a driver drive-by, take some money
        GivePlayerMoney(killerid, -10000);
    }
    return 1;
}
```

## توابع مرتبط

- [GetPlayerSpecialAction](GetPlayerSpecialAction): دریافت عمل ویژه فعلی بازیکن.
- [SetPlayerSpecialAction](SetPlayerSpecialAction): تنظیم عمل ویژه بازیکن.

## کالبک‌های مرتبط

- [OnPlayerStateChange](../callbacks/OnPlayerStateChange): زمانی که بازیکن وضعیت تغییر می‌دهد فراخوانی می‌شود.

## منابع مرتبط

- [Player States](../resources/playerstates)