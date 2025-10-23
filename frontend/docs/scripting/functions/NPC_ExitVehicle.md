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
public OnGameModeInit()
{
    new npcid = NPC_Create("Driver");
    NPC_Spawn(npcid);

    new vehicleid = CreateVehicle(411, 1958.33, 1343.12, 15.36, 0.0, -1, -1, 300);
    NPC_PutInVehicle(npcid, vehicleid, 0);

    // After 10 seconds, make NPC exit the vehicle
    SetTimerEx("ExitNPCVehicle", 10000, false, "i", npcid);

    return 1;
}

forward ExitNPCVehicle(npcid);
public ExitNPCVehicle(npcid)
{
    if (NPC_GetVehicle(npcid) != INVALID_VEHICLE_ID)
    {
        NPC_ExitVehicle(npcid);
        printf("NPC %d exited vehicle", npcid);
    }
}
```

## Notes

- The NPC must be in a vehicle for this function to work
- The NPC will perform the exit animation
- After exiting, the NPC will be on foot near the vehicle
- If the NPC is not in a vehicle, this function has no effect

## Related Functions

- [NPC_EnterVehicle](NPC_EnterVehicle): Make NPC enter a vehicle
- [NPC_PutInVehicle](NPC_PutInVehicle): Instantly put NPC in vehicle
- [NPC_RemoveFromVehicle](NPC_RemoveFromVehicle): Instantly remove NPC from vehicle
- [NPC_GetVehicle](NPC_GetVehicle): Get NPC's current vehicle

## Related Callbacks

_No specific callbacks are triggered by this function._
