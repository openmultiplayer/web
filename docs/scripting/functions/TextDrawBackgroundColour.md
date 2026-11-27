---
title: "TextDrawBackgroundColour | open.mp"
description: "Adjusts the text draw area background colour (the outline/shadow - NOT the box)."
canonical: https://open.mp/docs/scripting/functions/TextDrawBackgroundColour
language: en
---

# TextDrawBackgroundColour

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Adjusts the text draw area background colour (the outline/shadow - NOT the box. For box colour, see [TextDrawBoxColour](https://open.mp/docs/scripting/functions/TextDrawBoxColour)).

| Name | Description |
| --- | --- |
| Text:textid | The ID of the textdraw to set the background colour of |
| backgroundColour | The colour that the textdraw should be set to. |

## Returns

This function does not return any specific values.

## Examples

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(320.0, 425.0, "This is an example textdraw");
    TextDrawUseBox(gMyTextdraw, true);
    TextDrawBackgroundColour(gMyTextdraw, 0xFFFFFFFF); // Set the background colour of gMyTextdraw to white
    return 1;
}
```

## Notes

note

If [TextDrawSetOutline](https://open.mp/docs/scripting/functions/TextDrawSetOutline) is used with size > 0, the outline colour will match the colour used in TextDrawBackgroundColour. Changing the value of colour seems to alter the colour used in TextDrawColour.

tip

If you want to change the background colour of a textdraw that is already shown, you don't have to recreate it. Simply use [TextDrawShowForPlayer](https://open.mp/docs/scripting/functions/TextDrawShowForPlayer)/[TextDrawShowForAll](https://open.mp/docs/scripting/functions/TextDrawShowForAll) after modifying the textdraw and the change will be visible.

## Related Functions

-   [TextDrawCreate](https://open.mp/docs/scripting/functions/TextDrawCreate): Create a textdraw.
-   [TextDrawDestroy](https://open.mp/docs/scripting/functions/TextDrawDestroy): Destroy a textdraw.
-   [TextDrawColour](https://open.mp/docs/scripting/functions/TextDrawColour): Set the colour of the text in a textdraw.
-   [TextDrawBoxColour](https://open.mp/docs/scripting/functions/TextDrawBoxColour): Set the colour of the box in a textdraw.
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
