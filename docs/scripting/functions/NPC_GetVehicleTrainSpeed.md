---
title: "NPC_GetVehicleTrainSpeed | open.mp"
description: "Gets the train speed for an NPC driving a train."
canonical: https://open.mp/docs/scripting/functions/NPC_GetVehicleTrainSpeed
language: en
---

# NPC\_GetVehicleTrainSpeed

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Gets the train speed for an NPC driving a train.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |

## Returns

Returns the train speed as a float, or 0.0 if not in a train.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvehicletrainspeed", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        if (NPC_GetVehicle(npcid) == INVALID_VEHICLE_ID)
            return SendClientMessage(playerid, 0xFFFF00FF, "NPC %d is not in any vehicle.", npcid);

        new Float:speed = NPC_GetVehicleTrainSpeed(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d vehicle train speed: %.2f", npcid, speed);
        return 1;
    }
    return 0;
}
```

## Notes

-   Only works when the NPC is driving a train vehicle
-   Returns 0.0 if the NPC is not in a train or not the driver

## Related Functions

-   [NPC\_SetVehicleTrainSpeed](https://open.mp/docs/scripting/functions/NPC_SetVehicleTrainSpeed): Set train speed
-   [NPC\_GetVehicleID](https://open.mp/docs/scripting/functions/NPC_GetVehicleID): Get NPC's vehicle
-   [NPC\_PutInVehicle](https://open.mp/docs/scripting/functions/NPC_PutInVehicle): Put NPC in vehicle

## Related Callbacks

_No specific callbacks are triggered by this function._
