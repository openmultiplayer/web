---
title: NPC_GetVehicleHydraThrusters
sidebar_label: NPC_GetVehicleHydraThrusters
description: Gets the thruster direction of an NPC's Hydra vehicle.
tags: ["npc", "vehicle", "hydra"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the thruster direction of an NPC's Hydra vehicle.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns the thruster direction (0 = forward, 1 = vertical), or -1 if not in a Hydra.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Pilot");
    NPC_Spawn(npcid);
    
    // Create Hydra jet
    new vehicleid = CreateVehicle(520, 1958.33, 1343.12, 50.0, 0.0, -1, -1, 300); // Hydra
    NPC_PutInVehicle(npcid, vehicleid, 0);
    
    // Set to vertical mode
    NPC_SetVehicleHydraThrusters(npcid, 1);
    
    new direction = NPC_GetVehicleHydraThrusters(npcid);
    printf("NPC %d Hydra thrusters: %s", npcid, direction ? "Vertical" : "Forward");
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkhydras", true))
    {
        new npcs[MAX_NPCS];
        new count = NPC_GetAll(npcs);
        
        new direction = NPC_GetVehicleHydraThrusters(0);
        
        new mode[16];
        switch(direction)
        {
            case 0: mode = "Forward";
            case 1: mode = "Vertical";
            default: mode = "Unknown";
        }
        
        new msg[64];
        format(msg, sizeof(msg), "NPC 0 Hydra mode: %s", mode);
        SendClientMessage(playerid, 0xFFFFFFFF, msg);
        
        return 1;
    }
    
    if (!strcmp(cmdtext, "/togglehydra", true))
    {
        new currentDirection = NPC_GetVehicleHydraThrusters(0);
        new newDirection = currentDirection ? 0 : 1;
        
        NPC_SetVehicleHydraThrusters(0, newDirection);
        
        new msg[64];
        format(msg, sizeof(msg), "NPC 0 Hydra switched to %s mode", 
            newDirection ? "Vertical" : "Forward");
        SendClientMessage(playerid, 0x00FF00FF, msg);
        
        return 1;
    }
    return 0;
}

forward HydraFlightPattern(npcid);
public HydraFlightPattern(npcid)
{
    if (!NPC_IsValid(npcid))
        return;
    
    new vehicleid = NPC_GetVehicle(npcid);
    if (vehicleid == 0 || GetVehicleModel(vehicleid) != 520)
        return;
    
    new direction = NPC_GetVehicleHydraThrusters(npcid);
    
    // Cycle between modes for different flight phases
    if (direction == 0) // Currently forward
    {
        // Switch to vertical for hovering
        NPC_SetVehicleHydraThrusters(npcid, 1);
        printf("NPC %d Hydra: Switching to hover mode", npcid);
        
        // Schedule next change
        SetTimerEx("HydraFlightPattern", 15000, false, "i", npcid);
    }
    else // Currently vertical
    {
        // Switch to forward for fast flight
        NPC_SetVehicleHydraThrusters(npcid, 0);
        printf("NPC %d Hydra: Switching to forward flight", npcid);
        
        // Schedule next change
        SetTimerEx("HydraFlightPattern", 20000, false, "i", npcid);
    }
}
```

## Notes

- Only works with Hydra vehicles (model 520)
- Returns -1 if the NPC is not in a Hydra or not in a vehicle
- Direction 0 = forward flight mode (jet mode)
- Direction 1 = vertical flight mode (helicopter mode)
- Use this to monitor or control Hydra flight behavior

## Related Functions

- [NPC_SetVehicleHydraThrusters](NPC_SetVehicleHydraThrusters): Set thruster direction
- [NPC_GetVehicle](NPC_GetVehicle): Get NPC's current vehicle
- [NPC_GetVehicleHealth](NPC_GetVehicleHealth): Get vehicle health
- [NPC_PutInVehicle](NPC_PutInVehicle): Put NPC in vehicle

## Related Callbacks

*No specific callbacks are triggered by this function.*
