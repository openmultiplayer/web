---
title: OnFilterScriptExit
sidebar_label: OnFilterScriptExit
description: این کالبک زمانی فرا خوانده می‌شود که یک فیلتر اسکریپت unload شود.
tags: []
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

این کالبک زمانی فرا خوانده می‌شود که یک فیلتر اسکریپت unload شود. این فقط در داخل فیلتر اسکریپتی که unload می‌شود فرا خوانده می‌شود.

## مثال ها

</div>

```c
public OnFilterScriptExit()
{
    print("\n--------------------------------------");
    print(" My filterscript unloaded");
    print("--------------------------------------\n");
    return 1;
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## کالبک های مرتبط

کالبک های زیر ممکن است مفید باشند، زیرا به نحوی با این کالبک مرتبط هستند.

- [OnFilterScriptInit](OnFilterScriptInit): این کالبک زمانی فرا خوانده می‌شود که یک فیلتر اسکریپت لود شود.
- [OnGameModeInit](OnGameModeInit): این کالبک زمانی فرا خوانده می‌شود که یک gamemode شروع شود.
- [OnGameModeExit](OnGameModeExit): این کالبک زمانی فرا خوانده می‌شود که یک gamemode تمام شود.

</div>