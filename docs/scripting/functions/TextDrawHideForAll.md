---
title: TextDrawHideForAll
description: Hides a text draw for all players.
tags: ["textdraw"]
---

## Description

Hides a text draw for all players.

| Name        | Description                                                                        |
| ----------- | ---------------------------------------------------------------------------------- |
| Text:textid | The ID of the textdraw to hide.<br />Returned by [TextDrawCreate](TextDrawCreate). |

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

- [TextDrawShowForPlayer](TextDrawShowForPlayer): Show a textdraw for a certain player.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Hide a textdraw for a certain player.
- [TextDrawShowForAll](TextDrawShowForAll): Show a textdraw for all players.
