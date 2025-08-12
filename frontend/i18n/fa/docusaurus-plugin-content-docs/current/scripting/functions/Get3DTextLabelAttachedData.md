---
title: Get3DTextLabelAttachedData
sidebar_label: Get3DTextLabelAttachedData
description: داده‌های attached شده به 3D text label رو میگیره.
tags: ["3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

## توضیحات

داده‌های attached شده به 3D text label رو میگیره.

| نام              | توضیحات                                                                    |
| ---------------- | -------------------------------------------------------------------------- |
| Text3D:textid    | ID ‌ 3D text label که میخوایم داده‌های attached اش رو بگیریم.               |
| &parentPlayerid  | یه متغیر که parentPlayerid رو توش ذخیره میکنیم، با reference پاس میشه.      |
| &parentVehicleid | یه متغیر که parentVehicleid رو توش ذخیره میکنیم، با reference پاس میشه.     |

## مثال‌ها

یه مثال برای **parentPlayerid**:

```c
new Text3D:gMyLabel;
new parentPlayerid;
new parentVehicleid;

gMyLabel = Create3DTextLabel("Hello, I am new here!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, false);
Attach3DTextLabelToPlayer(gMyLabel, playerid, 0.0, 0.0, 0.7);

Get3DTextLabelAttachedData(gMyLabel, parentPlayerid, parentVehicleid);
```

یه مثال برای **parentVehicleid**:

```c
new Text3D:gVehicle3dText[MAX_VEHICLES];
new gVehicleId;

new parentPlayerid;
new parentVehicleid;

gVehicleId = CreateVehicle(510, 0.0, 0.0, 15.0, 5, 0, 120);
gVehicle3dText[gVehicleId] = Create3DTextLabel("Example Text", 0xFF0000AA, 0.0, 0.0, 0.0, 50.0, 0, false);
Attach3DTextLabelToVehicle(gVehicle3dText[gVehicleId], gVehicleId, 0.0, 0.0, 2.0);

Get3DTextLabelAttachedData(gVehicle3dText[gVehicleId], parentPlayerid, parentVehicleid);
// `parentVehicleid` میشه مقدار 'gVehicleId'
```

## توابع مرتبط

- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): وصل کردن یه 3D text label به یه بازیکن.
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): وصل کردن یه 3D Text Label به یه ماشین خاص.
- [GetPlayer3DTextLabelAttachedData](GetPlayer3DTextLabelAttachedData): گرفتن داده‌های attached شده به player 3D text label.