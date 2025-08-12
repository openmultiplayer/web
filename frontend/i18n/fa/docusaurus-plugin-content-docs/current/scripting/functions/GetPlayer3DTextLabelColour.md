---
title: GetPlayer3DTextLabelColour
sidebar_label: GetPlayer3DTextLabelColour
description: رنگ متن سه‌بعدی بازیکن را دریافت می‌کند.
tags: ["player", "3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

رنگ متن سه‌بعدی بازیکن را دریافت می‌کند.

| نام                 | توضیحات                                        |
| ------------------- | ------------------------------------------------ |
| playerid            | شناسه بازیکن.                                   |
| PlayerText3D:textid | شناسه متن سه‌بعدی بازیکن که می‌خواهید رنگش را بگیرید. |

## مقدار بازگشتی

رنگ متن سه‌بعدی بازیکن را برمی‌گرداند.

## مثال‌ها

```c
new PlayerText3D:playerTextId;
new Float:x, Float:y, Float:z;
new colour;

GetPlayerPos(playerid, x, y, z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, x, y, z, 40.0);

colour = GetPlayer3DTextLabelColour(playerid, playerTextId);
// colour = 0x008080FF
```

## تابع‌های مرتبط

- [Get3DTextLabelColour](Get3DTextLabelColour): رنگ متن سه‌بعدی را دریافت می‌کند.