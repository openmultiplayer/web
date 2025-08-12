---
title: GetPlayerObjectDrawDistance
sidebar_label: GetPlayerObjectDrawDistance
description: دریافت فاصله نمایش یک player-object.
tags: ["player", "object", "playerobject"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

دریافت فاصله نمایش یک player-object.

| نام     | توضیحات                                             |
|----------|---------------------------------------------------------|
| playerid | ID بازیکن                                    |
| objectid | ID player-object برای دریافت فاصله نمایشش |

## مقادیر برگشتی

فاصله نمایش را به صورت float برمی‌گرداند.

## مثال‌ها

```c
new playerobjectid = CreatePlayerObject(playerid, 3335, 672.53485, -656.11023, 15.26560,  3.00000, 0.00000, 0.00000,  100.0);

new Float:drawDistance = GetPlayerObjectDrawDistance(playerid, playerobjectid);
// drawDistance = 100.0
```

## توابع مرتبط

- [GetObjectDrawDistance](GetObjectDrawDistance): دریافت فاصله نمایش یک object.