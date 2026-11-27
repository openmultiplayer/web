---
title: "TextDrawColour | open.mp"
description: "Sets the text colour of a textdraw."
canonical: https://open.mp/docs/scripting/functions/TextDrawColour
language: en
---

# TextDrawColour

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Sets the text colour of a textdraw

| Name | Description |
| --- | --- |
| Text:textid | The ID of the textdraw to change the colour of. |
| textColour | The colour to set the textdraw to. |

## Returns

This function does not return any specific values.

## Examples

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(123.0, 123.0, "Example");
    TextDrawColour(gMyTextdraw, 0x000000FF);
    return 1;
}
```

## Notes

note

If the TextDraw is already shown, it must be re-shown ([TextDrawShowForAll](https://open.mp/docs/scripting/functions/TextDrawShowForAll)/[TextDrawShowForPlayer](https://open.mp/docs/scripting/functions/TextDrawShowForPlayer)) for the changes of this function to take effect.

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
