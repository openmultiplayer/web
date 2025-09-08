---
title: NPC_SetVehicleTrainSpeed
sidebar_label: NPC_SetVehicleTrainSpeed
description: Sets the speed of an NPC's train vehicle.
tags: ["npc", "vehicle", "train", "speed"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets the speed of an NPC's train vehicle.

| Name  | Description                    |
| ----- | ------------------------------ |
| npcid | The ID of the NPC             |
| speed | The train speed to set         |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Engineer");
    NPC_Spawn(npcid);
    
    new vehicleid = CreateVehicle(537, 1700.0, -1950.0, 20.0, 0.0, -1, -1, -1); // Freight train
    NPC_PutInVehicle(npcid, vehicleid, 0);
    
    // Set moderate train speed
    NPC_SetVehicleTrainSpeed(npcid, 50.0);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/fasttrains", true))
    {
        new npcs[MAX_NPCS];
        new count = NPC_GetAll(npcs);
        
        // Set maximum speed for NPC 0's train
        NPC_SetVehicleTrainSpeed(0, 100.0);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 train at maximum speed");
        return 1;
    }
    
    if (!strcmp(cmdtext, "/stoptrain", true))
    {
        // Stop NPC 0's train
        NPC_SetVehicleTrainSpeed(0, 0.0);
        SendClientMessage(playerid, 0xFF0000FF, "NPC 0 train stopped");
        
        SendClientMessage(playerid, 0xFF0000FF, "All NPC trains stopped");
        return 1;
    }
    return 0;
}
```

## Notes

- Only works with train vehicles (models 537, 538)
- Speed affects how fast the train moves along tracks
- Use NPC_GetVehicleTrainSpeed to check current speed
- Setting speed to 0 stops the train

## Related Functions

- [NPC_GetVehicleTrainSpeed](NPC_GetVehicleTrainSpeed): Get train speed
- [NPC_GetVehicleID](NPC_GetVehicleID): Get NPC's vehicle
- [NPC_PutInVehicle](NPC_PutInVehicle): Put NPC in vehicle
- [GetVehicleModel](GetVehicleModel): Get vehicle model

## Related Callbacks

*No specific callbacks are triggered by this function.*
