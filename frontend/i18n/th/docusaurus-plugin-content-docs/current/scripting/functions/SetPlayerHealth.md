---
title: SetPlayerHealth
description: Set the health of a player.
tags: ["player"]
---

## คำอธิบาย

Set the health of a player.

| Name         | Description                                                                                                                  |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| playerid     | The ID of the player to set the health of.                                                                                   |
| Float:health | The value to set the player's health to. Max health that can be displayed in the HUD is 100, though higher values are valid. |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. This means the player specified does not exist.

## ตัวอย่าง

```c
//Sets the players health to full
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/heal", cmdtext, true))
    {
        SetPlayerHealth(playerid, 100.0);
        return 1;
    }
    if (!strcmp("/kill", cmdtext, true))
    {
        SetPlayerHealth(playerid, 0.0);
        return 1;
    }
    return 0;
}
```

## บันทึก

:::tip

If a player's health is set to 0 or a minus value, they will die instantly. If a player's health is below 10 or above 98303, their health bar will flash.

:::

:::warning

Health is obtained rounded to integers: set 50.15, but get 50.0

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GetPlayerHealth: Find out how much health a player has.
- GetPlayerArmour: Find out how much armour a player has.
- SetPlayerArmour: Set the armour of a player.
