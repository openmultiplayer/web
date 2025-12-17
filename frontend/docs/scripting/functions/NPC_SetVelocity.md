---
title: NPC_SetVelocity
sidebar_label: NPC_SetVelocity
description: Sets the velocity of an NPC.
tags: ["npc", "velocity", "movement"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Sets the velocity of an NPC.

| Name    | Description                |
| ------- | -------------------------- |
| npcid   | The ID of the NPC          |
| Float:x | The X velocity component   |
| Float:y | The Y velocity component   |
| Float:z | The Z velocity component   |

## Returns

Returns `true` on success, `false` on failure.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setvelocity ", true, 13))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new Float:x, Float:y, Float:z;
        new idx = 13;

        // Parse x
        while (cmdtext[idx] == ' ') idx++;
        new startIdx = idx;
        while (cmdtext[idx] != ' ' && cmdtext[idx] != '\0') idx++;
        new xStr[32];
        strmid(xStr, cmdtext, startIdx, idx);
        x = floatstr(xStr);

        // Parse y
        while (cmdtext[idx] == ' ') idx++;
        startIdx = idx;
        while (cmdtext[idx] != ' ' && cmdtext[idx] != '\0') idx++;
        new yStr[32];
        strmid(yStr, cmdtext, startIdx, idx);
        y = floatstr(yStr);

        // Parse z
        while (cmdtext[idx] == ' ') idx++;
        z = floatstr(cmdtext[idx]);

        NPC_SetVelocity(npcid, x, y, z);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d velocity set to %.2f, %.2f, %.2f", npcid, x, y, z);

        return 1;
    }
    return 0;
}
```

## Notes

- Velocity values determine the speed and direction of movement
- Positive Z values move the NPC upward, negative values move downward
- This can be used to create custom movement behaviors

## Related Functions

- [NPC_GetVelocity](NPC_GetVelocity): Get NPC velocity
- [NPC_SetPos](NPC_SetPos): Set NPC position
- [NPC_Move](NPC_Move): Make NPC move to position

## Related Callbacks

- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): Called when NPC finishes movement
