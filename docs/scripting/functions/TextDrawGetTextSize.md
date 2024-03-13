---
title: TextDrawGetTextSize
description: Gets the X axis and Y axis of the textdraw.
tags: ["textdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the X axis and Y axis of the textdraw.

| Name          | Description                                                       |
| ------------- | ----------------------------------------------------------------- |
| Text:textid   | The ID of the textdraw to get text size of.                       |
| &Float:width  | A float variable into which to store width, passed by reference.  |
| &Float:height | A float variable into which to store height, passed by reference. |

## Returns

This function does not return any specific values.

## Examples

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0, "Example TextDraw");
    TextDrawTextSize(gMyTextdraw, 2.0, 3.6);

    new Float:width, Float:height;
    TextDrawGetTextSize(gMyTextdraw, width, height);
    // The `width` will be '2.0' and `height` will be '3.6'
    return 1;
}
```

## Related Functions

- [TextDrawCreate](TextDrawCreate): Create a textdraw.
- [TextDrawDestroy](TextDrawDestroy): Destroy a textdraw.
- [TextDrawTextSize](TextDrawTextSize): Change the size of a textdraw.
- [TextDrawColor](TextDrawColor): Set the color of the text in a textdraw.
- [TextDrawBoxColor](TextDrawBoxColor): Set the color of the box in a textdraw.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): Set the background color of a textdraw.
- [TextDrawAlignment](TextDrawAlignment): Set the alignment of a textdraw.
- [TextDrawFont](TextDrawFont): Set the font of a textdraw.
- [TextDrawLetterSize](TextDrawLetterSize): Set the letter size of the text in a textdraw.
- [TextDrawSetOutline](TextDrawSetOutline): Choose whether the text has an outline.
- [TextDrawSetShadow](TextDrawSetShadow): Toggle shadows on a textdraw.
- [TextDrawSetProportional](TextDrawSetProportional): Scale the text spacing in a textdraw to a proportional ratio.
- [TextDrawUseBox](TextDrawUseBox): Toggle if the textdraw has a box or not.
- [TextDrawSetString](TextDrawSetString): Set the text in an existing textdraw.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): Show a textdraw for a certain player.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Hide a textdraw for a certain player.
- [TextDrawShowForAll](TextDrawShowForAll): Show a textdraw for all players.
- [TextDrawHideForAll](TextDrawHideForAll): Hide a textdraw for all players.
