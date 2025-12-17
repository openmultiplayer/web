---
title: NPC_PutInVehicle
sidebar_label: NPC_PutInVehicle
description: Puts an NPC into a vehicle at a specific seat.
tags: ["npc", "vehicle"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Puts an NPC into a vehicle at a specific seat.

| Name      | Description                   |
| --------- | ----------------------------- |
| npcid     | The ID of the NPC             |
| vehicleid | The ID of the vehicle         |
| seatid    | The seat ID to put the NPC in |

## Returns

Returns `true` if the NPC was put in the vehicle successfully, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcputinvehicle", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new vehicleid = GetPlayerVehicleID(playerid);
        if (vehicleid == 0)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not in a vehicle.");

        new bool:success = NPC_PutInVehicle(npcid, vehicleid, 1);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d put in vehicle %d (seat 1): %s", npcid, vehicleid, success ? "Success" : "Failed");
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

- NPC will instantly appear in the vehicle without enter animation
- Use NPC_GetVehicleID to check which vehicle an NPC is in
- Seat 0 is always the driver seat
- Maximum seat ID depends on the vehicle model

## Related Functions

- [NPC_RemoveFromVehicle](NPC_RemoveFromVehicle): Remove NPC from vehicle
- [NPC_GetVehicleID](NPC_GetVehicleID): Get NPC's vehicle
- [NPC_GetVehicleSeat](NPC_GetVehicleSeat): Get NPC's seat
- [NPC_EnterVehicle](NPC_EnterVehicle): Make NPC enter with animation

## Related Callbacks

_No specific callbacks are triggered by this function._
