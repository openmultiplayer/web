---
title: SetPlayerColor
description: Set the colour of a player's nametag and marker (radar blip).
tags: ["player"]
---

## คำอธิบาย

Set the colour of a player's nametag and marker (radar blip).

| Name     | Description                              |
| -------- | ---------------------------------------- |
| playerid | The ID of the player whose color to set. |
| color    | The color to set. Supports alpha values. |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
// Red, using hexadecimal notation:
SetPlayerColor(playerid, 0xFF0000FF);

//Red, using decimal notation:
SetPlayerColor(playerid, 4278190335);
```

## บันทึก

:::tip

This function will change player's color for everyone, even if player's color was changed with SetPlayerMarkerForPlayer for any other player. If used under OnPlayerConnect, the affecting player will not see the color in the TAB menu.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SetPlayerMarkerForPlayer: Set a player's marker.
- GetPlayerColor: Check the color of a player.
- ChangeVehicleColor: Set the color of a vehicle.
