---
title: NPC_GetSurfingVehicle
sidebar_label: NPC_GetSurfingVehicle
description: Gets the vehicle an NPC is surfing on.
tags: ["npc", "surfing", "vehicle"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Gets the vehicle an NPC is surfing on.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns the vehicle ID, or `INVALID_VEHICLE_ID` if not surfing on a vehicle.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checksurfingvehicle", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new vehicleid = NPC_GetSurfingVehicle(npcid);

        if (vehicleid == INVALID_VEHICLE_ID)
            SendClientMessage(playerid, 0xFFFF00FF, "NPC %d is not surfing on any vehicle.", npcid);
        else
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d is surfing on vehicle: %d", npcid, vehicleid);
        return 1;
    }
    return 0;
}
```

## Notes

- Returns `INVALID_VEHICLE_ID` if the NPC is not surfing on any vehicle
- Surfing allows NPCs to move along with vehicles while maintaining their relative position

## Related Functions

- [NPC_SetSurfingVehicle](NPC_SetSurfingVehicle): Sets the vehicle an NPC is surfing on
- [NPC_GetSurfingObject](NPC_GetSurfingObject): Gets the object an NPC is surfing on
- [NPC_GetSurfingPlayerObject](NPC_GetSurfingPlayerObject): Gets the player object an NPC is surfing on
- [NPC_GetSurfingOffset](NPC_GetSurfingOffsets): Gets the surfing offset for an NPC
- [NPC_ResetSurfingData](NPC_ResetSurfingData): Resets all surfing data for an NPC

## Related Callbacks

_No specific callbacks are triggered by this function._
