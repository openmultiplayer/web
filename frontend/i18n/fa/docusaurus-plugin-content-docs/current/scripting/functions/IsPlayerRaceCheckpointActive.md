---
title: IsPlayerRaceCheckpointActive
sidebar_label: IsPlayerRaceCheckpointActive
description: چک می‌کنه که آیا بازیکن در حال حاضر یه race checkpoint قابل مشاهده داره یا نه.
tags: ["player", "checkpoint", "racecheckpoint"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا بازیکن در حال حاضر یه race checkpoint قابل مشاهده داره یا نه.

| نام      | توضیحات                         |
| -------- | ------------------------------- |
| playerid | ID بازیکنی که باید چک بشه.      |

## مقادیر برگشتی

**false** برمی‌گردونه اگه هیچ race checkpoint ای در حال حاضر نمایش داده نمی‌شه، وگرنه **true** برمی‌گردونه.

## مثال‌ها

```c
public OnPlayerSpawn(playerid)
{
    if (IsPlayerRaceCheckpointActive(playerid))
    {
        // Do something
    }
}
```

## توابع مرتبط

- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): ساخت یه race checkpoint برای بازیکن.
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): چک کردن اینکه بازیکن در race checkpoint هست یا نه.
- [IsPlayerCheckpointActive](IsPlayerCheckpointActive): چک کردن اینکه آیا بازیکن در حال حاضر یه checkpoint قابل مشاهده داره یا نه.