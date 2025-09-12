---
title: SendClientCheck
sidebar_label: SendClientCheck
description: بررسی memory روی کلاینت انجام می‌ده.
tags: []
---

## توضیحات

بررسی memory روی کلاینت انجام می‌ده.


| نام            | توضیحات                          |
| --------------- | ------------------------------------ |
| playerid        | ID بازیکن برای بررسی.       |
| type            | نوع بررسی که باید انجام بشه. [اینجا ببین](../resources/opcodes)|
| memAddr         | آدرس پایه برای بررسی.           |
| memOffset       | offset از آدرس پایه.    |
| byteCount       | تعداد byte ها برای بررسی.        |


## مقدار برگشتی

1: تابع با موفقیت اجرا شد.

0: تابع اجرا نشد. بازیکن متصل نیست.

## مثال‌ها

```c
public OnPlayerConnect(playerid)
{
    SendClientCheck(playerid, 0x48, 0, 0, 2);
    return 1;
}

public OnClientCheckResponse(playerid, actionid, memaddr, retndata)
{
    if (actionid == 0x48) // or 72
    {
        print("The player is connecting using the PC client.");
    }
    return 1;
}
```

## نکات

:::tip

- 6 تا نوع درخواست هست که کلاینت پردازش می‌کنه (2, 5, 69, 70, 71, 72)
- نوع 72 هیچ کدوم از آرگومان‌های دیگه رو استفاده نمی‌کنه [arg | offset | size].
- arg مقدار uptime کامپیوتر رو برمی‌گردونه.

:::

:::warning

**SA:MP Server**: این تابع فقط وقتی در filterscript باشه کار می‌کنه.

**Open Multiplayer Server**: این تابع معمولی در gamemode / filterscript کار می‌کنه. 

:::

## توابع مرتبط

- [IsPlayerUsingOfficialClient](IsPlayerUsingOfficialClient): بررسی اینکه آیا بازیکن از کلاینت رسمی SA-MP استفاده می‌کنه.
- [IsPlayerUsingOmp](IsPlayerUsingOmp): بررسی اینکه آیا بازیکن از launcher open.mp استفاده می‌کنه.

## کالبک‌های مرتبط

- [OnClientCheckResponse](../callbacks/OnClientCheckResponse): وقتی درخواست SendClientCheck تموم می‌شه صدا زده می‌شه.