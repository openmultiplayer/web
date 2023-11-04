---
title: OnPlayerSpawn
description: This callback is called when a player spawns.
tags: ["player"]
---

## คำอธิบาย

This callback is called when a player spawns.(i.e. after caling SpawnPlayer function)

| Name     | Description                        |
| -------- | ---------------------------------- |
| playerid | The ID of the player that spawned. |

## ส่งคืน

0 - Will prevent other filterscripts from receiving this callback.

1 - Indicates that this callback will be passed to the next filterscript.

มันถูกเรียกในฟิลเตอร์สคริปต์ก่อนเสมอ

## ตัวอย่าง

```c
public OnPlayerSpawn(playerid)
{
    new PlayerName[MAX_PLAYER_NAME],
    string[40];
    GetPlayerName(playerid, PlayerName, sizeof(PlayerName));
    format(string, sizeof(string), "%s has spawned successfully.", PlayerName);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## บันทึก

:::tip

The game sometimes deducts \$100 from players after spawn.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SpawnPlayer](../functions/SpawnPlayer): Force a player to spawn.
- [AddPlayerClass](../functions/AddPlayerClass): Add a class.
- [SetSpawnInfo](../functions/SetSpawnInfo): Set the spawn setting for a player.
