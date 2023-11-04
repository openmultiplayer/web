---
title: TextDrawFont
description: Changes the text font.
tags: ["textdraw"]
---

## คำอธิบาย

Changes the text font.

| Name | Description                                                                                                                                                                                                                                            |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| text | The TextDraw to change                                                                                                                                                                                                                                 |
| font | There are four font styles as shown below. Font value 4 specifies that this is a txd sprite; 5 specifies that this textdraw can display preview models. A font value greater than 5 does not display, and anything greater than 16 crashes the client. |

Available Styles:
![Available Styles](images/textdraws/Textdraw_font_styles.png)

Available Fonts:
![Available Fonts](images/textdraws/Textdraw_Fonts.png)

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
new Text:MyTextdraw;

public OnGameModeInit()
{
    MyTextdraw= TextDrawCreate(320.0, 425.0, "This is an example textdraw");
    TextDrawFont(MyTextdraw, 2);
    return 1;
}
```

## บันทึก

:::tip

If you want to change the font of a textdraw that is already shown, you don't have to recreate it. Simply use TextDrawShowForPlayer/TextDrawShowForAll after modifying the textdraw and the change will be visible.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [TextDrawCreate](TextDrawCreate): Create a textdraw.
- [TextDrawDestroy](TextDrawDestroy): Destroy a textdraw.
- [TextDrawColor](TextDrawColor): Set the color of the text in a textdraw.
- [TextDrawBoxColor](TextDrawBoxColor): Set the color of the box in a textdraw.
- [TextDrawBackgroundColor](TextDrawBackgroundColor): Set the background color of a textdraw.
- [TextDrawAlignment](TextDrawAlignment): Set the alignment of a textdraw.
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
