---
title: GetPlayerMoney
description: Retrieves the amount of money a player has.
tags: ["player"]
---

## คำอธิบาย

Retrieves the amount of money a player has.

| Name     | Description                               |
| -------- | ----------------------------------------- |
| playerid | The ID of the player to get the money of. |

## ส่งคืน

The amount of money the player has.

## ตัวอย่าง

```c
public OnPlayerSpawn(playerid)
{
   new string[32];
   format(string, sizeof(string), "Your money: $%i.", GetPlayerMoney(playerid));
   SendClientMessage(playerid, 0xFFFFFFAA, string);
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GivePlayerMoney: Give a player money.
- ResetPlayerMoney: Set the money of a player to \$0.
