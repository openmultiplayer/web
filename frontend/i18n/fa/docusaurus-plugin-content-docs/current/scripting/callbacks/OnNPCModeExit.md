---
title: OnNPCModeExit
sidebar_label: OnNPCModeExit
description: این کالبک زمانی فراخوانده می‌شود که اسکریپت NPC بارگذاری نشده باشد.
tags: ["npc"]
---

## توضیحات

این کالبک زمانی فراخوانده می‌شود که اسکریپت NPC بارگذاری نشده باشد.

## مثال‌ها

```c
public OnNPCModeExit()
{
    print("NPC script unloaded");
    return 1;
}
```

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک در ارتباط هستند.

- [OnNPCModeInit](OnNPCModeInit): این کالبک زمانی فراخوانده می‌شود که اسکریپت NPC بارگذاری شود.