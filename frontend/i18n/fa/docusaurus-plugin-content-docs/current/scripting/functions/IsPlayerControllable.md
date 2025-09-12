---
title: IsPlayerControllable
sidebar_label: IsPlayerControllable
description: چک می‌کنه که آیا بازیکن قابل کنترله یا نه.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا بازیکن قابل کنترله یا نه.

| نام      | توضیحات          |
| -------- | ---------------- |
| playerid | ID بازیکن.       |

## مقادیر برگشتی

**true** - قابل کنترل

**false** - غیرقابل کنترل

## مثال‌ها

```c
public OnPlayerSpawn(playerid)
{
    // Unfreeze the player if it is freezed
    if (IsPlayerControllable(playerid) == false)
    {
        TogglePlayerControllable(playerid, true);
    }

    return 1;
}
```

## توابع مرتبط

- [TogglePlayerControllable](TogglePlayerControllable): فعال/غیرفعال کردن اینکه بازیکن بتونه کاراکترش رو کنترل کنه یا نه. بازیکن همچنین نمی‌تونه دوربینش رو حرکت بده.