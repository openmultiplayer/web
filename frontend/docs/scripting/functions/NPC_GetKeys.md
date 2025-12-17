---
title: NPC_GetKeys
sidebar_label: NPC_GetKeys
description: Gets the current key states of an NPC.
tags: ["npc", "keys"]
---

<VersionWarn version='omp v1.5.8.3079' />

## Description

Gets the current key states of an NPC.

| Name          | Description                             |
| ------------- | --------------------------------------- |
| npcid         | The ID of the NPC                       |
| &upAndDown    | Variable to store up/down key states    |
| &leftAndRight | Variable to store left/right key states |
| &keys         | Variable to store other key states      |

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

- All parameters except npcid are passed by reference and will be modified
- Key states are stored as bit flags
- Use bitwise operations to check individual keys
- This reflects the NPC's current input state

## Related Functions

- [NPC_SetKeys](NPC_SetKeys): Set NPC key states
- [NPC_Move](NPC_Move): Make NPC move to position
- [NPC_StopMove](NPC_StopMove): Stop NPC movement

## Related Callbacks

- [OnNPCFinishMove](../callbacks/OnNPCFinishMove): Called when NPC finishes movement
