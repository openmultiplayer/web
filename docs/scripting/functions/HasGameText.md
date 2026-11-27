---
title: "HasGameText | open.mp"
description: "Does the player currently have text in the given gametext style displayed?"
canonical: https://open.mp/docs/scripting/functions/HasGameText
language: en
---

# HasGameText

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Does the player currently have text in the given gametext style displayed?

| Name | Description |
| --- | --- |
| playerid | The ID of the player to check the gametext for. |
| style | The [style](https://open.mp/docs/scripting/resources/gametextstyles) of text to check. |

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

-   [GameTextForPlayer](https://open.mp/docs/scripting/functions/GameTextForPlayer): Display gametext to a player.
-   [HideGameTextForPlayer](https://open.mp/docs/scripting/functions/HideGameTextForPlayer): Stop showing a gametext style to a player.
-   [GameTextForAll](https://open.mp/docs/scripting/functions/GameTextForAll): Display gametext to all players.
-   [HideGameTextForAll](https://open.mp/docs/scripting/functions/HideGameTextForAll): Stop showing a gametext style for all players.
-   [GetGameText](https://open.mp/docs/scripting/functions/GetGameText): Gets all the information on the given game text style.
