---
title: NPC_GetVelocity
sidebar_label: NPC_GetVelocity
description: Gets the velocity of an NPC.
tags: ["npc", "velocity", "movement"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Gets the velocity of an NPC.

| Name     | Description                                              |
| -------- | -------------------------------------------------------- |
| npcid    | The ID of the NPC                                        |
| &Float:x | Variable to store the X velocity component, passed by reference |
| &Float:y | Variable to store the Y velocity component, passed by reference |
| &Float:z | Variable to store the Z velocity component, passed by reference |

## Returns

Returns `true` on success, `false` on failure.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvelocity", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:velX, Float:velY, Float:velZ;
        NPC_GetVelocity(npcid, velX, velY, velZ);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d velocity: X=%.2f, Y=%.2f, Z=%.2f", npcid, velX, velY, velZ);
        return 1;
    }
    return 0;
}
```

## Notes

:::warning

- All velocity parameters are passed by reference and will be modified

:::

## Related Functions

- [NPC_SetVelocity](NPC_SetVelocity): Set NPC velocity
- [NPC_GetPos](NPC_GetPos): Get NPC position
- [NPC_Move](NPC_Move): Make NPC move to position

## Related Callbacks

- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): Called when NPC finishes movement
