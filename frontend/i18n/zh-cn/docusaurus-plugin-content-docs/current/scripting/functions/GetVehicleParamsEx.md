---
title: GetVehicleParamsEx
sidebar_label: GetVehicleParamsEx
description: Gets a vehicle's parameters.
tags: ["vehicle"]
---

## Description

Gets a vehicle's parameters.

| Name            | Description                                                         |
| --------------- | ------------------------------------------------------------------- |
| vehicleid       | The ID of the vehicle to get the parameters from.                   |
| &bool:engine    | Get the engine status. If 1, the engine is running..                |
| &bool:lights    | Get the vehicle's lights' state. If 1 the lights are on.            |
| &bool:alarm     | Get the vehicle's alarm state. If 1 the alarm is (or was) sounding. |
| &bool:doors     | Get the lock status of the doors. If 1 the doors are locked.        |
| &bool:bonnet    | Get the bonnet/hood status. If 1, it's open.                        |
| &bool:boot      | Get the boot/trunk status. 1 means it is open.                      |
| &bool:objective | Get the objective status. 1 means the objective is on.              |

## Returns

**true** - success

**false** - failure (invalid vehicle ID).

The vehicle's parameters are stored in the referenced variables, not in the return value.

## Examples

```c
new
	bool:engine, bool:lights, bool:alarm, bool:doors, bool:bonnet, bool:boot, bool:objective;
GetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);
//This would cause all the variable above, to become the status of its subject.
```

## Notes

:::tip

If a parameter is unset (SetVehicleParamsEx not used beforehand) the value will be -1 ('unset').

:::

## Related Functions

- [SetVehicleParamsEx](SetVehicleParamsEx): Sets a vehicle's params for all players.
