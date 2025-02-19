---
title: OnPlayerRequestSpawn
sidebar_label: OnPlayerRequestSpawn
description: Called when a player attempts to spawn via class selection either by pressing SHIFT or clicking the 'Spawn' button.
tags: ["player"]
---

## คำอธิบาย

Called when a player attempts to spawn via class selection either by pressing SHIFT or clicking the 'Spawn' button.

| Name     | Description                                   |
| -------- | --------------------------------------------- |
| playerid | The ID of the player that requested to spawn. |

## ส่งคืน

It is always called first in filterscripts so returning 0 there also blocks other scripts from seeing it.

## ตัวอย่าง

```c
public OnPlayerRequestSpawn(playerid)
{
    if (!IsPlayerAdmin(playerid))
    {
        SendClientMessage(playerid, -1, "You may not spawn.");
        return 0;
    }
    return 1;
}
```

## บันทึก

:::tip

NPC สามารถเรียก Callback นี้ได้

:::

:::tip

To prevent players from spawning with certain classes, the last viewed class must be saved in a variable in OnPlayerRequestClass.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน
