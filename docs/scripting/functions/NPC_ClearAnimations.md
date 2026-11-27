---
title: "NPC_ClearAnimations | open.mp"
description: "Clears all animations from an NPC."
canonical: https://open.mp/docs/scripting/functions/NPC_ClearAnimations
language: en
---

# NPC\_ClearAnimations

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Clears all animations from an NPC, returning it to its default state.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/applydance", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        NPC_ApplyAnimation(npcid, "DANCING", "dance_loop", 4.1, true, false, false, false, 0);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d has been applied animation.", npcid);

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

-   This function stops all currently playing animations including looping ones
-   The NPC will return to its default idle stance

## Related Functions

-   [NPC\_ApplyAnimation](https://open.mp/docs/scripting/functions/NPC_ApplyAnimation): Apply animation to NPC
-   [NPC\_SetAnimation](https://open.mp/docs/scripting/functions/NPC_SetAnimation): Set animation by ID
-   [NPC\_ResetAnimation](https://open.mp/docs/scripting/functions/NPC_ResetAnimation): Reset animation state
-   [NPC\_GetAnimation](https://open.mp/docs/scripting/functions/NPC_GetAnimation): Get current animation data

## Related Callbacks

-   [OnNPCSpawn](https://open.mp/docs/scripting/callbacks/OnNPCSpawn): Called when NPC spawns
