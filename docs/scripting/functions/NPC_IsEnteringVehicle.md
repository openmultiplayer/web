---
title: "NPC_IsEnteringVehicle | open.mp"
description: "Checks if an NPC is currently entering a vehicle."
canonical: https://open.mp/docs/scripting/functions/NPC_IsEnteringVehicle
language: en
---

# NPC\_IsEnteringVehicle

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Checks if an NPC is currently in the process of entering a vehicle.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the NPC is entering a vehicle, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkenteringvehicle", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isEntering = NPC_IsEnteringVehicle(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is entering vehicle: %s", npcid, isEntering ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```

## Notes

-   Returns true only during the entering animation/process
-   Once the NPC is fully inside, this returns false
-   The NPC must have been instructed to enter with NPC\_EnterVehicle

## Related Functions

-   [NPC\_EnterVehicle](https://open.mp/docs/scripting/functions/NPC_EnterVehicle): Make NPC enter vehicle
-   [NPC\_GetEnteringVehicleID](https://open.mp/docs/scripting/functions/NPC_GetEnteringVehicleID): Get entering vehicle ID
-   [NPC\_GetEnteringVehicleSeat](https://open.mp/docs/scripting/functions/NPC_GetEnteringVehicleSeat): Get entering seat
-   [NPC\_GetVehicle](https://open.mp/docs/scripting/functions/NPC_GetVehicle): Get current vehicle

## Related Callbacks

_No specific callbacks are triggered by this function._
