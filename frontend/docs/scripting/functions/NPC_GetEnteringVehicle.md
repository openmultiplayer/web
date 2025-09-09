---
title: NPC_GetEnteringVehicle
sidebar_label: NPC_GetEnteringVehicle
description: Gets the vehicle an NPC is currently entering.
tags: ["npc", "vehicle"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the vehicle an NPC is currently entering.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns the vehicle ID the NPC is entering, or INVALID_VEHICLE_ID if not entering any vehicle.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("CarDriver");
    NPC_Spawn(npcid);
    
    new vehicleid = CreateVehicle(411, 1958.33, 1343.12, 15.36, 0.0, -1, -1, 300);
    NPC_EnterVehicle(npcid, vehicleid, 0, NPC_MOVE_TYPE_WALK);
    
    SetTimer("CheckVehicleEntry", 1000, true);
    
    return 1;
}

forward CheckVehicleEntry();
public CheckVehicleEntry()
{
    new enteringVehicle = NPC_GetEnteringVehicle(0);
    if (enteringVehicle != INVALID_VEHICLE_ID)
    {
        printf("NPC 0 is entering vehicle %d", enteringVehicle);
    }
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvehicle", true))
    {
        new enteringVehicle = NPC_GetEnteringVehicle(0);
        
        if (enteringVehicle != INVALID_VEHICLE_ID)
        {
            new msg[64];
            format(msg, sizeof(msg), "NPC 0 is entering vehicle %d", enteringVehicle);
            SendClientMessage(playerid, 0xFFFFFFFF, msg);
        }
        else
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC 0 is not entering any vehicle");
        }
        return 1;
    }
    return 0;
}
```

## Notes

- Returns INVALID_VEHICLE_ID if the NPC is not currently entering a vehicle
- This is different from the vehicle the NPC is already in
- The NPC must be in the process of entering for this to return a valid ID
- Once the NPC finishes entering, this will return 0

## Related Functions

- [NPC_EnterVehicle](NPC_EnterVehicle): Make NPC enter a vehicle
- [NPC_GetVehicle](NPC_GetVehicle): Get NPC's current vehicle
- [NPC_IsEnteringVehicle](NPC_IsEnteringVehicle): Check if NPC is entering vehicle
- [NPC_GetEnteringVehicleSeat](NPC_GetEnteringVehicleSeat): Get entering vehicle seat

## Related Callbacks

*No specific callbacks are triggered by this function.*
