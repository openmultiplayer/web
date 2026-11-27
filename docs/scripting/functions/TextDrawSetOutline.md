---
title: "TextDrawSetOutline | open.mp"
description: "Sets the thickness of a textdraw's text's outline."
canonical: https://open.mp/docs/scripting/functions/TextDrawSetOutline
language: en
---

# TextDrawSetOutline

## Description

Sets the thickness of a textdraw's text's outline. [TextDrawBackgroundColor](https://open.mp/docs/scripting/functions/TextDrawBackgroundColor) can be used to change the color.

| Name | Description |
| --- | --- |
| Text:textid | The ID of the text draw to set the outline thickness of. |
| outlineSize | The thickness of the outline, as an integer. 0 for no outline. |

## Returns

This function does not return any specific values.

## Examples

```c
new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(100.0, 33.0, "Example TextDraw");
    TextDrawSetOutline(gMyTextdraw, 1);
    return 1;
}
```

## Notes

tip

If you want to change the outline of a textdraw that is already shown, you don't have to recreate it. Simply use [TextDrawShowForPlayer](https://open.mp/docs/scripting/functions/TextDrawShowForPlayer)/[TextDrawShowForAll](https://open.mp/docs/scripting/functions/TextDrawShowForAll) after modifying the textdraw and the change will be visible.

## Related Functions

-   [TextDrawCreate](https://open.mp/docs/scripting/functions/TextDrawCreate): Create a textdraw.
-   [TextDrawDestroy](https://open.mp/docs/scripting/functions/TextDrawDestroy): Destroy a textdraw.
-   [TextDrawGetOutline](https://open.mp/docs/scripting/functions/TextDrawGetOutline): Gets the thickness of a textdraw's text's outline.
-   [TextDrawColor](https://open.mp/docs/scripting/functions/TextDrawColor): Set the color of the text in a textdraw.
-   [TextDrawBoxColor](https://open.mp/docs/scripting/functions/TextDrawBoxColor): Set the color of the box in a textdraw.
-   [TextDrawBackgroundColor](https://open.mp/docs/scripting/functions/TextDrawBackgroundColor): Set the background color of a textdraw.
-   [TextDrawAlignment](https://open.mp/docs/scripting/functions/TextDrawAlignment): Set the alignment of a textdraw.
-   [TextDrawFont](https://open.mp/docs/scripting/functions/TextDrawFont): Set the font of a textdraw.
-   [TextDrawLetterSize](https://open.mp/docs/scripting/functions/TextDrawLetterSize): Set the letter size of the text in a textdraw.
-   [TextDrawTextSize](https://open.mp/docs/scripting/functions/TextDrawTextSize): Set the size of a textdraw box.
-   [TextDrawSetShadow](https://open.mp/docs/scripting/functions/TextDrawSetShadow): Toggle shadows on a textdraw.
-   [TextDrawSetProportional](https://open.mp/docs/scripting/functions/TextDrawSetProportional): Scale the text spacing in a textdraw to a proportional ratio.
-   [TextDrawUseBox](https://open.mp/docs/scripting/functions/TextDrawUseBox): Toggle if the textdraw has a box or not.
-   [TextDrawSetString](https://open.mp/docs/scripting/functions/TextDrawSetString): Set the text in an existing textdraw.
-   [TextDrawShowForPlayer](https://open.mp/docs/scripting/functions/TextDrawShowForPlayer): Show a textdraw for a certain player.
-   [TextDrawHideForPlayer](https://open.mp/docs/scripting/functions/TextDrawHideForPlayer): Hide a textdraw for a certain player.
-   [TextDrawShowForAll](https://open.mp/docs/scripting/functions/TextDrawShowForAll): Show a textdraw for all players.
-   [TextDrawHideForAll](https://open.mp/docs/scripting/functions/TextDrawHideForAll): Hide a textdraw for all players.
