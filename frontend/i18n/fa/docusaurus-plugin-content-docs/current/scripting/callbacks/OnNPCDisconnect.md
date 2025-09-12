---
title: OnNPCDisconnect
sidebar_label: OnNPCDisconnect
description: این کالبک زمانی فراخوانده می‌شود که NPC از سرور قطع شود.
tags: ["npc"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

این کالبک زمانی فراخوانده می‌شود که NPC از سرور قطع شود.

| نام      | توضیحات                                           |
| -------- | ------------------------------------------------ |
| reason[] | دلیلی که ربات از سرور قطع شده است                  |

## مثال‌ها

</div>

```c
public OnNPCDisconnect(reason[])
{
    printf("Disconnected from the server. %s", reason);
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نحوی با این کالبک مرتبط هستند.

</div>

- [OnNPCConnect](OnNPCConnect): این کالبک زمانی فراخوانده می‌شود که NPC با موفقیت به سرور متصل شود.
- [OnPlayerDisconnect](OnPlayerDisconnect): این کالبک زمانی فراخوانده می‌شود که بازیکن سرور را ترک کند.
- [OnPlayerConnect](OnPlayerConnect): این کالبک زمانی فراخوانده می‌شود که بازیکن به سرور متصل شود.