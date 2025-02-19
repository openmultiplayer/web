---
title: GameTextForPlayer
sidebar_label: GameTextForPlayer
description: Shows 'game text' (on-screen text) for a certain length of time for a specific player.
tags: ["player"]
---

## คำอธิบาย

Shows 'game text' (on-screen text) for a certain length of time for a specific player.

| Name           | Description                                           |
| -------------- | ----------------------------------------------------- |
| playerid       | The ID of the player to show the gametext for.        |
| const string[] | The text to be displayed.                             |
| time           | The duration of the text being shown in milliseconds. |
| style          | The style of text to be displayed.                    |

## ส่งคืน

1: The function executed successfully. Success is reported when the style and/or time is invalid. Nothing will happen though (no text displayed). May also cause game crashes.

0: The function failed to execute. This means either the string is null or the player is not connected.

## ตัวอย่าง

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    GameTextForPlayer(playerid, "Wasted", 5000, 2);
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [GameTextForAll](../functions/GameTextForAll): Display gametext to all players.
- [TextDrawShowForAll](../functions/TextDrawShowForAll): Show a textdraw for all players.
