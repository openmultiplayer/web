---
title: "TextDrawSetString | open.mp"
description: "Changes the text on a textdraw."
canonical: https://open.mp/docs/scripting/functions/TextDrawSetString
language: en
---

# TextDrawSetString

## Description

Changes the text on a textdraw.

| Name | Description |
| --- | --- |
| Text:textid | The TextDraw to change |
| const format\[\] | The new string for the TextDraw |
| OPEN\_MP\_TAGS:... | Indefinite number of arguments of any tag. |

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

warning

There are limits to the length of textdraw strings - see [here](https://open.mp/docs/scripting/resources/limits) for more info.

## Related Functions

-   [TextDrawCreate](https://open.mp/docs/scripting/functions/TextDrawCreate): Create a textdraw.
-   [TextDrawDestroy](https://open.mp/docs/scripting/functions/TextDrawDestroy): Destroy a textdraw.
-   [TextDrawSetStringForPlayer](https://open.mp/docs/scripting/functions/TextDrawSetStringForPlayer): Changes the text on a textdraw for a specific player.
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
