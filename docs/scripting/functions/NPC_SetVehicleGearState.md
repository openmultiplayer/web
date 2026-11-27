---
title: "NPC_SetVehicleGearState | open.mp"
description: "Sets an NPC's aircraft landing gear state."
canonical: https://open.mp/docs/scripting/functions/NPC_SetVehicleGearState
language: en
---

# NPC\_SetVehicleGearState

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Sets an NPC's aircraft landing gear state when piloting an aircraft.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |
| gearstate | The landing gear state to set (LANDING\_GEAR\_STATE\_DOWN or LANDING\_GEAR\_STATE\_UP) |

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

-   Only works when NPC is piloting an aircraft
-   Uses the same constants as [Vehicle Landing Gear States](https://open.mp/docs/scripting/resources/landinggearstate): LANDING\_GEAR\_STATE\_DOWN and LANDING\_GEAR\_STATE\_UP
-   Check current landing gear state with NPC\_GetVehicleGearState

## Related Functions

-   [NPC\_GetVehicleGearState](https://open.mp/docs/scripting/functions/NPC_GetVehicleGearState): Get current landing gear state
-   [GetPlayerLandingGearState](https://open.mp/docs/scripting/functions/GetPlayerLandingGearState): Get player's landing gear state
-   [GetVehicleLandingGearState](https://open.mp/docs/scripting/functions/GetVehicleLandingGearState): Get vehicle's landing gear state
-   [NPC\_PutInVehicle](https://open.mp/docs/scripting/functions/NPC_PutInVehicle): Put NPC in vehicle

## Related Resources

-   [Vehicle Landing Gear States](https://open.mp/docs/scripting/resources/landinggearstate)

## Related Callbacks

_No specific callbacks are triggered by this function._
