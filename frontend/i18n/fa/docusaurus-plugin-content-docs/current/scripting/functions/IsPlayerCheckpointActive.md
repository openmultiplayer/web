---
title: IsPlayerCheckpointActive
sidebar_label: IsPlayerCheckpointActive
description: چک می‌کنه که آیا بازیکن در حال حاضر یه checkpoint قابل مشاهده داره یا نه.
tags: ["player", "checkpoint"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا بازیکن در حال حاضر یه checkpoint قابل مشاهده داره یا نه.

| نام      | توضیحات                         |
| -------- | ------------------------------- |
| playerid | ID بازیکنی که باید چک بشه.      |

## مقادیر برگشتی

**false** برمی‌گردونه اگه هیچ checkpoint ای در حال حاضر نمایش داده نمی‌شه، وگرنه **true** برمی‌گردونه.

## مثال‌ها

```c
public OnPlayerSpawn(playerid)
{
    if (IsPlayerCheckpointActive(playerid))
    {
        // Do something
    }
}
```

## توابع مرتبط

- [SetPlayerCheckpoint](SetPlayerCheckpoint): ساخت یه checkpoint برای بازیکن.
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): چک کردن اینکه بازیکن در checkpoint هست یا نه.
- [IsPlayerRaceCheckpointActive](IsPlayerRaceCheckpointActive): چک کردن اینکه آیا بازیکن در حال حاضر یه race checkpoint قابل مشاهده داره یا نه.