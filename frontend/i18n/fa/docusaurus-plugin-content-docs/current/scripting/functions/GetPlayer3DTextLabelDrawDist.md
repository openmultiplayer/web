---
title: GetPlayer3DTextLabelDrawDist
sidebar_label: GetPlayer3DTextLabelDrawDist
description: فاصله رسم متن سه‌بعدی بازیکن را دریافت می‌کند.
tags: ["player", "3dtextlabel"]
---

:::warning

این تابع منسوخ شده است. لطفاً [GetPlayer3DTextLabelDrawDistance](GetPlayer3DTextLabelDrawDistance) را ببینید.

:::

## توضیحات

فاصله رسم متن سه‌بعدی بازیکن را دریافت می‌کند.

| نام                 | توضیحات                                           |
| ------------------- | --------------------------------------------------- |
| playerid            | شناسه بازیکن.                                      |
| PlayerText3D:textid | شناسه متن سه‌بعدی بازیکن که می‌خواهید فاصله رسمش را بگیرید. |

## مقدار بازگشتی

فاصله رسم متن سه‌بعدی بازیکن را به صورت float برمی‌گرداند.

## مثال‌ها

```c
new PlayerText3D:playerTextId;
new Float:X, Float:Y, Float:Z;
new Float:drawDistance;

GetPlayerPos(playerid, X, Y, Z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, X, Y, Z, 40.0);

drawDistance = GetPlayer3DTextLabelDrawDist(playerid, playerTextId);
// drawDistance = 40.0
```

## نکات

:::tip

این تابع فقط نام کوتاه [GetPlayer3DTextLabelDrawDistance](GetPlayer3DTextLabelDrawDistance) است.

:::

## تابع‌های مرتبط

- [SetPlayer3DTextLabelDrawDistance](SetPlayer3DTextLabelDrawDistance): فاصله رسم متن سه‌بعدی بازیکن را تنظیم می‌کند.
- [Get3DTextLabelDrawDistance](Get3DTextLabelDrawDistance): فاصله رسم متن سه‌بعدی را دریافت می‌کند.