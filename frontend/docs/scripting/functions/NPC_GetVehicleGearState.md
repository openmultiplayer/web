---
title: NPC_GetVehicleGearState
sidebar_label: NPC_GetVehicleGearState
description: Gets the landing gear state of an NPC's aircraft.
tags: ["npc", "vehicle", "aircraft", "landing gear"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the landing gear state of an NPC's aircraft.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns the landing gear state of the NPC's aircraft (LANDING_GEAR_STATE_DOWN or LANDING_GEAR_STATE_UP).

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Pilot");
    NPC_Spawn(npcid);
    
    new vehicleid = CreateVehicle(519, 1958.33, 1343.12, 15.36, 0.0, -1, -1, 300); // Shamal
    NPC_PutInVehicle(npcid, vehicleid, 0);
    
    // Set landing gear up
    NPC_SetVehicleGearState(npcid, LANDING_GEAR_STATE_UP);
    
    new gearState = NPC_GetVehicleGearState(npcid);
    if (gearState == LANDING_GEAR_STATE_UP)
    {
        printf("NPC %d aircraft landing gear is UP", npcid);
    }
    else
    {
        printf("NPC %d aircraft landing gear is DOWN", npcid);
    }
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkgear", true))
    {
        new npcs[MAX_NPCS];
        new count = NPC_GetAll(npcs);
        
        for (new i = 0; i < count; i++)
        {
            if (NPC_GetVehicleID(npcs[i]) != INVALID_VEHICLE_ID) // NPC is in aircraft
            {
                new gearState = NPC_GetVehicleGearState(npcs[i]);
                new msg[128];
                
                if (gearState == LANDING_GEAR_STATE_UP)
                {
                    format(msg, sizeof(msg), "NPC %d: Landing gear UP", npcs[i]);
                }
                else
                {
                    format(msg, sizeof(msg), "NPC %d: Landing gear DOWN", npcs[i]);
                }
                
                SendClientMessage(playerid, 0xFFFFFFFF, msg);
            }
        }
        
        return 1;
    }
    return 0;
}
```

## Notes

- Only works when the NPC is piloting an aircraft
- Returns the current landing gear state set by NPC_SetVehicleGearState
- Uses the same constants as [Vehicle Landing Gear States](../resources/landinggearstate): LANDING_GEAR_STATE_DOWN and LANDING_GEAR_STATE_UP
- This is the NPC equivalent of GetPlayerLandingGearState

## Related Functions

- [NPC_SetVehicleGearState](NPC_SetVehicleGearState): Set aircraft landing gear state
- [GetPlayerLandingGearState](GetPlayerLandingGearState): Get player's landing gear state
- [GetVehicleLandingGearState](GetVehicleLandingGearState): Get vehicle's landing gear state
- [NPC_GetVehicle](NPC_GetVehicle): Get NPC's current vehicle

## Related Resources

- [Vehicle Landing Gear States](../resources/landinggearstate)

## Related Callbacks

*No specific callbacks are triggered by this function.*
