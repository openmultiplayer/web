---
title: IsPlayerInDriveByMode
sidebar_label: IsPlayerInDriveByMode
description: چک می‌کنه که آیا بازیکن در حالت driveby هست یا نه.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا بازیکن در حالت driveby هست یا نه.

| نام      | توضیحات                         |
| -------- | ------------------------------- |
| playerid | ID بازیکنی که باید چک بشه.      |

## مقادیر برگشتی

true برمی‌گردونه اگه بازیکن در حالت driveby باشه، وگرنه false.

## مثال‌ها

```c
if (IsPlayerInDriveByMode(playerid))
{
    // do something
}
```