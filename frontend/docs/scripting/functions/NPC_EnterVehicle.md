---
title: NPC_EnterVehicle
sidebar_label: NPC_EnterVehicle
description: Makes an NPC enter a vehicle.
tags: ["npc", "vehicle"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Makes an NPC enter a vehicle by walking to it and getting in.

| Name      | Description                               |
| --------- | ----------------------------------------- |
| npcid     | The ID of the NPC                         |
| vehicleid | The ID of the vehicle to enter            |
| seatid    | The seat to enter                         |
| moveType  | The movement type to use when approaching |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcenterbike ", true, 14))
    {
        new seatid = strval(cmdtext[14]);
        if (cmdtext[14] == '\0')
            return SendClientMessage(playerid, 0xFF0000FF, "Usage: /npcenterbike [seatid]");

        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        new vehicleid = PlayerVehicles[playerid][0];
        if (vehicleid == INVALID_VEHICLE_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "Your motorcycle is not available.");

        if (NPC_EnterVehicle(npcid, vehicleid, seatid, NPC_MOVE_TYPE_JOG))
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d is entering motorcycle (seat %d).", npcid, seatid);
        else
            SendClientMessage(playerid, 0xFF0000FF, "NPC %d failed to enter motorcycle (seat %d).", npcid, seatid);

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

- The NPC will try to reach the vehicle door, using the specified movement type, before entering
- If the seat is occupied, the NPC may not be able to enter

## Related Functions

- [NPC_ExitVehicle](NPC_ExitVehicle): Make NPC exit vehicle
- [NPC_PutInVehicle](NPC_PutInVehicle): Instantly put NPC in vehicle
- [NPC_GetVehicle](NPC_GetVehicle): Get NPC's current vehicle
- [NPC_IsEnteringVehicle](NPC_IsEnteringVehicle): Check if NPC is entering vehicle

## Related Callbacks

_No specific callbacks are triggered by this function._
