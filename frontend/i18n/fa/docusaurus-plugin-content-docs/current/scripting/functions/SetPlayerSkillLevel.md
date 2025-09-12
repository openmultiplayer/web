---
title: SetPlayerSkillLevel
sidebar_label: SetPlayerSkillLevel
description: سطح مهارت یک نوع اسلحه خاص رو برای پلیر تنظیم می‌کنه.
tags: ["player"]
---

## توضیحات

سطح مهارت یک نوع اسلحه خاص رو برای پلیر تنظیم می‌کنه.

| نام               | توضیحات                                                                                              |
| ----------------- | ---------------------------------------------------------------------------------------------------- |
| playerid          | آیدی پلیری که قراره مهارت اسلحه‌اش تنظیم بشه                                                           |
| WEAPONSKILL:skill | [اسلحه‌ای](../resources/weaponskills) که قراره مهارتش تنظیم بشه                                       |
| level             | سطح مهارت که قراره برای اون اسلحه تنظیم بشه، از 0 تا 999. اگه level خارج از محدوده باشه، به حداکثر می‌رسه |

## مقادیر بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
public OnPlayerSpawn(playerid)
{
    // Player ro vadar kon sawn-off shotgun haye tak daste estefade kone.
    SetPlayerSkillLevel(playerid, WEAPONSKILL_SAWNOFF_SHOTGUN, 1);
    return 1;
}
```

## نکات

:::warning

پارامتر skill آیدی اسلحه نیست، نوع مهارته. [اینجا](../resources/weaponskills) رو کلیک کن برای لیست انواع مهارت.

:::

## توابع مرتبط

- [GetPlayerSkillLevel](GetPlayerSkillLevel): سطح مهارت پلیر رو برای یک نوع اسلحه خاص دریافت می‌کنه.
- [SetPlayerArmedWeapon](SetPlayerArmedWeapon): اسلحه مسلح پلیر رو تنظیم می‌کنه.
- [GivePlayerWeapon](GivePlayerWeapon): به پلیر اسلحه می‌ده.

## اطلاعات مرتبط

- [Weapon Skills](../resources/weaponskills#skill-levels): لیست مهارت‌های اسلحه که برای تنظیم سطح مهارت پلیر استفاده می‌شن.