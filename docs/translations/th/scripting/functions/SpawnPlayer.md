---
title: SpawnPlayer
description: (Re)Spawns a player.
tags: ["player"]
---

## คำอธิบาย

(Re)Spawns a player.

| Name     | Description                    |
| -------- | ------------------------------ |
| playerid | The ID of the player to spawn. |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. This means the player is not connected.

## ตัวอย่าง

```c
if (strcmp(cmdtext, "/spawn", true) == 0)
{
    SpawnPlayer(playerid);
    return 1;
}
```

## บันทึก

:::tip

Kills the player if they are in a vehicle and then they spawn with a bottle in their hand.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SetSpawnInfo: Set the spawn setting for a player.
- AddPlayerClass: Add a class.
- OnPlayerSpawn: Called when a player spawns.
