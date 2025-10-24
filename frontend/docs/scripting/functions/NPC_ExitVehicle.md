---
title: NPC_ExitVehicle
sidebar_label: NPC_ExitVehicle
description: Makes an NPC exit its current vehicle.
tags: ["npc", "vehicle"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Makes an NPC exit its current vehicle.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
new g_car = INVALID_VEHICLE_ID;

public OnGameModeInit()
{
    g_car = CreateVehicle(411, 2473.9121, -1683.4276, 13.3589, -34.5, 136, 142, -1, false);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcentercar", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You have no NPC.");

        if (g_car == INVALID_VEHICLE_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "Vehicle not created.");

        if (NPC_EnterVehicle(npcid, g_car, 0, NPC_MOVE_TYPE_JOG))
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d is entering the car (driver seat).", npcid);

            // Exit after 25 seconds
            SetTimerEx("ExitNPCVehicle", 25000, false, "i", npcid);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "NPC %d failed to enter the car.", npcid);
        }

        return 1;
    }
    return 0;
}

forward ExitNPCVehicle(npcid);
public ExitNPCVehicle(npcid)
{
    if (!NPC_IsValid(npcid))
        return 0;

    new vehid = NPC_GetVehicle(npcid);
    if (vehid != INVALID_VEHICLE_ID)
    {
        NPC_ExitVehicle(npcid);
        printf("NPC %d exited vehicle %d", npcid, vehid);
    }
    return 1;
}

```

## Notes

- The NPC must be in a vehicle for this function to work, otherwise this function has no effect
- The NPC will perform the exit animation and after exiting, the NPC will be on foot near the vehicle

## Related Functions

- [NPC_EnterVehicle](NPC_EnterVehicle): Make NPC enter a vehicle
- [NPC_PutInVehicle](NPC_PutInVehicle): Instantly put NPC in vehicle
- [NPC_RemoveFromVehicle](NPC_RemoveFromVehicle): Instantly remove NPC from vehicle
- [NPC_GetVehicle](NPC_GetVehicle): Get NPC's current vehicle

## Related Callbacks

_No specific callbacks are triggered by this function._
