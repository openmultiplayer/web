---
title: "NPC_ExitVehicle | open.mp"
description: "Makes an NPC exit its current vehicle."
canonical: https://open.mp/docs/scripting/functions/NPC_ExitVehicle
language: en
---

# NPC\_ExitVehicle

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Makes an NPC exit its current vehicle.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcexitbike", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (NPC_ExitVehicle(npcid))
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d is exiting motorcycle.", npcid);
        else
            SendClientMessage(playerid, 0xFF0000FF, "NPC %d failed to exit motorcycle.", npcid);

        return 1;
    }
    return 0;
}
```

## Notes

-   The NPC must be in a vehicle for this function to work, otherwise this function has no effect
-   The NPC will perform the exit animation and after exiting, the NPC will be on foot near the vehicle

## Related Functions

-   [NPC\_EnterVehicle](https://open.mp/docs/scripting/functions/NPC_EnterVehicle): Make NPC enter a vehicle
-   [NPC\_PutInVehicle](https://open.mp/docs/scripting/functions/NPC_PutInVehicle): Instantly put NPC in vehicle
-   [NPC\_RemoveFromVehicle](https://open.mp/docs/scripting/functions/NPC_RemoveFromVehicle): Instantly remove NPC from vehicle
-   [NPC\_GetVehicle](https://open.mp/docs/scripting/functions/NPC_GetVehicle): Get NPC's current vehicle

## Related Callbacks

_No specific callbacks are triggered by this function._
