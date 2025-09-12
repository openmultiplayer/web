---
title: StopPlayerHoldingObject
sidebar_label: StopPlayerHoldingObject
description: اشیاء متصل شده را حذف می‌کند.
tags: ["player"]
---

## توضیحات

اشیاء متصل شده را حذف می‌کند.

| نام      | توضیحات                                                 |
| -------- | ------------------------------------------------------ |
| playerid | شناسه بازیکنی که می‌خواهید شیء را از او حذف کنید. |

## مقادیر بازگشتی

1 در صورت موفقیت، 0 در صورت شکست

## مثال‌ها

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    if (IsPlayerHoldingObject(playerid))
    {
        StopPlayerHoldingObject(playerid);
    }
    return 1;
}
```

## نکات

:::warning

این تابع در SA-MP 0.3c حذف شده است. [RemovePlayerAttachedObject](RemovePlayerAttachedObject) را ببینید

:::

## توابع مرتبط

- [SetPlayerHoldingObject](SetPlayerHoldingObject): یک شیء را به یک استخوان متصل می‌کند.