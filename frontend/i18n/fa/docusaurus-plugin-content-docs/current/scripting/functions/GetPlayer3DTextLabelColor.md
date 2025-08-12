---
title: GetPlayer3DTextLabelColor
sidebar_label: GetPlayer3DTextLabelColor
description: رنگ یک 3D text label بازیکن رو می‌گیره.
tags: ["player", "3dtextlabel"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

:::warning

این تابع deprecated هست. لطفاً [GetPlayer3DTextLabelColour](GetPlayer3DTextLabelColour) رو ببینید.

:::

## توضیحات

رنگ یک 3D text label بازیکن رو می‌گیره.

| اسم                | توضیح                                               |
| ------------------- | --------------------------------------------------------- |
| playerid            | شناسه بازیکن.                                     |
| PlayerText3D:textid | شناسه 3D text label بازیکن که می‌خوای رنگش رو بگیری. |

## مقادیر برگشتی

رنگ 3D text label بازیکن رو برمی‌گردونه.

## مثال‌ها

</div>

```c
new PlayerText3D:playerTextId;
new Float:X, Float:Y, Float:Z;
new color;

GetPlayerPos(playerid, X, Y, Z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, X, Y, Z, 40.0);

color = GetPlayer3DTextLabelColor(playerid, playerTextId);
// color = 0x008080FF
```

<div dir="rtl" style={{ textAlign: "right" }}>

## تابع‌های مرتبط

- [Get3DTextLabelColor](Get3DTextLabelColor): گرفتن رنگ یک 3D text label.

</div>