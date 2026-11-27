---
title: "NPC_SetVehicleHealth | open.mp"
description: "Sets the health of an NPC's vehicle."
canonical: https://open.mp/docs/scripting/functions/NPC_SetVehicleHealth
language: en
---

# NPC\_SetVehicleHealth

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Sets the health of an NPC's vehicle.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |
| health | The health value (0.0-1000.0) |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setvehiclehealth ", true, 18))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:health = floatstr(cmdtext[18]);

        NPC_SetVehicleHealth(npcid, health);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d vehicle health set to %.2f", npcid, health);

        return 1;
    }
    return 0;
}
```

## Notes

-   Only works when NPC is in a vehicle
-   Health ranges from 0.0 (destroyed) to 1000.0 (perfect condition)
-   Vehicles explode when health drops below 250

## Related Functions

-   [NPC\_GetVehicleHealth](https://open.mp/docs/scripting/functions/NPC_GetVehicleHealth): Get vehicle health
-   [NPC\_GetVehicleID](https://open.mp/docs/scripting/functions/NPC_GetVehicleID): Get NPC's vehicle
-   [NPC\_PutInVehicle](https://open.mp/docs/scripting/functions/NPC_PutInVehicle): Put NPC in vehicle
-   [SetVehicleHealth](https://open.mp/docs/scripting/functions/SetVehicleHealth): Set vehicle health directly

## Related Callbacks

_No specific callbacks are triggered by this function._
