---
title: "IsTextDrawVisibleForPlayer | open.mp"
description: "Checks if a textdraw is shown for a player."
canonical: https://open.mp/docs/scripting/functions/IsTextDrawVisibleForPlayer
language: en
---

# IsTextDrawVisibleForPlayer

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Checks if a textdraw is shown for a player.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to check. |
| Text:textid | The ID of the textdraw. |

## Returns

**true** - Textdraw is shown for the player.

**false** - Textdraw is not shown for the player.

## Examples

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(240.0, 580.0, "Example Text");
    return 1;
}

public OnPlayerConnect(playerid)
{
    TextDrawShowForPlayer(playerid, gMyTextdraw);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    if (IsTextDrawVisibleForPlayer(playerid, gMyTextdraw))
    {
        // gMyTextdraw is shown for the player
    }
    return 1;
}
```

## Related Functions

-   [TextDrawCreate](https://open.mp/docs/scripting/functions/TextDrawCreate): Creates a textdraw.
-   [TextDrawShowForPlayer](https://open.mp/docs/scripting/functions/TextDrawShowForPlayer): Show a textdraw for a certain player.
-   [TextDrawHideForPlayer](https://open.mp/docs/scripting/functions/TextDrawHideForPlayer): Hide a textdraw for a certain player.
