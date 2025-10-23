---
title: NPC_GetEnteringVehicleID
sidebar_label: NPC_GetEnteringVehicleID
description: Gets the vehicle ID an NPC is currently entering.
tags: ["npc", "vehicle"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the vehicle ID an NPC is currently entering.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns the vehicle ID the NPC is entering, or INVALID_VEHICLE_ID if not entering any vehicle.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Driver");
    NPC_Spawn(npcid);

    new vehicleid = CreateVehicle(411, 1958.33, 1343.12, 15.36, 0.0, -1, -1, 300);
    NPC_EnterVehicle(npcid, vehicleid, 0, NPC_MOVE_TYPE_JOG);

    SetTimer("MonitorVehicleEntry", 500, true);

    return 1;
}

forward MonitorVehicleEntry();
public MonitorVehicleEntry()
{
    new enteringVehicleID = NPC_GetEnteringVehicleID(0);
    if (enteringVehicleID != INVALID_VEHICLE_ID)
    {
        printf("NPC 0 is entering vehicle ID %d", enteringVehicleID);

        // Check the seat they're entering
        new seat = NPC_GetEnteringVehicleSeat(0);
        printf("Target seat: %d", seat);
    }
}
```

## Notes

- This function is similar to NPC_GetEnteringVehicle
- Returns INVALID_VEHICLE_ID if the NPC is not in the process of entering a vehicle
- The value becomes 0 once the NPC successfully enters the vehicle
- Use this to track which specific vehicle an NPC is approaching

## Related Functions

- [NPC_GetEnteringVehicle](NPC_GetEnteringVehicle): Get entering vehicle
- [NPC_GetEnteringVehicleSeat](NPC_GetEnteringVehicleSeat): Get entering vehicle seat
- [NPC_EnterVehicle](NPC_EnterVehicle): Make NPC enter vehicle
- [NPC_IsEnteringVehicle](NPC_IsEnteringVehicle): Check if entering vehicle

## Related Callbacks

_No specific callbacks are triggered by this function._
