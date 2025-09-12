---
title: SetPlayerWorldBounds
sidebar_label: SetPlayerWorldBounds
description: مرزهای دنیا رو برای یک بازیکن تنظیم می‌کنه.
tags: ["player"]
---

## توضیحات

مرزهای دنیا رو برای یک بازیکن تنظیم می‌کنه. بازیکنا نمی‌تونن از مرزها خارج بشن (به داخل هل داده می‌شن).

| نام        | توضیحات                                            |
| ---------- | -------------------------------------------------- |
| playerid   | ID بازیکنی که مرزهای دنیاش باید تنظیم بشه.        |
| Float:maxX | حداکثر مختصات X که بازیکن می‌تونه بره.             |
| Float:minX | حداقل مختصات X که بازیکن می‌تونه بره.              |
| Float:maxY | حداکثر مختصات Y که بازیکن می‌تونه بره.             |
| Float:minY | حداقل مختصات Y که بازیکن می‌تونه بره.              |

## مقدار برگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
public OnPlayerSpawn(playerid)
{
    SetPlayerWorldBounds(playerid, 20.0, 0.0, 20.0, 0.0);
    return 1;
}
```

```
               (North)
                ymax
            |----------|
            |          |
(West) xmin |          | xmax (East)
            |          |
            |----------|
                ymin
               (South)
```

## نکات

:::tip

مرزهای دنیای یک بازیکن می‌تونن با تنظیم کردنشون روی 20000.0000, -20000.0000, 20000.0000, -20000.0000 ریست بشن. اینا مقادیر پیش‌فرض هستن. همچنین می‌تونی از [ClearPlayerWorldBounds](ClearPlayerWorldBounds) استفاده کنی.

:::

:::warning

این تابع در interior ها کار نمی‌کنه!

:::

## توابع مرتبط

- [ClearPlayerWorldBounds](ClearPlayerWorldBounds): ریست کردن مرزهای دنیای بازیکن به مرزهای پیش‌فرض دنیا.
- [GetPlayerWorldBounds](GetPlayerWorldBounds): گرفتن مرزهای دنیای یک بازیکن.
- [GangZoneCreate](GangZoneCreate): ساخت یک gangzone.