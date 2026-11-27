---
title: "NPC_GetVehicleID | open.mp"
description: "Gets the vehicle ID of an NPC's current vehicle."
canonical: https://open.mp/docs/scripting/functions/NPC_GetVehicleID
language: en
---

# NPC\_GetVehicleID

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Gets the vehicle ID of an NPC's current vehicle.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |

## Returns

Returns the vehicle ID the NPC is in, or INVALID\_VEHICLE\_ID if not in any vehicle.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvehicleid", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new vehicleid = NPC_GetVehicleID(npcid);

        if (vehicleid == INVALID_VEHICLE_ID)
            SendClientMessage(playerid, 0xFFFF00FF, "NPC %d is not in any vehicle.", npcid);
        else
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d vehicle ID: %d", npcid, vehicleid);
        return 1;
    }
    return 0;
}
```

## Notes

-   Returns INVALID\_VEHICLE\_ID if the NPC is not in any vehicle

## Related Functions

-   [NPC\_GetVehicleSeat](https://open.mp/docs/scripting/functions/NPC_GetVehicleSeat): Get NPC's seat in vehicle
-   [NPC\_PutInVehicle](https://open.mp/docs/scripting/functions/NPC_PutInVehicle): Put NPC in vehicle
-   [NPC\_RemoveFromVehicle](https://open.mp/docs/scripting/functions/NPC_RemoveFromVehicle): Remove NPC from vehicle
-   [NPC\_GetVehicle](https://open.mp/docs/scripting/functions/NPC_GetVehicle): Alternative function with identical behavior

## Related Callbacks

_No specific callbacks are triggered by this function._
