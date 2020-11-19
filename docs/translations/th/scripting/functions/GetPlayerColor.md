---
title: GetPlayerColor
description: Gets the color of the player's name and radar marker.
tags: ["player"]
---

## คำอธิบาย

Gets the color of the player's name and radar marker. Only works after SetPlayerColor.

| Name     | Description                               |
| -------- | ----------------------------------------- |
| playerid | The ID of the player to get the color of. |

## ส่งคืน

The player's color. 0 if no color set or player not connected.

## ตัวอย่าง

```c
SendClientMessage(playerid, GetPlayerColor(playerid), "This message is in your color :)");

new output[144];
format(output, sizeof(output), "You can also use the player's color for {%06x}color embedding!", GetPlayerColor(playerid) >>> 8);
SendClientMessage(playerid, -1, output);
// will output the message in white, with ''color embedding'' in the player's color
```

## บันทึก

:::warning

GetPlayerColor will return nothing (0) unless SetPlayerColor has been used first.Click HERE for a fix.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SetPlayerColor](../functions/SetPlayerColor): Set a player's color.
- [ChangeVehicleColor](../functions/ChangeVehicleColor): Set the color of a vehicle.
