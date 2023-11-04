---
title: TextDrawAlignment
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

- [TextDrawCreate](TextDrawCreate): Create a textdraw.
- [TextDrawDestroy](TextDrawDestroy): Destroy a textdraw.
- [TextDrawColor](TextDrawColor): Set the color of the text in a textdraw.
- [TextDrawBoxColor](TextDrawBoxColor): Set the color of the box in a textdraw.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): Set the background color of a textdraw.
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
