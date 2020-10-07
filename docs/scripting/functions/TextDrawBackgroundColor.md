---
id: TextDrawBackgroundColor
title: TextDrawBackgroundColor
description: Adjusts the text draw area background color (the outline/shadow - NOT the box.
tags: ["textdraw"]
---

## Description

Adjusts the text draw area background color (the outline/shadow - NOT the box. For box color, see TextDrawBoxColor).

| Name  | Description                                           |
| ----- | ----------------------------------------------------- |
| text  | The ID of the textdraw to set the background color of |
| color | The color that the textdraw should be set to.         |

## Returns

This function does not return any specific values.

## Examples

```c
new Text:MyTextdraw;

public OnGameModeInit()
{
    MyTextdraw= TextDrawCreate(320.0, 425.0, "This is an example textdraw");
    TextDrawUseBox(MyTextdraw, 1);
    TextDrawBackgroundColor(MyTextdraw, 0xFFFFFFFF); // Set the background color of MyTextdraw to white
    return 1;
}
```

## Notes

:::tip

If TextDrawSetOutline is used with size > 0, the outline color will match the color used in TextDrawBackgroundColor. Changing the value of color seems to alter the color used in TextDrawColor

:::

:::tip

If you want to change the background colour of a textdraw that is already shown, you don't have to recreate it. Simply use TextDrawShowForPlayer/TextDrawShowForAll after modifying the textdraw and the change will be visible.

:::

## Related Functions

- [TextDrawCreate](TextDrawCreate.md): Create a textdraw.
- [TextDrawDestroy](TextDrawDestroy.md): Destroy a textdraw.
- [TextDrawColor](TextDrawColor.md): Set the color of the text in a textdraw.
- [TextDrawBoxColor](TextDrawBoxColor.md): Set the color of the box in a textdraw.
- [TextDrawAlignment](TextDrawAlignment.md): Set the alignment of a textdraw.
- [TextDrawFont](TextDrawFont.md): Set the font of a textdraw.
- [TextDrawLetterSize](TextDrawLetterSize.md): Set the letter size of the text in a textdraw.
- [TextDrawTextSize](TextDrawTextSize.md): Set the size of a textdraw box.
- [TextDrawSetOutline](TextDrawSetOutline.md): Choose whether the text has an outline.
- [TextDrawSetShadow](TextDrawSetShadow.md): Toggle shadows on a textdraw.
- [TextDrawSetProportional](TextDrawSetProportional.md): Scale the text spacing in a textdraw to a proportional ratio.
- [TextDrawUseBox](TextDrawUseBox.md): Toggle if the textdraw has a box or not.
- [TextDrawSetString](TextDrawSetString.md): Set the text in an existing textdraw.
- [TextDrawShowForPlayer](TextDrawShowForPlayer.md): Show a textdraw for a certain player.
- [TextDrawHideForPlayer](TextDrawHideForPlayer.md): Hide a textdraw for a certain player.
- [TextDrawShowForAll](TextDrawShowForAll.md): Show a textdraw for all players.
- [TextDrawHideForAll](TextDrawHideForAll.md): Hide a textdraw for all players.
