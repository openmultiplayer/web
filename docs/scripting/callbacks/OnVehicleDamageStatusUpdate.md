---
title: OnVehicleDamageStatusUpdate
description: This callback is called when a vehicle element such as doors, tires, panels, or lights change their damage status.
tags: ["vehicle"]
---

:::tip

For some useful functions for working with vehicle damage values, see [here](../resources/damagestatus).

:::

## Description

This callback is called when a vehicle element such as doors, tires, panels, or lights change their damage status.

| Name      | Description                                                                                            |
| --------- | ------------------------------------------------------------------------------------------------------ |
| vehicleid | The ID of the vehicle that was changed its damage status.                                              |
| playerid  | The ID of the player who synced the change in the damage status (who had the car damaged or repaired). |

## Returns

1 - Will prevent other filterscripts from receiving this callback.

0 - Indicates that this callback will be passed to the next filterscript.

It is always called first in filterscripts.

## Examples

```c
public OnVehicleDamageStatusUpdate(vehicleid, playerid)
{
    // Get the damage status of all the components
    new panels, doors, lights, tires;
    GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);

    // Set the tires to 0, which means none are popped
    tires = 0;

    // Update the vehicle's damage status with unpopped tires
    UpdateVehicleDamageStatus(vehicleid, panels, doors, lights, tires);
    return 1;
}
```

## Notes

:::tip

This does not include vehicle health changes.

:::

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another. 

- [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus): Get the vehicle damage state for each part individually.
- [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus): Update the vehicle damage.
