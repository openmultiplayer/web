---
title: GetWeaponName
sidebar_label: GetWeaponName
description: اسم یه اسلحه رو دریافت می‌کنه.
tags: []
---

## توضیحات

اسم یه اسلحه رو دریافت می‌کنه.

| نام                   | توضیحات                                                                     |
| --------------------- | --------------------------------------------------------------------------- |
| WEAPON:weaponid       | ID اسلحه‌ای که می‌خوای اسمش رو بگیری.                                        |
| weapon[]              | آرایه‌ای برای ذخیره اسم اسلحه که بصورت reference پاس داده می‌شه.           |
| len = sizeof (weapon) | حداکثر طول اسم اسلحه برای ذخیره. باید sizeof(name) باشه.                     |

## مقادیر برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع اجرا نشد. اسلحه مشخص شده وجود نداره.

اسم اسلحه در آرایه مشخص شده ذخیره می‌شه.

## مثال‌ها

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    // Variable declarations, with killerName having the default value of "World".
    new
        weaponName[32],
        string[64],
        playerName[MAX_PLAYER_NAME],
        killerName[MAX_PLAYER_NAME] = "World";

    // Get the weapon/ reason and player name
    GetWeaponName(reason, weaponName, sizeof(weaponName));
    GetPlayerName(playerid, playerName, sizeof(playerName));

    // Check if the player was killed by another player or was it because of environment
    if (killerid != INVALID_PLAYER_ID)
    {
        // We empty the killerName string by setting the first index to EOS (End of String)
        killerName[0] = EOS;
        // Get the killer's name
        GetPlayerName(killerid, killerName, sizeof(killerName));
    }

    // Send a message to the public chat that the X has caused death of Y with Z as the reason
    format(string, sizeof(string), "%s (%i) has wasted %s (%i) using a %s.", killerName, killerid, playerName, playerid, weaponName);
    SendClientMessageToAll(0xFFFFFFAA, string);
    return 1;
}
```

## توابع مرتبط

- [GetPlayerWeapon](GetPlayerWeapon): چک کردن اینکه بازیکن چه اسلحه‌ای در دست داره.
- [AllowInteriorWeapons](AllowInteriorWeapons): تعیین اینکه آیا می‌شه از اسلحه در اینتریورها استفاده کرد یا نه.
- [GivePlayerWeapon](GivePlayerWeapon): دادن اسلحه به یه بازیکن.