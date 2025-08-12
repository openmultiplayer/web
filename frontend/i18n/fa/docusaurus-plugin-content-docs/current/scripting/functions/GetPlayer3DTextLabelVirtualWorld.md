---
title: GetPlayer3DTextLabelVirtualWorld
sidebar_label: GetPlayer3DTextLabelVirtualWorld
description: شناسه virtual world یک 3D text label بازیکن رو می‌گیره.
tags: ["player", "3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

<div dir="rtl" style={{ textAlign: "right" }}>

## توضیحات

شناسه virtual world یک 3D text label بازیکن رو می‌گیره.

| اسم                | توضیح                                                          |
| ------------------- | -------------------------------------------------------------------- |
| playerid            | شناسه بازیکن.                                                |
| PlayerText3D:textid | شناسه 3D text label بازیکن که می‌خوای virtual worldش رو بگیری. |

## مقادیر برگشتی

شناسه virtual world 3D text label بازیکن رو برمی‌گردونه.

## مثال‌ها

</div>

```c
new PlayerText3D:playerTextId;
new Float:X, Float:Y, Float:Z;
new worldid;

GetPlayerPos(playerid, X, Y, Z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, X, Y, Z, 40.0);

worldid = GetPlayer3DTextLabelVirtualWorld(playerid, playerTextId);
```

<div dir="rtl" style={{ textAlign: "right" }}>

## نکته‌ها

:::warning

پشتیبانی virtual world برای 3D text label بازیکن وجود نداره.
این تابع فقط virtual world بازیکن رو برمی‌گردونه!

:::

## تابع‌های مرتبط

- [Get3DTextLabelVirtualWorld](Get3DTextLabelVirtualWorld): گرفتن شناسه virtual world 3D text label.

</div>