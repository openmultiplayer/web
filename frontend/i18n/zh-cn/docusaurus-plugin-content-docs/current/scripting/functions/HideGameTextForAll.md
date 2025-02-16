---
title: HideGameTextForAll
sidebar_label: HideGameTextForAll
description: Stop showing a gametext style for all players.
tags: ["player", "gametext"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Stop showing a gametext style for all players.

| Name           | Description                                                       |
| -------------- | ----------------------------------------------------------------- |
| style          | The [style](../resources/gametextstyles) of text to hide.         |

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

- [HideGameTextForPlayer](HideGameTextForPlayer): Stop showing a gametext style to a player.
- [GameTextForPlayer](GameTextForPlayer): Display gametext to a player.
- [GameTextForAll](GameTextForAll): Display gametext to all players.
- [TextDrawHideForAll](TextDrawHideForAll): Hide a textdraw for all players.
