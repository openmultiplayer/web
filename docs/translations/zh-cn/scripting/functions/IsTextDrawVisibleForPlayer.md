---
title: IsTextDrawVisibleForPlayer
description: Checks if a textdraw is shown for a player.
tags: ["textdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Checks if a textdraw is shown for a player.

| Name        | Description                      |
| ----------- | -------------------------------- |
| playerid    | The ID of the player to check.   |
| Text:textid | The ID of the textdraw.          |

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

- [TextDrawCreate](TextDrawCreate): Creates a textdraw.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): Show a textdraw for a certain player.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Hide a textdraw for a certain player.
