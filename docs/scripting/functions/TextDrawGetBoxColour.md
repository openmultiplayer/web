---
title: "TextDrawGetBoxColour | open.mp"
description: "Gets the box colour of a textdraw."
canonical: https://open.mp/docs/scripting/functions/TextDrawGetBoxColour
language: en
---

# TextDrawGetBoxColour

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Gets the box colour of a textdraw.

| Name | Description |
| --- | --- |
| Text:textid | The ID of the textdraw to get the box colour of. |

## Returns

Returns the box colour of the textdraw.

## Examples

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(123.0, 123.0, "Example");
    TextDrawUseBox(gMyTextdraw, true);
    TextDrawBoxColour(gMyTextdraw, 0xAA0000FF);

    new boxColour = TextDrawGetBoxColour(gMyTextdraw);
    // boxColour = 0xAA0000FF
    return 1;
}
```

## Related Functions

-   [TextDrawCreate](https://open.mp/docs/scripting/functions/TextDrawCreate): Create a textdraw.
-   [TextDrawDestroy](https://open.mp/docs/scripting/functions/TextDrawDestroy): Destroy a textdraw.
-   [TextDrawBoxColour](https://open.mp/docs/scripting/functions/TextDrawBoxColour): Set the colour of the box in a textdraw.
-   [TextDrawBackgroundColour](https://open.mp/docs/scripting/functions/TextDrawBackgroundColour): Set the background colour of a textdraw.
-   [TextDrawAlignment](https://open.mp/docs/scripting/functions/TextDrawAlignment): Set the alignment of a textdraw.
-   [TextDrawFont](https://open.mp/docs/scripting/functions/TextDrawFont): Set the font of a textdraw.
-   [TextDrawLetterSize](https://open.mp/docs/scripting/functions/TextDrawLetterSize): Set the letter size of the text in a textdraw.
-   [TextDrawTextSize](https://open.mp/docs/scripting/functions/TextDrawTextSize): Set the size of a textdraw box.
-   [TextDrawSetOutline](https://open.mp/docs/scripting/functions/TextDrawSetOutline): Choose whether the text has an outline.
-   [TextDrawSetShadow](https://open.mp/docs/scripting/functions/TextDrawSetShadow): Toggle shadows on a textdraw.
-   [TextDrawSetProportional](https://open.mp/docs/scripting/functions/TextDrawSetProportional): Scale the text spacing in a textdraw to a proportional ratio.
-   [TextDrawUseBox](https://open.mp/docs/scripting/functions/TextDrawUseBox): Toggle if the textdraw has a box or not.
-   [TextDrawSetString](https://open.mp/docs/scripting/functions/TextDrawSetString): Set the text in an existing textdraw.
-   [TextDrawShowForPlayer](https://open.mp/docs/scripting/functions/TextDrawShowForPlayer): Show a textdraw for a certain player.
-   [TextDrawHideForPlayer](https://open.mp/docs/scripting/functions/TextDrawHideForPlayer): Hide a textdraw for a certain player.
-   [TextDrawShowForAll](https://open.mp/docs/scripting/functions/TextDrawShowForAll): Show a textdraw for all players.
-   [TextDrawHideForAll](https://open.mp/docs/scripting/functions/TextDrawHideForAll): Hide a textdraw for all players.
