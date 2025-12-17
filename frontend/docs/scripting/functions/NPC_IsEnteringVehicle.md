---
title: NPC_IsEnteringVehicle
sidebar_label: NPC_IsEnteringVehicle
description: Checks if an NPC is currently entering a vehicle.
tags: ["npc", "vehicle"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if an NPC is currently in the process of entering a vehicle.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the NPC is entering a vehicle, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkenteringvehicle", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new bool:isEntering = NPC_IsEnteringVehicle(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is entering vehicle: %s", npcid, isEntering ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```

## Notes

- Returns true only during the entering animation/process
- Once the NPC is fully inside, this returns false
- The NPC must have been instructed to enter with NPC_EnterVehicle

## Related Functions

- [NPC_EnterVehicle](NPC_EnterVehicle): Make NPC enter vehicle
- [NPC_GetEnteringVehicleID](NPC_GetEnteringVehicleID): Get entering vehicle ID
- [NPC_GetEnteringVehicleSeat](NPC_GetEnteringVehicleSeat): Get entering seat
- [NPC_GetVehicle](NPC_GetVehicle): Get current vehicle

## Related Callbacks

_No specific callbacks are triggered by this function._
