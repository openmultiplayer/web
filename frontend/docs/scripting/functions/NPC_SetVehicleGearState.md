---
title: NPC_SetVehicleGearState
sidebar_label: NPC_SetVehicleGearState
description: Sets an NPC's vehicle gear state.
tags: ["npc", "vehicle", "gear"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets an NPC's vehicle gear state when driving.

| Name      | Description                    |
| --------- | ------------------------------ |
| npcid     | The ID of the NPC             |
| gearstate | The gear state to set         |

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
    
    // Set to reverse gear
    NPC_SetVehicleGearState(npcid, GEAR_REVERSE);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/reverse", true))
    {
        // Set NPC 0's vehicle to reverse
        NPC_SetVehicleGearState(0, GEAR_REVERSE);
        SendClientMessage(playerid, 0xFF0000FF, "NPC 0 vehicle in reverse");
        return 1;
    }
    
    if (!strcmp(cmdtext, "/driveforward", true))
    {
        new npcs[MAX_NPCS];
        new count = NPC_GetAll(npcs);
        
        for (new i = 0; i < count; i++)
        {
            if (NPC_GetVehicleID(npcs[i]) != 0) // NPC is in vehicle
            {
                NPC_SetVehicleGearState(npcs[i], GEAR_FORWARD);
            }
        }
        
        SendClientMessage(playerid, 0x00FF00FF, "All driving NPCs in forward");
        return 1;
    }
    return 0;
}
```

## Notes

- Only works when NPC is driving a vehicle
- Common gear states: GEAR_FORWARD, GEAR_REVERSE, GEAR_NEUTRAL
- Affects vehicle movement direction
- Use NPC_GetVehicleGearState to check current gear

## Related Functions

- [NPC_GetVehicleGearState](NPC_GetVehicleGearState): Get current gear state
- [NPC_PutInVehicle](NPC_PutInVehicle): Put NPC in vehicle
- [NPC_GetVehicleID](NPC_GetVehicleID): Get NPC's vehicle
- [NPC_SetKeys](NPC_SetKeys): Set NPC key states

## Related Callbacks

- [OnNPCVehicleUpdate](OnNPCVehicleUpdate): Called when vehicle updates
- [OnNPCEnterVehicle](OnNPCEnterVehicle): Called when NPC enters vehicle
