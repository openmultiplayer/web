---
title: NPC_RemoveFromVehicle
sidebar_label: NPC_RemoveFromVehicle
description: Removes an NPC from their current vehicle.
tags: ["npc", "vehicle"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Removes an NPC from their current vehicle.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the NPC was removed from the vehicle, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/kicknpc", true))
    {
        if (NPC_GetVehicleID(0) != INVALID_VEHICLE_ID) // NPC 0 is in vehicle
        {
            if (NPC_RemoveFromVehicle(0))
            {
                SendClientMessage(playerid, 0xFF0000FF, "NPC 0 removed from vehicle");
            }
        }
        else
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC 0 is not in a vehicle");
        }
        return 1;
    }
    return 0;
}
```

## Notes

- NPC will instantly appear outside the vehicle without exit animation
- Use NPC_ExitVehicle for animated exit
- Returns false if NPC is not in a vehicle
- NPC position will be set near the vehicle

## Related Functions

- [NPC_PutInVehicle](NPC_PutInVehicle): Put NPC in vehicle
- [NPC_ExitVehicle](NPC_ExitVehicle): Make NPC exit with animation
- [NPC_GetVehicleID](NPC_GetVehicleID): Get NPC's vehicle
- [NPC_GetVehicleSeat](NPC_GetVehicleSeat): Get NPC's seat

## Related Callbacks

_No specific callbacks are triggered by this function._
