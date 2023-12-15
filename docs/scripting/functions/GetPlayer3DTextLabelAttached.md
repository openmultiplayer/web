---
title: GetPlayer3DTextLabelAttached
description: Gets the player's 3D text label attached data.
tags: ["player", "3dtextlabel"]
---

:::warning

This function is deprecated. Please see [GetPlayer3DTextLabelAttachedData](GetPlayer3DTextLabelAttachedData).

:::

## Description

Gets the player's 3D text label attached data.

| Name      | Description                                                               |
| --------- | ------------------------------------------------------------------------- |
| playerid | The ID of the player.  |
| PlayerText3D:textid | The ID of the player's 3D text label to get the attached data of. |
| &parentPlayerid | A variable into which to store the parentPlayerid, passed by reference. |
| &parentVehicleid | A variable into which to store the parentVehicleid, passed by reference. |

## Examples

An example for parentPlayerid:

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

An example for parentVehicleid:

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

## Notes

:::tip

This function is just short name of [GetPlayer3DTextLabelAttachedData](GetPlayer3DTextLabelAttachedData).

:::

## Related Functions

- [Get3DTextLabelAttachedData](Get3DTextLabelAttachedData): Gets the 3D text label attached data.
