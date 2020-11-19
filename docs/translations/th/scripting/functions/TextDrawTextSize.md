---
title: TextDrawTextSize
description: Change the size of a textdraw (box if TextDrawUseBox is enabled and/or clickable area for use with TextDrawSetSelectable).
tags: ["textdraw"]
---

## คำอธิบาย

Change the size of a textdraw (box if TextDrawUseBox is enabled and/or clickable area for use with TextDrawSetSelectable).

| Name    | Description                                                                            |
| ------- | -------------------------------------------------------------------------------------- |
| text    | The TextDraw to set the size of.                                                       |
| Float:x | The size on the X axis (left/right) following the same 640x480 grid as TextDrawCreate. |
| Float:y | The size on the Y axis (up/down) following the same 640x480 grid as TextDrawCreate.    |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
new Text:MyTextdraw;

public OnGameModeInit()
{
    MyTextDraw = TextDrawCreate(100.0, 33.0,"Example TextDraw");
    TextDrawTextSize(MyTextDraw, 2.0, 3.6);
    return 1;
}
```

## บันทึก

:::tip

The x and y have different meanings with different TextDrawAlignment values: 1 (left): they are the right-most corner of the box, absolute coordinates. 2 (center): they need to inverted (switch the two) and the x value is the overall width of the box. 3 (right): the x and y are the coordinates of the left-most corner of the box

Using font type 4 (sprite) and 5 (model preview) converts X and Y of this function from corner coordinates to WIDTH and HEIGHT (offsets). The TextDraw box starts 10.0 units up and 5.0 to the left as the origin (TextDrawCreate coordinate). This function defines the clickable area for use with TextDrawSetSelectable, whether a box is shown or not.

:::

:::tip

If you want to change the text size of a textdraw that is already shown, you don't have to recreate it. Simply use TextDrawShowForPlayer/TextDrawShowForAll after modifying the textdraw and the change will be visible.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [TextDrawCreate](../functions/TextDrawCreate.md): Create a textdraw.
- [TextDrawDestroy](../functions/TextDrawDestroy.md): Destroy a textdraw.
- [TextDrawColor](../functions/TextDrawColor.md): Set the color of the text in a textdraw.
- [TextDrawBoxColor](../functions/TextDrawBoxColor.md): Set the color of the box in a textdraw.
- [TextDrawBackgroundColor](../functions/TextDrawBackgroundColor.md): Set the background color of a textdraw.
- [TextDrawAlignment](../functions/TextDrawAlignment.md): Set the alignment of a textdraw.
- [TextDrawFont](../functions/TextDrawFont.md): Set the font of a textdraw.
- [TextDrawLetterSize](../functions/TextDrawLetterSize.md): Set the letter size of the text in a textdraw.
- [TextDrawSetOutline](../functions/TextDrawSetOutline.md): Choose whether the text has an outline.
- [TextDrawSetShadow](../functions/TextDrawSetShadow.md): Toggle shadows on a textdraw.
- [TextDrawSetProportional](../functions/TextDrawSetProportional.md): Scale the text spacing in a textdraw to a proportional ratio.
- [TextDrawUseBox](../functions/TextDrawUseBox.md): Toggle if the textdraw has a box or not.
- [TextDrawSetString](../functions/TextDrawSetString.md): Set the text in an existing textdraw.
- [TextDrawShowForPlayer](../functions/TextDrawShowForPlayer.md): Show a textdraw for a certain player.
- [TextDrawHideForPlayer](../functions/TextDrawHideForPlayer.md): Hide a textdraw for a certain player.
- [TextDrawShowForAll](../functions/TextDrawShowForAll.md): Show a textdraw for all players.
- [TextDrawHideForAll](../functions/TextDrawHideForAll.md): Hide a textdraw for all players.
