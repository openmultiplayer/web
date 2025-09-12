---
title: OnPlayerDeath
sidebar_label: OnPlayerDeath
description: این کالبک زمانی فراخوانده می‌شود که بازیکن می‌میرد، چه به دلیل خودکشی یا کشته شدن توسط بازیکن دیگری.
tags: ["player"]
---

## توضیحات

این کالبک زمانی فراخوانده می‌شود که بازیکن می‌میرد، چه به دلیل خودکشی یا کشته شدن توسط بازیکن دیگری.

| نام          | توضیحات                                                                                   |
| ------------- | --------------------------------------------------------------------------------------------- |
| playerid      | شناسه بازیکنی که مرده است.                                                               |
| killerid      | شناسه بازیکنی که بازیکن مرده را کشته، یا INVALID_PLAYER_ID اگر هیچ‌کس نبوده. |
| WEAPON:reason | شناسه دلیل ([شناسه سلاح](../resources/weaponids)) مرگ بازیکن.            |

## مقادیر برگشتی

0 - مانع از دریافت این کالبک توسط فیلتراسکریپت‌های دیگر می‌شود.

1 - نشان می‌دهد که این کالبک به فیلتراسکریپت بعدی منتقل خواهد شد.

همیشه ابتدا در فیلتراسکریپت‌ها فراخوانده می‌شود.

## مثال‌ها

```c
new PlayerDeaths[MAX_PLAYERS];
new PlayerKills[MAX_PLAYERS];

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    SendDeathMessage(killerid, playerid, reason); // Shows the kill in the killfeed

    // Check that the killerid is valid before doing anything with it
    if (killerid != INVALID_PLAYER_ID)
    {
        PlayerKills[killerid] ++;
    }

    // Outside the check, handle stuff for playerid (it's always valid)
    PlayerDeaths[playerid] ++;
    return 1;
}
```

## نکته‌ها

:::tip

دلیل مرگ 37 (شعله‌افکن) را از هر منبع آتش (مثل مولوتوف، 18) برمی‌گرداند. دلیل مرگ 51 را از هر سلاحی که انفجار ایجاد می‌کند (مثل RPG، نارنجک) برمی‌گرداند. شما نیازی ندارید که قبل از استفاده در [SendDeathMessage](../functions/SendDeathMessage) بررسی کنید که killerid معتبر است یا نه. INVALID_PLAYER_ID یک پارامتر killerid معتبر در آن تابع است. playerid تنها کسی است که می‌تواند این کالبک را فراخوانی کند. (برای ضد تقلب مرگ جعلی مفید است)

:::

:::warning

شما باید بررسی کنید که 'killerid' معتبر است (نه INVALID_PLAYER_ID) قبل از استفاده در یک آرایه (یا واقعاً هر جایی)، زیرا باعث کرش شدن اسکریپت OnPlayerDeath می‌شود (نه کل اسکریپت). این به این دلیل است که INVALID_PLAYER_ID به عنوان 65535 تعریف شده، و اگر آرایه فقط 'MAX_PLAYERS' عنصر داشته باشد، مثل 500، شما سعی می‌کنید به اندیسی بالاتر از 499 دسترسی پیدا کنید که خارج از محدوده است.

:::

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک در ارتباط هستند.

- [OnPlayerSpawn](OnPlayerSpawn): این کالبک زمانی فراخوانده می‌شود که بازیکن اسپان می‌شود.

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک در ارتباط هستند.

- [SendDeathMessage](../functions/SendDeathMessage): اضافه کردن یک کشت به لیست مرگ.
- [SetPlayerHealth](../functions/SetPlayerHealth): تنظیم سلامت بازیکن.

## منابع مرتبط

- [شناسه‌های سلاح](../resources/weaponids)