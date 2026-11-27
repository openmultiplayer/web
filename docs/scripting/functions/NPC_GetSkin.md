---
title: "NPC_GetSkin | open.mp"
description: "Gets the skin/model ID of an NPC."
canonical: https://open.mp/docs/scripting/functions/NPC_GetSkin
language: en
---

# NPC\_GetSkin

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Gets the skin/model ID of an NPC.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |

## Returns

Returns the skin/model ID of the NPC, or -1 if invalid.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkskin", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new skinid = NPC_GetSkin(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d skin: %d", npcid, skinid);
        return 1;
    }
    return 0;
}
```

## Notes

-   Returns the current skin/model the NPC is using
-   Use [NPC\_SetSkin](https://open.mp/docs/scripting/functions/NPC_SetSkin) to change the NPC's skin

## Related Functions

-   [NPC\_SetSkin](https://open.mp/docs/scripting/functions/NPC_SetSkin): Set NPC skin/model
-   [NPC\_IsValid](https://open.mp/docs/scripting/functions/NPC_IsValid): Check if NPC is valid
-   [NPC\_IsSpawned](https://open.mp/docs/scripting/functions/NPC_IsSpawned): Check if NPC is spawned

## Related Callbacks

-   [OnNPCSpawn](https://open.mp/docs/scripting/callbacks/OnNPCSpawn): Called when NPC spawns
