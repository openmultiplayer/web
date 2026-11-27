---
title: "RemovePlayerAttachedObject | open.mp"
description: "Remove an attached object from a player."
canonical: https://open.mp/docs/scripting/functions/RemovePlayerAttachedObject
language: en
---

# RemovePlayerAttachedObject

## Description

Remove an attached object from a player.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to remove the object from. |
| index | The index of the object to remove (set with [SetPlayerAttachedObject](https://open.mp/docs/scripting/functions/SetPlayerAttachedObject)). |

## Returns

**1** on success, **0** on failure.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strmp(cmdtext, "/remove", true)) // Remove Attached Objects
    {
        for (new i = 0; i < MAX_PLAYER_ATTACHED_OBJECTS; i++)
        {
            if (IsPlayerAttachedObjectSlotUsed(playerid, i))
            {
                RemovePlayerAttachedObject(playerid, i);
            }
        }
        return 1;
    }
    return 0;
}
```

## Related Functions

-   [SetPlayerAttachedObject](https://open.mp/docs/scripting/functions/SetPlayerAttachedObject): Attach an object to a player
-   [IsPlayerAttachedObjectSlotUsed](https://open.mp/docs/scripting/functions/IsPlayerAttachedObjectSlotUsed): Check whether an object is attached to a player in a specified index
