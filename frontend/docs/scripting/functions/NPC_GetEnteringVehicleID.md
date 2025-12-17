---
title: NPC_GetEnteringVehicleID
sidebar_label: NPC_GetEnteringVehicleID
description: Gets the vehicle ID an NPC is currently entering.
tags: ["npc", "vehicle"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Gets the vehicle ID an NPC is currently entering.

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

        // Start monitoring if not already running
        if (PlayerEnterVehicleMonitor[playerid] == INVALID_TIMER_ID)
        {
            PlayerEnterVehicleMonitor[playerid] = SetTimerEx("CheckNPCEnteringVehicle", 200, true, "i", playerid);
            PlayerWasEnteringVehicle[playerid] = false;
            SendClientMessage(playerid, 0x00FF00FF, "Started monitoring NPC %d vehicle entry.", npcid);
        }
        else
        {
            SendClientMessage(playerid, 0xFFFF00FF, "Already monitoring NPC %d vehicle entry.", npcid);
        }
        return 1;
    }
    return 0;
}

forward CheckNPCEnteringVehicle(playerid);
public CheckNPCEnteringVehicle(playerid)
{
    if (!IsPlayerConnected(playerid))
    {
        StopPlayerEnterVehicleMonitor(playerid);
        return 0;
    }

    new npcid = PlayerNPC[playerid];
    if (npcid == INVALID_NPC_ID || !NPC_IsValid(npcid))
    {
        StopPlayerEnterVehicleMonitor(playerid);
        return 0;
    }

    new bool:isEntering = NPC_IsEnteringVehicle(npcid);

    if (isEntering)
    {
        new vehicleid = NPC_GetEnteringVehicle(npcid);
        new seatid = NPC_GetEnteringVehicleSeat(npcid);

        if (vehicleid != INVALID_VEHICLE_ID && vehicleid != 0)
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC %d entering vehicle %d (seat %d)", npcid, vehicleid, seatid);
        }
    }

    return 1;
}
```

## Notes

- This function is similar to NPC_GetEnteringVehicle
- Returns INVALID_VEHICLE_ID if the NPC is not in the process of entering a vehicle
- The value becomes 0 once the NPC successfully enters the vehicle

## Related Functions

- [NPC_GetEnteringVehicle](NPC_GetEnteringVehicle): Get entering vehicle
- [NPC_GetEnteringVehicleSeat](NPC_GetEnteringVehicleSeat): Get entering vehicle seat
- [NPC_EnterVehicle](NPC_EnterVehicle): Make NPC enter vehicle
- [NPC_IsEnteringVehicle](NPC_IsEnteringVehicle): Check if entering vehicle

## Related Callbacks

_No specific callbacks are triggered by this function._
