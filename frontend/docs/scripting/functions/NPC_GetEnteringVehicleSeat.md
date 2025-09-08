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

Returns the seat number the NPC is entering (0 = driver, 1-3 = passengers), or -1 if not entering.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Passenger");
    NPC_Spawn(npcid);
    
    new vehicleid = CreateVehicle(411, 1958.33, 1343.12, 15.36, 0.0, -1, -1, 300);
    
    // Make NPC enter as passenger in seat 1
    NPC_EnterVehicle(npcid, vehicleid, 1, NPC_MOVE_TYPE_WALK);
    
    SetTimer("CheckEnteringSeat", 100, true);
    
    return 1;
}

forward CheckEnteringSeat();
public CheckEnteringSeat()
{
    new seat = NPC_GetEnteringVehicleSeat(0);
    if (seat != -1)
    {
        new vehicleid = NPC_GetEnteringVehicleID(0);
        
        new seatName[16];
        switch(seat)
        {
            case 0: seatName = "Driver";
            case 1: seatName = "Passenger";  
            case 2: seatName = "Back Left";
            case 3: seatName = "Back Right";
            default: seatName = "Unknown";
        }
        
        printf("NPC 0 entering vehicle %d as %s (seat %d)", vehicleid, seatName, seat);
    }
}
```

## Notes

- Seat 0 is always the driver's seat
- Passenger seats are numbered 1, 2, 3 depending on vehicle capacity
- Returns -1 if the NPC is not entering any vehicle
- This information is only valid while the NPC is in the entering process

## Related Functions

- [NPC_GetEnteringVehicle](NPC_GetEnteringVehicle): Get entering vehicle
- [NPC_GetEnteringVehicleID](NPC_GetEnteringVehicleID): Get entering vehicle ID
- [NPC_EnterVehicle](NPC_EnterVehicle): Make NPC enter vehicle
- [NPC_GetVehicleSeat](NPC_GetVehicleSeat): Get current vehicle seat

## Related Callbacks

- [OnNPCEnterVehicle](OnNPCEnterVehicle): Called when NPC enters vehicle