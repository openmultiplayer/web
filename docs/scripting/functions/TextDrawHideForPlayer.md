---
title: "TextDrawHideForPlayer | open.mp"
description: "Hides a textdraw for a specific player."
canonical: https://open.mp/docs/scripting/functions/TextDrawHideForPlayer
language: en
---

# TextDrawHideForPlayer

## Description

Hides a textdraw for a specific player.

| Name | Description |
| --- | --- |
| playerid | The ID of the player that the textdraw should be hidden for |
| Text:textid | The ID of the textdraw to hide |

## Returns

This function does not return any specific values.

## Examples

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(123.0, 123.0, "Example");
    return 1;
}

public OnGameModeExit()
{
    TextDrawDestroy(gMyTextdraw);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    TextDrawShowForPlayer(playerid, gMyTextdraw);
    return 1;
}

public OnPlayerDeath(playerid, reason)
{
    TextDrawHideForPlayer(playerid, gMyTextdraw);
    return 1;
}
```

## Related Functions

-   [TextDrawHideForAll](https://open.mp/docs/scripting/functions/TextDrawHideForAll): Hide a textdraw for all players.
-   [TextDrawShowForPlayer](https://open.mp/docs/scripting/functions/TextDrawShowForPlayer): Show a textdraw for a certain player.
-   [TextDrawShowForAll](https://open.mp/docs/scripting/functions/TextDrawShowForAll): Show a textdraw for all players.
-   [IsTextDrawVisibleForPlayer](https://open.mp/docs/scripting/functions/IsTextDrawVisibleForPlayer): Checks if a textdraw is shown for a player.
