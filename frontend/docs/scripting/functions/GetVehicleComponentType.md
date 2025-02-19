---
title: GetVehicleComponentType
sidebar_label: GetVehicleComponentType
description: Find out what type of component a certain ID is.
tags: ["vehicle"]
---

## Description

Find out what type of component a certain ID is.

| Name      | Description                |
| --------- | -------------------------- |
| component | The component ID to check. |

## Returns

The component slot ID of the specified component or **-1** if the component is invalid.

## Examples

```c
public OnVehicleMod(playerid, vehicleid, componentid)
{
    new
        CARMODTYPE:componentType = GetVehicleComponentType(componentid);

    if (componentType != CARMODTYPE_NONE)
    {
        new
            string[64];

        format(string, sizeof(string), "You have modified your vehicle on slot %i", componentType);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
    }
    else
    {
        SendClientMessage(playerid, 0xFF0000FF, "The component is invalid.");
    }
    return 1;
}
```

## Related Functions

- [AddVehicleComponent](AddVehicleComponent): Add a component to a vehicle.
- [RemoveVehicleComponent](RemoveVehicleComponent): Remove a component from a vehicle.
- [GetVehicleComponentInSlot](GetVehicleComponentInSlot): Check what components a vehicle has.

## Related Callbacks

- [OnVehicleMod](../callbacks/OnVehicleMod): Called when a vehicle is modded.
- [OnEnterExitModShop](../callbacks/OnEnterExitModShop): Called when a vehicle enters or exits a mod shop.
