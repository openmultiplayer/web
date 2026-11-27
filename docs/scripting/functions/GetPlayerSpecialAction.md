---
title: "GetPlayerSpecialAction | open.mp"
description: "Retrieves a player's current special action."
canonical: https://open.mp/docs/scripting/functions/GetPlayerSpecialAction
language: en
---

# GetPlayerSpecialAction

## Description

Retrieves a player's current [special action](https://open.mp/docs/scripting/resources/specialactions).

| Name | Description |
| --- | --- |
| playerid | The ID of the player to get the special action of. |

## Returns

The special action of the player (see: [Special Actions](https://open.mp/docs/scripting/resources/specialactions)).

## Examples

```c
public OnPlayerUpdate(playerid)
{
    // Ban players if they have a jetpack
    if (GetPlayerSpecialAction(playerid) == SPECIAL_ACTION_USEJETPACK)
    {
        Ban(playerid);
    }
    return 1;
}
```

## Related Functions

-   [SetPlayerSpecialAction](https://open.mp/docs/scripting/functions/SetPlayerSpecialAction): Set a player's special action.
-   [GetPlayerState](https://open.mp/docs/scripting/functions/GetPlayerState): Get a player's current state.

## Related Resources

-   [Special Action IDs](https://open.mp/docs/scripting/resources/specialactions)
