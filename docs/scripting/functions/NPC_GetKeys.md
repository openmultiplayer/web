---
title: "NPC_GetKeys | open.mp"
description: "Gets the current key states of an NPC."
canonical: https://open.mp/docs/scripting/functions/NPC_GetKeys
language: en
---

# NPC\_GetKeys

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Gets the current key states of an NPC.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |
| &upAndDown | Variable to store up/down key states |
| &leftAndRight | Variable to store left/right key states |
| &keys | Variable to store other key states |

## Returns

Returns `true` if the keys were retrieved successfully, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkkeys", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new keys, updown, leftright;
        NPC_GetKeys(npcid, keys, updown, leftright);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d keys: %d, updown: %d, leftright: %d", npcid, keys, updown, leftright);
        return 1;
    }
    return 0;
}
```

## Notes

-   All parameters except npcid are passed by reference and will be modified
-   Key states are stored as bit flags
-   Use bitwise operations to check individual keys
-   This reflects the NPC's current input state

## Related Functions

-   [NPC\_SetKeys](https://open.mp/docs/scripting/functions/NPC_SetKeys): Set NPC key states
-   [NPC\_Move](https://open.mp/docs/scripting/functions/NPC_Move): Make NPC move to position
-   [NPC\_StopMove](https://open.mp/docs/scripting/functions/NPC_StopMove): Stop NPC movement

## Related Callbacks

-   [OnNPCFinishMove](https://open.mp/docs/scripting/callbacks/OnNPCFinishMove): Called when NPC finishes movement
