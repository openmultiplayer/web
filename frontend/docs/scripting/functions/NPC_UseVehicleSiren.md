---
title: NPC_UseVehicleSiren
sidebar_label: NPC_UseVehicleSiren
description: Makes an NPC use or stop using a vehicle siren.
tags: ["npc", "vehicle", "siren"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Makes an NPC use or stop using a vehicle siren.

| Name  | Description                                          |
| ----- | ---------------------------------------------------- |
| npcid | The ID of the NPC                                    |
| use   | `true` to use siren, `false` to stop (default: true) |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcusesiren ", true, 13))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new veh = NPC_GetVehicle(npcid);
        if (veh == INVALID_VEHICLE_ID)
            return SendClientMessage(playerid, 0xFFFF00FF, "NPC %d is not in any vehicle.", npcid);

        new bool:use = strval(cmdtext[13]) ? true : false;

        new bool:success = NPC_UseVehicleSiren(npcid, use);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d vehicle siren %s: %s", npcid, use ? "enabled" : "disabled", success ? "Success" : "Failed");
        return 1;
    }
    return 0;
}
```

## Notes

- Only works when the NPC is in a vehicle as driver
- The vehicle must support sirens (emergency vehicles)
- Siren state persists until changed or NPC exits vehicle

## Related Functions

- [NPC_IsVehicleSirenUsed](NPC_IsVehicleSirenUsed): Check if siren is being used
- [NPC_GetVehicle](NPC_GetVehicle): Get NPC's current vehicle
- [NPC_PutInVehicle](NPC_PutInVehicle): Put NPC in vehicle
- [NPC_Move](NPC_Move): Make NPC drive to location

## Related Callbacks

_No specific callbacks are triggered by this function._
