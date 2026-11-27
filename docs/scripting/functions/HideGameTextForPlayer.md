---
title: "HideGameTextForPlayer | open.mp"
description: "Stop showing a gametext style to a player."
canonical: https://open.mp/docs/scripting/functions/HideGameTextForPlayer
language: en
---

# HideGameTextForPlayer

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Stop showing a gametext style to a player.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to hide the gametext for. |
| style | The [style](https://open.mp/docs/scripting/resources/gametextstyles) of text to hide. |

## Returns

This function does not return any specific value.

## Examples

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    HideGameTextForPlayer(playerid, 3);
    return 1;
}
```

## Related Functions

-   [HideGameTextForAll](https://open.mp/docs/scripting/functions/HideGameTextForAll): Stop showing a gametext style for all players.
-   [GameTextForPlayer](https://open.mp/docs/scripting/functions/GameTextForPlayer): Display gametext to a player.
-   [GameTextForAll](https://open.mp/docs/scripting/functions/GameTextForAll): Display gametext to all players.
-   [GetGameText](https://open.mp/docs/scripting/functions/GetGameText): Gets all the information on the given game text style.
-   [HasGameText](https://open.mp/docs/scripting/functions/HasGameText): Does the player currently have text in the given gametext style displayed?
-   [TextDrawHideForAll](https://open.mp/docs/scripting/functions/TextDrawHideForAll): Hide a textdraw for all players.
