---
title: NPC_SetKeys
sidebar_label: NPC_SetKeys
description: Sets the key states for an NPC.
tags: ["npc", "keys", "input"]
---

<VersionWarn version='omp v1.1.0.changemelater' />

## Description

Sets the key states for an NPC, simulating key presses.

| Name         | Description                |
| ------------ | -------------------------- |
| npcid        | The ID of the NPC          |
| upAndDown    | Up/down key state          |
| leftAndRight | Left/right key state       |
| keys         | The key combination to set |

## Returns

Returns `true` if the operation was successful, `false` otherwise.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setkeys ", true, 9))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "You are not debugging a NPC.");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "Invalid NPC.");

        new idx = 9;
        new keys = 0, updown = 0, leftright = 0;

        // Parse keys
        while (cmdtext[idx] == ' ') idx++;
        if (cmdtext[idx] == '\0')
            return SendClientMessage(playerid, 0xFF0000FF, "Usage: /setkeys [keys] [updown] [leftright]");
        keys = strval(cmdtext[idx]);

        // Skip to next parameter
        while (cmdtext[idx] != ' ' && cmdtext[idx] != '\0') idx++;
        while (cmdtext[idx] == ' ') idx++;

        // Parse updown if exists
        if (cmdtext[idx] != '\0')
        {
            updown = strval(cmdtext[idx]);
            while (cmdtext[idx] != ' ' && cmdtext[idx] != '\0') idx++;
            while (cmdtext[idx] == ' ') idx++;

            // Parse leftright if exists
            if (cmdtext[idx] != '\0')
            {
                leftright = strval(cmdtext[idx]);
            }
        }

        NPC_SetKeys(npcid, keys, updown, leftright);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d keys: keys=%d, ud=%d, lr=%d", npcid, keys, updown, leftright);

        return 1;
    }
    return 0;
}
```

## Notes

- Keys affect NPC behavior in vehicles and on foot
- Use NPC_GetKeys to check current key states
- Key states persist until changed or NPC state resets

## Related Functions

- [NPC_GetKeys](NPC_GetKeys): Get NPC's key states
- [NPC_PutInVehicle](NPC_PutInVehicle): Put NPC in vehicle
- [NPC_Move](NPC_Move): Make NPC move to position
- [NPC_StopMove](NPC_StopMove): Stop NPC movement

## Related Resources

- [Keys](../resources/keys)

## Related Callbacks

_No specific callbacks are triggered by this function._
