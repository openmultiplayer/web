---
title: TextDrawSetString
sidebar_label: TextDrawSetString
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
- [TextDrawSetShadow](TextDrawSetShadow): Toggle shadows on a textdraw.
- [TextDrawSetProportional](TextDrawSetProportional): Scale the text spacing in a textdraw to a proportional ratio.
- [TextDrawUseBox](TextDrawUseBox): Toggle if the textdraw has a box or not.
- [TextDrawShowForPlayer](TextDrawShowForPlayer): Show a textdraw for a certain player.
- [TextDrawHideForPlayer](TextDrawHideForPlayer): Hide a textdraw for a certain player.
- [TextDrawShowForAll](TextDrawShowForAll): Show a textdraw for all players.
- [TextDrawHideForAll](TextDrawHideForAll): Hide a textdraw for all players.
