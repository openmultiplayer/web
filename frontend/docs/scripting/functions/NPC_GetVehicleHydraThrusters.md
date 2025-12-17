---
title: NPC_GetVehicleHydraThrusters
sidebar_label: NPC_GetVehicleHydraThrusters
description: Gets the thruster direction of an NPC's Hydra vehicle.
tags: ["npc", "vehicle", "hydra"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Gets the thruster direction of an NPC's Hydra vehicle.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns the thruster direction (0 = forward, 1 = vertical), or -1 if not in a Hydra.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvehiclehydra", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        if (NPC_GetVehicle(npcid) == INVALID_VEHICLE_ID)
            return SendClientMessage(playerid, 0xFFFF00FF, "NPC %d is not in any vehicle.", npcid);

        new thrusters = NPC_GetVehicleHydraThrusters(npcid);

        if (thrusters == 0)
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d: Hydra thrusters FORWARD (0)", npcid);
        else
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d: Hydra thrusters BACKWARD (1)", npcid);

        return 1;
    }
    return 0;
}
```

## Notes

- Only works with Hydra vehicles (model 520)
- Returns -1 if the NPC is not in a Hydra or not in a vehicle
- Direction 0 = forward flight mode (jet mode)
- Direction 1 = vertical flight mode (hover mode)

## Related Functions

- [NPC_SetVehicleHydraThrusters](NPC_SetVehicleHydraThrusters): Set thruster direction
- [NPC_GetVehicle](NPC_GetVehicle): Get NPC's current vehicle
- [NPC_GetVehicleHealth](NPC_GetVehicleHealth): Get vehicle health
- [NPC_PutInVehicle](NPC_PutInVehicle): Put NPC in vehicle

## Related Callbacks

_No specific callbacks are triggered by this function._
