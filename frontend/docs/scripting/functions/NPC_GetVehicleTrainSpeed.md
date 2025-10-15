---
title: NPC_GetVehicleTrainSpeed
sidebar_label: NPC_GetVehicleTrainSpeed
description: Gets the train speed for an NPC driving a train.
tags: ["npc", "vehicle", "train"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the train speed for an NPC driving a train.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns the train speed as a float, or 0.0 if not in a train.

## Examples

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Conductor");
    NPC_Spawn(npcid);

    // Create train
    new vehicleid = CreateVehicle(537, 1700.0, -1953.0, 14.0, 0.0, -1, -1, 300); // Freight Train
    NPC_PutInVehicle(npcid, vehicleid, 0);

    // Set train speed
    NPC_SetVehicleTrainSpeed(npcid, 50.0);

    new Float:speed = NPC_GetVehicleTrainSpeed(npcid);
    printf("NPC %d train speed: %.2f", npcid, speed);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/trainspeed", true))
    {
        new Float:speed = NPC_GetVehicleTrainSpeed(0);
        if (speed > 0.0)
        {
            new msg[64];
            format(msg, sizeof(msg), "NPC 0 train speed: %.2f", speed);
            SendClientMessage(playerid, 0xFFFFFFFF, msg);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "NPC 0 is not in a train");
        }
        return 1;
    }
    return 0;
}
```

## Notes

- Only works when the NPC is driving a train vehicle
- Returns 0.0 if the NPC is not in a train or not the driver
- Train speed affects how fast the train moves along its tracks

## Related Functions

- [NPC_SetVehicleTrainSpeed](NPC_SetVehicleTrainSpeed): Set train speed
- [NPC_GetVehicleID](NPC_GetVehicleID): Get NPC's vehicle
- [NPC_PutInVehicle](NPC_PutInVehicle): Put NPC in vehicle

## Related Callbacks

_No specific callbacks are triggered by this function._
