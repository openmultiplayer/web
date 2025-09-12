---
title: OnPlayerSpawn
sidebar_label: OnPlayerSpawn
description: این کالبک زمانی فراخوانده می‌شود که بازیکن اسپان می‌شود.
tags: ["player"]
---

## توضیحات

این کالبک زمانی فراخوانده می‌شود که بازیکن اسپان می‌شود. (یعنی بعد از فراخوانی تابع [SpawnPlayer](../functions/SpawnPlayer))

| نام     | توضیحات                        |
| -------- | ---------------------------------- |
| playerid | شناسه بازیکنی که اسپان شده. |

## مقادیر برگشتی

0 - مانع از دریافت این کالبک توسط فیلتراسکریپت‌های دیگر می‌شود.

1 - نشان می‌دهد که این کالبک به فیلتراسکریپت بعدی منتقل خواهد شد.

همیشه ابتدا در فیلتراسکریپت‌ها فراخوانده می‌شود.

## مثال‌ها

```c
public OnPlayerSpawn(playerid)
{
    new PlayerName[MAX_PLAYER_NAME];
    GetPlayerName(playerid, PlayerName, sizeof(PlayerName));

    new string[64];
    format(string, sizeof(string), "%s has spawned successfully.", PlayerName);

    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## نکته‌ها

:::tip

وقتی بازیکن در San Andreas می‌میرد، به طور خودکار 100 دلار از آنها برای پوشش هزینه‌های بیمارستان کسر می‌شود. این ویژگی در SA:MP باقی مانده، اما از open.mp حذف شده تا اسکریپت‌ها بتوانند تمام پول خود را مدیریت کنند. چندین اسکریپت سعی می‌کنند این مشکل را با اضافه کردن 100 دلار به بازیکن بعد از مرگ یا در اسپان حل کنند. اگر این اسکریپت شماست، به سادگی این اصلاحیه اضافی را حذف کنید، اگرچه کد در open.mp سعی می‌کند اسکریپت‌هایی که این کار را می‌کنند را در نظر بگیرد. اگر اسکریپت شما بر این ویژگی تکیه می‌کرد، به سادگی کد زیر را به [OnPlayerDeath](OnPlayerDeath) اضافه کنید:

```c
GivePlayerMoney(playerid, -100);
```

:::

## کالبک‌های مرتبط

کالبک‌های زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک در ارتباط هستند.

- [OnPlayerDeath](OnPlayerDeath): این کالبک زمانی فراخوانده می‌شود که بازیکن می‌میرد.
- [OnVehicleSpawn](OnVehicleSpawn): این کالبک زمانی فراخوانده می‌شود که وسیله نقلیه دوباره اسپان می‌شود.

## توابع مرتبط

توابع زیر ممکن است مفید باشند، زیرا به نوعی با این کالبک در ارتباط هستند.

- [SpawnPlayer](../functions/SpawnPlayer): اجبار بازیکن به اسپان شدن.
- [AddPlayerClass](../functions/AddPlayerClass): اضافه کردن یک کلاس.
- [SetSpawnInfo](../functions/SetSpawnInfo): تنظیم تنظیمات اسپان برای بازیکن.