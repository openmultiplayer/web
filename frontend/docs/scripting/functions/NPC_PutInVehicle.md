---
title: NPC_PutInVehicle
sidebar_label: NPC_PutInVehicle
description: Puts an NPC into a vehicle at a specific seat.
tags: ["npc", "vehicle"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Puts an NPC into a vehicle at a specific seat.

| Name      | Description                          |
| --------- | ------------------------------------ |
| npcid     | The ID of the NPC                   |
| vehicleid | The ID of the vehicle               |
| seatid    | The seat ID to put the NPC in |

## Returns

Returns `true` if the NPC was put in the vehicle successfully, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Driver");
    NPC_Spawn(npcid);
    
    new vehicleid = CreateVehicle(411, 1958.33, 1343.12, 15.36, 0.0, -1, -1, -1);
    
    if (NPC_PutInVehicle(npcid, vehicleid, 0)) // Driver seat
    {
        printf("NPC %d is now driving vehicle %d", npcid, vehicleid);
    }
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcride", true))
    {
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);
        
        new vehicleid = CreateVehicle(411, x + 5.0, y, z, 0.0, -1, -1, -1);
        new npcid = NPC_Create("Passenger");
        NPC_Spawn(npcid);
        
        if (NPC_PutInVehicle(npcid, vehicleid, 1)) // Passenger seat
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC passenger created!");
        }
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

- NPC will instantly appear in the vehicle without enter animation
- Use NPC_GetVehicleID to check which vehicle an NPC is in
- Seat 0 is always the driver seat
- Maximum seat ID depends on the vehicle model

## Related Functions

- [NPC_RemoveFromVehicle](NPC_RemoveFromVehicle): Remove NPC from vehicle
- [NPC_GetVehicleID](NPC_GetVehicleID): Get NPC's vehicle
- [NPC_GetVehicleSeat](NPC_GetVehicleSeat): Get NPC's seat
- [NPC_EnterVehicle](NPC_EnterVehicle): Make NPC enter with animation

## Related Callbacks

*No specific callbacks are triggered by this function.*
