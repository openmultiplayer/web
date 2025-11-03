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

- [TextDrawCreate](TextDrawCreate): Create a textdraw.
- [TextDrawDestroy](TextDrawDestroy): Destroy a textdraw.
- [TextDrawColor](TextDrawColor): Set the color of the text in a textdraw.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): Set the background color of a textdraw.
- [TextDrawAlignment](TextDrawAlignment): Set the alignment of a textdraw.
- [TextDrawFont](TextDrawFont): Set the font of a textdraw.
- [TextDrawLetterSize](TextDrawLetterSize): Set the letter size of the text in a textdraw.
- [TextDrawTextSize](TextDrawTextSize): Set the size of a textdraw box.
- [TextDrawSetOutline](TextDrawSetOutline): Choose whether the text has an outline.
- [TextDrawSetShadow](TextDrawSetShadow): Toggle shadows on a textdraw.
- [TextDrawSetProportional](TextDrawSetProportional): Scale the text spacing in a textdraw to a proportional ratio.
- [TextDrawUseBox](TextDrawUseBox): Toggle if the textdraw has a box or not.
- [TextDrawSetString](TextDrawSetString): Set the text in an existing textdraw.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): Show a textdraw for a certain player.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Hide a textdraw for a certain player.
- [TextDrawShowForAll](TextDrawShowForAll): Show a textdraw for all players.
- [TextDrawHideForAll](TextDrawHideForAll): Hide a textdraw for all players.
