---
title: "ForceClassSelection | open.mp"
description: "Forces a player to go back to class selection."
canonical: https://open.mp/docs/scripting/functions/ForceClassSelection
language: en
---

# ForceClassSelection

## Description

Forces a player to go back to class selection.

| Name | Description |
| --- | --- |
| playerid | The player to send back to class selection. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/class", true))
    {
        ForceClassSelection(playerid);
        TogglePlayerSpectating(playerid, true);
        TogglePlayerSpectating(playerid, false);
        return 1;
    }
    return 0;
}
```

## Notes

warning

-   The player will not return to class selection until they re-spawn. This can be achieved with [TogglePlayerSpectating](https://open.mp/docs/scripting/functions/TogglePlayerSpectating), as seen in the example above.
-   This function does not perform a [state change](https://open.mp/docs/scripting/callbacks/OnPlayerStateChange) to `PLAYER_STATE_WASTED` when combined with [TogglePlayerSpectating](https://open.mp/docs/scripting/functions/TogglePlayerSpectating) (see example above), as is listed [here](https://open.mp/docs/scripting/resources/playerstates).

## Related Functions

-   [AddPlayerClass](https://open.mp/docs/scripting/functions/AddPlayerClass): Add a class.
-   [SetPlayerSkin](https://open.mp/docs/scripting/functions/SetPlayerSkin): Set a player's skin.
-   [GetPlayerSkin](https://open.mp/docs/scripting/functions/GetPlayerSkin): Get a player's current skin.

## Related Callbacks

-   [OnPlayerRequestClass](https://open.mp/docs/scripting/callbacks/OnPlayerRequestClass): Called when a player changes class at class selection.
