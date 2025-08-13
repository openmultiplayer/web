---
title: HasGameText
sidebar_label: HasGameText
description: آیا بازیکن در حال حاضر متن در استایل gametext داده شده نمایش داره؟
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

آیا بازیکن در حال حاضر متن در استایل gametext داده شده نمایش داره؟

| نام      | توضیحات                                                       |
|----------|---------------------------------------------------------------|
| playerid | ID بازیکنی که می‌خوای gametext ش رو چک کنی.                   |
| style    | [استایل](../resources/gametextstyles) متنی که باید چک بشه.    |

## مقادیر برگشتی

این تابع **true** برمی‌گردونه اگه بازیکن gametext داشته باشه، یا **false** اگه نداشته باشه.

## مثال‌ها

```c
public OnPlayerConnect(playerid)
{
    GameTextForPlayer(playerid, "Welcome to the server!", 5000, 3);

    if (HasGameText(playerid, 3))
    {
        // Do something
    }
    return 1;
}
```

## توابع مرتبط

- [GameTextForPlayer](GameTextForPlayer): نمایش gametext به یه بازیکن.
- [HideGameTextForPlayer](HideGameTextForPlayer): متوقف کردن نمایش یه استایل gametext به بازیکن.
- [GameTextForAll](GameTextForAll): نمایش gametext به همه بازیکنان.
- [HideGameTextForAll](HideGameTextForAll): متوقف کردن نمایش یه استایل gametext برای همه بازیکنان.
- [GetGameText](GetGameText): دریافت همه اطلاعات در مورد استایل game text داده شده.