---
title: AddPlayerClassEx
sidebar_label: AddPlayerClassEx
description: این تابع دقیقاً مشابه تابع AddPlayerClass است، با اضافه شدن پارامتر team.
tags: ["player", "class"]
---

## توضیحات

این تابع دقیقاً مشابه تابع AddPlayerClass است، با اضافه شدن پارامتر team.

| نام           | توضیحات                                                      |
| -------------- | ---------------------------------------------------------------- |
| team           | تیمی که می‌خواهید بازیکن در آن spawn شود.                        |
| skin           | [اسکینی](../resources/skins) که بازیکن با آن spawn خواهد شد. |
| Float:spawnX   | مختصات X نقطه spawn این کلاس.                |
| Float:spawnY   | مختصات Y نقطه spawn این کلاس.                |
| Float:spawnZ   | مختصات Z نقطه spawn این کلاس.                |
| Float:angle    | جهتی که بازیکن باید بعد از spawn رو به آن باشد.    |
| WEAPON:weapon1 | اولین سلاح spawn برای بازیکن.                           |
| ammo1          | مقدار مهمات برای سلاح spawn اصلی.           |
| WEAPON:weapon2 | دومین سلاح spawn برای بازیکن.                          |
| ammo2          | مقدار مهمات برای دومین سلاح spawn.            |
| WEAPON:weapon3 | سومین سلاح spawn برای بازیکن.                           |
| ammo3          | مقدار مهمات برای سومین سلاح spawn.             |

## مقدار بازگشتی

ID کلاسی که همین الان اضافه شد.

319 اگر محدودیت کلاس (320) رسیده باشد. بالاترین ID کلاس ممکن 319 است.

## مثال‌ها

```c
public OnGameModeInit()
{
    // بازیکن‌ها می‌توانند spawn شوند به عنوان:
    // اسکین CJ (ID 0) در تیم 1.
    // اسکین The Truth (ID 1) در تیم 2.
    AddPlayerClassEx(1, 0, 1958.33, 1343.12, 15.36, 269.15, WEAPON_SAWEDOFF, 36, WEAPON_UZI, 150, WEAPON_FIST, 0); // CJ
    AddPlayerClassEx(2, 1, 1958.33, 1343.12, 15.36, 269.15, WEAPON_SAWEDOFF, 36, WEAPON_UZI, 150, WEAPON_FIST, 0); // The Truth
    return 1;
}
```

## نکات

:::tip

حداکثر ID کلاس 319 است (شروع از 0، پس مجموعاً 320 کلاس). وقتی این حد رسیده باشد، هر کلاس اضافی که اضافه شود ID 319 را جایگزین خواهد کرد.

:::

## توابع مرتبط

- [AddPlayerClass](AddPlayerClass): کلاس اضافه کنید.
- [GetAvailableClasses](GetAvailableClasses): تعداد کلاس‌های تعریف شده را دریافت کنید.
- [EditPlayerClass](EditPlayerClass): داده کلاس را ویرایش کنید.
- [SetSpawnInfo](SetSpawnInfo): تنظیمات spawn بازیکن را تنظیم کنید.
- [SetPlayerTeam](SetPlayerTeam): تیم بازیکن را تنظیم کنید.
- [SetPlayerSkin](SetPlayerSkin): اسکین بازیکن را تنظیم کنید.

## منابع مرتبط

- [Skin IDs](../resources/skins)
- [Weapon IDs](../resources/weaponids)