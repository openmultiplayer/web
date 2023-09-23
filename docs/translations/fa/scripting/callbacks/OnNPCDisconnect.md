---
title: OnNPCDisconnect
description: هنگامی که NPC از سرور خارج می شود، این کال‌بک فراخوانی می شود.
tags: ["npc"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

<VersionWarn name='callback' version='SA-MP 0.3a' />

## توضیحات

هنگامی که NPC از سرور خارج می شود، این کال‌بک فراخوانی می شود.

| پارامتر         | توضیح                                             |
| ------------ | ------------------------------------------------------- |
| reason[]     | دلیل خارج شدن NPC از سرور |

## مثال ها

```c
public OnNPCDisconnect(reason[])
{
    printf("NPC Az Server Kharej Shod. Dalil: %s", reason);
}
```

## کال‌بک های مرتبط

کال‌بک های زیر ممکن است مفید باشند، زیرا به هر طریقی با این کال‌بک مرتبط هستند.

- [OnNPCConnect](OnNPCConnect): هنگامی که یک NPC با موفقیت به سرور متصل می شود، این کال‌بک فراخوانی می شود.
- [OnPlayerDisconnect](OnPlayerDisconnect): وقتی بازیکن از سرور خارج می شود، این کالبک فراخوانی می شود.
- [OnPlayerConnect](OnPlayerConnect): این کال‌بک زمانی فراخوانی می شود که بازیکن به سرور متصل شود.

</div>