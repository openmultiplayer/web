---
title: TextDrawBackgroundColor
description: Adjusts the text draw area background color (the outline/shadow - NOT the box.
tags: ["textdraw"]
---

## คำอธิบาย

Adjusts the text draw area background color (the outline/shadow - NOT the box. For box color, see TextDrawBoxColor).

| Name  | Description                                           |
| ----- | ----------------------------------------------------- |
| text  | The ID of the textdraw to set the background color of |
| color | The color that the textdraw should be set to.         |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

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

## บันทึก

:::tip

If TextDrawSetOutline is used with size > 0, the outline color will match the color used in TextDrawBackgroundColor. Changing the value of color seems to alter the color used in TextDrawColor

:::

:::tip

If you want to change the background colour of a textdraw that is already shown, you don't have to recreate it. Simply use TextDrawShowForPlayer/TextDrawShowForAll after modifying the textdraw and the change will be visible.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [TextDrawCreate](../functions/TextDrawCreate.md): Create a textdraw.
- [TextDrawDestroy](../functions/TextDrawDestroy.md): Destroy a textdraw.
- [TextDrawColor](../functions/TextDrawColor.md): Set the color of the text in a textdraw.
- [TextDrawBoxColor](../functions/TextDrawBoxColor.md): Set the color of the box in a textdraw.
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
