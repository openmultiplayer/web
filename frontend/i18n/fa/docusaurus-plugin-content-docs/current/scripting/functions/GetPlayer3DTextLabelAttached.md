---
title: GetPlayer3DTextLabelAttached
sidebar_label: GetPlayer3DTextLabelAttached
description: دیتای attached یک 3D text label بازیکن رو می‌گیره.
tags: ["player", "3dtextlabel"]
---

<div dir="rtl" style={{ textAlign: "right" }}>

:::warning

این تابع deprecated هست. لطفاً [GetPlayer3DTextLabelAttachedData](GetPlayer3DTextLabelAttachedData) رو ببینید.

:::

## توضیحات

دیتای attached یک 3D text label بازیکن رو می‌گیره.

| اسم      | توضیح                                                               |
| --------- | ------------------------------------------------------------------------- |
| playerid | شناسه بازیکن.  |
| PlayerText3D:textid | شناسه 3D text label بازیکن که می‌خوای دیتای attachedش رو بگیری. |
| &parentPlayerid | متغیری که parentPlayerid توش ذخیره میشه، با reference پاس داده میشه. |
| &parentVehicleid | متغیری که parentVehicleid توش ذخیره میشه، با reference پاس داده میشه. |

## مثال‌ها

مثال برای parentPlayerid:

</div>

```c
new PlayerText3D:playerTextId;
new Float:X, Float:Y, Float:Z;
new attachedplayer = 37; // Attach to player id 37

new parentPlayerid;
new parentVehicleid;

GetPlayerPos(playerid, X, Y, Z);
playerTextId = CreatePlayer3DTextLabel(playerid, "Hello\nI'm at your position", 0x008080FF, X, Y, Z, 40.0, attachedplayer, INVALID_VEHICLE_ID);

GetPlayer3DTextLabelAttached(playerid, playerTextId, parentPlayerid, parentVehicleid);
// The `parentPlayerid` will be '37'
```

<div dir="rtl" style={{ textAlign: "right" }}>

مثال برای parentVehicleid:

</div>

```c
new PlayerText3D:gVehicle3dText[MAX_VEHICLES];
new gVehicleId;

new parentPlayerid;
new parentVehicleid;

gVehicleId = CreateVehicle(510, 0.0, 0.0, 15.0, 5, 0, 120);
gVehicle3dText[gVehicleId] = CreatePlayer3DTextLabel(playerid, "Example Text", 0xFF0000AA, 0.0, 0.0, 0.0, 50.0, INVALID_PLAYER_ID, gVehicleId);

GetPlayer3DTextLabelAttached(playerid, gVehicle3dText[gVehicleId], parentPlayerid, parentVehicleid);
// The `parentVehicleid` will be the value of 'gVehicleId'
```

<div dir="rtl" style={{ textAlign: "right" }}>

## نکته‌ها

:::tip

این تابع اسم کوتاه [GetPlayer3DTextLabelAttachedData](GetPlayer3DTextLabelAttachedData) هست.

:::

## تابع‌های مرتبط

- [Get3DTextLabelAttachedData](Get3DTextLabelAttachedData): گرفتن دیتای attached یک 3D text label.

</div>