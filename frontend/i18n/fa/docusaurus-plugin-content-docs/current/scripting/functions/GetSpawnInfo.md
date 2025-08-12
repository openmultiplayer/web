---
title: GetSpawnInfo
sidebar_label: GetSpawnInfo
description: داده‌های spawn فعلی یه بازیکن رو برمی‌گردونه، جایی که دفعه بعد spawn می‌شه.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

داده‌های spawn فعلی یه بازیکن رو برمی‌گردونه، جایی که دفعه بعد spawn می‌شه.

| نام            | توضیحات                                                                     |
|-----------------|---------------------------------------------------------------------------------|
| playerid        | ID بازیکنی که می‌خوای اطلاعات spawn اش رو دریافت کنی.                    |
| &team           | متغیری برای ذخیره ID تیم که به صورت reference پاس داده می‌شه.                |
| &skin           | متغیری برای ذخیره ID اسکین که به صورت reference پاس داده می‌شه.                |
| &Float:spawnX   | متغیر Float برای ذخیره مختصات X که به صورت reference پاس داده می‌شه.     |
| &Float:spawnY   | متغیر Float برای ذخیره مختصات Y که به صورت reference پاس داده می‌شه.     |
| &Float:spawnZ   | متغیر Float برای ذخیره مختصات Z که به صورت reference پاس داده می‌شه.     |
| &Float:angle    | متغیر Float برای ذخیره زاویه facing که به صورت reference پاس داده می‌شه. |
| &WEAPON:weapon1 | متغیری برای ذخیره weapon1 که به صورت reference پاس داده می‌شه.                |
| &ammo1          | متغیری برای ذخیره ammo1 که به صورت reference پاس داده می‌شه.                  |
| &WEAPON:weapon2 | متغیری برای ذخیره weapon2 که به صورت reference پاس داده می‌شه.                |
| &ammo2          | متغیری برای ذخیره ammo2 که به صورت reference پاس داده می‌شه.                  |
| &WEAPON:weapon3 | متغیری برای ذخیره weapon3 که به صورت reference پاس داده می‌شه.                |
| &ammo3          | متغیری برای ذخیره ammo3 که به صورت reference پاس داده می‌شه.                  |

## مقادیر برگشتی

`true` - تابع با موفقیت اجرا شد.

`false` - تابع موفق به اجرا نشد. بازیکن مشخص شده متصل نیست.

## مثال‌ها

```c
public OnPlayerRequestClass(playerid, classid)
{
    SetSpawnInfo(playerid, NO_TEAM, 293, 1139.4786, -1761.3989, 13.5844, 0.0000, WEAPON_SAWEDOFF, 36, WEAPON_UZI, 150, WEAPON_FIST, 0);

    new 
        team,
        skin,
        Float:spawnX,
        Float:spawnY,
        Float:spawnZ,
        Float:angle,
        WEAPON:weapon1,
        ammo1,
        WEAPON:weapon2,
        ammo2,
        WEAPON:weapon3,
        ammo3;
    
    GetSpawnInfo(playerid, team, skin, spawnX, spawnY, spawnZ, angle, weapon1, ammo1, weapon2, ammo2, weapon3, ammo3);
    // team = NO_TEAM
    // skin = 293
    // spawnX = 1139.4786
    // spawnY = -1761.3989
    // spawnZ = 13.5844
    // angle = 0.0000
    // weapon1 = WEAPON_SAWEDOFF
    // ammo1 = 36
    // weapon2 = WEAPON_UZI
    // ammo2 = 150
    // weapon3 = WEAPON_FIST
    // ammo3 = 0
}
```

## توابع مرتبط

- [SetSpawnInfo](SetSpawnInfo): این تابع برای تغییر اطلاعات spawn یه بازیکن خاص استفاده می‌شه.