---
title: GetPlayer3DTextLabelLOS
sidebar_label: GetPlayer3DTextLabelLOS
description: line-of-sight یک 3D text label بازیکن رو می‌گیره.
tags: ["player", "3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

line-of-sight یک 3D text label بازیکن رو می‌گیره.

| اسم                | توضیح                                                       |
| ------------------- | ----------------------------------------------------------------- |
| playerid            | شناسه بازیکن.                                             |
| PlayerText3D:textid | شناسه 3D text label بازیکن که می‌خوای line-of-sightش رو بگیری. |

## مقادیر برگشتی

line-of-sight 3D text label بازیکن رو به صورت boolean (false/true) برمی‌گردونه.

## مثال‌ها

</div>

```c
new PlayerText3D:playerTextId;
new Float:X, Float:Y, Float:Z;
new bool:testLOS;

GetPlayerPos(playerid, X, Y, Z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, X, Y, Z, 40.0, INVALID_PLAYER_ID, INVALID_VEHICLE_ID, true);

testLOS = GetPlayer3DTextLabelLOS(playerid, playerTextId);
// testLOS = true
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [SetPlayer3DTextLabelLOS](SetPlayer3DTextLabelLOS): تنظیم line-of-sight 3D text label بازیکن.
- [Get3DTextLabelLOS](Get3DTextLabelLOS): گرفتن line-of-sight 3D text label.

</div>