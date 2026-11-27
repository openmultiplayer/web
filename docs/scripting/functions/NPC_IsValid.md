---
title: "NPC_IsValid | open.mp"
description: "Checks if an NPC ID is valid."
canonical: https://open.mp/docs/scripting/functions/NPC_IsValid
language: en
---

# NPC\_IsValid

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Checks if an NPC ID is valid and the NPC exists.

| Name | Description |
| --- | --- |
| npcid | The NPC ID to check. |

## Returns

Returns `true` if the NPC is valid, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvalid", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        new bool:isValid = NPC_IsValid(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d is valid: %s", npcid, isValid ? "Yes" : "No");
        return 1;
    }
    return 0;
}
```

## Notes

tip

-   Always check if an NPC is valid before performing operations on it. This prevents runtime errors and crashes.
-   Use this in loops when iterating through potential NPC IDs.

note

An NPC becomes invalid when it is destroyed.

## Related Functions

-   [NPC\_Create](https://open.mp/docs/scripting/functions/NPC_Create): Create a new NPC.
-   [NPC\_Destroy](https://open.mp/docs/scripting/functions/NPC_Destroy): Destroy an NPC.
-   [NPC\_GetAll](https://open.mp/docs/scripting/functions/NPC_GetAll): Get all valid NPC IDs.
-   [NPC\_IsDead](https://open.mp/docs/scripting/functions/NPC_IsDead): Check if NPC is dead.
