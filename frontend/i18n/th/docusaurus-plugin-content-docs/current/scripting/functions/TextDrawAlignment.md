---
title: TextDrawAlignment
sidebar_label: TextDrawAlignment
description: Set the alignment of text in a text draw.
tags: ["textdraw"]
---

## คำอธิบาย

Set the alignment of text in a text draw.

| Name      | Description                                     |
| --------- | ----------------------------------------------- |
| Text:text | The ID of the textdraw to set the alignment of. |
| alignment | 1-left 2-centered 3-right.                      |

## ส่งคืน

Note

For alignment 2 (center) the x and y values of TextSize need to be swapped, see notes at TextDrawTextSize, also position coordinate become position of center of textdraw and not left/top edges.

## ตัวอย่าง

```c
new Text:MyTextdraw;

public OnGameModeInit()
{
    new Text:MyTextdraw = TextDrawCreate(320.0, 425.0, "This is an example textdraw");
    TextDrawAlignment(MyTextdraw, 2); // Align the textdraw text in the center
    return 1;
}
```

## บันทึก

:::tip

If the textdraw is already shown, it must be re-shown (TextDrawShowForAll/TextDrawShowForPlayer) to show the changes of this function.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [TextDrawCreate](../functions/TextDrawCreate.md): Create a textdraw.
- [TextDrawDestroy](../functions/TextDrawDestroy.md): Destroy a textdraw.
- [TextDrawColor](../functions/TextDrawColor.md): Set the color of the text in a textdraw.
- [TextDrawBoxColor](../functions/TextDrawBoxColor.md): Set the color of the box in a textdraw.
- [TextDrawBackgroundColor](../functions/TextDrawBackgroundColor.md): Set the background color of a textdraw.
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
