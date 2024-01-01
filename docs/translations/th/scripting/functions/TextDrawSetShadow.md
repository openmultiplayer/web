---
title: TextDrawSetShadow
description: Sets the size of a textdraw's text's shadow.
tags: ["textdraw"]
---

## คำอธิบาย

Sets the size of a textdraw's text's shadow.

| Name | Description                                                                                             |
| ---- | ------------------------------------------------------------------------------------------------------- |
| text | The ID of the textdraw to set the shadow size of.                                                       |
| size | The size of the shadow. 1 is generally used for a normal shadow size. 0 disables the shadow completely. |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. The textdraw does not exist.

## ตัวอย่าง

```c
new Text:MyTextdraw;

public OnGameModeInit()
{
    MyTextDraw = TextDrawCreate(100.0, 33.0, "Example TextDraw");
    TextDrawSetShadow(MyTextDraw, 1);
    return 1;
}
```

## บันทึก

:::tip

The shadow can be cut by the box area if the size is set too big for the area.

:::

:::tip

If you want to change the shadow of a textdraw that is already shown, you don't have to recreate it. Simply use TextDrawShowForPlayer/TextDrawShowForAll after modifying the textdraw and the change will be visible.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [TextDrawCreate](TextDrawCreate): Create a textdraw.
- [TextDrawDestroy](TextDrawDestroy): Destroy a textdraw.
- [TextDrawColor](TextDrawColor): Set the color of the text in a textdraw.
- [TextDrawBoxColor](TextDrawBoxColor): Set the color of the box in a textdraw.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): Set the background color of a textdraw.
- [TextDrawAlignment](TextDrawAlignment): Set the alignment of a textdraw.
- [TextDrawFont](TextDrawFont): Set the font of a textdraw.
- [TextDrawLetterSize](TextDrawLetterSize): Set the letter size of the text in a textdraw.
- [TextDrawTextSize](TextDrawTextSize): Set the size of a textdraw box.
- [TextDrawSetOutline](TextDrawSetOutline): Choose whether the text has an outline.
- [TextDrawSetProportional](TextDrawSetProportional): Scale the text spacing in a textdraw to a proportional ratio.
- [TextDrawUseBox](TextDrawUseBox): Toggle if the textdraw has a box or not.
- [TextDrawSetString](TextDrawSetString): Set the text in an existing textdraw.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): Show a textdraw for a certain player.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Hide a textdraw for a certain player.
- [TextDrawShowForAll](TextDrawShowForAll): Show a textdraw for all players.
- [TextDrawHideForAll](TextDrawHideForAll): Hide a textdraw for all players.
