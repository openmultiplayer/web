---
title: GetWeaponSlot
sidebar_label: GetWeaponSlot
description: اسلات یه اسلحه رو دریافت می‌کنه.
tags: ["weapon"]
---

<versionWarn version='omp v1.1.0.2612' />

## توضیحات

اسلات یه اسلحه رو دریافت می‌کنه.

| نام             | توضیحات                                          |
| --------------- | ------------------------------------------------ |
| WEAPON:weaponid | ID اسلحه‌ای که می‌خوای اسلاتش رو بگیری.          |

## مقادیر برگشتی

شماره [اسلات اسلحه](../resources/weaponslots) (0 - 12)

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/weaponslot", true) == 0)
    {
        new WEAPON:weaponid = GetPlayerWeapon(playerid); // will store the id of the weapon the player is currently holding
        new WEAPON_SLOT:slot = GetWeaponSlot(weaponid); // will store the id of the weapon slot
        SendClientMessage(playerid, -1, "Your weapon is occupying the slot %d.", slot); // sends a formatted message to the player
        return 1;
    }
    return 0;
}
```

## توابع مرتبط

- [GetPlayerWeapon](GetPlayerWeapon): دریافت ID اسلحه‌ای که بازیکن در حال حاضر در دست داره.
- [GetPlayerWeaponData](GetPlayerWeaponData): دریافت اسلحه و تیر در اسلات مشخص شده بازیکن (مثلاً اسلحه توی اسلات 'SMG').
- [GetPlayerAmmo](GetPlayerAmmo): دریافت مقدار تیر اسلحه فعلی بازیکن.
- [SetPlayerArmedWeapon](SetPlayerArmedWeapon): تنظیم اینکه بازیکن کدوم اسلحه (که قبلاً داره) رو در دست بگیره.
- [ResetPlayerWeapon](ResetPlayerWeapons): حذف همه اسلحه‌ها از بازیکن.
- [RemovePlayerWeapon](RemovePlayerWeapon): حذف یه اسلحه خاص از بازیکن.

## منابع مرتبط

- [اسلات‌های اسلحه](../resources/weaponslots).