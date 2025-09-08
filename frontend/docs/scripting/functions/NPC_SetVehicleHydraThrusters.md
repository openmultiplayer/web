---
title: NPC_SetVehicleHydraThrusters
sidebar_label: NPC_SetVehicleHydraThrusters
description: Sets the Hydra thruster direction for an NPC's vehicle.
tags: ["npc", "vehicle", "hydra", "aircraft"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets the Hydra thruster direction for an NPC's vehicle when piloting a Hydra aircraft.

| Name      | Description                                    |
| --------- | ---------------------------------------------- |
| npcid     | The ID of the NPC                             |
| direction | The thruster direction (0=forward, 1=backward)|

## Returns

This function does not return any specific values.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Pilot");
    NPC_Spawn(npcid);
    
    new vehicleid = CreateVehicle(520, 1958.33, 1343.12, 50.0, 0.0, -1, -1, -1); // Hydra
    NPC_PutInVehicle(npcid, vehicleid, 0);
    
    // Set thrusters for vertical takeoff
    NPC_SetVehicleHydraThrusters(npcid, 1);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/vtol", true))
    {
        // Set NPC 0's Hydra to VTOL mode
        NPC_SetVehicleHydraThrusters(0, 1);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 Hydra in VTOL mode");
        return 1;
    }
    
    if (!strcmp(cmdtext, "/jet", true))
    {
        new npcs[MAX_NPCS];
        new count = NPC_GetAll(npcs);
        
        for (new i = 0; i < count; i++)
        {
            new vehicleid = NPC_GetVehicleID(npcs[i]);
            if (GetVehicleModel(vehicleid) == 520) // Hydra
            {
                NPC_SetVehicleHydraThrusters(npcs[i], 0); // Jet mode
            }
        }
        
        SendClientMessage(playerid, 0x00FF00FF, "All NPC Hydras in jet mode");
        return 1;
    }
    return 0;
}
```

## Notes

- Only works with Hydra aircraft (vehicle ID 520)
- Direction 0 = forward thrusters (jet mode)
- Direction 1 = downward thrusters (VTOL mode)
- Use NPC_GetVehicleHydraThrusters to check current direction

## Related Functions

- [NPC_GetVehicleHydraThrusters](NPC_GetVehicleHydraThrusters): Get thruster direction
- [NPC_GetVehicleID](NPC_GetVehicleID): Get NPC's vehicle
- [NPC_PutInVehicle](NPC_PutInVehicle): Put NPC in vehicle
- [GetVehicleModel](GetVehicleModel): Get vehicle model

## Related Callbacks

- [OnNPCVehicleUpdate](OnNPCVehicleUpdate): Called when vehicle updates
- [OnNPCEnterVehicle](OnNPCEnterVehicle): Called when NPC enters vehicle
