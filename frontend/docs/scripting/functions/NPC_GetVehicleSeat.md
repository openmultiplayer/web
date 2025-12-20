---
title: NPC_GetVehicleSeat
sidebar_label: NPC_GetVehicleSeat
description: Gets the seat ID of an NPC in a vehicle.
tags: ["npc", "vehicle"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Gets the seat ID of an NPC in a vehicle.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns the seat ID, or -1 if not in a vehicle.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvehicleseat", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        if (NPC_GetVehicle(npcid) == INVALID_VEHICLE_ID)
            return SendClientMessage(playerid, 0xFFFF00FF, "NPC %d is not in any vehicle.", npcid);

        new seatid = NPC_GetVehicleSeat(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d vehicle seat: %d", npcid, seatid);
        return 1;
    }
    return 0;
}
```

## Seat IDs

| ID  | Seat                         |
| --- | ---------------------------- |
| 0   | Driver                       |
| 1   | Front passenger              |
| 2   | Back-left passenger          |
| 3   | Back-right passenger         |
| 4+  | Passenger seats (coach etc.) |

## Notes

- Returns -1 if the NPC is not in any vehicle
- Seat 0 is always the driver seat
- Maximum seat ID depends on the vehicle model

## Related Functions

- [NPC_GetVehicleID](NPC_GetVehicleID): Get NPC's vehicle ID
- [NPC_PutInVehicle](NPC_PutInVehicle): Put NPC in vehicle
- [NPC_RemoveFromVehicle](NPC_RemoveFromVehicle): Remove NPC from vehicle

## Related Callbacks

_No specific callbacks are triggered by this function._
