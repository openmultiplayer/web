---
title: NPC_SetAnimation
sidebar_label: NPC_SetAnimation
description: Sets an animation for an NPC by animation ID.
tags: ["npc", "animation"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets an animation for an NPC using animation ID.

| Name        | Description                                       |
| ----------- | ------------------------------------------------- |
| npcid       | The ID of the NPC                                 |
| animationid | The animation ID to set                           |
| delta       | Animation speed (typically 4.1)                   |
| loop        | Whether the animation should loop                 |
| lockX       | Lock movement on X axis during animation          |
| lockY       | Lock movement on Y axis during animation          |
| freeze      | Freeze the NPC after animation                    |
| time        | Animation duration in milliseconds (0 = infinite) |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setdance", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        NPC_SetAnimation(npcid, 405, 4.1, true, false, false, false, 0);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d has been set to animate.", npcid);
        
        SetTimerEx("ClearNPCAnimations", 25000, false, "ii", playerid, npcid);

        return 1;
    }
    return 0;
}

forward ClearNPCAnimations(playerid, npcid);
public ClearNPCAnimations(playerid, npcid)
{

    NPC_ClearAnimations(npcid);
    SendClientMessage(playerid, 0x00FF00FF, "NPC %d animations were cleared.", npcid);
}
```

## Notes

- Animation IDs correspond to GTA San Andreas animation indices
- Use `NPC_ApplyAnimation` for animations by library and name

## Related Functions

- [NPC_ApplyAnimation](NPC_ApplyAnimation): Apply animation by name
- [NPC_ClearAnimations](NPC_ClearAnimations): Clear all animations
- [NPC_ResetAnimation](NPC_ResetAnimation): Reset to default stance

## Related Callbacks

- [OnNPCSpawn](../callbacks/OnNPCSpawn): Called when NPC spawns
