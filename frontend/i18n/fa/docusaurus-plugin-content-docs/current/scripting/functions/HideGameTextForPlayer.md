---
title: HideGameTextForPlayer
sidebar_label: HideGameTextForPlayer
description: متوقف کردن نمایش یه استایل gametext به بازیکن.
tags: ["player", "gametext"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

متوقف کردن نمایش یه استایل gametext به بازیکن.

| نام            | توضیحات                                                      |
| -------------- | ------------------------------------------------------------ |
| playerid       | ID بازیکنی که می‌خوای gametext رو براش مخفی کنی.             |
| style          | [استایل](../resources/gametextstyles) متنی که باید مخفی بشه.  |

## مقادیر برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    HideGameTextForPlayer(playerid, 3);
    return 1;
}
```

## توابع مرتبط

- [HideGameTextForAll](HideGameTextForAll): متوقف کردن نمایش یه استایل gametext برای همه بازیکنان.
- [GameTextForPlayer](GameTextForPlayer): نمایش gametext به یه بازیکن.
- [GameTextForAll](GameTextForAll): نمایش gametext به همه بازیکنان.
- [GetGameText](GetGameText): دریافت همه اطلاعات در مورد استایل game text داده شده.
- [HasGameText](HasGameText): آیا بازیکن در حال حاضر متن در استایل gametext داده شده نمایش داره؟
- [TextDrawHideForAll](TextDrawHideForAll): مخفی کردن textdraw برای همه بازیکنان.