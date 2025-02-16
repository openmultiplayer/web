---
title: TextDrawBoxColor
sidebar_label: TextDrawBoxColor
description: Adjusts the text box colour (only used if TextDrawUseBox 'use' parameter is 1).
tags: ["textdraw"]
---

## คำอธิบาย

Adjusts the text box colour (only used if TextDrawUseBox 'use' parameter is 'true').

| Name  | Description                                                                                                                                                                    |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| text  | The TextDraw to change                                                                                                                                                         |
| color | The colour. Opacity is set by the alpha intensity of colour (eg. color 0x000000FF has a solid black box opacity, whereas 0x000000AA has a semi-transparent black box opacity). |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
new Text:Example;

public OnGameModeInit()
{
    Example = TextDrawCreate(123.0, 123.0, "Example");
    TextDrawUseBox(Example, true);
    TextDrawBoxColor(Example, 0xFFFFFFFF);
    return 1;
}
```

## บันทึก

:::tip

If you want to change the boxcolour of a textdraw that is already shown, you don't have to recreate it. Simply use [TextDrawShowForPlayer](TextDrawShowForPlayer)/[TextDrawShowForAll](TextDrawShowForAll) after modifying the textdraw and the change will be visible.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [TextDrawCreate](../functions/TextDrawCreate.md): Create a textdraw.
- [TextDrawDestroy](../functions/TextDrawDestroy.md): Destroy a textdraw.
- [TextDrawColor](../functions/TextDrawColor.md): Set the color of the text in a textdraw.
- [TextDrawBackgroundColor](../functions/TextDrawBackgroundColor.md): Set the background color of a textdraw.
- [TextDrawAlignment](../functions/TextDrawAlignment.md): Set the alignment of a textdraw.
- [TextDrawFont](../functions/TextDrawFont.md): Set the font of a textdraw.
- [TextDrawLetterSize](../functions/TextDrawLetterSize.md): Set the letter size of the text in a textdraw.
- [TextDrawTextSize](../functions/TextDrawTextSize.md): Set the size of a textdraw box.
- [TextDrawSetOutline](../functions/TextDrawSetOutline.md): Choose whether the text has an outline.
- [TextDrawSetShadow](../functions/TextDrawSetShadow.md): Toggle shadows on a textdraw.
- [TextDrawSetProportional](../functions/TextDrawSetProportional.md): Scale the text spacing in a textdraw to a proportional ratio.
- [TextDrawUseBox](../functions/TextDrawUseBox.md): Toggle if the textdraw has a box or not.
- [TextDrawSetString](../functions/TextDrawSetString.md): Set the text in an existing textdraw.
- [TextDrawShowForPlayer](../functions/TextDrawShowForPlayer.md): Show a textdraw for a certain player.
- [TextDrawHideForPlayer](../functions/TextDrawHideForPlayer.md): Hide a textdraw for a certain player.
- [TextDrawShowForAll](../functions/TextDrawShowForAll.md): Show a textdraw for all players.
- [TextDrawHideForAll](../functions/TextDrawHideForAll.md): Hide a textdraw for all players.
