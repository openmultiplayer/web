---
title: OnClientMessage
sidebar_label: OnClientMessage
description: این کالبک هر زمان که NPC یک ClientMessage می‌بیند فرا خوانده می‌شود.
tags: []
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

این کالبک هر زمان که NPC یک ClientMessage می‌بیند فرا خوانده می‌شود. این هر بار که از تابع [SendClientMessageToAll](../functions/SendClientMessageToAll) استفاده شود و هر بار که تابع [SendClientMessage](../functions/SendClientMessage) به سمت NPC ارسال شود اتفاق می‌افتد. این کالبک زمانی که کسی چیزی می‌گوید فرا خوانده نمی‌شود. برای نسخه‌ای از این کالبک با متن بازیکن، [NPC:OnPlayerText](OnPlayerText) را ببینید.

| نام   | توضیحات                          |
| ------ | ------------------------------- |
| color  | رنگ ClientMessage.               |
| text[] | پیام واقعی.                      |

## مقادیر برگشتی

این کالبک مقادیر برگشتی را کنترل نمی‌کند.

## مثال ها

</div>

```c
public OnClientMessage(color, text[])
{
    if (strfind(text,"Bank Balance: $0") != -1)
    {
        SendClientMessage(playerid, -1, "I am poor :(");
    }
}
```

<div dir="rtl" style={{ textAlign: "right" }}>

## کالبک های مرتبط

کالبک های زیر ممکن است مفید باشند، زیرا به نحوی با این کالبک مرتبط هستند.

- [OnPlayerText](OnPlayerText): این کالبک هر بار که کسی در چت چیزی بگوید فرا خوانده می‌شود. این شامل هر بازیکن، هر NPC دیگر، یا همان NPC خودش می‌شود.

</div>