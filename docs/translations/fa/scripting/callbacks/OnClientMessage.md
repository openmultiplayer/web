---
title: OnClientMessage
description: هر زمان که NPC پیام کلاینت را ببیند، این کال‌بک فراخوانی می شود.
tags: []
---

<div dir="rtl" style={{ textAlign: "right" }}>

<VersionWarn name='NPC callback' version='SA-MP 0.3a' />

## توضیحات

هر زمان که NPC پیام کلاینت را ببیند، این کال‌بک فراخوانی می شود. 

| پارامتر   | توضیح                     |
| ------ | ------------------------------- |
| color  | رنگ ClientMessage |
| text[] | پیام             |

## مقادیر بازگشتی

این کال‌بک هیچ مقادیری را بازگشت نمی دهد.

## مثال ها

```c
public OnClientMessage(color, text[])
{
    if (strfind(text,"Bank Balance: $0") != -1)
    {
        SendClientMessage(playerid, -1, "I am poor :(");
    }
}
```

## کال‌بک های مرتبط

کال‌بک های زیر ممکن است مفید باشند، زیرا به هر طریقی با این کال‌بک مرتبط هستند.

- [OnPlayerText](OnPlayerText): هر زمانی که بازیکنی در چت چیزی بگوید، این کال‌بک فراخوانی می‌شود. شامل بازیکنان و NPC ها.
</div>