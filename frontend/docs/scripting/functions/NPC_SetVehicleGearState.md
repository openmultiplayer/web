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
public OnGameModeInit()
{
    new npcid = NPC_Create("Pilot");
    NPC_Spawn(npcid);

    new vehicleid = CreateVehicle(520, 1958.33, 1343.12, 15.36, 0.0, -1, -1, -1); // Hydra
    NPC_PutInVehicle(npcid, vehicleid, 0);

    // Set landing gear up
    NPC_SetVehicleGearState(npcid, LANDING_GEAR_STATE_UP);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/gearup", true))
    {
        new npcs[MAX_NPCS];
        new count = NPC_GetAll(npcs);

        for (new i = 0; i < count; i++)
        {
            if (NPC_GetVehicleID(npcs[i]) != INVALID_VEHICLE_ID) // NPC is in aircraft
            {
                NPC_SetVehicleGearState(npcs[i], LANDING_GEAR_STATE_UP);
            }
        }

        SendClientMessage(playerid, 0x00FF00FF, "Raised landing gear for all NPC aircraft");
        return 1;
    }

    if (!strcmp(cmdtext, "/geardown", true))
    {
        new npcs[MAX_NPCS];
        new count = NPC_GetAll(npcs);

        for (new i = 0; i < count; i++)
        {
            if (NPC_GetVehicleID(npcs[i]) != INVALID_VEHICLE_ID) // NPC is in aircraft
            {
                NPC_SetVehicleGearState(npcs[i], LANDING_GEAR_STATE_DOWN);
            }
        }

        SendClientMessage(playerid, 0x00FF00FF, "Lowered landing gear for all NPC aircraft");
        return 1;
    }
    return 0;
}
```

## Notes

- Only works when NPC is piloting an aircraft
- Uses the same constants as [Vehicle Landing Gear States](../resources/landinggearstate): LANDING_GEAR_STATE_DOWN and LANDING_GEAR_STATE_UP
- Check current landing gear state with NPC_GetVehicleGearState
- This is the NPC equivalent of GetPlayerLandingGearState

## Related Functions

- [NPC_GetVehicleGearState](NPC_GetVehicleGearState): Get current landing gear state
- [GetPlayerLandingGearState](GetPlayerLandingGearState): Get player's landing gear state
- [GetVehicleLandingGearState](GetVehicleLandingGearState): Get vehicle's landing gear state
- [NPC_PutInVehicle](NPC_PutInVehicle): Put NPC in vehicle

## Related Resources

- [Vehicle Landing Gear States](../resources/landinggearstate)

## Related Callbacks

_No specific callbacks are triggered by this function._
