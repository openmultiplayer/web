---
title: "SetPlayerSpecialAction | open.mp"
description: "This function allows to set players special action."
canonical: https://open.mp/docs/scripting/functions/SetPlayerSpecialAction
language: en
---

# SetPlayerSpecialAction

## Description

This function allows to set players special action.

| Name | Description |
| --- | --- |
| playerid | The player that should perform the action |
| SPECIAL\_ACTION:actionid | The [action](https://open.mp/docs/scripting/resources/specialactions) that should be performed. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. This means the player is not connected.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/handsup", true) == 0)
    {
        SetPlayerSpecialAction(playerid, SPECIAL_ACTION_HANDSUP);
        return 1;
    }
    if (strcmp(cmdtext, "/drink", true) == 0)
    {
        SetPlayerSpecialAction(playerid, SPECIAL_ACTION_DRINK_WINE);
        return 1;
    }
    return 0;
}
```

## Notes

warning

Removing jetpacks from players by setting their special action to `SPECIAL_ACTION_NONE` (0) causes the sound to stay until death. There is a solution for this, Just apply a random animation to the player and their jetpack will be removed.

## Related Functions

-   [GetPlayerSpecialAction](https://open.mp/docs/scripting/functions/GetPlayerSpecialAction): Get a player's current special action.
-   [ApplyAnimation](https://open.mp/docs/scripting/functions/ApplyAnimation): Apply an animation to a player.

## Related Resources

-   [Special Action IDs](https://open.mp/docs/scripting/resources/specialactions)
