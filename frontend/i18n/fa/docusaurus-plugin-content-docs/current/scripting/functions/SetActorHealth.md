---
title: SetActorHealth
sidebar_label: SetActorHealth
description: سلامتی actor رو تنظیم می‌کنه.
tags: ["actor"]
---

<VersionWarn version='SA-MP 0.3.7' />

## توضیحات

سلامتی actor رو تنظیم می‌کنه.

| نام         | توضیحات                               |
| ------------ | ----------------------------------------- |
| actorid      | ID actor که سلامتیش رو می‌خوایم تنظیم کنیم. |
| Float:health | مقداری که سلامتی actor بهش تنظیم می‌شه.  |

## مقدار برگشتی

**true** - موفقیت

**false** - شکست (مثلاً actor ساخته نشده).

## مثال‌ها

```c
new gMyActor;

public OnGameModeInit()
{
    gMyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor as salesperson in Ammunation
    
    SetActorHealth(gMyActor, 100.0);
    return 1;
}
```

## توابع مرتبط

- [GetActorHealth](GetActorHealth): گرفتن سلامتی actor.
- [SetActorInvulnerable](SetActorInvulnerable): تنظیم آسیب نپذیری actor.