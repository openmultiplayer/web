---
title: IsPlayerUsingOmp
sidebar_label: IsPlayerUsingOmp
description: چک می‌کنه که آیا بازیکن از open.mp launcher استفاده می‌کنه یا نه.
tags: ["player"]
---

<VersionWarn version='omp 1.4.0.2779' />

## توضیحات

چک می‌کنه که آیا بازیکن از open.mp launcher استفاده می‌کنه یا نه.

| نام      | توضیحات                         |
| -------- | ------------------------------- |
| playerid | ID بازیکنی که باید چک بشه.      |

## مقادیر برگشتی

1 برمی‌گردونه اگه بازیکن از open.mp launcher استفاده می‌کنه، وگرنه 0.

## مثال‌ها

```c
public OnPlayerConnect(playerid)
{
    // Player is using the open.mp launcher
    if(IsPlayerUsingOmp(playerid))
    {
        SendClientMessage(playerid, -1, "You are using the open.mp launcher.");
    }

    // Player is not using the open.mp launcher
    else
    {
        SendClientMessage(playerid, 0xFF0000FF, "[KICK]: You don't seem to be using the open.mp launcher");
        Kick(playerid);
    }

    return 1;
}
```

## توابع مرتبط

- [IsPlayerUsingOfficialClient](IsPlayerUsingOfficialClient): چک کردن اینکه آیا بازیکن از کلاینت رسمی SA-MP استفاده می‌کنه یا نه.
- [SendClientCheck](SendClientCheck): انجام یه بررسی حافظه روی کلاینت.