---
title: PlayerSpectatePlayer
sidebar_label: PlayerSpectatePlayer
description: باعث می‌شه یک بازیکن بازیکن دیگه ای رو تماشا کنه
tags: ["player"]
---

## توضیحات

باعث می‌شه یک بازیکن بازیکن دیگه ای رو تماشا (spectate) کنه.

| نام                | توضیحات                                                                                      |
| ------------------ | -------------------------------------------------------------------------------------------- |
| playerid           | آی‌دی بازیکنی که قراره تماشا کنه.                                                             |
| targetplayerid     | آی‌دی بازیکنی که باید تماشا بشه.                                                             |
| SPECTATE_MODE:mode | [حالت](../resources/spectatemodes) تماشا کردن (اختیاری؛ به طور پیش فرض 'normal' هست).        |

## مقادیر بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع اجرا نشد. یکی از بازیکنای مشخص شده وجود نداره.

## مثال‌ها

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    TogglePlayerSpectating(playerid, 1);
    PlayerSpectatePlayer(playerid, killerid);
    return 1;
}
```

## نکات

:::warning

- ترتیب خیلی مهم هست! مطمئن شو که ابتدا از TogglePlayerSpectating استفاده می‌کنی و بعد PlayerSpectatePlayer.
- playerid و targetplayerid باید در همون virtual world و interior باشن تا این تابع درست کار کنه.

:::

## توابع مرتبط

- [PlayerSpectateVehicle](PlayerSpectateVehicle): تماشای یک وسیله نقلیه.
- [TogglePlayerSpectating](TogglePlayerSpectating): شروع یا توقف تماشا کردن.
- [GetPlayerSpectateID](GetPlayerSpectateID): دریافت آی‌دی بازیکن یا وسیله نقلیه ای که بازیکن داره تماشا می‌کنه.
- [GetPlayerSpectateType](GetPlayerSpectateType): دریافت نوع تماشای بازیکن.

## منابع مرتبط

- [حالت‌های تماشا](../resources/spectatemodes)