---
title: GetPlayerMoney
sidebar_label: GetPlayerMoney
description: مقدار پولی که یک بازیکن دارد را دریافت می‌کند.
tags: ["player"]
---

## توضیحات

مقدار پولی که یک بازیکن دارد را دریافت می‌کند.

| نام      | توضیحات                                          |
| -------- | ------------------------------------------------- |
| playerid | شناسه بازیکنی که می‌خواهید پولش را بگیرید. |

## مقدار بازگشتی

مقدار پولی که بازیکن دارد.

## مثال‌ها

```c
public OnPlayerSpawn(playerid)
{
    new string[32];
    format(string, sizeof(string), "Your money: $%i", GetPlayerMoney(playerid));
    SendClientMessage(playerid, 0x00FF00FF, string);
}
```

## تابع‌های مرتبط

- [GivePlayerMoney](GivePlayerMoney): به بازیکن پول می‌دهد.
- [ResetPlayerMoney](ResetPlayerMoney): پول بازیکن را روی $0 تنظیم می‌کند.