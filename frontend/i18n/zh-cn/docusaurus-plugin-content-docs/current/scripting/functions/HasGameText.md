---
title: HasGameText
sidebar_label: HasGameText
description: Does the player currently have text in the given gametext style displayed?
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Does the player currently have text in the given gametext style displayed?

| Name     | Description                                                |
|----------|------------------------------------------------------------|
| playerid | The ID of the player to check the gametext for.            |
| style    | The [style](../resources/gametextstyles) of text to check. |

## Returns

This function returns **true** if the player has gametext, or **false** if it is not.

## Examples

```c
public OnPlayerConnect(playerid)
{
    GameTextForPlayer(playerid, "Welcome to the server!", 5000, 3);

    if (HasGameText(playerid, 3))
    {
        // Do something
    }
    return 1;
}
```

## Related Functions

- [GameTextForPlayer](GameTextForPlayer): Display gametext to a player.
- [HideGameTextForPlayer](HideGameTextForPlayer): Stop showing a gametext style to a player.
- [GameTextForAll](GameTextForAll): Display gametext to all players.
- [HideGameTextForAll](HideGameTextForAll): Stop showing a gametext style for all players.
- [GetGameText](GetGameText): Gets all the information on the given game text style.
