---
title: NPC_GetVehicleSeat
sidebar_label: NPC_GetVehicleSeat
description: Gets the seat ID of an NPC in a vehicle.
tags: ["npc", "vehicle"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the seat ID of an NPC in a vehicle.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns the seat ID (0 = driver, 1 = front passenger, etc.), or -1 if not in a vehicle.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Passenger");
    NPC_Spawn(npcid);
    
    new vehicleid = CreateVehicle(411, 1958.33, 1343.12, 15.36, 0.0, -1, -1, 300);
    NPC_PutInVehicle(npcid, vehicleid, 1); // Put in passenger seat
    
    new seat = NPC_GetVehicleSeat(npcid);
    printf("NPC %d is in seat %d", npcid, seat);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkseat", true))
    {
        new seat = NPC_GetVehicleSeat(0);
        if (seat != -1)
        {
            new msg[64];
            format(msg, sizeof(msg), "NPC 0 is in seat %d", seat);
            SendClientMessage(playerid, 0xFFFFFFFF, msg);
        }
        else
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC 0 is not in a vehicle");
        }
        return 1;
    }
    return 0;
}
```

## Notes

- Returns -1 if the NPC is not in any vehicle
- Seat 0 is always the driver seat
- Seat IDs depend on the vehicle model (number of seats)

## Related Functions

- [NPC_GetVehicleID](NPC_GetVehicleID): Get NPC's vehicle ID
- [NPC_PutInVehicle](NPC_PutInVehicle): Put NPC in vehicle
- [NPC_RemoveFromVehicle](NPC_RemoveFromVehicle): Remove NPC from vehicle

## Related Callbacks

*No specific callbacks are triggered by this function.*
