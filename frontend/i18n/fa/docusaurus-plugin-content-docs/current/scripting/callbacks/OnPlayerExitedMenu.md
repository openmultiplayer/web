---
title: OnPlayerExitedMenu
sidebar_label: OnPlayerExitedMenu
description: این کالبک زمانی فراخوانده می‌شود که یک بازیکن از منو خارج شود.
tags: ["player", "menu"]
---

## توضیحات

این کالبک زمانی فراخوانده می‌شود که یک بازیکن از منو خارج شود.

| نام      | توضیحات                              |
| -------- | ----------------------------------------- |
| playerid | شناسه بازیکنی که از منو خارج شده است     |

## مقادیر برگشتی

همیشه اول در gamemode فراخوانده می‌شود.

## مثال‌ها

```c
public OnPlayerExitedMenu(playerid)
{
    TogglePlayerControllable(playerid, true); // unfreeze the player when they exit a menu
    return 1;
}
```

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [OnPlayerSelectedMenuRow](OnPlayerSelectedMenuRow): این کالبک زمانی فراخوانده می‌شود که بازیکن یک ردیف از منو را انتخاب کند.

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک مرتبط هستند.

- [CreateMenu](../functions/CreateMenu): ایجاد یک منو.
- [DestroyMenu](../functions/DestroyMenu): حذف یک منو.