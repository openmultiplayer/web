---
title: NPC_IsVehicleSirenUsed
sidebar_label: NPC_IsVehicleSirenUsed
description: Checks if an NPC is using the vehicle siren.
tags: ["npc", "vehicle", "siren"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if an NPC is using the vehicle siren.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the NPC is using the vehicle siren, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checksirenused", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new veh = NPC_GetVehicle(npcid);
        if (veh == INVALID_VEHICLE_ID)
            return SendClientMessage(playerid, 0xFFFF00FF, "NPC %d is not in any vehicle.", npcid);

        new bool:sirenUsed = NPC_IsVehicleSirenUsed(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d vehicle siren used: %s", npcid, sirenUsed ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```

## Notes

- Returns `false` if the NPC is not in a vehicle
- Only works for vehicles that have sirens (police cars, ambulances, fire trucks)
- Visual and audio siren effects are visible to all players

## Related Functions

- [NPC_UseVehicleSiren](NPC_UseVehicleSiren): Toggle vehicle siren
- [NPC_GetVehicleID](NPC_GetVehicleID): Get NPC's vehicle
- [NPC_PutInVehicle](NPC_PutInVehicle): Put NPC in vehicle
- [NPC_RemoveFromVehicle](NPC_RemoveFromVehicle): Remove NPC from vehicle

## Related Callbacks

_No specific callbacks are triggered by this function._
