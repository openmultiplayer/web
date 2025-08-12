---
title: GetPlayerWeaponState
sidebar_label: GetPlayerWeaponState
description: وضعیت اسلحه بازیکن را بررسی می‌کنه.
tags: ["player"]
---

## توضیحات

وضعیت اسلحه بازیکن را بررسی می‌کنه.

| نام     | توضیحات                                         |
| -------- | --------------------------------------------------- |
| playerid | ID بازیکنی که می‌خوای وضعیت اسلحه‌اش رو دریافت کنی. |

## مقادیر برگشتی

[وضعیت اسلحه بازیکن](../resources/weaponstates).

**0** اگه بازیکن مشخص شده وجود نداشته باشه.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/wstate", true))
    {
        new WEAPONSTATE:state = GetPlayerWeaponState(playerid);

        static weaponStates[4][64] = 
        {
            "Current weapon has no ammo remaining",
            "Current weapon has a single bullet left",
            "Current weapon has more than one bullet left",
            "Reloading current weapon"
        };

        new string[144];
        format(string, sizeof(string), "Your weapon state: %s", weaponStates[state]);
        SendClientMessage(playerid, -1, string);
        return 1;
    }
    return 0;
}
```

## توابع مرتبط

- [GivePlayerWeapon](GivePlayerWeapon): دادن اسلحه به بازیکن.

## منابع مرتبط

- [Weapon States](../resources/weaponstates)