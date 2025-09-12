---
title: PlayerSpectateVehicle
sidebar_label: PlayerSpectateVehicle
description: تنظیم یک بازیکن برای تماشای یک وسیله نقلیه
tags: ["player", "vehicle"]
---

## توضیحات

یک بازیکن رو برای تماشای یک وسیله نقلیه تنظیم می‌کنه. دوربینشون به وسیله نقلیه متصل می‌شه انگار که دارن رانندگی می‌کنن.

| نام                 | توضیحات                                                                                          |
| ------------------- | ------------------------------------------------------------------------------------------------ |
| playerid            | آی‌دی بازیکنی که باید یک وسیله نقلیه رو تماشا کنه.                                                |
| targetvehicleid     | آی‌دی وسیله نقلیه ای که بازیکن باید تماشا کنه.                                                     |
| SPECTATE_MODE:mode  | [حالت](../resources/spectatemodes) تماشا. معمولاً می‌تونه خالی بمونه چون پیش فرض 'normal' هست.     |

## مقادیر بازگشتی

**true** - تابع با موفقیت اجرا شد. توجه کن که موفقیت حتی وقتی هم گزارش می‌شه که بازیکن در حالت تماشا نباشه (TogglePlayerSpectating)، اما چیزی اتفاق نمی‌افته. ابتدا حتماً باید از TogglePlayerSpectating استفاده کنی.

**false** - تابع اجرا نشد. بازیکن، وسیله نقلیه، یا هر دوتاشون وجود ندارن.

## مثال‌ها

```c
TogglePlayerSpectating(playerid, 1);
PlayerSpectateVehicle(playerid, vehicleid);
```

## نکات

:::warning

- ترتیب خیلی مهم هست! مطمئن شو که ابتدا از TogglePlayerSpectating استفاده می‌کنی و بعد PlayerSpectateVehicle.
- playerid و vehicleid باید در همون interior و virtual world باشن تا این تابع درست کار کنه.

:::

## توابع مرتبط

- [PlayerSpectatePlayer](PlayerSpectatePlayer): تماشای یک بازیکن.
- [TogglePlayerSpectating](TogglePlayerSpectating): شروع یا توقف تماشا کردن.
- [GetPlayerSpectateID](GetPlayerSpectateID): دریافت آی‌دی بازیکن یا وسیله نقلیه ای که بازیکن داره تماشا می‌کنه.
- [GetPlayerSpectateType](GetPlayerSpectateType): دریافت نوع تماشای بازیکن.

## منابع مرتبط

- [حالت‌های تماشا](../resources/spectatemodes)