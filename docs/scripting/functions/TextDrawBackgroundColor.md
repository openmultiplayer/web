---
title: "TextDrawBackgroundColor | open.mp"
description: "Adjusts the text draw area background color (the outline/shadow - NOT the box)."
canonical: https://open.mp/docs/scripting/functions/TextDrawBackgroundColor
language: en
---

# TextDrawBackgroundColor

## Description

Adjusts the text draw area background color (the outline/shadow - NOT the box. For box color, see [TextDrawBoxColor](https://open.mp/docs/scripting/functions/TextDrawBoxColor)).

| Name | Description |
| --- | --- |
| Text:textid | The ID of the textdraw to set the background color of |
| backgroundColour | The color that the textdraw should be set to. |

## Returns

This function does not return any specific values.

## Examples

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(320.0, 425.0, "This is an example textdraw");
    TextDrawUseBox(gMyTextdraw, true);
    TextDrawBackgroundColor(gMyTextdraw, 0xFFFFFFFF); // Set the background color of MyTextdraw to white
    return 1;
}
```

## Notes

note

If [TextDrawSetOutline](https://open.mp/docs/scripting/functions/TextDrawSetOutline) is used with size > 0, the outline color will match the color used in TextDrawBackgroundColor. Changing the value of color seems to alter the color used in [TextDrawColor](https://open.mp/docs/scripting/functions/TextDrawColor).

tip

If you want to change the background colour of a textdraw that is already shown, you don't have to recreate it. Simply use [TextDrawShowForPlayer](https://open.mp/docs/scripting/functions/TextDrawShowForPlayer)/[TextDrawShowForAll](https://open.mp/docs/scripting/functions/TextDrawShowForAll) after modifying the textdraw and the change will be visible.

## Related Functions

-   [TextDrawCreate](https://open.mp/docs/scripting/functions/TextDrawCreate): Create a textdraw.
-   [TextDrawDestroy](https://open.mp/docs/scripting/functions/TextDrawDestroy): Destroy a textdraw.
-   [TextDrawColor](https://open.mp/docs/scripting/functions/TextDrawColor): Set the color of the text in a textdraw.
-   [TextDrawBoxColor](https://open.mp/docs/scripting/functions/TextDrawBoxColor): Set the color of the box in a textdraw.
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
