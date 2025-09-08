---
title: NPC_IsEnteringVehicle
sidebar_label: NPC_IsEnteringVehicle
description: Checks if an NPC is currently entering a vehicle.
tags: ["npc", "vehicle"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if an NPC is currently in the process of entering a vehicle.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the NPC is entering a vehicle, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Driver");
    NPC_Spawn(npcid);
    
    new vehicleid = CreateVehicle(411, 1958.33, 1343.12, 15.36, 0.0, -1, -1, 300);
    NPC_EnterVehicle(npcid, vehicleid, 0, NPC_MOVE_TYPE_WALK);
    
    // Check if entering
    SetTimerEx("CheckVehicleEntry", 2000, false, "i", npcid);
    
    return 1;
}

forward CheckVehicleEntry(npcid);
public CheckVehicleEntry(npcid)
{
    if (NPC_IsEnteringVehicle(npcid))
    {
        new vehicleid = NPC_GetEnteringVehicleID(npcid);
        new seat = NPC_GetEnteringVehicleSeat(npcid);
        printf("NPC %d is entering vehicle %d, seat %d", npcid, vehicleid, seat);
    }
    else
    {
        printf("NPC %d is not entering any vehicle", npcid);
    }
}
```

## Notes

- Returns true only during the entering animation/process
- Once the NPC is fully inside, this returns false
- Use this to detect when NPCs are transitioning into vehicles
- The NPC must have been instructed to enter with NPC_EnterVehicle

## Related Functions

- [NPC_EnterVehicle](NPC_EnterVehicle): Make NPC enter vehicle
- [NPC_GetEnteringVehicleID](NPC_GetEnteringVehicleID): Get entering vehicle ID
- [NPC_GetEnteringVehicleSeat](NPC_GetEnteringVehicleSeat): Get entering seat
- [NPC_GetVehicle](NPC_GetVehicle): Get current vehicle

## Related Callbacks

*No specific callbacks are triggered by this function.*

