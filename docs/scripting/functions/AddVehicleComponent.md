---
title: "AddVehicleComponent | open.mp"
description: "Adds a 'component' (often referred to as a 'mod' (modification)) to a vehicle."
canonical: https://open.mp/docs/scripting/functions/AddVehicleComponent
language: en
---

# AddVehicleComponent

## Description

Adds a 'component' (often referred to as a 'mod' (modification)) to a vehicle. Valid components can be found [here](https://open.mp/docs/scripting/resources/carcomponentid).

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle to add the component to. Not to be confused with modelid. |
| [component](https://open.mp/docs/scripting/resources/carcomponentid) | The ID of the component to add to the vehicle. |

## Returns

**true** - The component was successfully added to the vehicle.

**false** - The component was not added because the vehicle does not exist.

## Examples

```c
new gTaxi;

public OnGameModeInit()
{
    gTaxi = AddStaticVehicle(420, -2482.4937, 2242.3936, 4.6225, 179.3656, 6, 1); // Taxi
    return 1;
}

public OnPlayerStateChange(playerid, PLAYER_STATE:newstate, PLAYER_STATE:oldstate)
{
    if (newstate == PLAYER_STATE_DRIVER && oldstate == PLAYER_STATE_ONFOOT)
    {
        if (GetPlayerVehicleID(playerid) == gTaxi)
        {
            AddVehicleComponent(gTaxi, 1010); // Nitro
            SendClientMessage(playerid, 0xFFFFFFAA, "Nitro added to the Taxi.");
        }
    }
    return 1;
}
```

## Notes

warning

Using an invalid [component ID](https://open.mp/docs/scripting/resources/carcomponentid) crashes the player's game. (Fixed in open.mp)

## Related Functions

-   [RemoveVehicleComponent](https://open.mp/docs/scripting/functions/RemoveVehicleComponent): Remove a component from a vehicle.
-   [GetVehicleComponentInSlot](https://open.mp/docs/scripting/functions/GetVehicleComponentInSlot): Check what components a vehicle has.
-   [GetVehicleComponentType](https://open.mp/docs/scripting/functions/GetVehicleComponentType): Check the type of component via the ID.
-   [VehicleCanHaveComponent](https://open.mp/docs/scripting/functions/VehicleCanHaveComponent): Is the component legal on the vehicle?

## Related Callbacks

-   [OnVehicleMod](https://open.mp/docs/scripting/callbacks/OnVehicleMod): Called when a vehicle is modded.
-   [OnEnterExitModShop](https://open.mp/docs/scripting/callbacks/OnEnterExitModShop): Called when a vehicle enters or exits a mod shop.

## Related Resources

-   [Car Component IDs](https://open.mp/docs/scripting/resources/carcomponentid)
