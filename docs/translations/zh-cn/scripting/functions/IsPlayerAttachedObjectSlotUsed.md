---
title: IsPlayerAttachedObjectSlotUsed
description: Check if a player has an object attached in the specified index (slot).
tags: ["player", "object", "attachment"]
---

## Description

Check if a player has an object attached in the specified index (slot).

| Name     | Description                    |
| -------- | ------------------------------ |
| playerid | The ID of the player to check. |
| index    | The index (slot) to check.     |

## Returns

**true** - The specified slot is used for an attached object.

**false** - The specified slot is not in use for an attached object.

## Examples

```c
stock CountAttachedObjects(playerid)
{
    new count;
    for (new i = 0; i < MAX_PLAYER_ATTACHED_OBJECTS; i++)
    {
        if (IsPlayerAttachedObjectSlotUsed(playerid, i))
        {
            count++;
        }
    }
    return count;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/count", true))
    {
        new string[32];
        format(string, sizeof(string), "Attached objects: %d", CountAttachedObjects(playerid));
        SendClientMessage(playerid, -1, string);
        return 1;
    }
    return 0;
}
```

## Related Functions

- [SetPlayerAttachedObject](SetPlayerAttachedObject): Attach an object to a player
- [RemovePlayerAttachedObject](RemovePlayerAttachedObject): Remove an attached object from a player
- [GetPlayerAttachedObject](GetPlayerAttachedObject): Gets the player attachment object data by index.
