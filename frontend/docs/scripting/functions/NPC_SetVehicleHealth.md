---
title: NPC_SetVehicleHealth
sidebar_label: NPC_SetVehicleHealth
description: Sets the health of an NPC's vehicle.
tags: ["npc", "vehicle", "health"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets the health of an NPC's vehicle.

| Name   | Description                   |
| ------ | ----------------------------- |
| npcid  | The ID of the NPC             |
| health | The health value (0.0-1000.0) |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setvehiclehealth ", true, 18))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:health = floatstr(cmdtext[18]);

        NPC_SetVehicleHealth(npcid, health);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d vehicle health set to %.2f", npcid, health);

        return 1;
    }
    return 0;
}
```

## Notes

- Only works when NPC is in a vehicle
- Health ranges from 0.0 (destroyed) to 1000.0 (perfect condition)
- Vehicles explode when health drops below 250

## Related Functions

- [NPC_GetVehicleHealth](NPC_GetVehicleHealth): Get vehicle health
- [NPC_GetVehicleID](NPC_GetVehicleID): Get NPC's vehicle
- [NPC_PutInVehicle](NPC_PutInVehicle): Put NPC in vehicle
- [SetVehicleHealth](SetVehicleHealth): Set vehicle health directly

## Related Callbacks

_No specific callbacks are triggered by this function._
