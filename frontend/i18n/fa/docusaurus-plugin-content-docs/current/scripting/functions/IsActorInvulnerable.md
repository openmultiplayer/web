---
title: IsActorInvulnerable
sidebar_label: IsActorInvulnerable
description: چک می‌کنه که آیا یه actor آسیب‌ناپذیره یا نه.
tags: ["actor"]
---

<VersionWarn version='SA-MP 0.3.7' />

## توضیحات

چک می‌کنه که آیا یه actor آسیب‌ناپذیره یا نه.

| نام     | توضیحات                       |
| ------- | ----------------------------- |
| actorid | ID actor ای که باید چک بشه.   |

## مقادیر برگشتی

**true** - actor آسیب‌ناپذیره.

**false** - actor آسیب‌پذیره.

## مثال‌ها

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor as a salesperson in Ammunation.
    
    if (IsActorInvulnerable(gMyActor))
    {
        print("Actor is invulnerable.");
    }
    else
    {
        print("Actor is vulnerable.");
    }
    return 1;
}
```

## توابع مرتبط

- [CreateActor](CreateActor): ساخت یه actor (NPC استاتیک).
- [SetActorInvulnerable](SetActorInvulnerable): تنظیم آسیب‌ناپذیر بودن actor.
- [SetActorHealth](SetActorHealth): تنظیم سلامتی یه actor.