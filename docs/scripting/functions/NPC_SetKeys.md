---
title: "NPC_SetKeys | open.mp"
description: "Sets the key states for an NPC."
canonical: https://open.mp/docs/scripting/functions/NPC_SetKeys
language: en
---

# NPC\_SetKeys

warning

This function was added in omp v1.5.8.3079 and will not work in earlier versions!

## Description

Sets the key states for an NPC, simulating key presses.

| Name | Description |
| --- | --- |
| npcid | The ID of the NPC |
| upAndDown | Up/down key state |
| leftAndRight | Left/right key state |
| keys | The key combination to set |

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

        NPC_SetKeys(npcid, updown, leftright, keys);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d keys: keys=%d, ud=%d, lr=%d", npcid, keys, updown, leftright);

        return 1;
    }
    return 0;
}
```

## Notes

-   Keys affect NPC behavior in vehicles and on foot
-   Use NPC\_GetKeys to check current key states
-   Key states persist until changed or NPC state resets

## Related Functions

-   [NPC\_GetKeys](https://open.mp/docs/scripting/functions/NPC_GetKeys): Get NPC's key states
-   [NPC\_PutInVehicle](https://open.mp/docs/scripting/functions/NPC_PutInVehicle): Put NPC in vehicle
-   [NPC\_Move](https://open.mp/docs/scripting/functions/NPC_Move): Make NPC move to position
-   [NPC\_StopMove](https://open.mp/docs/scripting/functions/NPC_StopMove): Stop NPC movement

## Related Resources

-   [Keys](https://open.mp/docs/scripting/resources/keys)

## Related Callbacks

_No specific callbacks are triggered by this function._
