---
title: "TextDrawAlignment | open.mp"
description: "Set the alignment of text in a text draw."
canonical: https://open.mp/docs/scripting/functions/TextDrawAlignment
language: en
---

# TextDrawAlignment

## Description

Set the alignment of text in a text draw.

| Parameter | Description |
| --- | --- |
| Text:textid | The ID of the textdraw to set the alignment of. |
| TEXT\_DRAW\_ALIGN:alignment | `TEXT_DRAW_ALIGN_LEFT` / `TEXT_DRAW_ALIGN_CENTER` / `TEXT_DRAW_ALIGN_RIGHT` |

## Returns

This function does not return any specific values.

## Examples

```c
/*
    TEXT_DRAW_ALIGN_LEFT
    TEXT_DRAW_ALIGN_CENTER
    TEXT_DRAW_ALIGN_RIGHT
*/

new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(320.0, 425.0, "This is an example textdraw");
    TextDrawAlignment(gMyTextdraw, TEXT_DRAW_ALIGN_CENTER); // Align the textdraw text in the center
    return 1;
}
```

## Notes

note

-   For alignment TEXT\_DRAW\_ALIGN\_CENTER (center) the x and y values of TextSize need to be swapped, see notes at [TextDrawTextSize](https://open.mp/docs/scripting/functions/TextDrawTextSize), also position coordinate become position of center of textdraw and not left/top edges.
-   If the textdraw is already shown, it must be re-shown ([TextDrawShowForAll](https://open.mp/docs/scripting/functions/TextDrawShowForAll)/[TextDrawShowForPlayer](https://open.mp/docs/scripting/functions/TextDrawShowForPlayer)) to show the changes of this function.

## Related Functions

-   [TextDrawCreate](https://open.mp/docs/scripting/functions/TextDrawCreate): Create a textdraw.
-   [TextDrawDestroy](https://open.mp/docs/scripting/functions/TextDrawDestroy): Destroy a textdraw.
-   [TextDrawGetAlignment](https://open.mp/docs/scripting/functions/TextDrawGetAlignment): Gets the text alignment of a textdraw.
-   [TextDrawColor](https://open.mp/docs/scripting/functions/TextDrawColor): Set the color of the text in a textdraw.
-   [TextDrawBoxColor](https://open.mp/docs/scripting/functions/TextDrawBoxColor): Set the color of the box in a textdraw.
-   [TextDrawBackgroundColor](https://open.mp/docs/scripting/functions/TextDrawBackgroundColor): Set the background color of a textdraw.
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
