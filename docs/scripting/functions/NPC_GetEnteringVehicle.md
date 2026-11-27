---
title: "NPC_GetEnteringVehicle | open.mp"
description: "Gets the vehicle an NPC is currently entering."
canonical: https://open.mp/docs/scripting/functions/NPC_GetEnteringVehicle
language: en
---

# NPC\_GetEnteringVehicle

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Gets the vehicle an NPC is currently entering.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |

## Returns

Returns the vehicle ID the NPC is entering, or INVALID\_VEHICLE\_ID if not entering any vehicle.

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

-   Returns INVALID\_VEHICLE\_ID if the NPC is not currently entering a vehicle
-   This is different from the vehicle the NPC is already in
-   The NPC must be in the process of entering for this to return a valid ID

## Related Functions

-   [NPC\_EnterVehicle](https://open.mp/docs/scripting/functions/NPC_EnterVehicle): Make NPC enter a vehicle
-   [NPC\_GetVehicle](https://open.mp/docs/scripting/functions/NPC_GetVehicle): Get NPC's current vehicle
-   [NPC\_IsEnteringVehicle](https://open.mp/docs/scripting/functions/NPC_IsEnteringVehicle): Check if NPC is entering vehicle
-   [NPC\_GetEnteringVehicleSeat](https://open.mp/docs/scripting/functions/NPC_GetEnteringVehicleSeat): Get entering vehicle seat

## Related Callbacks

_No specific callbacks are triggered by this function._
