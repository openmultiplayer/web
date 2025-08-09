---
title: OnNPCConnect
sidebar_label: OnNPCConnect
description: این کالبک زمانی فرا خوانده می‌شود که یک NPC با موفقیت به سرور متصل شود.
tags: ["npc"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

این کالبک زمانی فرا خوانده می‌شود که یک NPC با موفقیت به سرور متصل شود.

| نام        | توضیحات                              |
| ---------- | ----------------------------------- |
| myplayerid | شناسه بازیکنی که به NPC داده شده     |

## مثال ها

</div>

```c
public OnNPCConnect(myplayerid)
{
    printf("I successfully connected the server with ID %i!", myplayerid);
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## کالبک های مرتبط

کالبک های زیر ممکن است مفید باشند، زیرا به نحوی با این کالبک مرتبط هستند.

- [OnNPCDisconnect](OnNPCDisconnect): این کالبک زمانی فرا خوانده می‌شود که NPC از سرور قطع شود.
- [OnPlayerConnect](OnPlayerConnect): این کالبک زمانی فرا خوانده می‌شود که بازیکن به سرور متصل شود.
- [OnPlayerDisconnect](OnPlayerDisconnect): این کالبک زمانی فرا خوانده می‌شود که بازیکن سرور را ترک کند.

</div>