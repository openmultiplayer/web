---
title: "GetVehicleComponentType | open.mp"
description: "Find out what type of component a certain ID is."
canonical: https://open.mp/docs/scripting/functions/GetVehicleComponentType
language: en
---

# GetVehicleComponentType

## Description

Find out what type of component a certain ID is.

| Name | Description |
| --- | --- |
| component | The component ID to check. |

## Returns

The [component slot](https://open.mp/docs/scripting/resources/componentslots) ID of the specified component or **\-1** if the component is invalid.

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

-   [AddVehicleComponent](https://open.mp/docs/scripting/functions/AddVehicleComponent): Add a component to a vehicle.
-   [RemoveVehicleComponent](https://open.mp/docs/scripting/functions/RemoveVehicleComponent): Remove a component from a vehicle.
-   [GetVehicleComponentInSlot](https://open.mp/docs/scripting/functions/GetVehicleComponentInSlot): Check what components a vehicle has.

## Related Callbacks

-   [OnVehicleMod](https://open.mp/docs/scripting/callbacks/OnVehicleMod): Called when a vehicle is modded.
-   [OnEnterExitModShop](https://open.mp/docs/scripting/callbacks/OnEnterExitModShop): Called when a vehicle enters or exits a mod shop.
