---
title: SetPlayerSpecialAction
description: This function allows to set players special action.
tags: ["player"]
---

## Description

This function allows to set players special action.

| Name                    | Description                                                         |
| ----------------------- | ------------------------------------------------------------------- |
| playerid                | The player that should perform the action                           |
| SPECIAL_ACTION:actionid | The [action](../resources/specialactions) that should be performed. |

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

:::tip

Removing jetpacks from players by setting their special action to `SPECIAL_ACTION_NONE` (0) causes the sound to stay until death. There is a solution for this, Just apply a random animation to the player and their jetpack will be removed.

:::

## Related Functions

- [GetPlayerSpecialAction](GetPlayerSpecialAction): Get a player's current special action.
- [ApplyAnimation](ApplyAnimation): Apply an animation to a player.

## Related Resources

- [Special Action IDs](../resources/specialactions)
