---
title: SendDeathMessage
sidebar_label: SendDeathMessage
description: یه مرگ رو به 'killfeed' سمت راست صفحه برای همه بازیکنا اضافه می‌کنه.
tags: []
---

## توضیحات

یه مرگ رو به 'killfeed' سمت راست صفحه برای همه بازیکنا اضافه می‌کنه.

| نام   | توضیحات                                                                                                                 |
| ------ | --------------------------------------------------------------------------------------------------------------------------- |
| killer | ID قاتل (می‌تونه INVALID_PLAYER_ID باشه).                                                                            |
| killee | ID بازیکنی که مرده.                                                                                             |
| weapon | دلیل (همیشه اسلحه نیست) مرگ قربانی. آیکون‌های خاص هم می‌تونن استفاده بشن (ICON_CONNECT و ICON_DISCONNECT). |

## مقدار برگشتی

این تابع همیشه **true** برمی‌گردونه، حتی اگر تابع اجرا نشه.

تابع اجرا نمی‌شه (هیچ death message نمایش داده نمی‌شه) اگر 'playerid' معتبر نباشه.

اگر 'reason' معتبر نباشه، یه آیکون کلی جمجمه و استخون متقابل نمایش داده می‌شه.

'killerid' که معتبر نباشه (`INVALID_PLAYER_ID`) معتبر هست.

## مثال‌ها

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    SendDeathMessage(killerid, playerid, reason);
    return 1;
}
```

## نکات

:::tip

Death message ها می‌تونن با استفاده از یه player ID معتبر برای 'playerid' که متصل نیست پاک بشن. برای نمایش death message فقط برای یک بازیکن، از [SendDeathMessageToPlayer](SendDeathMessageToPlayer) استفاده کن. می‌تونی از NPC ها برای ایجاد death reason های سفارشی خودت استفاده کنی.

:::

## توابع مرتبط

- [SendDeathMessageToPlayer](SendDeathMessageToPlayer): اضافه کردن کشته شدن به لیست مرگ برای یک بازیکن.

## کالبک‌های مرتبط

- [OnPlayerDeath](../callbacks/OnPlayerDeath): وقتی بازیکن می‌میره صدا زده می‌شه.

## منابع مرتبط

- [Weapon IDs and Death Reasons](../resources/weaponids)