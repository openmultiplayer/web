---
title: SetPlayerArmedWeapon
sidebar_label: SetPlayerArmedWeapon
description: مشخص می‌کنه که بازیکن کدوم اسلحه (که از قبل داره) رو در دست بگیره.
tags: ["player"]
---

## توضیحات

مشخص می‌کنه که بازیکن کدوم اسلحه (که از قبل داره) رو در دست بگیره.

| نام            | توضیح                                                                          |
| --------------- | ------------------------------------------------------------------------------------ |
| playerid        | ID بازیکنی که می‌خوایم اسلحه‌اش رو مسلح کنیم.                                           |
| WEAPON:weaponid | ID [اسلحه](../resources/weaponids) که بازیکن باید باهاش مسلح بشه. |

## مقادیر بازگشتی

**1** - function با موفقیت اجرا شد. موفقیت حتی وقتی که function اجرا نشه هم برگردونده می‌شه (بازیکن اسلحه مشخص شده رو نداره یا اسلحه نامعتبره).

**0** - اجرای function ناموفق بوده. بازیکن متصل نیست.

## مثال‌ها

```c
public OnPlayerUpdate(playerid)
{
    SetPlayerArmedWeapon(playerid, WEAPON_FIST); // aslaheharo khamosh mikone
    return 1;
}

// SMG driveby by [03]Garsino
public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (newstate == PLAYER_STATE_DRIVER || newstate == PLAYER_STATE_PASSENGER)
    {
        new
            weapon,
            ammo;

        GetPlayerWeaponData(playerid, WEAPON_SLOT_MACHINE_GUN, weapon, ammo); // SMG weapon bazikon ro dar slot 4 migirim (WEAPON_SLOT_MACHINE_GUN)
        SetPlayerArmedWeapon(playerid, weapon); // Bazikon ro ba SMG baraye driveby set mikonim
    }
    return 1;
}
```

## نکات

:::tip

این function بازیکن رو با اسلحه‌ای که از قبل داره مسلح می‌کنه؛ اسلحه جدید بهش نمی‌ده. برای اون از GivePlayerWeapon استفاده کن.

:::

## توابع مرتبط

- [GivePlayerWeapon](GivePlayerWeapon): به بازیکن اسلحه می‌ده.
- [GetPlayerWeapon](GetPlayerWeapon): چک می‌کنه که بازیکن فعلا چه اسلحه‌ای در دست داره.

## توابع مرتبط

- [Weapon IDs](../resources/weaponids)
- [Weapon Slots](../resources/weaponslots)