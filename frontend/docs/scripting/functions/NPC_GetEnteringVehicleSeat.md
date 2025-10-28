---
title: NPC_GetEnteringVehicleSeat
sidebar_label: NPC_GetEnteringVehicleSeat
description: Gets the seat an NPC is entering in a vehicle.
tags: ["npc", "vehicle"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the seat an NPC is entering in a vehicle.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns the seat number the NPC is entering, or -1 if not entering.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkentervehseat", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        if (!NPC_IsEnteringVehicle(npcid))
            return SendClientMessage(playerid, 0xFFFF00FF, "NPC %d is not entering any vehicle.", npcid);

        new seatid = NPC_GetEnteringVehicleSeat(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is entering vehicle seat: %d", npcid, seatid);
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

- Returns -1 if the NPC is not entering any vehicle
- This information is only valid while the NPC is in the entering process

## Related Functions

- [NPC_GetEnteringVehicle](NPC_GetEnteringVehicle): Get entering vehicle
- [NPC_GetEnteringVehicleID](NPC_GetEnteringVehicleID): Get entering vehicle ID
- [NPC_EnterVehicle](NPC_EnterVehicle): Make NPC enter vehicle
- [NPC_GetVehicleSeat](NPC_GetVehicleSeat): Get current vehicle seat

## Related Callbacks

_No specific callbacks are triggered by this function._
