---
title: SetSpawnInfo
sidebar_label: SetSpawnInfo
description: این تابع می‌تواند برای تغییر اطلاعات spawn یک بازیکن خاص استفاده شود.
tags: ["player"]
---

## توضیحات

این تابع می‌تواند برای تغییر اطلاعات spawn یک بازیکن خاص استفاده شود. این به شما اجازه می‌دهد که به طور خودکار اسلحه‌های spawn، تیم، اسکین و موقعیت spawn کسی را تنظیم کنید، معمولاً در مورد مینی‌گیم‌ها یا سیستم‌های spawn خودکار استفاده می‌شود. این تابع ایمن‌تر از استفاده از [SetPlayerSkin](SetPlayerSkin) در [OnPlayerSpawn](../callbacks/OnPlayerSpawn) و/یا [OnPlayerRequestClass](../callbacks/OnPlayerRequestClass) است.

| نام           | توضیحات                                                          |
| -------------- | -------------------------------------------------------------------- |
| playerid       | شناسه بازیکن که می‌خواهید اطلاعات spawn او را تنظیم کنید.           |
| team           | شناسه تیم بازیکن انتخابی.                                    |
| skin           | [اسکین](../resources/skins) که بازیکن با آن spawn خواهد شد.     |
| Float:spawnX   | مختصات X موقعیت spawn بازیکن.                     |
| Float:spawnY   | مختصات Y موقعیت spawn بازیکن.                     |
| Float:spawnZ   | مختصات Z موقعیت spawn بازیکن.                     |
| Float:angle    | جهتی که بازیکن باید پس از spawn رو به آن باشد. |
| WEAPON:weapon1 | اولین اسلحه spawn برای بازیکن.                               |
| ammo1          | مقدار مهمات برای اسلحه spawn اولیه.                |
| WEAPON:weapon2 | دومین اسلحه spawn برای بازیکن.                              |
| ammo2          | مقدار مهمات برای دومین اسلحه spawn.                 |
| WEAPON:weapon3 | سومین اسلحه spawn برای بازیکن.                               |
| ammo3          | مقدار مهمات برای سومین اسلحه spawn.                  |

## مقادیر بازگشتی

این تابع هیچ مقدار خاصی بازنمی‌گرداند.

## مثال‌ها

```c
public OnPlayerRequestClass(playerid, classid)
{
    // این مثال ساده نشان می‌دهد که چگونه هر بازیکن را به طور خودکار با
    // اسکین CJ که شماره 0 است، spawn کنید. بازیکن در Las Venturas spawn خواهد شد، با
    // 36 تیر Sawnoff-Shotgun و 150 تیر Tec9.
    SetSpawnInfo(playerid, NO_TEAM, 0, 1958.33, 1343.12, 15.36, 269.15, WEAPON_SAWEDOFF, 36, WEAPON_UZI, 150, WEAPON_FIST, 0);
}
```

## نکته‌ها

:::warning

در صورتی که نیازی به تنظیم تیم برای بازیکن ندارید، مطمئن شوید که پارامتر "team" روی `NO_TEAM` (255) تنظیم شده است.

شناسه تیم 0 در open.mp یک تیم معتبر است در حالی که در SA-MP معتبر نیست (باگ SA-MP).

:::

## توابع مرتبط

- [GetSpawnInfo](GetSpawnInfo): داده‌های spawn فعلی یک بازیکن را برگردانید، جایی که آنها در spawn بعدی خواهند بود.
- [SetPlayerSkin](SetPlayerSkin): اسکین یک بازیکن را تنظیم کنید.
- [SetPlayerTeam](SetPlayerTeam): تیم یک بازیکن را تنظیم کنید.
- [SpawnPlayer](SpawnPlayer): مجبور کردن یک بازیکن به spawn شدن.

## منابع مرتبط

- [شناسه‌های اسکین](../resources/skins)
- [شناسه‌های اسلحه](../resources/weaponids)