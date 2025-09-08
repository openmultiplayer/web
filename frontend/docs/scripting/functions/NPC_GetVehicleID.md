---
title: NPC_GetVehicleID
sidebar_label: NPC_GetVehicleID
description: Gets the vehicle ID of an NPC's current vehicle.
tags: ["npc", "vehicle"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the vehicle ID of an NPC's current vehicle.

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
    
    new vehicleid = CreateVehicle(411, 1958.33, 1343.12, 15.36, 0.0, -1, -1, 300);
    NPC_PutInVehicle(npcid, vehicleid, 0);
    
    new currentVehicle = NPC_GetVehicleID(npcid);
    printf("NPC %d is in vehicle %d", npcid, currentVehicle);
    
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvehicle", true))
    {
        new vehicleid = NPC_GetVehicleID(0);
        if (vehicleid != 0)
        {
            new msg[64];
            format(msg, sizeof(msg), "NPC 0 is in vehicle %d", vehicleid);
            SendClientMessage(playerid, 0x00FF00FF, msg);
        }
        else
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC 0 is on foot");
        }
        return 1;
    }
    return 0;
}
```

## Notes

- Returns 0 if the NPC is not in any vehicle
- Use this to check if an NPC is driving or is a passenger
- Can be used with other vehicle functions to get more details

## Related Functions

- [NPC_GetVehicleSeat](NPC_GetVehicleSeat): Get NPC's seat in vehicle
- [NPC_PutInVehicle](NPC_PutInVehicle): Put NPC in vehicle
- [NPC_RemoveFromVehicle](NPC_RemoveFromVehicle): Remove NPC from vehicle
- [NPC_GetVehicle](NPC_GetVehicle): Get vehicle instance

## Related Callbacks

- [OnNPCEnterVehicle](OnNPCEnterVehicle): Called when NPC enters vehicle
- [OnNPCExitVehicle](OnNPCExitVehicle): Called when NPC exits vehicle