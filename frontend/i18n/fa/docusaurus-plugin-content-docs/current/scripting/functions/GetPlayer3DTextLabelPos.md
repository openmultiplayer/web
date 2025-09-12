---
title: GetPlayer3DTextLabelPos
sidebar_label: GetPlayer3DTextLabelPos
description: موقعیت یک 3D text label بازیکن رو می‌گیره.
tags: ["player", "3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

موقعیت یک 3D text label بازیکن رو می‌گیره.

| اسم                | توضیح                                                                  |
| ------------------- | ---------------------------------------------------------------------------- |
| playerid            | شناسه بازیکن.                                                        |
| PlayerText3D:textid | شناسه 3D text label بازیکن که می‌خوای موقعیتش رو بگیری.                 |
| &Float:x            | متغیر float که مختصات X توش ذخیره میشه، با reference پاس داده میشه. |
| &Float:y            | متغیر float که مختصات Y توش ذخیره میشه، با reference پاس داده میشه. |
| &Float:z            | متغیر float که مختصات Z توش ذخیره میشه، با reference پاس داده میشه. |

## مثال‌ها

</div>

```c
new PlayerText3D:playerTextId;
new Float:playerX, Float:playerY, Float:playerZ;

GetPlayerPos(playerid, playerX, playerY, playerZ);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, playerX, playerY, playerZ, 40.0);

new Float:x, Float:y, Float:z;
GetPlayer3DTextLabelPos(playerid, playerTextId, x, y, z);
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [Get3DTextLabelPos](Get3DTextLabelPos): گرفتن موقعیت 3D text label.

</div>