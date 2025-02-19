---
title: EnableStuntBonusForAll
sidebar_label: EnableStuntBonusForAll
description: Enables or disables stunt bonuses for all players.
tags: []
---

## คำอธิบาย

Enables or disables stunt bonuses for all players. If enabled, players will receive monetary rewards when performing a stunt in a vehicle (e.g. a wheelie).

| Name   | Description                                     |
| ------ | ----------------------------------------------- |
| enable | 1 to enable stunt bonuses or 0 to disable them. |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
public OnGameModeInit()
{
    EnableStuntBonusForAll(0);
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [EnableStuntBonusForPlayer](../functions/EnableStuntBonusForPlayer): Toggle stunt bonuses for a player.
