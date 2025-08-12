---
title: OnPlayerRequestSpawn
sidebar_label: OnPlayerRequestSpawn
description: این کالبک زمانی فراخوانده می‌شود که بازیکن سعی در spawn شدن از طریق انتخاب کلاس با فشردن SHIFT یا کلیک روی دکمه 'Spawn' دارد.
tags: ["player", "class"]
---

## توضیحات

این کالبک زمانی فراخوانده می‌شود که بازیکن سعی در spawn شدن از طریق انتخاب کلاس با فشردن SHIFT یا کلیک روی دکمه 'Spawn' دارد.

| نام      | توضیحات                                     |
| -------- | --------------------------------------------- |
| playerid | شناسه بازیکنی که درخواست spawn کرده است.    |

## مقادیر برگشتی

همیشه اول در filterscript ها فراخوانده می‌شود بنابراین برگرداندن 0 در آنجا سایر اسکریپت‌ها را نیز از پردازش آن مسدود می‌کند.

## مثال‌ها

```c
public OnPlayerRequestSpawn(playerid)
{
    if (!IsPlayerAdmin(playerid))
    {
        SendClientMessage(playerid, -1, "You may not spawn.");
        return 0;
    }
    return 1;
}
```

## نکته‌ها

<TipNPCCallbacks />

:::tip

برای جلوگیری از spawn شدن بازیکنان با کلاس‌های خاص، آخرین کلاس مشاهده شده باید در یک متغیر در OnPlayerRequestClass ذخیره شود.

:::

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [OnPlayerSpawn](OnPlayerSpawn): این کالبک زمانی فراخوانده می‌شود که بازیکن spawn شود.
- [OnPlayerRequestClass](OnPlayerRequestClass): این کالبک زمانی فراخوانده می‌شود که بازیکن کلاس را در انتخاب کلاس تغییر دهد.