---
title: EnableStuntBonusForPlayer
description: Toggle stunt bonuses for a player.
tags: ["player"]
---

## คำอธิบาย

Toggle stunt bonuses for a player. Enabled by default.

| Name     | Description                                       |
| -------- | ------------------------------------------------- |
| playerid | The ID of the player to toggle stunt bonuses for. |
| enable   | 1 to enable stunt bonuses and 0 to disable them.  |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. The player is not connected.

## ตัวอย่าง

```c
public OnPlayerConnect(playerid)
{
   EnableStuntBonusForPlayer(playerid, 0); // Disable stunt bonuses when the player connects to the server.
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [EnableStuntBonusForAll](EnableStuntBonusForAll): Toggle stunt bonuses for all players.
