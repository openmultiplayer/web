---
title: NPC_GetEnteringVehicle
sidebar_label: NPC_GetEnteringVehicle
description: Gets the vehicle an NPC is currently entering.
tags: ["npc", "vehicle"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the vehicle an NPC is currently entering.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns the vehicle ID the NPC is entering, or INVALID_VEHICLE_ID if not entering any vehicle.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkenterveh", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        if (!NPC_IsEnteringVehicle(npcid))
            return SendClientMessage(playerid, 0xFFFF00FF, "NPC %d is not entering a vehicle.", npcid);

        new vehicleid = NPC_GetEnteringVehicle(npcid);
        new seatid = NPC_GetEnteringVehicleSeat(npcid);

        if (vehicleid == INVALID_VEHICLE_ID || vehicleid == 0)
            return SendClientMessage(playerid, 0xFFFF00FF, "NPC %d has no pending target vehicle.", npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is entering vehicle %d (seat %d).", npcid, vehicleid, seatid);
        return 1;
    }
    return 0;
}
```

## Notes

- Returns INVALID_VEHICLE_ID if the NPC is not currently entering a vehicle
- This is different from the vehicle the NPC is already in
- The NPC must be in the process of entering for this to return a valid ID

## Related Functions

- [NPC_EnterVehicle](NPC_EnterVehicle): Make NPC enter a vehicle
- [NPC_GetVehicle](NPC_GetVehicle): Get NPC's current vehicle
- [NPC_IsEnteringVehicle](NPC_IsEnteringVehicle): Check if NPC is entering vehicle
- [NPC_GetEnteringVehicleSeat](NPC_GetEnteringVehicleSeat): Get entering vehicle seat

## Related Callbacks

_No specific callbacks are triggered by this function._
