---
title: NPC_GetVehicleGearState
sidebar_label: NPC_GetVehicleGearState
description: Gets the gear state of an NPC's vehicle.
tags: ["npc", "vehicle"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the gear state of an NPC's vehicle.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns the gear state of the NPC's vehicle.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("GearDriver");
    NPC_Spawn(npcid);
    
    new vehicleid = CreateVehicle(411, 1958.33, 1343.12, 15.36, 0.0, -1, -1, 300); // Infernus
    NPC_PutInVehicle(npcid, vehicleid, 0);
    
    NPC_SetVehicleGearState(npcid, 1); // Set to gear 1
    
    new gearState = NPC_GetVehicleGearState(npcid);
    printf("NPC %d vehicle gear state: %d", npcid, gearState);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcgears", true))
    {
        new gearState = NPC_GetVehicleGearState(0);
                
                new gearName[16];
                switch(gearState)
                {
                    case 0: gearName = "Neutral";
                    case 1: gearName = "1st Gear";
                    case 2: gearName = "2nd Gear";
                    case 3: gearName = "3rd Gear";
                    case 4: gearName = "4th Gear";
                    case 5: gearName = "5th Gear";
                    case -1: gearName = "Reverse";
                    default: format(gearName, sizeof(gearName), "Gear %d", gearState);
                }
                
                new msg[128];
                format(msg, sizeof(msg), "NPC %d (Vehicle %d): %s", 
                    npcs[i], vehicleid, gearName);
                SendClientMessage(playerid, 0xFFFFFFFF, msg);
            }
        }
        return 1;
    }
    return 0;
}
```

## Notes

- Only works when the NPC is in a vehicle as driver
- Gear states vary depending on vehicle type
- This is mainly useful for manual transmission simulation
- Different vehicles may have different gear ranges

## Related Functions

- [NPC_SetVehicleGearState](NPC_SetVehicleGearState): Set vehicle gear state
- [NPC_GetVehicle](NPC_GetVehicle): Get NPC's current vehicle
- [NPC_GetVehicleTrainSpeed](NPC_GetVehicleTrainSpeed): Get train speed
- [NPC_SetVehicleTrainSpeed](NPC_SetVehicleTrainSpeed): Set train speed

## Related Callbacks

- [OnNPCEnterVehicle](OnNPCEnterVehicle): Called when NPC enters vehicle
