---
title: GetPlayerWeaponData
sidebar_label: GetPlayerWeaponData
description: دریافت اسلحه و مهمات در اسلات اسلحه خاص بازیکن.
tags: ["player"]
---

## توضیحات

دریافت اسلحه و مهمات در اسلات اسلحه خاص بازیکن (مثل اسلحه در اسلات 'SMG').

| نام             | توضیحات                                                                                |
|------------------|--------------------------------------------------------------------------------------------|
| playerid         | ID بازیکنی که می‌خواهید داده‌های اسلحه‌اش را دریافت کنید.                                        |
| WEAPON_SLOT:slot | [اسلات اسلحه](../resources/weaponslots) برای دریافت داده (0-12).                        |
| &WEAPON:weapons  | متغیری برای ذخیره [ID اسلحه](../resources/weaponids)، به صورت reference پاس داده می‌شود. |
| &ammo            | متغیری برای ذخیره مهمات، به صورت reference پاس داده می‌شود.                                |

## مقادیر برگشتی

**1** - تابع با موفقیت اجرا شد.

**0** - تابع در اجرا ناموفق بود. بازیکن متصل نیست و/یا اسلات اسلحه مشخص شده نامعتبر است (معتبر 0-12 است).

## مثال‌ها

```c
// Common use: get all weapons and store info in an array containing 13 slots
// The first value is the weapon ID, and second is the ammo

new weapons[13][2];

for (new i = 0; i <= 12; i++)
{
    GetPlayerWeaponData(playerid, WEAPON_SLOT:i, weapons[i][0], weapons[i][1]);
}
```

مثال دیگر:

```c
new 
    weaponid,
    ammo;

// Get the player weapon ID and ammo in the PISTOL slot
GetPlayerWeaponData(playerid, WEAPON_SLOT_PISTOL, weaponid, ammo);
```

## نکات

:::tip

اسلحه‌های قدیمی که مهمات ندارند هنوز هم برگردانده می‌شوند.

:::

## توابع مرتبط

- [GetPlayerWeapon](GetPlayerWeapon): بررسی اینکه بازیکن در حال حاضر کدام اسلحه را در دست دارد.
- [GivePlayerWeapon](GivePlayerWeapon): دادن اسلحه به بازیکن.

## منابع مرتبط

- [Weapon Slots](../resources/weaponslots)
- [Weapon IDs](../resources/weaponids)