---
title: "TextDrawHideForAll | open.mp"
description: "Hides a text draw for all players."
canonical: https://open.mp/docs/scripting/functions/TextDrawHideForAll
language: en
---

# TextDrawHideForAll

## Description

Hides a text draw for all players.

| Name | Description |
| --- | --- |
| Text:textid | The ID of the textdraw to hide.  
Returned by [TextDrawCreate](https://open.mp/docs/scripting/functions/TextDrawCreate). |

## Returns

This function does not return any specific values.

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
    if (!strcmp(cmdtext, "/hidetd", true))
    {
        TextDrawHideForAll(gMyTextdraw);
        return 1;
    }
    return 0;
}
```

## Related Functions

-   [TextDrawShowForPlayer](https://open.mp/docs/scripting/functions/TextDrawShowForPlayer): Show a textdraw for a certain player.
-   [TextDrawHideForPlayer](https://open.mp/docs/scripting/functions/TextDrawHideForPlayer): Hide a textdraw for a certain player.
-   [TextDrawShowForAll](https://open.mp/docs/scripting/functions/TextDrawShowForAll): Show a textdraw for all players.
