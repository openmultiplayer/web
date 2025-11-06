---
title: NPC_SetVehicleGearState
sidebar_label: NPC_SetVehicleGearState
description: Sets an NPC's aircraft landing gear state.
tags: ["npc", "vehicle", "aircraft", "landing gear"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Sets an NPC's aircraft landing gear state when piloting an aircraft.

| Name      | Description                                                                      |
| --------- | -------------------------------------------------------------------------------- |
| npcid     | The ID of the NPC                                                                |
| gearstate | The landing gear state to set (LANDING_GEAR_STATE_DOWN or LANDING_GEAR_STATE_UP) |

## Returns

This function does not return any specific value.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setvehiclegearstate ", true, 21))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new gearState = strval(cmdtext[21]);

        NPC_SetVehicleGearState(npcid, gearState);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d vehicle gear state set to %d", npcid, gearState);

        return 1;
    }
    return 0;
}
```

## Notes

- Only works when NPC is piloting an aircraft
- Uses the same constants as [Vehicle Landing Gear States](../resources/landinggearstate): LANDING_GEAR_STATE_DOWN and LANDING_GEAR_STATE_UP
- Check current landing gear state with NPC_GetVehicleGearState

## Related Functions

- [NPC_GetVehicleGearState](NPC_GetVehicleGearState): Get current landing gear state
- [GetPlayerLandingGearState](GetPlayerLandingGearState): Get player's landing gear state
- [GetVehicleLandingGearState](GetVehicleLandingGearState): Get vehicle's landing gear state
- [NPC_PutInVehicle](NPC_PutInVehicle): Put NPC in vehicle

## Related Resources

- [Vehicle Landing Gear States](../resources/landinggearstate)

## Related Callbacks

_No specific callbacks are triggered by this function._
