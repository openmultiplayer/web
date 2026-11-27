---
title: "IsVehicleSirenEnabled | open.mp"
description: "Checks if a vehicle siren is on or off."
canonical: https://open.mp/docs/scripting/functions/IsVehicleSirenEnabled
language: en
---

# IsVehicleSirenEnabled

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Checks if a vehicle siren is on or off.

## Parameters

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle to check. |

## Return Values

**true** - Vehicle siren is on.

**false** - Vehicle siren is off.

## Examples

```c
if (IsVehicleSirenEnabled(vehicleid))
{
    // Vehicle siren is on
}
else
{
    // Vehicle siren is off
}
```

## Related Functions

-   [SetVehicleParamsSirenState](https://open.mp/docs/scripting/functions/SetVehicleParamsSirenState): Turn the siren for a vehicle on or off.
-   [ToggleVehicleSirenEnabled](https://open.mp/docs/scripting/functions/ToggleVehicleSirenEnabled): Turn the siren for a vehicle on or off.
-   [IsVehicleSirenEnabled](https://open.mp/docs/scripting/functions/IsVehicleSirenEnabled): Checks if a vehicle siren is on or off.
