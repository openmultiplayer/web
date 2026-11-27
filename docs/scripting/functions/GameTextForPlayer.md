---
title: "GameTextForPlayer | open.mp"
description: "Shows 'game text' (on-screen text) for a certain length of time for a specific player."
canonical: https://open.mp/docs/scripting/functions/GameTextForPlayer
language: en
---

# GameTextForPlayer

## Description

Shows 'game text' (on-screen text) for a certain length of time for a specific player.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to show the gametext for. |
| const format\[\] | The text to be displayed. |
| time | The duration of the text being shown in milliseconds. |
| style | The [style](https://open.mp/docs/scripting/resources/gametextstyles) of text to be displayed. |
| OPEN\_MP\_TAGS:... | Indefinite number of arguments of any tag. |

## Returns

**true** - The function executed successfully. Success is reported when the style and/or time is invalid. Nothing will happen though (no text displayed). May also cause game crashes.

**false** - The function failed to execute. This means either the string is null or the player is not connected.

## Examples

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    GameTextForPlayer(playerid, "Wasted", 5000, 2);

    if (killerid != INVALID_PLAYER_ID)
    {
        new name[MAX_PLAYER_NAME];
        GetPlayerName(playerid, name, sizeof(name));

        GameTextForPlayer(killerid, "~w~You killed ~r~%s", 3000, 3, name);
    }
    return 1;
}
```

## Notes

warning

-   Do note that the players may crash because of odd number of tilde (~) symbols used in the game text. Using color codes (e.g. `~r~`) beyond the 255th character may crash the client.
-   Also, a blank space at end of the string may result in faliure. For example: `"Headshot "` results in failure. Instead it should be `"Headshot"` or `"Headshot_"`.

## Related Functions

-   [HideGameTextForPlayer](https://open.mp/docs/scripting/functions/HideGameTextForPlayer): Stop showing a gametext style to a player.
-   [GameTextForAll](https://open.mp/docs/scripting/functions/GameTextForAll): Display gametext to all players.
-   [HideGameTextForAll](https://open.mp/docs/scripting/functions/HideGameTextForAll): Stop showing a gametext style for all players.
-   [GetGameText](https://open.mp/docs/scripting/functions/GetGameText): Gets all the information on the given game text style.
-   [HasGameText](https://open.mp/docs/scripting/functions/HasGameText): Does the player currently have text in the given gametext style displayed?
-   [TextDrawShowForPlayer](https://open.mp/docs/scripting/functions/TextDrawShowForPlayer): Show a textdraw for a certain player.

## Related Resources

-   [GameText Styles](https://open.mp/docs/scripting/resources/gametextstyles)
