---
title: GameTextForPlayer
description: Shows 'game text' (on-screen text) for a certain length of time for a specific player.
tags: ["player"]
---

## Description

Shows 'game text' (on-screen text) for a certain length of time for a specific player.

| Name             | Description                                                              |
|------------------|--------------------------------------------------------------------------|
| playerid         | The ID of the player to show the gametext for.                           |
| const string[]   | The text to be displayed.                                                |
| time             | The duration of the text being shown in milliseconds.                    |
| style            | The [style](../resources/gametextstyles) of text to be displayed.        |
| OPEN_MP_TAGS:... | Indefinite number of arguments of any tag for string. (added in open.mp) |

## Returns

1: The function executed successfully. Success is reported when the style and/or time is invalid. Nothing will happen though (no text displayed). May also cause game crashes.

0: The function failed to execute. This means either the string is null or the player is not connected.

## Examples

```c
public OnPlayerDeath(playerid, killerid, reason)
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

:::warning

Do note that the players may crash because of odd number of tilde (~) symbols used in the game text. Using color codes (e.g. ~r~) beyond the 255th character may crash the client.

Also, a blank space at end of the string may result in faliure. For example: `"Headshot "` results in failure. Instead it should be `"Headshot"` or `"Headshot_"`.

:::

## Related Functions

- [HideGameTextForPlayer](HideGameTextForPlayer): Stop showing a gametext style to a player.
- [GameTextForAll](GameTextForAll): Display gametext to all players.
- [HideGameTextForAll](HideGameTextForAll): Stop showing a gametext style for all players.
- [TextDrawShowForAll](TextDrawShowForAll): Show a textdraw for all players.
