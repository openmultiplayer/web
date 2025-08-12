---
title: GetPlayerWorldBounds
sidebar_label: GetPlayerWorldBounds
description: مرزهای جهان بازیکن رو دریافت می‌کنه.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

مرزهای جهان بازیکن رو دریافت می‌کنه.

| نام        | توضیحات                                                                  |
|-------------|------------------------------------------------------------------------------|
| playerid    | ID بازیکن.                                                        |
| &Float:maxX | متغیر float برای ذخیره مختصات maxX که به صورت reference پاس داده می‌شه. |
| &Float:minX | متغیر float برای ذخیره مختصات minX که به صورت reference پاس داده می‌شه. |
| &Float:maxY | متغیر float برای ذخیره مختصات maxY که به صورت reference پاس داده می‌شه. |
| &Float:minY | متغیر float برای ذخیره مختصات minY که به صورت reference پاس داده می‌شه. |

## مقادیر برگشتی

این تابع مقدار مشخصی برنمی‌گردونه.

## مثال‌ها

```c
public OnPlayerSpawn(playerid)
{
    SetPlayerWorldBounds(playerid, -1212.0, -1420.0, 2628.5, 2430.5);

    new
        Float:maxX,
        Float:minX,
        Float:maxY,
        Float:minY;

    GetPlayerWorldBounds(playerid, maxX, minX, maxY, minY);
    // maxX = -1212.0
    // minX = -1420.0
    // maxY = 2628.5
    // minY = 2430.5
    return 1;
}
```

## توابع مرتبط

- [SetPlayerWorldBounds](SetPlayerWorldBounds): تنظیم مرزهای جهان برای یه بازیکن. بازیکنا نمی‌تونن از مرزها خارج بشن (به داخل هل داده می‌شن).
- [ClearPlayerWorldBounds](ClearPlayerWorldBounds): ریست کردن مرزهای جهان بازیکن به مرزهای پیشفرض.