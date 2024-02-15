---
title: HideGameTextForPlayer
description: Stop showing a gametext style to a player.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Stop showing a gametext style to a player.

| Name           | Description                                                       |
| -------------- | ----------------------------------------------------------------- |
| playerid       | The ID of the player to hide the gametext for.                    |
| style          | The [style](../resources/gametextstyles) of text to hide.         |

## Returns

This function does not return any specific value.

## Examples

```c
public OnPlayerDeath(playerid, killerid, reason)
{
    HideGameTextForPlayer(playerid, 3);
    return 1;
}
```

## Related Functions

- [HideGameTextForAll](HideGameTextForAll): Stop showing a gametext style for all players.
- [GameTextForPlayer](GameTextForPlayer): Display gametext to a player.
- [GameTextForAll](GameTextForAll): Display gametext to all players.
- [GetGameText](GetGameText): Gets all the information on the given game text style.
- [HasGameText](HasGameText): Does the player currently have text in the given gametext style displayed?
- [TextDrawHideForAll](TextDrawHideForAll): Hide a textdraw for all players.
