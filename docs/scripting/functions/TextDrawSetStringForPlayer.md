---
title: "TextDrawSetStringForPlayer | open.mp"
description: "Changes the text on a textdraw for a specific player."
canonical: https://open.mp/docs/scripting/functions/TextDrawSetStringForPlayer
language: en
---

# TextDrawSetStringForPlayer

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Changes the text on a textdraw for a specific player.

| Name | Description |
| --- | --- |
| Text:textid | The ID of the TextDraw to change |
| playerid | The ID of the player |
| const format\[\] | The new string for the TextDraw |
| OPEN\_MP\_TAGS:... | Indefinite number of arguments of any tag |

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

warning

There are limits to the length of textdraw strings - see [here](https://open.mp/docs/scripting/resources/limits) for more info.

## Related Functions

-   [TextDrawCreate](https://open.mp/docs/scripting/functions/TextDrawCreate): Create a textdraw.
-   [TextDrawDestroy](https://open.mp/docs/scripting/functions/TextDrawDestroy): Destroy a textdraw.
-   [TextDrawSetString](https://open.mp/docs/scripting/functions/TextDrawSetString): Changes the text on a textdraw.
-   [TextDrawColor](https://open.mp/docs/scripting/functions/TextDrawColor): Set the color of the text in a textdraw.
-   [TextDrawBoxColor](https://open.mp/docs/scripting/functions/TextDrawBoxColor): Set the color of the box in a textdraw.
-   [TextDrawBackgroundColor](https://open.mp/docs/scripting/functions/TextDrawBackgroundColor): Set the background color of a textdraw.
-   [TextDrawAlignment](https://open.mp/docs/scripting/functions/TextDrawAlignment): Set the alignment of a textdraw.
-   [TextDrawFont](https://open.mp/docs/scripting/functions/TextDrawFont): Set the font of a textdraw.
-   [TextDrawLetterSize](https://open.mp/docs/scripting/functions/TextDrawLetterSize): Set the letter size of the text in a textdraw.
-   [TextDrawTextSize](https://open.mp/docs/scripting/functions/TextDrawTextSize): Set the size of a textdraw box.
-   [TextDrawSetOutline](https://open.mp/docs/scripting/functions/TextDrawSetOutline): Choose whether the text has an outline.
-   [TextDrawSetShadow](https://open.mp/docs/scripting/functions/TextDrawSetShadow): Toggle shadows on a textdraw.
-   [TextDrawSetProportional](https://open.mp/docs/scripting/functions/TextDrawSetProportional): Scale the text spacing in a textdraw to a proportional ratio.
-   [TextDrawUseBox](https://open.mp/docs/scripting/functions/TextDrawUseBox): Toggle if the textdraw has a box or not.
-   [TextDrawShowForPlayer](https://open.mp/docs/scripting/functions/TextDrawShowForPlayer): Show a textdraw for a certain player.
-   [TextDrawHideForPlayer](https://open.mp/docs/scripting/functions/TextDrawHideForPlayer): Hide a textdraw for a certain player.
-   [TextDrawShowForAll](https://open.mp/docs/scripting/functions/TextDrawShowForAll): Show a textdraw for all players.
-   [TextDrawHideForAll](https://open.mp/docs/scripting/functions/TextDrawHideForAll): Hide a textdraw for all players.
-   [TextDrawGetString](https://open.mp/docs/scripting/functions/TextDrawGetString): Gets the text of a textdraw.
