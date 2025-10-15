---
title: NPC_SetSurfingOffset
sidebar_label: NPC_SetSurfingOffset
description: Sets the surfing offset for an NPC.
tags: ["npc", "surfing"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets the surfing offset for an NPC.

| Name  | Description       |
| ----- | ----------------- |
| npcid | The ID of the NPC |
| x     | The X offset      |
| y     | The Y offset      |
| z     | The Z offset      |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
new g_CarrierVehicle = INVALID_VEHICLE_ID;

public OnGameModeInit()
{
    // Create transport vehicle
    g_CarrierVehicle = CreateVehicle(403, 1958.33, 1343.12, 15.36, 0.0, -1, -1, 300); // Linerunner

    // Create passenger NPC
    new npcid = NPC_Create("Guard");
    NPC_Spawn(npcid);

    // Set NPC to surf on vehicle roof
    NPC_SetSurfingVehicle(npcid, g_CarrierVehicle);
    NPC_SetSurfingOffset(npcid, 0.0, 0.0, 2.5); // 2.5 units above vehicle

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/ridetop", true))
    {
        if (g_CarrierVehicle != INVALID_VEHICLE_ID)
        {
            NPC_SetSurfingVehicle(0, g_CarrierVehicle);
            NPC_SetSurfingOffset(0, 0.0, 0.0, 2.5); // On top

            SendClientMessage(playerid, 0x00FF00FF, "NPC 0 positioned on vehicle roof");
        }
        return 1;
    }

    if (!strcmp(cmdtext, "/ridefront", true))
    {
        if (g_CarrierVehicle != INVALID_VEHICLE_ID)
        {
            NPC_SetSurfingVehicle(0, g_CarrierVehicle);
            NPC_SetSurfingOffset(0, 0.0, 3.0, 1.0); // Front of vehicle

            SendClientMessage(playerid, 0x00FF00FF, "NPC 0 positioned at vehicle front");
        }
        return 1;
    }

    if (!strcmp(cmdtext, "/rideside", true))
    {
        if (g_CarrierVehicle != INVALID_VEHICLE_ID)
        {
            NPC_SetSurfingVehicle(0, g_CarrierVehicle);
            NPC_SetSurfingOffset(0, 2.0, 0.0, 1.0); // Side of vehicle

            SendClientMessage(playerid, 0x00FF00FF, "NPC 0 positioned at vehicle side");
        }
        return 1;
    }
    return 0;
}
```

## Notes

- The surfing offset determines the relative position of the NPC compared to the object/vehicle it's surfing on
- Positive Z values move the NPC upward, negative values downward
- Positive Y values typically move the NPC forward relative to the vehicle's direction
- Positive X values move the NPC to the right relative to the vehicle's direction
- This is useful for fine-tuning the NPC's position when surfing
- Great for creating vehicle escorts or passengers

## Related Functions

- [NPC_GetSurfingOffset](NPC_GetSurfingOffset): Gets the surfing offset for an NPC
- [NPC_SetSurfingObject](NPC_SetSurfingObject): Sets the object an NPC is surfing on
- [NPC_SetSurfingVehicle](NPC_SetSurfingVehicle): Sets the vehicle an NPC is surfing on
- [NPC_SetSurfingPlayerObject](NPC_SetSurfingPlayerObject): Sets the player object an NPC is surfing on
- [NPC_ResetSurfingData](NPC_ResetSurfingData): Resets all surfing data for an NPC

## Related Callbacks

_No specific callbacks are triggered by this function._
