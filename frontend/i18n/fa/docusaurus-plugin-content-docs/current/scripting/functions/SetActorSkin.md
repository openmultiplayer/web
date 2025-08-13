---
title: SetActorSkin
sidebar_label: SetActorSkin
description: skin actor رو تنظیم می‌کنه.
tags: ["actor"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

skin actor رو تنظیم می‌کنه.

| نام    | توضیحات                     |
|---------|---------------------------------|
| actorid | ID actor که باید تنظیم بشه.     |
| skin    | ID skin که بهش داده می‌شه |

## مقدار برگشتی

**true** - موفقیت.

**false** - شکست (مثلاً Actor ساخته نشده/معتبر نیست).

## مثال‌ها

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 1153.9640, -1772.3915, 16.5920, 0.0000);
    SetActorSkin(gMyActor, 270); // Change actor skin from 179 to 270
    return 1;
}
```

## توابع مرتبط

- [CreateActor](CreateActor): ساخت actor (static NPC).
- [GetActorSkin](GetActorSkin): گرفتن skin actor.