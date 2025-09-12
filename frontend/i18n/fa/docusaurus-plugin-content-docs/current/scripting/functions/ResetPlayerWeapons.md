---
title: ResetPlayerWeapons
sidebar_label: ResetPlayerWeapons
description: تمام اسلحه‌های بازیکن رو حذف می‌کنه.
tags: ["player"]
---

## توضیحات

تمام اسلحه‌های بازیکن رو حذف می‌کنه.

| نام     | توضیحات                                   |
| -------- | --------------------------------------------- |
| playerid | ID بازیکن که اسلحه‌هاش رو می‌خواییم حذف کنیم. |

## مقدار برگشتی

**1** - تابع با موفقیت اجرا شد.

**0** - تابع اجرا نشد. یعنی بازیکن مشخص شده وجود نداره.

## مثال‌ها

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    // Remove the killer's weapons
    ResetPlayerWeapons(killerid);
    return 1;
}
```

## نکات

:::tip

برای حذف کردن اسلحه‌های خاص از بازیکن، تیرشون رو به 0 تنظیم کن با استفاده از [SetPlayerAmmo](SetPlayerAmmo).

:::

## توابع مرتبط

- [GivePlayerWeapon](GivePlayerWeapon): دادن اسلحه به بازیکن.
- [GetPlayerWeapon](GetPlayerWeapon): بررسی اینکه بازیکن الان چه اسلحه‌ای دستشه.
- [RemovePlayerWeapon](RemovePlayerWeapon): حذف یک اسلحه مشخص از بازیکن.