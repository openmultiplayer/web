---
title: SpawnPlayer
sidebar_label: SpawnPlayer
description: بازیکن را (دوباره) spawn کنید.
tags: ["player"]
---

## توضیحات

بازیکن را (دوباره) spawn کنید.

| نام     | توضیحات                    |
| -------- | ------------------------------ |
| playerid | شناسه بازیکن برای spawn کردن. |

## مقادیر بازگشتی

**true** - تابع با موفقیت اجرا شد.

**false** - تابع در اجرا ناکام بود. این به معنای آن است که بازیکن متصل نیست.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/spawn", true) == 0)
    {
        SpawnPlayer(playerid);
        return 1;
    }
    return 0;
}
```

## نکته‌ها

:::warning

باگ‌های شناخته شده:

- اگر آنها در خودرو باشند بازیکن را می‌کشد و سپس با یک بطری در دست spawn می‌شوند. (در open.mp اصلاح شده)

:::

## توابع مرتبط

- [IsPlayerSpawned](IsPlayerSpawned): بررسی کنید که آیا بازیکن spawn شده است.
- [SetSpawnInfo](SetSpawnInfo): تنظیمات spawn را برای بازیکن تنظیم کنید.
- [AddPlayerClass](AddPlayerClass): یک کلاس اضافه کنید.

## کالبک‌های مرتبط

- [OnPlayerSpawn](../callbacks/OnPlayerSpawn): زمانی که بازیکن spawn می‌شود فراخوانی می‌شود.