---
title: "HideGameTextForAll | open.mp"
description: "Stop showing a gametext style for all players."
canonical: https://open.mp/docs/scripting/functions/HideGameTextForAll
language: en
---

# HideGameTextForAll

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Stop showing a gametext style for all players.

| Name | Description |
| --- | --- |
| style | The [style](https://open.mp/docs/scripting/resources/gametextstyles) of text to hide. |

## Returns

This function does not return any specific value.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/hidegametext3", true))
    {
        if (!IsPlayerAdmin(playerid))
        {
            return 1;
        }

        HideGameTextForAll(3);
        return 1;
    }
    return 0;
}
```

## Related Functions

-   [HideGameTextForPlayer](https://open.mp/docs/scripting/functions/HideGameTextForPlayer): Stop showing a gametext style to a player.
-   [GameTextForPlayer](https://open.mp/docs/scripting/functions/GameTextForPlayer): Display gametext to a player.
-   [GameTextForAll](https://open.mp/docs/scripting/functions/GameTextForAll): Display gametext to all players.
-   [TextDrawHideForAll](https://open.mp/docs/scripting/functions/TextDrawHideForAll): Hide a textdraw for all players.
