---
title: "GetGameText | open.mp"
description: "Returns all the information on the given game text style."
canonical: https://open.mp/docs/scripting/functions/GetGameText
language: en
---

# GetGameText

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Returns all the information on the given game text style.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to get the rotation of. |
| style | The [style](https://open.mp/docs/scripting/resources/gametextstyles) of text to get the data for. |
| message\[\] | Return array for the text string. |
| len = sizeof (message) | Size of the output. |
| time | The time the gametext was originally shown for. |
| remaining | How much of that time is still remaining. |

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

-   [GameTextForPlayer](https://open.mp/docs/scripting/functions/GameTextForPlayer): Display gametext to a player.
-   [HideGameTextForPlayer](https://open.mp/docs/scripting/functions/HideGameTextForPlayer): Stop showing a gametext style to a player.
-   [GameTextForAll](https://open.mp/docs/scripting/functions/GameTextForAll): Display gametext to all players.
-   [HideGameTextForAll](https://open.mp/docs/scripting/functions/HideGameTextForAll): Stop showing a gametext style for all players.
-   [HasGameText](https://open.mp/docs/scripting/functions/HasGameText): Does the player currently have text in the given gametext style displayed?
