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
public OnGameModeInit()
{
    new npcid = NPC_Create("Driver");
    NPC_Spawn(npcid);

    new vehicleid = CreateVehicle(411, 1958.33, 1343.12, 15.36, 0.0, -1, -1, 300);

    // Make NPC walk to the vehicle and enter as driver
    NPC_EnterVehicle(npcid, vehicleid, 0, NPC_MOVE_TYPE_WALK);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcride", true))
    {
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        new vehicleid = CreateVehicle(411, x + 5.0, y, z, 0.0, -1, -1, 300);
        new npcid = NPC_Create("Passenger");
        NPC_Spawn(npcid);

        // Make NPC enter as passenger
        NPC_EnterVehicle(npcid, vehicleid, 1, NPC_MOVE_TYPE_JOG);

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

- The NPC will pathfind to the vehicle door before entering
- The NPC will use the specified movement type to reach the vehicle
- If the seat is occupied, the NPC may not be able to enter
- Seat 0 is always the driver's seat
- Maximum seat ID depends on the vehicle model

## Related Functions

- [NPC_ExitVehicle](NPC_ExitVehicle): Make NPC exit vehicle
- [NPC_PutInVehicle](NPC_PutInVehicle): Instantly put NPC in vehicle
- [NPC_GetVehicle](NPC_GetVehicle): Get NPC's current vehicle
- [NPC_IsEnteringVehicle](NPC_IsEnteringVehicle): Check if NPC is entering vehicle

## Related Callbacks

_No specific callbacks are triggered by this function._
