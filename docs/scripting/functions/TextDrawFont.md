---
title: "TextDrawFont | open.mp"
description: "Changes the text font."
canonical: https://open.mp/docs/scripting/functions/TextDrawFont
language: en
---

# TextDrawFont

## Description

Changes the text font.

| Name | Description |
| --- | --- |
| Text:textid | The TextDraw to change |
| TEXT\_DRAW\_FONT:font | There are four font styles as shown below. Font value **4** specifies that this is a [txd sprite](https://open.mp/docs/scripting/resources/textdrawsprites); **5** specifies that this textdraw can display [preview models](https://open.mp/docs/scripting/functions/TextDrawSetPreviewModel). A font value greater than 5 does not display, and anything greater than 16 crashes the client. |

**Available Styles:** ![Available Styles](https://assets.open.mp/assets/images/textdraws/Textdraw_font_styles.png)

**Available Fonts:** ![Available Fonts](https://assets.open.mp/assets/images/textdraws/Textdraw_Fonts.png)

## Returns

This function does not return any specific values.

## Examples

```c
/*
    TEXT_DRAW_FONT_0
    TEXT_DRAW_FONT_1
    TEXT_DRAW_FONT_2
    TEXT_DRAW_FONT_3
    TEXT_DRAW_FONT_SPRITE_DRAW
    TEXT_DRAW_FONT_MODEL_PREVIEW
*/

new Text:gMyTextdraw;

public OnGameModeInit()
{
    gMyTextdraw = TextDrawCreate(320.0, 425.0, "This is an example textdraw");
    TextDrawFont(gMyTextdraw, TEXT_DRAW_FONT_2);
    return 1;
}
```

## Notes

tip

If you want to change the font of a textdraw that is already shown, you don't have to recreate it. Simply use [TextDrawShowForPlayer](https://open.mp/docs/scripting/functions/TextDrawShowForPlayer)/[TextDrawShowForAll](https://open.mp/docs/scripting/functions/TextDrawShowForAll) after modifying the textdraw and the change will be visible.

## Related Functions

-   [TextDrawCreate](https://open.mp/docs/scripting/functions/TextDrawCreate): Create a textdraw.
-   [TextDrawDestroy](https://open.mp/docs/scripting/functions/TextDrawDestroy): Destroy a textdraw.
-   [TextDrawGetFont](https://open.mp/docs/scripting/functions/TextDrawGetFont): Gets the text font of a textdraw.
-   [TextDrawColor](https://open.mp/docs/scripting/functions/TextDrawColor): Set the color of the text in a textdraw.
-   [TextDrawBoxColor](https://open.mp/docs/scripting/functions/TextDrawBoxColor): Set the color of the box in a textdraw.
-   [TextDrawBackgroundColor](https://open.mp/docs/scripting/functions/TextDrawBackgroundColor): Set the background color of a textdraw.
-   [TextDrawAlignment](https://open.mp/docs/scripting/functions/TextDrawAlignment): Set the alignment of a textdraw.
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
