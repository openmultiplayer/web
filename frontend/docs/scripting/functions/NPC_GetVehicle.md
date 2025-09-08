---
title: NPC_GetVehicle
sidebar_label: NPC_GetVehicle
description: Gets the vehicle an NPC is currently in.
tags: ["npc", "vehicle"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the vehicle an NPC is currently in.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns the vehicle ID the NPC is in, or 0 if not in any vehicle.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Driver");
    NPC_Spawn(npcid);
    
    new vehicleid = CreateVehicle(411, 1958.33, 1343.12, 15.36, 0.0, -1, -1, 300); // Infernus
    NPC_PutInVehicle(npcid, vehicleid, 0);
    
    new currentVehicle = NPC_GetVehicle(npcid);
    printf("NPC %d is in vehicle %d", npcid, currentVehicle);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvehicle", true))
    {
        new vehicleid = NPC_GetVehicle(0);
        
        if (vehicleid != 0)
        {
            new msg[64];
            format(msg, sizeof(msg), "NPC 0 is in vehicle %d", vehicleid);
            SendClientMessage(playerid, 0xFFFFFFFF, msg);
        }
        else
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC 0 is on foot");
        }
        
        return 1;
    }
    return 0;
}

forward CheckVehicleOccupancy(vehicleid);
public CheckVehicleOccupancy(vehicleid)
{
    if (NPC_GetVehicle(0) == vehicleid)
    {
        new seat = NPC_GetVehicleSeat(0);
        printf("Vehicle %d has NPC 0 in seat %d", vehicleid, seat);
    }
    else
    {
        printf("NPC 0 is not in vehicle %d", vehicleid);
    }
}
```

## Notes

- Returns 0 if the NPC is not in any vehicle (on foot)
- This includes both driver and passenger positions
- Use with `NPC_GetVehicleSeat` to determine the exact seat
- NPCs entering a vehicle will not return the vehicle ID until fully inside

## Related Functions

- [NPC_GetVehicleID](NPC_GetVehicleID): Alternative function name
- [NPC_GetVehicleSeat](NPC_GetVehicleSeat): Get NPC's seat in vehicle
- [NPC_PutInVehicle](NPC_PutInVehicle): Put NPC in vehicle instantly
- [NPC_RemoveFromVehicle](NPC_RemoveFromVehicle): Remove NPC from vehicle

## Related Callbacks

*No specific callbacks are triggered by this function.*
