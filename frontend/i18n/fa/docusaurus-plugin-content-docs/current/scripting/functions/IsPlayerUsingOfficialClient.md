---
title: IsPlayerUsingOfficialClient
sidebar_label: IsPlayerUsingOfficialClient
description: چک می‌کنه که آیا بازیکن از کلاینت رسمی SA-MP استفاده می‌کنه یا نه.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

چک می‌کنه که آیا بازیکن از کلاینت رسمی SA-MP استفاده می‌کنه یا نه.

| نام      | توضیحات                         |
| -------- | ------------------------------- |
| playerid | ID بازیکنی که باید چک بشه.      |

## مقادیر برگشتی

1 برمی‌گردونه اگه بازیکن از کلاینت رسمی استفاده می‌کنه، وگرنه 0.

## مثال‌ها

```c
public OnPlayerConnect(playerid)
{
    if (IsPlayerUsingOfficialClient(playerid) == 0)
    {
        SendClientMessage(playerid, 0xFF0000FF, "[KICK]: You doesn't seem to be using the official sa-mp client!");
        Kick(playerid);
    }

    return 1;
}
```

## توابع مرتبط

- [IsPlayerUsingOmp](IsPlayerUsingOmp): چک کردن اینکه آیا بازیکن از open.mp launcher استفاده می‌کنه یا نه.
- [SendClientCheck](SendClientCheck): انجام یه بررسی حافظه روی کلاینت.