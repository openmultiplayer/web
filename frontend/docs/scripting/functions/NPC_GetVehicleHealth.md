---
title: NPC_GetVehicleHealth
sidebar_label: NPC_GetVehicleHealth
description: Gets the health of an NPC's vehicle.
tags: ["npc", "vehicle"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the health of an NPC's vehicle.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns the vehicle health as a float value, or 0.0 if the NPC is not in a vehicle.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{    
    if (!strcmp(cmdtext, "/checkvehiclehealth", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        if (NPC_GetVehicle(npcid) == INVALID_VEHICLE_ID)
            return SendClientMessage(playerid, 0xFFFF00FF, "NPC %d is not in any vehicle.", npcid);

        new Float:health;
        NPC_GetVehicleHealth(npcid, health);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d vehicle health: %.2f", npcid, health);
        return 1;
    }
    return 0;
}

```

## Notes

- Returns 0.0 if the NPC is not in a vehicle
- Vehicle health typically ranges from 0.0 to 1000.0
- Health below 250.0 usually means the vehicle will catch fire

## Related Functions

- [NPC_SetVehicleHealth](NPC_SetVehicleHealth): Set vehicle health
- [NPC_GetVehicle](NPC_GetVehicle): Get NPC's current vehicle
- [NPC_GetVehicleID](NPC_GetVehicleID): Get vehicle ID
- [NPC_PutInVehicle](NPC_PutInVehicle): Put NPC in vehicle

## Related Callbacks

_No specific callbacks are triggered by this function._
