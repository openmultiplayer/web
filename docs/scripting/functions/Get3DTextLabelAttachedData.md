---
title: Get3DTextLabelAttachedData
description: Gets the 3D text label attached data.
tags: ["3dtextlabel"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the 3D text label attached data.

| Name      | Description                                                               |
| --------- | ------------------------------------------------------------------------- |
| Text3D:textid | The ID of the 3D text label to get the attached data of. |
| &parentPlayerid | A variable into which to store the parentPlayerid, passed by reference. |
| &parentVehicleid | A variable into which to store the parentVehicleid, passed by reference. |

## Examples

An example for parentPlayerid:

```c
new Text3D:gMyLabel;
new parentPlayerid;
new parentVehicleid;

gMyLabel = Create3DTextLabel("Hello, I am new here!", 0x008080FF, 30.0, 40.0, 50.0, 40.0, false);
Attach3DTextLabelToPlayer(gMyLabel, playerid, 0.0, 0.0, 0.7);

Get3DTextLabelAttachedData(gMyLabel, parentPlayerid, parentVehicleid);
```

An example for parentVehicleid:

```c
new Text3D:gVehicle3dText[MAX_VEHICLES];
new gVehicleId;

new parentPlayerid;
new parentVehicleid;

gVehicleId = CreateVehicle(510, 0.0, 0.0, 15.0, 5, 0, 120);
gVehicle3dText[gVehicleId] = Create3DTextLabel("Example Text", 0xFF0000AA, 0.0, 0.0, 0.0, 50.0, 0, false);
Attach3DTextLabelToVehicle(gVehicle3dText[gVehicleId], gVehicleId, 0.0, 0.0, 2.0);

Get3DTextLabelAttachedData(gVehicle3dText[gVehicleId], parentPlayerid, parentVehicleid);
// The `parentVehicleid` will be the value of 'gVehicleId'
```

## Related Functions

- [Attach3DTextLabelToPlayer](Attach3DTextLabelToPlayer): Attach a 3D text label to a player.
- [Attach3DTextLabelToVehicle](Attach3DTextLabelToVehicle): Attaches a 3D Text Label to a specific vehicle.
- [GetPlayer3DTextLabelAttachedData](GetPlayer3DTextLabelAttachedData): Gets the player 3D text label attached data.
