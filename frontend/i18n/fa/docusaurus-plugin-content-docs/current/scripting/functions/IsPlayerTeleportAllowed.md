---
title: IsPlayerTeleportAllowed
sidebar_label: IsPlayerTeleportAllowed
description: آیا این بازیکن می‌تونه با کلیک راست روی نقشه teleport کنه؟
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

آیا این بازیکن می‌تونه با کلیک راست روی نقشه teleport کنه؟

| نام      | توضیحات                                     |
| -------- | ------------------------------------------- |
| playerid | ID بازیکنی که اجازه teleport بهش داده شه.   |

## مقادیر برگشتی

**true** - بازیکن اجازه داره.

**false** - بازیکن اجازه نداره.

## مثال‌ها

```c
public OnPlayerConnect(playerid)
{
    AllowPlayerTeleport(playerid, true);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    if (IsPlayerTeleportAllowed(playerid))
    {
        // Do something
    }
    return 1;
}
```

## توابع مرتبط

- [AllowPlayerTeleport](AllowPlayerTeleport): بازیکن رو بعنوان ادمین RCON تنظیم می‌کنه.