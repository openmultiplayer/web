---
title: IsActorStreamedIn
sidebar_label: IsActorStreamedIn
description: چک می‌کنه که آیا یه actor برای بازیکن stream شده یا نه.
tags: ["actor"]
---

<VersionWarn version='SA-MP 0.3.7' />

## توضیحات

چک می‌کنه که آیا یه actor برای بازیکن stream شده یا نه.

| نام      | توضیحات          |
| -------- | ---------------- |
| actorid  | ID actor.        |
| playerid | ID بازیکن.       |

## مقادیر برگشتی

این تابع 1 برمی‌گردونه اگه actor برای بازیکن stream شده باشه، یا 0 اگه نشده باشه.

## مثال‌ها

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(0, 0.0, 0.0, 3.0, 0.0);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    if (IsActorStreamedIn(gMyActor, playerid))
    {
        // Do something
    }
    return 1;
}
```

## توابع مرتبط

- [CreateActor](CreateActor): ساخت یه actor (NPC استاتیک).
- [IsPlayerStreamedIn](IsPlayerStreamedIn): چک می‌کنه که آیا یه بازیکن برای بازیکن دیگه stream شده یا نه.