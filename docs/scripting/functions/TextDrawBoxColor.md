---
id: TextDrawBoxColor
title: TextDrawBoxColor
description: Adjusts the text box colour (only used if TextDrawUseBox 'use' parameter is 1).
tags: ["textdraw"]
---

## Description

Adjusts the text box colour (only used if TextDrawUseBox 'use' parameter is 1).

| Name | Description |
| --- | --- |
| text | The TextDraw to change |
| color | The colour. Opacity is set by the alpha intensity of colour (eg. color 0x000000FF has a solid black box opacity, whereas 0x000000AA has a semi-transparent black box opacity). |

## Returns

This function does not return any specific values.

## Examples

```c
new Text:Example;

public OnGameModeInit()
{
    Example = TextDrawCreate(123.0, 123.0,"Example");
    TextDrawUseBox(Example, 1);
    TextDrawBoxColor(Example, 0xFFFFFFFF);
    return 1;
}
```

## Notes

:::tip

If you want to change the boxcolour of a textdraw that is already shown, you don't have to recreate it. Simply use TextDrawShowForPlayer/TextDrawShowForAll after modifying the textdraw and the change will be visible.

:::

## Related Functions

- [TextDrawCreate](TextDrawCreate.md): Create a textdraw.
- [TextDrawDestroy](TextDrawDestroy.md): Destroy a textdraw.
- [TextDrawColor](TextDrawColor.md): Set the color of the text in a textdraw.
- [TextDrawBackgroundColor](TextDrawBackgroundColor.md): Set the background color of a textdraw.
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
