---
title: NPC_SetVehicleHydraThrusters
sidebar_label: NPC_SetVehicleHydraThrusters
description: Sets the Hydra thruster direction for an NPC's vehicle.
tags: ["npc", "vehicle", "hydra", "aircraft"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Sets the Hydra thruster direction for an NPC's vehicle when piloting a Hydra aircraft.

| Name      | Description                                    |
| --------- | ---------------------------------------------- |
| npcid     | The ID of the NPC                              |
| direction | The thruster direction (0=forward, 1=backward) |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/sethydrathrusters ", true, 19))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new direction = strval(cmdtext[19]);

        NPC_SetVehicleHydraThrusters(npcid, direction);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d hydra thrusters set to %d", npcid, direction);

        return 1;
    }
    return 0;
}
```

## Notes

- Only works with Hydra aircraft (vehicle ID 520)
- Direction 0 = forward thrusters (jet mode)
- Direction 1 = downward thrusters (VTOL mode)
- Use NPC_GetVehicleHydraThrusters to check current direction

## Related Functions

- [NPC_GetVehicleHydraThrusters](NPC_GetVehicleHydraThrusters): Get thruster direction
- [NPC_GetVehicleID](NPC_GetVehicleID): Get NPC's vehicle
- [NPC_PutInVehicle](NPC_PutInVehicle): Put NPC in vehicle
- [GetVehicleModel](GetVehicleModel): Get vehicle model

## Related Callbacks

_No specific callbacks are triggered by this function._
