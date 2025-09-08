---
title: NPC_UseVehicleSiren
sidebar_label: NPC_UseVehicleSiren
description: Makes an NPC use or stop using a vehicle siren.
tags: ["npc", "vehicle", "siren"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Makes an NPC use or stop using a vehicle siren.

| Name  | Description                                    |
| ----- | ---------------------------------------------- |
| npcid | The ID of the NPC                             |
| use   | `true` to use siren, `false` to stop (default: true) |

## Returns

This function does not return any specific values.

## Examples

```c
new g_PatrolVehicle = INVALID_VEHICLE_ID;

public OnGameModeInit()
{
    // Create police patrol unit
    new npcid = NPC_Create("Officer");
    NPC_Spawn(npcid);
    
    // Create police cruiser
    g_PatrolVehicle = CreateVehicle(596, 1958.33, 1343.12, 15.36, 0.0, 1, 1, 300); // Police Car (LS)
    NPC_PutInVehicle(npcid, g_PatrolVehicle, 0);
    
    // Start patrol with siren
    NPC_UseVehicleSiren(npcid, true);
    
    // Start automated patrol cycle
    SetTimer("PatrolCycle", 30000, true);
    
    return 1;
}

forward PatrolCycle();
public PatrolCycle()
{
    // Random siren activation during patrol
    if (random(100) < 30) // 30% chance
    {
        new bool:currentSiren = NPC_IsVehicleSirenUsed(0);
        NPC_UseVehicleSiren(0, !currentSiren);
        
        printf("Patrol NPC %s siren", !currentSiren ? "activated" : "deactivated");
    }
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/siren", true))
    {
        if (NPC_GetVehicle(0) != 0)
        {
            new bool:sirenOn = NPC_IsVehicleSirenUsed(0);
            NPC_UseVehicleSiren(0, !sirenOn);
            
            new msg[64];
            format(msg, sizeof(msg), "NPC 0 siren: %s", !sirenOn ? "ON" : "OFF");
            SendClientMessage(playerid, 0x00FF00FF, msg);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "NPC 0 is not in a vehicle");
        }
        return 1;
    }
    
    if (!strcmp(cmdtext, "/emergency", true))
    {
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);
        
        // Dispatch emergency response
        DispatchEmergencyResponse(x, y, z);
        
        SendClientMessage(playerid, 0xFF0000FF, "Emergency response dispatched to your location!");
        return 1;
    }
    
    if (!strcmp(cmdtext, "/codeblue", true))
    {
        // Emergency code blue - activate all sirens
        if (NPC_GetVehicle(0) != 0)
        {
            NPC_UseVehicleSiren(0, true);
            
            // Drive to player location at high speed
            new Float:px, Float:py, Float:pz;
            GetPlayerPos(playerid, px, py, pz);
            NPC_Move(0, px, py, pz, NPC_MOVE_TYPE_DRIVE);
            
            SendClientMessage(playerid, 0xFF0000FF, "CODE BLUE: Emergency response activated!");
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "No emergency vehicle available");
        }
        return 1;
    }
    return 0;
}

DispatchEmergencyResponse(Float:x, Float:y, Float:z)
{
    // Create emergency vehicles
    new emergencyTypes[][] = {
        {596, "Police"},     // Police LS
        {416, "Ambulance"},  // Ambulance
        {407, "FireTruck"}   // Fire Truck
    };
    
    for (new i = 0; i < sizeof(emergencyTypes); i++)
    {
        new npcid = NPC_Create(emergencyTypes[i][1]);
        NPC_Spawn(npcid);
        
        new Float:spawnX = x + (i * 20.0) - 40.0;
        new vehicleid = CreateVehicle(emergencyTypes[i][0], spawnX, y - 30.0, z, 0.0, -1, -1, 300);
        
        NPC_PutInVehicle(npcid, vehicleid, 0);
        NPC_UseVehicleSiren(npcid, true);
        
        // Drive to emergency location
        NPC_Move(npcid, x, y, z, NPC_MOVE_TYPE_DRIVE);
    }
    
    printf("Emergency response dispatched to %.2f, %.2f, %.2f", x, y, z);
}
```

## Notes

- Only works when the NPC is in a vehicle as driver
- The vehicle must support sirens (emergency vehicles)
- Siren state persists until changed or NPC exits vehicle
- Use with appropriate vehicle models for realism
- Combines well with NPC movement for patrol scenarios

## Related Functions

- [NPC_IsVehicleSirenUsed](NPC_IsVehicleSirenUsed): Check if siren is being used
- [NPC_GetVehicle](NPC_GetVehicle): Get NPC's current vehicle
- [NPC_PutInVehicle](NPC_PutInVehicle): Put NPC in vehicle
- [NPC_Move](NPC_Move): Make NPC drive to location

## Related Callbacks

- [OnNPCEnterVehicle](OnNPCEnterVehicle): Called when NPC enters vehicle
- [OnNPCExitVehicle](OnNPCExitVehicle): Called when NPC exits vehicle