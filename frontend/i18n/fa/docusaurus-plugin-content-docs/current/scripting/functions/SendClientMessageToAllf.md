---
title: SendClientMessageToAllf
sidebar_label: SendClientMessageToAllf
description: یه پیام فرمت شده در چت به همه بازیکنا نمایش می‌ده.
tags: []
---

<VersionWarn version='open.mp beta build 6' />

:::warning

این تابع منسوخ شده.

تابع [SendClientMessageToAll](SendClientMessageToAll) الان بصورت built-in فرمت رو ساپورت می‌کنه!

:::

## توضیحات

یه پیام فرمت شده در چت به همه بازیکنا نمایش می‌ده. این معادل multi-player تابع SendClientMessage هست.

| نام            | توضیحات                                       |
| --------------- | ------------------------------------------------- |
| color           | رنگ پیام (فرمت 0xRRGGBBAA Hex). |
| const message[] | پیامی که نمایش داده می‌شه (حداکثر 144 کاراکتر).         |
| \{Float, _\}:...   | تعداد نامحدودی آرگومان از هر نوع         |

## مقدار برگشتی

این تابع همیشه true (1) برمی‌گردونه.

## مثال‌ها

```c
#define HELLO_WORLD "Hello World"

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/helloworld", true) == 0)
    {
        // Send a message to everyone.
        SendClientMessageToAllf(-1, "%s!", HELLO_WORLD);
        return 1;
    }
    return 0;
}
```