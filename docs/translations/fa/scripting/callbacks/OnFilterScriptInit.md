---
title: OnFilterScriptInit
description: این کال‌بک زمانی فراخوانی می شود که یک فیلتر اسکریپت بارگذاری یا load می شود.
tags: []
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

این کال‌بک زمانی فراخوانی می شود که یک فیلتر اسکریپت بارگذاری یا load می شود.

## مثال ها

```c
public OnFilterScriptInit()
{
    print("\n--------------------------------------");
    print("The filterscript is loaded.");
    print("--------------------------------------\n");
    return 1;
}
```

## کال‌بک های مرتبط

کال‌بک های زیر ممکن است مفید باشند، زیرا به هر طریقی با این کال‌بک مرتبط هستند.


- [OnFilterSciptExit](OnFilterScriptExit): این کال‌بک زمانی فراخوانی می شود که یک فیلتر اسکریپت unload میشود.
- [OnGameModeInit](OnGameModeInit): زمانی که گیم مود شروع می شود، این کال‌بک فراخوانی می شود.
- [OnGameModeExit](OnGameModeExit): زمانی که گیم مود به پایان میرسد یا unload میشود، این کال‌بک فراخوانی می شود.
</div>