---
title: NPC_GetVehicle
sidebar_label: NPC_GetVehicle
description: Gets the vehicle ID of an NPC's current vehicle.
tags: ["npc", "vehicle"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the vehicle ID of an NPC's current vehicle.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns the vehicle ID the NPC is in, or INVALID_VEHICLE_ID if not in any vehicle.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvehicle", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new vehicleid = NPC_GetVehicle(npcid);

        if (vehicleid == INVALID_VEHICLE_ID)
            SendClientMessage(playerid, 0xFFFF00FF, "NPC %d is not in any vehicle.", npcid);
        else
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d is in vehicle: %d", npcid, vehicleid);
        return 1;
    }
    return 0;
}
```

## Notes

- Returns INVALID_VEHICLE_ID if the NPC is not in any vehicle
- Use this to check if an NPC is driving or is a passenger

## Related Functions

- [NPC_GetVehicleID](NPC_GetVehicleID): Alternative function with identical behavior
- [NPC_GetVehicleSeat](NPC_GetVehicleSeat): Get NPC's seat in vehicle
- [NPC_PutInVehicle](NPC_PutInVehicle): Put NPC in vehicle
- [NPC_RemoveFromVehicle](NPC_RemoveFromVehicle): Remove NPC from vehicle

## Related Callbacks

_No specific callbacks are triggered by this function._
