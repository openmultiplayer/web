---
title: TextDrawShowForPlayer
description: Shows a textdraw for a specific player.
tags: ["player", "textdraw"]
---

## คำอธิบาย

Shows a textdraw for a specific player.

| Name     | Description                                                 |
| -------- | ----------------------------------------------------------- |
| playerid | The ID of the player to show the textdraw for.              |
| text     | The ID of the textdraw to show. Returned by TextDrawCreate. |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. This means either the player and/or textdraw specified does not exist.

## ตัวอย่าง

```c
public OnPlayerConnect(playerid)
{
    new Text:textid = TextDrawCreate(100.0, 100.0, "Welcome!");
    TextDrawShowForPlayer(playerid, textid);
}
```

## บันทึก

:::tip

If only a single player will see a textdraw, it might be wise to use player-textdraws instead. This is also useful for textdraws that need to show information specific for an individual player.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [TextDrawHideForPlayer](TextDrawHideForPlayer): Hide a textdraw for a certain player.
- [TextDrawShowForAll](TextDrawShowForAll): Show a textdraw for all players.
- [TextDrawHideForAll](TextDrawHideForAll): Hide a textdraw for all players.
