---
title: RemovePlayerWeapon
sidebar_label: RemovePlayerWeapon
description: یک اسلحه مشخص رو از بازیکن حذف می‌کنه.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

یک اسلحه مشخص رو از بازیکن حذف می‌کنه.

| نام            | توضیح                                               |
|-----------------|-----------------------------------------------------------|
| playerid        | ID بازیکنی که می‌خوایم اسلحه‌ش رو حذف کنیم.              |
| WEAPON:weaponid | [ID اسلحه](../resources/weaponids) که می‌خوایم حذف کنیم. |

## مقادیر بازگشتی

**true** - function با موفقیت اجرا شد.

**false** - اجرای function ناموفق بوده. یعنی بازیکن متصل نیست.

## مثال‌ها

```c
RemovePlayerWeapon(playerid, WEAPON_DEAGLE); // Desert-Eagle ro az bazikon hazf mikone
```

## توابع مرتبط

- [GivePlayerWeapon](GivePlayerWeapon): به بازیکن اسلحه می‌ده.
- [ResetPlayerWeapons](ResetPlayerWeapons): تمام اسلحه‌ها رو از بازیکن حذف می‌کنه.
- [SetPlayerArmedWeapon](SetPlayerArmedWeapon): اسلحه مسلح بازیکن رو تنظیم می‌کنه.
- [GetPlayerWeapon](GetPlayerWeapon): چک می‌کنه که بازیکن فعلا چه اسلحه‌ای در دست داره.

## منابع مرتبط

- [Weapon IDs](../resources/weaponids)