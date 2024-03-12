---
title: TextDrawSetStringForPlayer
description: Changes the text on a textdraw for a specific player.
tags: ["textdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Changes the text on a textdraw for a specific player.

| Name             | Description                               |
| ---------------- | ----------------------------------------- |
| Text:textid      | The ID of the TextDraw to change          |
| playerid         | The ID of the player                      |
| const format[]   | The new string for the TextDraw           |
| OPEN_MP_TAGS:... | Indefinite number of arguments of any tag |

## Returns

This function does not return any specific values.

## Examples

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(317.799987, 331.475006, "Hi, how are you?");
    TextDrawLetterSize(gMyTextdraw, 0.238997, 1.250000);
    TextDrawTextSize(gMyTextdraw, 505.000000, 202.000000);
    TextDrawAlignment(gMyTextdraw, TEXT_DRAW_ALIGN_CENTER);
    TextDrawColor(gMyTextdraw, 0xFFFFFFFF);
    TextDrawSetShadow(gMyTextdraw, 0);
    TextDrawSetOutline(gMyTextdraw, 1);
    TextDrawBackgroundColor(gMyTextdraw, 255);
    TextDrawFont(gMyTextdraw, TEXT_DRAW_FONT_1);
    TextDrawSetProportional(gMyTextdraw, true);
    return 1;
}

public OnPlayerConnect(playerid)
{
    new playerName[MAX_PLAYER_NAME];
    GetPlayerName(playerid, playerName, sizeof playerName);

    TextDrawShowForPlayer(playerid, gMyTextdraw);

    TextDrawSetStringForPlayer(gMyTextdraw, playerid, "Welcome %s!", playerName);
    return 1;
}

public OnPlayerRequestClass(playerid, classid)
{
    TextDrawSetStringForPlayer(gMyTextdraw, playerid, "You chose class %d", classid);
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
- [TextDrawSetString](TextDrawSetString): Changes the text on a textdraw.
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
