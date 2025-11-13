---
title: IsVehicleSirenEnabled
sidebar_label: IsVehicleSirenEnabled
description: Checks if a vehicle siren is on or off.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Checks if a vehicle siren is on or off.

## Parameters

| Name      | Description                     |
| --------- | ------------------------------- |
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

- [SetVehicleParamsSirenState](SetVehicleParamsSirenState): Turn the siren for a vehicle on or off.
- [ToggleVehicleSirenEnabled](ToggleVehicleSirenEnabled): Turn the siren for a vehicle on or off.
- [IsVehicleSirenEnabled](IsVehicleSirenEnabled): Checks if a vehicle siren is on or off.
