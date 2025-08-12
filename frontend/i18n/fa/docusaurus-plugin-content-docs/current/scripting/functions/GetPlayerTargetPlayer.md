---
title: GetPlayerTargetPlayer
sidebar_label: GetPlayerTargetPlayer
description: بررسی اینکه بازیکن به کی نشانه گرفته است.
tags: ["player"]
---

## توضیحات

بررسی اینکه بازیکن به کی نشانه گرفته است.

| نام     | توضیحات                                |
| -------- | ------------------------------------------ |
| playerid | ID بازیکن برای دریافت هدفش. |

## مقادیر برگشتی

ID بازیکن هدف گرفته شده، یا `INVALID_PLAYER_ID` اگر هیچ‌کدام نباشد.

## مثال‌ها

```c
public OnPlayerUpdate(playerid)
{
    // Store the ID
    new playerTargetId = GetPlayerTargetPlayer(playerid);
    if (playerTargetId != INVALID_PLAYER_ID && GetPlayerTeam(playerTargetId) == GetPlayerTeam(playerid))
    {
        GameTextForPlayer(playerid, "~R~do not shoot at team-mates!", 5000, 3);
    }
}
```

## نکات

:::warning

برای joypads/controllerها و بعد از فاصله خاصی کار نمی‌کند. برای تفنگ تک‌تیرانداز کار نمی‌کند، چون به چیزی lock نمی‌شود و به همین دلیل نمی‌تواند و نخواهد بازیکنی را برگرداند.

:::

## توابع مرتبط

- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): دریافت بردار جلوی دوربین بازیکن

## کالبک‌های مرتبط

- [OnPlayerGiveDamage](../callbacks/OnPlayerGiveDamage): زمانی که بازیکن آسیب می‌زند فراخوانی می‌شود.
- [OnPlayerTakeDamage](../callbacks/OnPlayerTakeDamage): زمانی که بازیکن آسیب می‌بیند فراخوانی می‌شود.