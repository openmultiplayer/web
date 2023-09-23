---
title: OnNPCConnect
description: هنگامی که یک NPC با موفقیت به سرور متصل می شود، این کال‌بک فراخوانی می شود.
tags: ["npc"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

<VersionWarn name='callback' version='SA-MP 0.3a' />

## توضیحات

هنگامی که یک NPC با موفقیت به سرور متصل می شود، این کال‌بک فراخوانی می شود.

| پارامتر         | توضیحات                                        |
| ------------ | -------------------------------------------------- |
| myplayerid   | آیدی این NPC                |

## مثال ها

```c
public OnNPCConnect(myplayerid)
{
    printf("NPC ID %i Vared Server Shod!", myplayerid);
}
```

## کال‌بک های مرتبط

کال‌بک های زیر ممکن است مفید باشند، زیرا به هر طریقی با این کال‌بک مرتبط هستند.

- [OnNPCDisconnect](OnNPCDisconnect): هنگامی که NPC از سرور خارج می شود، این کال‌بک فراخوانی می شود.
- [OnPlayerConnect](OnPlayerConnect): این کال‌بک زمانی فراخوانی می شود که بازیکن به سرور متصل شود.
- [OnPlayerDisconnect](OnPlayerDisconnect): وقتی بازیکن از سرور خارج می شود، این کالبک فراخوانی می شود.

</div>