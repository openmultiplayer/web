---
title: TextDrawGetColour
description: Gets the text colour of a textdraw.
tags: ["textdraw"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the text colour of a textdraw.

| Name  | Description                                     |
| ----- | ----------------------------------------------- |
| Text:textid  | The ID of the textdraw to get the colour of. |

## Returns

Returns the text colour of the textdraw.

## Examples

```c
new Text: gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(123.0, 123.0, "Example");
    TextDrawColour(gMyTextdraw, 0xFF0000FF);

    new colour = TextDrawGetColour(gMyTextdraw);
    // The `colour` will be 0xFF0000FF
    return 1;
}
```

## Related Functions

- [TextDrawCreate](TextDrawCreate): Create a textdraw.
- [TextDrawDestroy](TextDrawDestroy): Destroy a textdraw.
- [TextDrawBoxColour](TextDrawBoxColour): Set the colour of the box in a textdraw.
- [TextDrawBackgroundColour](TextDrawBackgroundColour): Set the background colour of a textdraw.
- [TextDrawAlignment](TextDrawAlignment): Set the alignment of a textdraw.
- [TextDrawFont](TextDrawFont): Set the font of a textdraw.
- [TextDrawLetterSize](TextDrawLetterSize): Set the letter size of the text in a textdraw.
- [TextDrawTextSize](TextDrawTextSize): Set the size of a textdraw box.
- [TextDrawSetOutline](TextDrawSetOutline): Choose whether the text has an outline.
- [TextDrawSetShadow](TextDrawSetShadow): Toggle shadows on a textdraw.
- [TextDrawSetProportional](TextDrawSetProportional): Scale the text spacing in a textdraw to a proportional ratio.
- [TextDrawUseBox](TextDrawUseBox): Toggle if the textdraw has a box or not.
- [TextDrawSetString](TextDrawSetString): Set the text in an existing textdraw.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): Show a textdraw for a certain player.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Hide a textdraw for a certain player.
- [TextDrawShowForAll](TextDrawShowForAll): Show a textdraw for all players.
- [TextDrawHideForAll](TextDrawHideForAll): Hide a textdraw for all players.
