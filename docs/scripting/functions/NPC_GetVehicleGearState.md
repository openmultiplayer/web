---
title: "NPC_GetVehicleGearState | open.mp"
description: "Gets the landing gear state of an NPC's aircraft."
canonical: https://open.mp/docs/scripting/functions/NPC_GetVehicleGearState
language: en
---

# NPC\_GetVehicleGearState

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Gets the landing gear state of an NPC's aircraft.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |

## Returns

Returns the landing gear state of the NPC's aircraft (LANDING\_GEAR\_STATE\_DOWN or LANDING\_GEAR\_STATE\_UP).

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvehiclegearstate", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        if (NPC_GetVehicle(npcid) == INVALID_VEHICLE_ID)
            return SendClientMessage(playerid, 0xFFFF00FF, "NPC %d is not in any vehicle.", npcid);

        new LANDING_GEAR_STATE:gearState = NPC_GetVehicleGearState(npcid);

        if (gearState == LANDING_GEAR_STATE_UP)
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d: Landing gear UP", npcid);
        else
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d: Landing gear DOWN", npcid);

        return 1;
    }
    return 0;
}
```

## Notes

-   Only works when the NPC is piloting an aircraft
-   Returns the current landing gear state set by NPC\_SetVehicleGearState
-   Uses the same constants as [Vehicle Landing Gear States](https://open.mp/docs/scripting/resources/landinggearstate): LANDING\_GEAR\_STATE\_DOWN and LANDING\_GEAR\_STATE\_UP
-   This is the NPC equivalent of GetPlayerLandingGearState

## Related Functions

-   [NPC\_SetVehicleGearState](https://open.mp/docs/scripting/functions/NPC_SetVehicleGearState): Set aircraft landing gear state
-   [GetPlayerLandingGearState](https://open.mp/docs/scripting/functions/GetPlayerLandingGearState): Get player's landing gear state
-   [GetVehicleLandingGearState](https://open.mp/docs/scripting/functions/GetVehicleLandingGearState): Get vehicle's landing gear state
-   [NPC\_GetVehicle](https://open.mp/docs/scripting/functions/NPC_GetVehicle): Get NPC's current vehicle

## Related Resources

-   [Vehicle Landing Gear States](https://open.mp/docs/scripting/resources/landinggearstate)

## Related Callbacks

_No specific callbacks are triggered by this function._
