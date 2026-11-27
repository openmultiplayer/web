---
title: "TextDrawShowForAll | open.mp"
description: "Shows a textdraw for all players."
canonical: https://open.mp/docs/scripting/functions/TextDrawShowForAll
language: en
---

# TextDrawShowForAll

## Description

Shows a textdraw for all players.

| Name | Description |
| --- | --- |
| Text:textid | The ID of the textdraw to show.  
Returned by [TextDrawCreate](https://open.mp/docs/scripting/functions/TextDrawCreate). |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. This means the textdraw specified does not exist.

## Examples

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(240.0, 580.0, "Example Text");
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/showtd", true))
    {
        TextDrawShowForAll(gMyTextdraw);
        return 1;
    }
    return 0;
}
```

## Related Functions

-   [TextDrawShowForPlayer](https://open.mp/docs/scripting/functions/TextDrawShowForPlayer): Show a textdraw for a certain player.
-   [TextDrawHideForPlayer](https://open.mp/docs/scripting/functions/TextDrawHideForPlayer): Hide a textdraw for a certain player.
-   [TextDrawHideForAll](https://open.mp/docs/scripting/functions/TextDrawHideForAll): Hide a textdraw for all players.
