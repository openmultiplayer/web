---
title: GetVehicleComponentInSlot
description: Retrieves the installed component ID (modshop mod(ification)) on a vehicle in a specific slot.
tags: ["vehicle"]
---

## Description

Retrieves the installed component ID (modshop mod(ification)) on a vehicle in a specific slot.

| Name            | Description                                                                |
| --------------- | -------------------------------------------------------------------------- |
| vehicleid       | The ID of the vehicle to check for the component.                          |
| CARMODTYPE:slot | The [component slot](../resources/Componentslots) to check for components. |

## Returns

The ID of the component installed in the specified slot.

Returns **0** if no component in specified vehicle's specified slot, or if vehicle doesn't exist.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/myspoiler", cmdtext, true))
    {
        if (!IsPlayerInAnyVehicle(playerid))
        {
            return 1;
        }

        new
            component = GetVehicleComponentInSlot(GetPlayerVehicleID(playerid), CARMODTYPE_SPOILER);

        if (component == 1049)
        {
            SendClientMessage(playerid, -1, "You have an Alien spoiler installed in your Elegy!");
        }
        return 1;
    }
    return 0;
}
```

## Notes

:::warning

Known Bug(s):

- Doesn't work for CARMODTYPE_STEREO.
- Both front bull bars and front bumper components are saved in the CARMODTYPE_FRONT_BUMPER slot. If a vehicle has both of them installed, this function will only return the one which was installed last. 
- Both rear bull bars and rear bumper components are saved in the CARMODTYPE_REAR_BUMPER slot. If a vehicle has both of them installed, this function will only return the one which was installed last.
- Both left side skirt and right side skirt are saved in the CARMODTYPE_SIDESKIRT slot. If a vehicle has both of them installed, this function will only return the one which was installed last.

:::

## Related Functions

- [AddVehicleComponent](AddVehicleComponent): Add a component to a vehicle.
- [GetVehicleComponentType](GetVehicleComponentType): Check the type of component via the ID.

## Related Callbacks

- [OnVehicleMod](../callbacks/OnVehicleMod): Called when a vehicle is modded.
- [OnEnterExitModShop](../callbacks/OnEnterExitModShop): Called when a vehicle enters or exits a mod shop.

## Related Resources

- [Vehicle Component Slots](../resources/Componentslots)
