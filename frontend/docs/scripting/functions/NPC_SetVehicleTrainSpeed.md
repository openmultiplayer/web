---
title: NPC_SetVehicleTrainSpeed
sidebar_label: NPC_SetVehicleTrainSpeed
description: Sets the speed of an NPC's train vehicle.
tags: ["npc", "vehicle", "train", "speed"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Sets the speed of an NPC's train vehicle.

| Name  | Description            |
| ----- | ---------------------- |
| npcid | The ID of the NPC      |
| speed | The train speed to set |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/settrainspeed ", true, 15))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:speed = floatstr(cmdtext[15]);

        NPC_SetVehicleTrainSpeed(npcid, speed);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d train speed set to %.2f", npcid, speed);

        return 1;
    }
    return 0;
}
```

## Notes

- Only works with train vehicles (models 537, 538)
- Use NPC_GetVehicleTrainSpeed to check current speed
- Setting speed to 0 stops the train

## Related Functions

- [NPC_GetVehicleTrainSpeed](NPC_GetVehicleTrainSpeed): Get train speed
- [NPC_GetVehicleID](NPC_GetVehicleID): Get NPC's vehicle
- [NPC_PutInVehicle](NPC_PutInVehicle): Put NPC in vehicle
- [GetVehicleModel](GetVehicleModel): Get vehicle model

## Related Callbacks

_No specific callbacks are triggered by this function._
