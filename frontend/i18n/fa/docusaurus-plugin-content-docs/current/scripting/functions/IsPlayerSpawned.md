---
title: IsPlayerSpawned
sidebar_label: IsPlayerSpawned
description: چک می‌کنه که آیا بازیکن spawn شده یا نه.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا بازیکن spawn شده یا نه.

| نام      | توضیحات                         |
|----------|--------------------------------|
| playerid | ID بازیکنی که باید چک بشه.      |

## مقادیر برگشتی

**true** - بازیکن spawn شده.

**false** - بازیکن spawn نشده.

## مثال‌ها

```c
public OnPlayerText(playerid, text[])
{
    if (!IsPlayerSpawned(playerid))
    {
        SendClientMessage(playerid, COLOR_RED, "ERROR: You must be spawned to send messages.");
        return 0;
    }
    return 1;
}
```

## توابع مرتبط

- [SpawnPlayer](SpawnPlayer): (دوباره) spawn کردن یه بازیکن.