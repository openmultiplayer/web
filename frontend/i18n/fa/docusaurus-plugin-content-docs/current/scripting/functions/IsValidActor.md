---
title: IsValidActor
sidebar_label: IsValidActor
description: چک می‌کنه که آیا ID یه actor معتبره یا نه.
tags: ["actor"]
---

<VersionWarn version='SA-MP 0.3.7' />

## توضیحات

چک می‌کنه که آیا ID یه actor معتبره یا نه.

| نام     | توضیحات                        |
| ------- | ------------------------------ |
| actorid | ID actor که باید چک بشه.       |

## مقادیر برگشتی

**true** - actor معتبره.

**false** - actor معتبر نیست.

## مثال‌ها

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor as a salesperson in Ammunation.
    
    if (IsValidActor(gMyActor))
    {
        SetActorHealth(gMyActor, 100.0);
    }
    return 1;
}
```

## توابع مرتبط

- [CreateActor](CreateActor): ساخت یه actor.
- [GetActorPoolSize](GetActorPoolSize): دریافت بالاترین actorid که در سرور ساخته شده.
- [SetActorHealth](SetActorHealth): تنظیم سلامت یه actor.