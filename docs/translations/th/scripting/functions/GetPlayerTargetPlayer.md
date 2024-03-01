---
title: GetPlayerTargetPlayer
description: Check who a player is aiming at.
tags: ["player"]
---

## คำอธิบาย

Check who a player is aiming at.

| Name     | Description                                |
| -------- | ------------------------------------------ |
| playerid | The ID of the player to get the target of. |

## ส่งคืน

The ID of the target player, or INVALID_PLAYER_ID if none.

## ตัวอย่าง

```c
public OnPlayerUpdate(playerid)
{
    // Store the ID
    new targetplayer = GetPlayerTargetPlayer(playerid);
    if (GetPlayerTeam(targetplayer) == GetPlayerTeam(playerid) && targetplayer != INVALID_PLAYER_ID)
    {
        GameTextForPlayer(playerid, "~R~do not shoot at team-mates!", 5000, 3);
    }
}
```

## บันทึก

:::warning

Does not work for joypads/controllers, and after a certain distance. Does not work for the sniper rifle, as it doesn't lock on to anything and as such can't and won't return a player.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GetPlayerCameraFrontVector: Get the player's camera front vector
- OnPlayerGiveDamage: This callback is called when a player gives damage.
- OnPlayerTakeDamage: This callback is called when a player takes damage.
