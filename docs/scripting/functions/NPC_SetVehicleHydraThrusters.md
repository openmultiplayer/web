---
title: "NPC_SetVehicleHydraThrusters | open.mp"
description: "Sets the Hydra thruster direction for an NPC's vehicle."
canonical: https://open.mp/docs/scripting/functions/NPC_SetVehicleHydraThrusters
language: en
---

# NPC\_SetVehicleHydraThrusters

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Sets the Hydra thruster direction for an NPC's vehicle when piloting a Hydra aircraft.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |
| direction | The thruster direction (0=forward, 1=backward) |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/sethydrathrusters ", true, 19))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new direction = strval(cmdtext[19]);

        NPC_SetVehicleHydraThrusters(npcid, direction);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d hydra thrusters set to %d", npcid, direction);

        return 1;
    }
    return 0;
}
```

## Notes

-   Only works with Hydra aircraft (vehicle ID 520)
-   Direction 0 = forward thrusters (jet mode)
-   Direction 1 = downward thrusters (VTOL mode)
-   Use NPC\_GetVehicleHydraThrusters to check current direction

## Related Functions

-   [NPC\_GetVehicleHydraThrusters](https://open.mp/docs/scripting/functions/NPC_GetVehicleHydraThrusters): Get thruster direction
-   [NPC\_GetVehicleID](https://open.mp/docs/scripting/functions/NPC_GetVehicleID): Get NPC's vehicle
-   [NPC\_PutInVehicle](https://open.mp/docs/scripting/functions/NPC_PutInVehicle): Put NPC in vehicle
-   [GetVehicleModel](https://open.mp/docs/scripting/functions/GetVehicleModel): Get vehicle model

## Related Callbacks

_No specific callbacks are triggered by this function._
