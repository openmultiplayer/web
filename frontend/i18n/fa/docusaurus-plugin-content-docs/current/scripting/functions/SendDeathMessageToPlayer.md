---
title: SendDeathMessageToPlayer
sidebar_label: SendDeathMessageToPlayer
description: یه مرگ رو به 'killfeed' سمت راست صفحه برای یک بازیکن اضافه می‌کنه.
tags: ["player"]
---

## توضیحات

یه مرگ رو به 'killfeed' سمت راست صفحه برای یک بازیکن اضافه می‌کنه.

| نام     | توضیحات                                                                                                                 |
| -------- | --------------------------------------------------------------------------------------------------------------------------- |
| playerid | ID بازیکن که death message براش ارسال بشه.                                                                          |
| killer   | ID قاتل (می‌تونه INVALID_PLAYER_ID باشه).                                                                            |
| killee   | ID بازیکنی که مرده.                                                                                             |
| weapon   | دلیل (همیشه اسلحه نیست) مرگ قربانی. آیکون‌های خاص هم می‌تونن استفاده بشن (ICON_CONNECT و ICON_DISCONNECT). |

## مقدار برگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع اجرا نشد.

## مثال‌ها

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    // Sends a death message to "playerid" shows that "killerid" killed "playerid" for "reason"
    SendDeathMessageToPlayer(playerid, killerid, playerid, reason);

    return 1;
}
```

## توابع مرتبط

- [SendDeathMessage](SendDeathMessage): اضافه کردن کشته شدن به لیست مرگ.

## کالبک‌های مرتبط

- [OnPlayerDeath](../callbacks/OnPlayerDeath): وقتی بازیکن می‌میره صدا زده می‌شه.