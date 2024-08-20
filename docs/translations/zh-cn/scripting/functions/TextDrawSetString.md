---
title: TextDrawSetString
description: Changes the text on a textdraw.
tags: ["textdraw"]
---

## Description

Changes the text on a textdraw.

| Name             | Description                                |
| ---------------- | ------------------------------------------ |
| Text:textid      | The TextDraw to change                     |
| const format[]   | The new string for the TextDraw            |
| OPEN_MP_TAGS:... | Indefinite number of arguments of any tag. |

## Returns

This function does not return any specific values.

## Examples

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(1.0, 5.6, "Hi, how are you?");
    return 1;
}

public OnPlayerConnect(playerid)
{
    new
        string[64],
        playerName[MAX_PLAYER_NAME];

    GetPlayerName(playerid, playerName, sizeof playerName);

    format(string, sizeof(string), "Welcome %s!", playerName);
    TextDrawSetString(gMyTextdraw, string);

    // PRO TIP: You don't need `format` in open.mp
    TextDrawSetString(gMyTextdraw, "Welcome %s!", playerName);

    TextDrawShowForPlayer(playerid, gMyTextdraw);
    return 1;
}
```

## Notes

:::warning

There are limits to the length of textdraw strings - see [here](../resources/limits) for more info.

:::

## Related Functions

- [TextDrawCreate](TextDrawCreate): Create a textdraw.
- [TextDrawDestroy](TextDrawDestroy): Destroy a textdraw.
- [TextDrawSetStringForPlayer](TextDrawSetStringForPlayer): Changes the text on a textdraw for a specific player.
- [TextDrawColor](TextDrawColor): Set the color of the text in a textdraw.
- [TextDrawBoxColor](TextDrawBoxColor): Set the color of the box in a textdraw.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): Set the background color of a textdraw.
- [TextDrawAlignment](TextDrawAlignment): Set the alignment of a textdraw.
- [TextDrawFont](TextDrawFont): Set the font of a textdraw.
- [TextDrawLetterSize](TextDrawLetterSize): Set the letter size of the text in a textdraw.
- [TextDrawTextSize](TextDrawTextSize): Set the size of a textdraw box.
- [TextDrawSetOutline](TextDrawSetOutline): Choose whether the text has an outline.
- [TextDrawSetShadow](TextDrawSetShadow): Toggle shadows on a textdraw.
- [TextDrawSetProportional](TextDrawSetProportional): Scale the text spacing in a textdraw to a proportional ratio.
- [TextDrawUseBox](TextDrawUseBox): Toggle if the textdraw has a box or not.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): Show a textdraw for a certain player.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Hide a textdraw for a certain player.
- [TextDrawShowForAll](TextDrawShowForAll): Show a textdraw for all players.
- [TextDrawHideForAll](TextDrawHideForAll): Hide a textdraw for all players.
- [TextDrawGetString](TextDrawGetString): Gets the text of a textdraw.
