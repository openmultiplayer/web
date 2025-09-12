---
title: SetPlayerColor
sidebar_label: SetPlayerColor
description: تنظیم رنگ نام‌تگ و نشانگر (نقطه رادار) بازیکن.
tags: ["player"]
---

## توضیحات

تنظیم رنگ نام‌تگ و نشانگر (نقطه رادار) بازیکن.

| نام      | توضیحات                                     |
| -------- | ------------------------------------------- |
| playerid | شناسه بازیکنی که قرار است رنگ آن تنظیم شود.  |
| colour   | رنگ برای تنظیم. از مقادیر آلفا پشتیبانی می‌کند. |

## مقدار بازگشتی

این تابع هیچ مقدار خاصی برنمی‌گرداند.

## مثال‌ها

```c
// قرمز، با استفاده از نماد هگزادسیمال:
SetPlayerColor(playerid, 0xFF0000FF);

//قرمز، با استفاده از نماد دهدهی:
SetPlayerColor(playerid, 4278190335);
```

## نکات

:::tip

- این تابع رنگ بازیکن را برای همه تغییر می‌دهد، حتی اگر رنگ بازیکن با SetPlayerMarkerForPlayer برای هر بازیکن دیگری تغییر کرده باشد.
- اگر تحت OnPlayerConnect استفاده شود، بازیکن متأثر رنگ را در منوی TAB نخواهد دید.

:::

## توابع مرتبط

- [SetPlayerMarkerForPlayer](SetPlayerMarkerForPlayer): تنظیم نشانگر یک بازیکن.
- [GetPlayerColor](GetPlayerColor): بررسی رنگ یک بازیکن.
- [ChangeVehicleColor](ChangeVehicleColor): تنظیم رنگ یک وسیله نقلیه.

## منابع مرتبط

- [فهرست رنگ‌ها](../resources/colorslist)