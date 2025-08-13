---
title: IsPlayerCameraTargetEnabled
sidebar_label: IsPlayerCameraTargetEnabled
description: چک می‌کنه که آیا camera target بازیکن فعاله یا نه.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا camera target بازیکن فعاله یا نه.

| نام      | توضیحات          |
| -------- | ---------------- |
| playerid | ID بازیکن        |

## مقادیر برگشتی

**true** - فعاله.

**false** - غیرفعاله.

## مثال‌ها

```c
public OnPlayerSpawn(playerid)
{
    if (IsPlayerCameraTargetEnabled(playerid))
    {
        // do something
    }

    return 1;
}
```

## توابع مرتبط

- [EnablePlayerCameraTarget](EnablePlayerCameraTarget): فعال/غیرفعال کردن توابع camera targeting برای بازیکن.