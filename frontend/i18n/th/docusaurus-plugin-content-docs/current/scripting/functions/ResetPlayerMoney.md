---
title: ResetPlayerMoney
sidebar_label: ResetPlayerMoney
description: Reset a player's money to $0.
tags: ["player"]
---

## คำอธิบาย

Reset a player's money to \$0.

| Name     | Description                                 |
| -------- | ------------------------------------------- |
| playerid | The ID of the player to reset the money of. |

## ส่งคืน

1: The function was executed successfully.

0: The function failed to execute. This means the player is not connected.

## ตัวอย่าง

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    SendClientMessage(playerid, 0xFFFFFFAA, "You died and lost all of your cash!");
    ResetPlayerMoney(playerid);
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [GetPlayerMoney](../functions/GetPlayerMoney.md): Check how much money a player has.
- [GivePlayerMoney](../functions/GivePlayerMoney.md): Give a player money.
