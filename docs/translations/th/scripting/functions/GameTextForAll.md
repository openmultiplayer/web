---
title: GameTextForAll
description: Shows 'game text' (on-screen text) for a certain length of time for all players.
tags: []
---

## คำอธิบาย

Shows 'game text' (on-screen text) for a certain length of time for all players.

| Name           | Description                                           |
| -------------- | ----------------------------------------------------- |
| const string[] | The text to be displayed.                             |
| time           | The duration of the text being shown in milliseconds. |
| style          | The style of text to be displayed.                    |

## ส่งคืน

This function always returns 1.

## ตัวอย่าง

```c
public OnPlayerDeath(playerid, killerid, reason)
{
    // This example shows a large, white text saying "[playerName] has
    // passed away" on everyone's screen, after a player has died or
    // has been killed. It shows in text-type 3, for 5 seconds (5000 ms)
    new name[ 24 ], string[ 64 ];
    GetPlayerName( playerid, name, 24 );

    // Format the passed-away message properly, and show it to everyone:
    format( string, sizeof(string), "~w~%s has passed away", name );
    GameTextForAll( string, 5000, 3 );

    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [GameTextForPlayer](GameTextForPlayer): Display gametext to a player.
- [TextDrawShowForAll](TextDrawShowForAll): Show a textdraw for all players.
