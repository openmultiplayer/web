---
title: SetVehiclePos
sidebar_label: SetVehiclePos
description: Set a vehicle's position.
tags: ["vehicle"]
---

## Description

Set a vehicle's position

| Name      | Description                                  |
| --------- | -------------------------------------------- |
| vehicleid | Vehicle ID that you want set new position.   |
| Float:x   | The X coordinate to position the vehicle at. |
| Float:y   | The Y coordinate to position the vehicle at. |
| Float:z   | The Z coordinate to position the vehicle at. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. The vehicle specified does not exist.

## Examples

```c
// Put the player's vehicle at the coordinates 0.0, 0.0, 3.0 (center of SA)
new vehicleid = GetPlayerVehicleID(playerid);
SetVehiclePos(vehicleid, 0.0, 0.0, 3.0);
```

## Notes

:::warning

Known Bug(s):

- An empty vehicle will not fall after being teleported into the air!

:::

## Related Functions

- [SetPlayerPos](SetPlayerPos): Set a player's position.
- [GetVehiclePos](GetVehiclePos): Get the position of a vehicle.
- [SetVehicleZAngle](SetVehicleZAngle): Set the direction of a vehicle.
