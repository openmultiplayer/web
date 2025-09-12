---
title: SetActorVirtualWorld
sidebar_label: SetActorVirtualWorld
description: virtual world ای actor رو تنظیم می‌کنه.
tags: ["actor"]
---

<VersionWarn version='SA-MP 0.3.7' />

## توضیحات

virtual world ای actor رو تنظیم می‌کنه. فقط بازیکنایی که در همون world هستن actor رو می‌بینن.

| نام         | توضیحات                                                                |
| ------------ | -------------------------------------------------------------------------- |
| actorid      | ID actor (که از CreateActor برمی‌گرده) که virtual world ش رو می‌خوایم تنظیم کنیم. |
| virtualWorld | virtual world که actor باید توش قرار بگیره.                                     |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع اجرا نشد. actor مشخص شده وجود نداره.

## مثال‌ها

```c
new gMyActor;

public OnGameModeInit()
{
    // Create the actor
    gMyActor = CreateActor(69, 0.0, 0.0, 3.0, 0.0);

    // Set their virtual world
    SetActorVirtualWorld(gMyActor, 69);
    return 1;
}
```

## توابع مرتبط

- [GetActorVirtualWorld](GetActorVirtualWorld): گرفتن virtual world ای actor.
- [CreateActor](CreateActor): ساخت actor (static NPC).