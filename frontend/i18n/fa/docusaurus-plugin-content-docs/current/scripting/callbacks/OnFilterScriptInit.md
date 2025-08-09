---
title: OnFilterScriptInit
sidebar_label: OnFilterScriptInit
description: این کالبک زمانی فرا خوانده می‌شود که یک فیلتر اسکریپت initialize (لود) شود.
tags: []
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

این کالبک زمانی فرا خوانده می‌شود که یک فیلتر اسکریپت initialize (لود) شود. این فقط در داخل فیلتر اسکریپتی که شروع می‌شود فرا خوانده می‌شود.

## مثال ها

</div>

```c
public OnFilterScriptInit()
{
    print("\n--------------------------------------");
    print("The filterscript is loaded.");
    print("--------------------------------------\n");
    return 1;
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## کالبک های مرتبط

کالبک های زیر ممکن است مفید باشند، زیرا به نحوی با این کالبک مرتبط هستند.

- [OnFilterSciptExit](OnFilterScriptExit): این کالبک زمانی فرا خوانده می‌شود که یک فیلتر اسکریپت unload شود.
- [OnGameModeInit](OnGameModeInit): این کالبک زمانی فرا خوانده می‌شود که یک gamemode شروع شود.
- [OnGameModeExit](OnGameModeExit): این کالبک زمانی فرا خوانده می‌شود که یک gamemode تمام شود.

</div>