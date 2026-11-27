---
title: "NPC_GetCustomSkin | open.mp"
description: "Gets the custom skin ID of an NPC."
canonical: https://open.mp/docs/scripting/functions/NPC_GetCustomSkin
language: en
---

# NPC\_GetCustomSkin

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Gets the custom skin ID of an NPC.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |

## Returns

Returns the custom skin ID of the NPC, or -1 if the NPC has no custom skin or is invalid.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkcustomskin", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new customskinid = NPC_GetCustomSkin(npcid);

        if (customskinid == -1)
        {
            SendClientMessage(playerid, 0xFF0000FF, "NPC %d has no custom skin set", npcid);
        }
        else
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d custom skin: %d", npcid, customskinid);
        }
        return 1;
    }
    return 0;
}
```

## Notes

note

-   Returns -1 if the NPC has no custom skin set or if the NPC is invalid.
-   Custom skins differ from regular skins in that they typically refer to custom models added to the game.

tip

Use [NPC\_GetSkin](https://open.mp/docs/scripting/functions/NPC_GetSkin) to get the regular skin/model ID.

## Related Functions

-   [NPC\_SetSkin](https://open.mp/docs/scripting/functions/NPC_SetSkin): Set NPC skin/model.
-   [NPC\_GetSkin](https://open.mp/docs/scripting/functions/NPC_GetSkin): Get NPC's current skin/model ID.
-   [NPC\_IsValid](https://open.mp/docs/scripting/functions/NPC_IsValid): Check if NPC is valid.

## Related Callbacks

-   [OnNPCSpawn](https://open.mp/docs/scripting/callbacks/OnNPCSpawn): Called when NPC spawns.
