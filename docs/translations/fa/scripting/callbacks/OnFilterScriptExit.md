---
title: OnFilterScriptExit
description: این کال‌بک زمانی فراخوانی می شود که یک فیلتر اسکریپت unload میشود
tags: []
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

این کال‌بک زمانی فراخوانی می شود که یک فیلتر اسکریپت unload میشود.

## مثال ها

```c
public OnFilterScriptExit()
{
    print("\n--------------------------------------");
    print(" My filterscript unloaded");
    print("--------------------------------------\n");
    return 1;
}
```

## کال‌بک های مرتبط

کال‌بک های زیر ممکن است مفید باشند، زیرا به هر طریقی با این کال‌بک مرتبط هستند.

- [OnFilterScriptInit](OnFilterScriptInit): هنگامی که فیلتر اسکریپت بارگیری می شود، این کال‌بک فراخوانی می شود.
- [OnGameModeInit](OnGameModeInit): زمانی که گیم مود شروع می شود، این کال‌بک فراخوانی می شود.
- [OnGameModeExit](OnGameModeExit): زمانی که گیم مود به پایان میرسد یا unload میشود، این کال‌بک فراخوانی می شود.
</div>