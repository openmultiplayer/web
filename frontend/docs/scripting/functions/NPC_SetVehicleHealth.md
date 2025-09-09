---
title: NPC_SetVehicleHealth
sidebar_label: NPC_SetVehicleHealth
description: Sets the health of an NPC's vehicle.
tags: ["npc", "vehicle", "health"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets the health of an NPC's vehicle.

| Name   | Description                          |
| ------ | ------------------------------------ |
| npcid  | The ID of the NPC                   |
| health | The health value (0.0-1000.0)       |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Driver");
    NPC_Spawn(npcid);
    
    new vehicleid = CreateVehicle(411, 1958.33, 1343.12, 15.36, 0.0, -1, -1, -1);
    NPC_PutInVehicle(npcid, vehicleid, 0);
    
    // Set vehicle to half health
    NPC_SetVehicleHealth(npcid, 500.0);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/repair", true))
    {
        // Repair NPC 0's vehicle
        NPC_SetVehicleHealth(0, 1000.0); // Full health
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 vehicle repaired");
        return 1;
    }
    
    if (!strcmp(cmdtext, "/damagenpcs", true))
    {
        new npcs[MAX_NPCS];
        new count = NPC_GetAll(npcs);
        
        for (new i = 0; i < count; i++)
        {
            if (NPC_GetVehicleID(npcs[i]) != INVALID_VEHICLE_ID) // NPC is in vehicle
            {
                new Float:damage = 200.0 + float(random(300)); // Random damage
                NPC_SetVehicleHealth(npcs[i], damage);
            }
        }
        
        SendClientMessage(playerid, 0xFF0000FF, "Damaged all NPC vehicles");
        return 1;
    }
    return 0;
}
```

## Notes

- Only works when NPC is in a vehicle
- Health ranges from 0.0 (destroyed) to 1000.0 (perfect condition)
- Vehicle explodes when health reaches 0
- Use NPC_GetVehicleHealth to check current health

## Related Functions

- [NPC_GetVehicleHealth](NPC_GetVehicleHealth): Get vehicle health
- [NPC_GetVehicleID](NPC_GetVehicleID): Get NPC's vehicle
- [NPC_PutInVehicle](NPC_PutInVehicle): Put NPC in vehicle
- [SetVehicleHealth](SetVehicleHealth): Set vehicle health directly

## Related Callbacks

*No specific callbacks are triggered by this function.*
