---
title: GetPlayer3DTextLabelDrawDistance
sidebar_label: GetPlayer3DTextLabelDrawDistance
description: فاصله نمایش یک 3D text label بازیکن رو می‌گیره.
tags: ["player", "3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

فاصله نمایش یک 3D text label بازیکن رو می‌گیره.

| اسم                | توضیح                                                       |
| ------------------- | ----------------------------------------------------------------- |
| playerid            | شناسه بازیکن.                                             |
| PlayerText3D:textid | شناسه 3D text label بازیکن که می‌خوای فاصله نمایشش رو بگیری. |

## مقادیر برگشتی

فاصله نمایش 3D text label بازیکن رو به صورت float برمی‌گردونه.

## مثال‌ها

</div>

```c
new PlayerText3D:playerTextId;
new Float:x, Float:y, Float:z;
new Float:drawDistance;

GetPlayerPos(playerid, x, y, z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, x, y, z, 40.0);

drawDistance = GetPlayer3DTextLabelDrawDistance(playerid, playerTextId);
// drawDistance = 40.0
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [SetPlayer3DTextLabelDrawDistance](SetPlayer3DTextLabelDrawDistance): تنظیم فاصله نمایش 3D text label بازیکن.
- [Get3DTextLabelDrawDistance](Get3DTextLabelDrawDistance): گرفتن فاصله نمایش 3D text label.

</div>