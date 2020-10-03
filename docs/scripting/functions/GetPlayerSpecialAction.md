---
id: GetPlayerSpecialAction
title: GetPlayerSpecialAction
description: Retrieves a player's current special action.
tags: ["player"]
---

## Description

Retrieves a player's current special action.

| Name     | Description                                        |
| -------- | -------------------------------------------------- |
| playerid | The ID of the player to get the special action of. |

## Returns

The special action of the player (see: [Special Actions](../../scripting/resources/specialactions.md)).

## Examples

```c
public OnPlayerUpdate(playerid)
{
    // Ban players if they have a jetpack
    if(GetPlayerSpecialAction(playerid) == SPECIAL_ACTION_USEJETPACK)
    {
        Ban(playerid);
    }
    return 1;
}
```

## Related Functions

- [SetPlayerSpecialAction](SetPlayerSpecialAction.md): Set a player's special action.
- [GetPlayerState](GetPlayerState.md): Get a player's current state.

## Related Information

- [Special Actions List](../resources/specialactions#special-actions.md): This page compiles the list of all the player special actions.