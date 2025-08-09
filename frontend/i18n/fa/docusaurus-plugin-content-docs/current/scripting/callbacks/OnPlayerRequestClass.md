---
title: OnPlayerRequestClass
sidebar_label: OnPlayerRequestClass
description: این کالبک زمانی فراخوانده می‌شود که بازیکن کلاس را در انتخاب کلاس تغییر دهد (و زمانی که انتخاب کلاس اولین بار ظاهر می‌شود).
tags: ["player", "class"]
---

## توضیحات

این کالبک زمانی فراخوانده می‌شود که بازیکن کلاس را در انتخاب کلاس تغییر دهد (و زمانی که انتخاب کلاس اولین بار ظاهر می‌شود).

| نام      | توضیحات                                                                                            |
| -------- | ----------------------------------------------------------------------------------------------------- |
| playerid | شناسه بازیکنی که کلاس را تغییر داده است.                                                              |
| classid  | شناسه کلاس فعلی که نمایش داده می‌شود (برگردانده شده توسط [AddPlayerClass](../functions/AddPlayerClass)). |

## مقادیر برگشتی

همیشه اول در filterscript ها فراخوانده می‌شود.

## مثال‌ها

```c
public OnPlayerRequestClass(playerid,classid)
{
    if (classid == 3 && !IsPlayerAdmin(playerid))
    {
        SendClientMessage(playerid, COLOR_RED, "This skin is only for admins!");
        return 0;
    }
    return 1;
}
```

## نکته‌ها

:::tip

این کالبک همچنین زمانی فراخوانده می‌شود که بازیکن کلید F4 را فشار دهد.

:::

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [OnPlayerRequestSpawn](OnPlayerRequestSpawn): این کالبک زمانی فراخوانده می‌شود که بازیکن سعی در spawn شدن از طریق انتخاب کلاس دارد.

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [AddPlayerClass](../functions/AddPlayerClass): اضافه کردن یک کلاس بازیکن.