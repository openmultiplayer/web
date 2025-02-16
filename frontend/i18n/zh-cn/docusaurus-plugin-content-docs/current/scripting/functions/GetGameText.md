---
title: GetGameText
sidebar_label: GetGameText
description: Returns all the information on the given game text style.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Returns all the information on the given game text style.

| Name                   | Description                                                           |
|------------------------|-----------------------------------------------------------------------|
| playerid               | The ID of the player to get the rotation of.                          |
| style                  | The [style](../resources/gametextstyles) of text to get the data for. |
| message[]              | Return array for the text string.                                     |
| len = sizeof (message) | Size of the output.                                                   |
| time                   | The time the gametext was originally shown for.                       |
| remaining              | How much of that time is still remaining.                             |

## Returns

true - The function was executed successfully.

false - The function failed to execute. This means the player specified does not exist or the style is invalid.

## Examples

```c
public OnPlayerConnect(playerid)
{
    GameTextForPlayer(playerid, "Welcome to the server!", 5000, 3);

    new 
        message[32],
        time,
        remaining;

    GetGameText(playerid, 3, message, sizeof(message), time, remaining);
    // message = "Welcome to the server!"
    // time = 5000
    return 1;
}
```

## Related Functions

- [GameTextForPlayer](GameTextForPlayer): Display gametext to a player.
- [HideGameTextForPlayer](HideGameTextForPlayer): Stop showing a gametext style to a player.
- [GameTextForAll](GameTextForAll): Display gametext to all players.
- [HideGameTextForAll](HideGameTextForAll): Stop showing a gametext style for all players.
- [HasGameText](HasGameText): Does the player currently have text in the given gametext style displayed?
