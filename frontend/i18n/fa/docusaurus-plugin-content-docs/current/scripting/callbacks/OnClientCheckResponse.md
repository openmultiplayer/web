---
title: OnClientCheckResponse
sidebar_label: OnClientCheckResponse
description: این کالبک زمانی فرا خوانده می‌شود که یک درخواست SendClientCheck تکمیل شود.
tags: []
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

این کالبک زمانی فرا خوانده می‌شود که یک درخواست SendClientCheck تکمیل شود.

| نام     | توضیحات                        |
| -------- | ----------------------------- |
| playerid | شناسه بازیکنی که بررسی شده.   |
| actionid | نوع بررسی انجام شده.          |
| memaddr  | آدرس درخواست شده.             |
| retndata | نتیجه بررسی.                   |

## مقادیر برگشتی

این همیشه ابتدا در فیلتر اسکریپت ها فرا خوانده می شود.

## مثال ها

</div>

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

<div dir="rtl" style={{ textAlign: "right" }}>

## نکته ها

:::warning

**سرور SA:MP**: این کالبک فقط زمانی فرا خوانده می‌شود که در یک فیلتر اسکریپت باشد.

**سرور Open Multiplayer**: این کالبک به طور عادی در داخل gamemode / فیلتر اسکریپت کار می‌کند.

:::

## تابع های مرتبط

تابع زیر ممکن است مفید باشد، زیرا به نحوی با این کالبک مرتبط است.

- [SendClientCheck](../functions/SendClientCheck): انجام بررسی حافظه روی کلاینت.

## منابع مرتبط

- [opcodes](../resources/opcodes): شناسه های opcode و هدف آن ها.

</div>