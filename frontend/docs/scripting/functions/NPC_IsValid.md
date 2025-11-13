---
title: NPC_IsValid
sidebar_label: NPC_IsValid
description: Checks if an NPC ID is valid.
tags: ["npc"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Checks if an NPC ID is valid and the NPC exists.

| Name  | Description          |
| ----- | -------------------- |
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

:::warning

- Always check if an NPC is valid before performing operations on it.
- An NPC becomes invalid when it is destroyed.
- This prevents runtime errors and crashes.
- Use this in loops when iterating through potential NPC IDs.

:::

## Related Functions

- [NPC_Create](NPC_Create): Create a new NPC.
- [NPC_Destroy](NPC_Destroy): Destroy an NPC.
- [NPC_GetAll](NPC_GetAll): Get all valid NPC IDs.
- [NPC_IsDead](NPC_IsDead): Check if NPC is dead.
