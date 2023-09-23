---
title: OnClientCheckResponse
description: این کال‌بک پس از تکمیل درخواست SendClientCheck فراخوانی می شود.
tags: []
---

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

این کال‌بک پس از تکمیل درخواست SendClientCheck فراخوانی می شود.

| پارامتر          | توضیحات                       |
| ------------- | --------------------------------- |
| playerid      | آیدی بازیکنی که بررسی شده است     |
| actionid      | نوع بررسی انجام شده      |
| memaddr       | آدرس درخواست شده            |
| retndata      | نتیجه بررسی.          |

## مقادیر بازگشتی

این کال‌بک همیشه اول در فیلتر اسکریپت ها تماس داده میشود.

## مثال ها

```c
public OnPlayerConnect(playerid)
{
    SendClientCheck(playerid, 0x48, 0, 0, 2);
    return 1;
}

public OnClientCheckResponse(playerid, actionid, memaddr, retndata)
{
    if(actionid == 0x48) // or 72
    {
        printf("WARNING: Bazikon ID %d Az PC Estefade Nemikonad!", playerid);
        Kick(playerid);
    }
    return 1;
}
```

## نکات

:::warning

**SA:MP**: این کال‌بک فقط زمانی فراخوانی می شود که در یک فیلتر اسکریپت باشد.

**Open.mp**: این کال‌بک همچنین در گیم مود هم فراخوانی میشود.

:::

## کال‌بک های مرتبط

کال‌بک های زیر ممکن است مفید باشند، زیرا به هر طریقی با این کال‌بک مرتبط هستند.

- [SendClientCheck](../functions/SendClientCheck): بررسی حافظه/مموری روی کلاینت بازیکن.
</div>