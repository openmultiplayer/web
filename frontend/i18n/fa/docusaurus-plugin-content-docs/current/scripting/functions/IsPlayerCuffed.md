---
title: IsPlayerCuffed
sidebar_label: IsPlayerCuffed
description: چک می‌کنه که آیا special action بازیکن cuffed هست یا نه.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا special action بازیکن cuffed هست یا نه.

| نام      | توضیحات                         |
| -------- | ------------------------------- |
| playerid | ID بازیکنی که باید چک بشه.      |

## مقادیر برگشتی

true برمی‌گردونه اگه بازیکن cuffed باشه، وگرنه false.

## مثال‌ها

```c
SetPlayerSpecialAction(playerid, SPECIAL_ACTION_CUFFED);

if (IsPlayerCuffed(playerid))
{
    // do something
}
```