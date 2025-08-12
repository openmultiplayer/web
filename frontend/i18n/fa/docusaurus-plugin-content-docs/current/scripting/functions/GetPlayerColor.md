---
title: GetPlayerColor
sidebar_label: GetPlayerColor
description: رنگ نام و نشانگر رادار بازیکن را دریافت می‌کند.
tags: ["player"]
---

## توضیحات

رنگ نام و نشانگر رادار بازیکن را دریافت می‌کند. فقط بعد از استفاده از SetPlayerColor کار می‌کند.

| نام      | توضیحات                                       |
| -------- | --------------------------------------------- |
| playerid | شناسه بازیکنی که می‌خواهید رنگش را بگیرید. |

## مقدار بازگشتی

رنگ بازیکن. اگر رنگی تنظیم نشده یا بازیکن متصل نباشد، 0 برمی‌گرداند.

## مثال‌ها

```c
SendClientMessage(playerid, GetPlayerColor(playerid), "This message is in your color :)");

new output[144];
format(output, sizeof(output), "You can also use the player's color for {%06x}color embedding!", GetPlayerColor(playerid) >>> 8);
SendClientMessage(playerid, -1, output);
// will output the message in white, with ''color embedding'' in the player's color
```

## نکات

:::warning

GetPlayerColor چیزی برنمی‌گرداند (0) مگر اینکه قبلاً SetPlayerColor استفاده شده باشد. برای حل این مشکل [اینجا](../../tutorials/colorfix) کلیک کنید.

:::

## تابع‌های مرتبط

- [SetPlayerColor](SetPlayerColor): رنگ یک بازیکن را تنظیم می‌کند.
- [ChangeVehicleColor](ChangeVehicleColor): رنگ یک وسیله نقلیه را تنظیم می‌کند.