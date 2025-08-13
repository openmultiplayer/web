---
title: SetPlayerShopName
sidebar_label: SetPlayerShopName
description: یک اسکریپت interior رو برای پلیر لود یا unload می‌کنه (مثلاً منوی اسلحه فروشی).
tags: ["player"]
---

## توضیحات

یک اسکریپت interior رو برای پلیر لود یا unload می‌کنه (مثلاً منوی اسلحه فروشی).

| نام              | توضیحات                                                                               |
| ---------------- | ------------------------------------------------------------------------------------- |
| playerid         | آیدی پلیری که قراره اسکریپت interior براش لود بشه                                      |
| const shopname[] | [اسکریپت shop](../resources/shopnames) که قراره لود بشه. خالی بذار ("") برای unload کردن اسکریپت ها |

## مقادیر بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گردونه.

## مثال‌ها

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/enter", cmdtext))
    {
        SetPlayerInterior(playerid, 5);
        SetPlayerPos(playerid, 372.5565, -131.3607, 1001.4922);
        SetPlayerShopName(playerid, "FDPIZA");
        SendClientMessage(playerid, 0xFFFFFFFF, "Welcome to Pizza Stack!");
        return 1;
    }
    return 0;
}
```

## نکات

:::tip

این تابع از اسکریپت های casino پشتیبانی نمی‌کنه.

:::

## توابع مرتبط

- [DisableInteriorEnterExits](DisableInteriorEnterExits): marker های در زرد رو غیرفعال می‌کنه.
- [SetPlayerInterior](SetPlayerInterior): interior پلیر رو تنظیم می‌کنه.

## منابع مرتبط

- [Shop Names](../resources/shopnames)