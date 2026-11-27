---
title: "TextDrawTextSize | open.mp"
description: "Change the size of a textdraw (box if TextDrawUseBox is enabled and/or clickable area for use with TextDrawSetSelectable)."
canonical: https://open.mp/docs/scripting/functions/TextDrawTextSize
language: en
---

# TextDrawTextSize

## Description

Change the size of a textdraw (box if [TextDrawUseBox](https://open.mp/docs/scripting/functions/TextDrawUseBox) is enabled and/or clickable area for use with [TextDrawSetSelectable](https://open.mp/docs/scripting/functions/TextDrawSetSelectable)).

| Name | Description |
| --- | --- |
| Text:textid | The TextDraw to set the size of. |
| Float:width | The size on the X axis (left/right) following the same 640x480 grid as TextDrawCreate. |
| Float:height | The size on the Y axis (up/down) following the same 640x480 grid as TextDrawCreate. |

## Returns

This function does not return any specific values.

## Examples

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0, "Example TextDraw");
    TextDrawTextSize(gMyTextdraw, 2.0, 3.6);
    return 1;
}
```

## Notes

note

-   The x and y have different meanings with different [TextDrawAlignment](https://open.mp/docs/scripting/functions/TextDrawAlignment) values:
    -   1 (left): they are the right-most corner of the box, absolute coordinates.
    -   2 (center): they need to inverted (switch the two) and the x value is the overall width of the box.
    -   3 (right): the x and y are the coordinates of the left-most corner of the box
-   Using [font type](https://open.mp/docs/scripting/functions/TextDrawFont) 4 (sprite) and 5 (model preview) converts X and Y of this function from corner coordinates to WIDTH and HEIGHT (offsets).
-   The TextDraw box starts 10.0 units up and 5.0 to the left as the origin (TextDrawCreate coordinate).
-   This function defines the clickable area for use with [TextDrawSetSelectable](https://open.mp/docs/scripting/functions/TextDrawSetSelectable), whether a box is shown or not.

tip

If you want to change the text size of a textdraw that is already shown, you don't have to recreate it. Simply use [TextDrawShowForPlayer](https://open.mp/docs/scripting/functions/TextDrawShowForPlayer)/[TextDrawShowForAll](https://open.mp/docs/scripting/functions/TextDrawShowForAll) after modifying the textdraw and the change will be visible.

## Related Functions

-   [TextDrawCreate](https://open.mp/docs/scripting/functions/TextDrawCreate): Create a textdraw.
-   [TextDrawDestroy](https://open.mp/docs/scripting/functions/TextDrawDestroy): Destroy a textdraw.
-   [TextDrawGetTextSize](https://open.mp/docs/scripting/functions/TextDrawGetTextSize): Gets the X axis and Y axis of the textdraw.
-   [TextDrawColor](https://open.mp/docs/scripting/functions/TextDrawColor): Set the color of the text in a textdraw.
-   [TextDrawBoxColor](https://open.mp/docs/scripting/functions/TextDrawBoxColor): Set the color of the box in a textdraw.
-   [TextDrawBackgroundColor](https://open.mp/docs/scripting/functions/TextDrawBackgroundColor): Set the background color of a textdraw.
-   [TextDrawAlignment](https://open.mp/docs/scripting/functions/TextDrawAlignment): Set the alignment of a textdraw.
-   [TextDrawFont](https://open.mp/docs/scripting/functions/TextDrawFont): Set the font of a textdraw.
-   [TextDrawLetterSize](https://open.mp/docs/scripting/functions/TextDrawLetterSize): Set the letter size of the text in a textdraw.
-   [TextDrawSetOutline](https://open.mp/docs/scripting/functions/TextDrawSetOutline): Choose whether the text has an outline.
-   [TextDrawSetShadow](https://open.mp/docs/scripting/functions/TextDrawSetShadow): Toggle shadows on a textdraw.
-   [TextDrawSetProportional](https://open.mp/docs/scripting/functions/TextDrawSetProportional): Scale the text spacing in a textdraw to a proportional ratio.
-   [TextDrawUseBox](https://open.mp/docs/scripting/functions/TextDrawUseBox): Toggle if the textdraw has a box or not.
-   [TextDrawSetString](https://open.mp/docs/scripting/functions/TextDrawSetString): Set the text in an existing textdraw.
-   [TextDrawShowForPlayer](https://open.mp/docs/scripting/functions/TextDrawShowForPlayer): Show a textdraw for a certain player.
-   [TextDrawHideForPlayer](https://open.mp/docs/scripting/functions/TextDrawHideForPlayer): Hide a textdraw for a certain player.
-   [TextDrawShowForAll](https://open.mp/docs/scripting/functions/TextDrawShowForAll): Show a textdraw for all players.
-   [TextDrawHideForAll](https://open.mp/docs/scripting/functions/TextDrawHideForAll): Hide a textdraw for all players.
