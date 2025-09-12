---
title: GivePlayerWeapon
sidebar_label: GivePlayerWeapon
description: به یه بازیکن اسلحه با مقدار مشخص شده تیر می‌ده.
tags: ["player"]
---

## توضیحات

به یه بازیکن اسلحه با مقدار مشخص شده تیر می‌ده.

| نام             | توضیحات                                                               |
|-----------------|-----------------------------------------------------------------------|
| playerid        | ID بازیکنی که می‌خوای اسلحه بهش بدی.                                  |
| WEAPON:weaponid | [ID اسلحه](../resources/weaponids)ای که می‌خوای به بازیکن بدی.       |
| ammo            | مقدار تیری که می‌خوای به بازیکن بدی.                                   |

## مقادیر برگشتی

**1** - تابع با موفقیت اجرا شد.

**0** - تابع اجرا نشد. یعنی بازیکن متصل نیست.

## مثال‌ها

```c
GivePlayerWeapon(playerid, WEAPON_SAWEDOFF, 64); // Give playerid a sawn-off shotgun with 64 ammo
```

## توابع مرتبط

- [SetPlayerArmedWeapon](SetPlayerArmedWeapon): تنظیم اسلحه مسلح بازیکن.
- [GetPlayerWeapon](GetPlayerWeapon): چک کردن اینکه بازیکن چه اسلحه‌ای در حال حاضر در دست داره.
- [ResetPlayerWeapons](ResetPlayerWeapons): حذف همه اسلحه‌ها از بازیکن.
- [RemovePlayerWeapon](RemovePlayerWeapon): حذف یه اسلحه خاص از بازیکن.

## منابع مرتبط

- [شناسه‌های اسلحه](../resources/weaponids)