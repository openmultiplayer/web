---
title: SetPlayerFightingStyle
description: Set a player's special fighting style.
tags: ["player"]
---

:::warning

This function was added in SA-MP 0.3a and will not work in earlier versions!

:::

## คำอธิบาย

Set a player's special fighting style. To use in-game, aim and press the 'secondary attack' key (ENTER by default).

| Name     | Description                                                           |
| -------- | --------------------------------------------------------------------- |
| playerid | The ID of player to set the fighting style of.                        |
| style    | The fighting [style](../resources/fightingstyles) that should be set. |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
if (strcmp(cmdtext, "/boxing", true) == 0)
{
    SetPlayerFightingStyle (playerid, FIGHT_STYLE_BOXING);
    SendClientMessage(playerid, 0xFFFFFFAA, "You have changed your fighting style to boxing!");
    return 1;
}
```

## บันทึก

:::tip

This does not affect normal fist attacks - only special/secondary attacks (aim + press 'secondary attack' key).

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GetPlayerFightingStyle: Get a player's fighting style.
