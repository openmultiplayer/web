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
public OnGameModeInit()
{
    new npcid = NPC_Create("PoliceOfficer");
    NPC_Spawn(npcid);

    // Create police car
    new vehicleid = CreateVehicle(596, 1958.33, 1343.12, 15.36, 0.0, 1, 1, 300); // Police Car (LS)
    NPC_PutInVehicle(npcid, vehicleid, 0);

    // Turn on siren
    NPC_UseVehicleSiren(npcid, true);

    // Check siren status after 5 seconds
    SetTimerEx("CheckSirenStatus", 5000, false, "i", npcid);

    return 1;
}

forward CheckSirenStatus(npcid);
public CheckSirenStatus(npcid)
{
    if (NPC_IsVehicleSirenUsed(npcid))
    {
        printf("NPC %d has siren active", npcid);
    }
    else
    {
        printf("NPC %d does not have siren active", npcid);
    }
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checksiren", true))
    {
        if (NPC_IsVehicleSirenUsed(0))
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC 0 siren is active");
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "NPC 0 siren is not active");
        }
        return 1;
    }
    return 0;
}
```

## Notes

- Returns `false` if the NPC is not in a vehicle
- Only works for vehicles that have sirens (police cars, ambulances, fire trucks)
- The siren must be activated with `NPC_UseVehicleSiren` first
- Visual and audio siren effects are visible to all players

## Related Functions

- [NPC_UseVehicleSiren](NPC_UseVehicleSiren): Toggle vehicle siren
- [NPC_GetVehicleID](NPC_GetVehicleID): Get NPC's vehicle
- [NPC_PutInVehicle](NPC_PutInVehicle): Put NPC in vehicle
- [NPC_RemoveFromVehicle](NPC_RemoveFromVehicle): Remove NPC from vehicle

## Related Callbacks

_No specific callbacks are triggered by this function._
