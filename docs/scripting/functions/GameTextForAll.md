---
title: "GameTextForAll | open.mp"
description: "Shows 'game text' (on-screen text) for a certain length of time for all players."
canonical: https://open.mp/docs/scripting/functions/GameTextForAll
language: en
---

# GameTextForAll

## Description

Shows 'game text' (on-screen text) for a certain length of time for all players.

| Name | Description |
| --- | --- |
| const format\[\] | The text to be displayed. |
| time | The duration of the text being shown in milliseconds. |
| style | The [style](https://open.mp/docs/scripting/resources/gametextstyles) of text to be displayed. |
| OPEN\_MP\_TAGS:... | Indefinite number of arguments of any tag. |

## Returns

This function always returns **1**.

## Examples

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    // This example shows a large, white text saying "[playerName] has
    // passed away" on everyone's screen, after a player has died or
    // has been killed. It shows in text-type 3, for 5 seconds (5000 ms)
    new name[MAX_PLAYER_NAME];
    GetPlayerName(playerid, name, sizeof(name));

    // Format the passed-away message properly, and show it to everyone:
    new string[64];
    format(string, sizeof(string), "~w~%s has passed away", name);
    GameTextForAll(string, 5000, 3);

    // PRO TIP: You don't need `format` in open.mp
    GameTextForAll("~w~%s has passed away", 5000, 3, name);
    return 1;
}
```

## Notes

warning

Do note that the players may crash because of odd number of tilde (~) symbols used in the game text. Using color codes (e.g. `~r~`) beyond the 255th character may crash the client.

## Related Functions

-   [HideGameTextForAll](https://open.mp/docs/scripting/functions/HideGameTextForAll): Stop showing a gametext style for all players.
-   [GameTextForPlayer](https://open.mp/docs/scripting/functions/GameTextForPlayer): Display gametext to a player.
-   [HideGameTextForPlayer](https://open.mp/docs/scripting/functions/HideGameTextForPlayer): Stop showing a gametext style to a player.
-   [TextDrawShowForAll](https://open.mp/docs/scripting/functions/TextDrawShowForAll): Show a textdraw for all players.

## Related Resources

-   [GameText Styles](https://open.mp/docs/scripting/resources/gametextstyles)
