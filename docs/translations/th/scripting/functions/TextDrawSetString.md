---
title: TextDrawSetString
description: Changes the text on a textdraw.
tags: ["textdraw"]
---

## คำอธิบาย

Changes the text on a textdraw.

| Name     | Description                     |
| -------- | ------------------------------- |
| text     | The TextDraw to change          |
| string[] | The new string for the TextDraw |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
new Text:himessage;

public OnGameModeInit()
{
    himessage = TextDrawCreate(1.0, 5.6, "Hi, how are you?");
    return 1;
}

public OnPlayerConnect(playerid)
{
    new newtext[41], name[MAX_PLAYER_NAME];
    GetPlayerName(playerid, name, MAX_PLAYER_NAME);
    format(newtext, sizeof(newtext), "Hi %s, how are you?", name);
    TextDrawSetString(himessage, newtext);
    TextDrawShowForPlayer(playerid, himessage);
    return 1;
}
```

## บันทึก

:::warning

There are limits to the length of textdraw strings - see here for more info.

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
- [TextDrawTextSize](../functions/TextDrawTextSize.md): Set the size of a textdraw box.
- [TextDrawSetOutline](../functions/TextDrawSetOutline.md): Choose whether the text has an outline.
- [TextDrawSetShadow](../functions/TextDrawSetShadow.md): Toggle shadows on a textdraw.
- [TextDrawSetProportional](../functions/TextDrawSetProportional.md): Scale the text spacing in a textdraw to a proportional ratio.
- [TextDrawUseBox](../functions/TextDrawUseBox.md): Toggle if the textdraw has a box or not.
- [TextDrawShowForPlayer](../functions/TextDrawShowForPlayer.md): Show a textdraw for a certain player.
- [TextDrawHideForPlayer](../functions/TextDrawHideForPlayer.md): Hide a textdraw for a certain player.
- [TextDrawShowForAll](../functions/TextDrawShowForAll.md): Show a textdraw for all players.
- [TextDrawHideForAll](../functions/TextDrawHideForAll.md): Hide a textdraw for all players.
