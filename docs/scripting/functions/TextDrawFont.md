---
id: TextDrawFont
title: TextDrawFont
description: Changes the text font.
tags: ["textdraw"]
---

## Description

Changes the text font.

| Name | Description |
| --- | --- |
| text | The TextDraw to change |
| font | There are four font styles as shown below. Font value 4 specifies that this is a txd sprite; 5 specifies that this textdraw can display preview models. A font value greater than 5 does not display, and anything greater than 16 crashes the client. |

Available Styles:

Available Fonts:

|

## Returns

This function does not return any specific values.

## Examples

```c
new Text:MyTextdraw;

public OnGameModeInit()
{
    MyTextdraw= TextDrawCreate(320.0, 425.0, "This is an example textdraw");
    TextDrawFont(MyTextdraw, 2);
    return 1;
}
```

## Notes

:::tip

If you want to change the font of a textdraw that is already shown, you don't have to recreate it. Simply use TextDrawShowForPlayer/TextDrawShowForAll after modifying the textdraw and the change will be visible.

:::

## Related Functions

- [TextDrawCreate](TextDrawCreate.md): Create a textdraw.
- [TextDrawDestroy](TextDrawDestroy.md): Destroy a textdraw.
- [TextDrawColor](TextDrawColor.md): Set the color of the text in a textdraw.
- [TextDrawBoxColor](TextDrawBoxColor.md): Set the color of the box in a textdraw.
- [TextDrawBackgroundColor](TextDrawBackgroundColor.md): Set the background color of a textdraw.
- [TextDrawAlignment](TextDrawAlignment.md): Set the alignment of a textdraw.
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
