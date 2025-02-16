---
title: ChangeVehiclePaintjob
description: Change a vehicle's paintjob.
tags: ["vehicle"]
---

## Description

Change a vehicle's paintjob (for plain colors see [ChangeVehicleColor](ChangeVehicleColor)).

| Name      | Description                                                                            |
| --------- | -------------------------------------------------------------------------------------- |
| vehicleid | The ID of the vehicle to change the paintjob of.                                       |
| paintjob  | The ID of the [Paintjob](../resources/paintjobs) to apply. Use 3 to remove a paintjob. |

## Returns

This function always returns **true** (success), even if the vehicle passed is not created.

## Examples

```c
new rand = random(3); // Will either be 0 1 or 2 (all valid)
new vehicleid = GetPlayerVehicleID(playerid);

ChangeVehicleColor(vehicleid, 1, 1); // making sure it is white for better result
ChangeVehiclePaintjob(vehicleid, rand); // changes the paintjob of the player's current vehicle to a random one
```

## Notes

:::warning

If vehicle's color is black, paintjob may not be visible. Better to make vehicle white before applying painjob by using

```c
ChangeVehicleColor(vehicleid, 1, 1);
```

:::

## Related Functions

- [GetVehiclePaintjob](GetVehiclePaintjob): Gets the vehicle's paintjob id.
- [ChangeVehicleColor](ChangeVehicleColor): Set the color of a vehicle.

## Related Callbacks

- [OnVehiclePaintjob](../callbacks/OnVehiclePaintjob): Called when a vehicle's paintjob is changed.

## Related Resources

- [Vehicle Paintjob IDs](../resources/paintjobs)
