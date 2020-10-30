---
title: SetPlayerWorldBounds
description: Set the world boundaries for a player.
tags: ["player"]
---

## คำอธิบาย

Set the world boundaries for a player. Players can not go out of the boundaries (they will be pushed back in).

| Name        | Description                                          |
| ----------- | ---------------------------------------------------- |
| playerid    | The ID of the player to set the world boundaries of. |
| Float:x_max | The maximum X coordinate the player can go to.       |
| Float:x_min | The minimum X coordinate the player can go to.       |
| Float:y_max | The maximum Y coordinate the player can go to.       |
| Float:y_min | The minimum Y coordinate the player can go to.       |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
public OnPlayerSpawn(playerid)
{
    SetPlayerWorldBounds(playerid, 20.0, 0.0, 20.0, 0.0);
    return 1;
}
```

```
               (North)
                ymax
            |----------|
            |          |
(West) xmin |          | xmax (East)
            |          |
            |----------|
                ymin
               (South)
```

## บันทึก

:::tip

A player's world boundaries can be reset by setting them to 20000.0000, -20000.0000, 20000.0000, -20000.0000. These are the default values.

:::

:::warning

This function doesn't work in interiors!

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GangZoneCreate: Create a gangzone.
