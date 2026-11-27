---
title: "NPC_RemoveFromVehicle | open.mp"
description: "Removes an NPC from their current vehicle."
canonical: https://open.mp/docs/scripting/functions/NPC_RemoveFromVehicle
language: en
---

# NPC\_RemoveFromVehicle

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Removes an NPC from their current vehicle.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the NPC was removed from the vehicle, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcremovefromvehicle", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:success = NPC_RemoveFromVehicle(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d removed from vehicle: %s", npcid, success ? "Success" : "Failed");
        return 1;
    }
    return 0;
}
```

## Notes

-   NPC will instantly appear outside the vehicle without exit animation
-   Use NPC\_ExitVehicle for animated exit
-   Returns false if NPC is not in a vehicle
-   NPC position will be set near the vehicle

## Related Functions

-   [NPC\_PutInVehicle](https://open.mp/docs/scripting/functions/NPC_PutInVehicle): Put NPC in vehicle
-   [NPC\_ExitVehicle](https://open.mp/docs/scripting/functions/NPC_ExitVehicle): Make NPC exit with animation
-   [NPC\_GetVehicleID](https://open.mp/docs/scripting/functions/NPC_GetVehicleID): Get NPC's vehicle
-   [NPC\_GetVehicleSeat](https://open.mp/docs/scripting/functions/NPC_GetVehicleSeat): Get NPC's seat

## Related Callbacks

_No specific callbacks are triggered by this function._
