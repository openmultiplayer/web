---
title: TextDrawLetterSize
sidebar_label: TextDrawLetterSize
description: Sets the width and height of the letters.
tags: ["textdraw"]
---

## คำอธิบาย

Sets the width and height of the letters.

| Name    | Description            |
| ------- | ---------------------- |
| text    | The TextDraw to change |
| Float:x | Width of a char.       |
| Float:y | Height of a char.      |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
new Text:MyTextdraw;

public OnGameModeInit()
{
    MyTextDraw = TextDrawCreate(100.0, 33.0,"Example TextDraw");
    TextDrawLetterSize(MyTextDraw, 3.2 ,5.1);
    return 1;
}
```

## บันทึก

:::tip

When using this function purely for the benefit of affecting the TextDraw box, multiply 'Y' by 0.135 to convert to TextDrawTextSize-like measurements. Hint: it is easier and extremely precise to use LD_SPAC:white sprite for box-only textdraws, TextDrawTextSize will have regular offsets.

:::

:::tip

If you want to change the letter size of a textdraw that is already shown, you don't have to recreate it. Simply use TextDrawShowForPlayer/TextDrawShowForAll after modifying the textdraw and the change will be visible. Fonts appear to look the best with an X to Y ratio of 1 to 4 (e.g. if x is 0.5 then y should be 2).

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [TextDrawCreate](../functions/TextDrawCreate.md): Create a textdraw.
- [TextDrawDestroy](../functions/TextDrawDestroy.md): Destroy a textdraw.
- [TextDrawColor](../functions/TextDrawColor.md): Set the color of the text in a textdraw.
- [TextDrawBoxColor](../functions/TextDrawBoxColor.md): Set the color of the box in a textdraw.
- [TextDrawBackgroundColor](../functions/TextDrawBackgroundColor.md): Set the background color of a textdraw.
- [TextDrawAlignment](../functions/TextDrawAlignment.md): Set the alignment of a textdraw.
- [TextDrawFont](../functions/TextDrawFont.md): Set the font of a textdraw.
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
