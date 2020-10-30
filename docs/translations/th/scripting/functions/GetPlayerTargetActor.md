---
title: GetPlayerTargetActor
description: Gets id of an actor which is aimed by certain player.
tags: ["player"]
---

:::warning

ฟังก์ชั่นนี้ถูกเพิ่มใน SA-MP 0.3.7 และจะไม่ทำงานในเวอร์ชั่นก่อนหน้านี้!

:::

## คำอธิบาย

Gets id of an actor which is aimed by certain player.

| Name     | Description                                |
| -------- | ------------------------------------------ |
| playerid | The ID of the player to get the target of. |

## ส่งคืน

The ID of the targeted actor, or INVALID_ACTOR_ID if none.

## ตัวอย่าง

```c
public OnPlayerUpdate(playerid)
{
    new actorid = GetPlayerTargetActor(playerid);

    new string[32];
    format(string, sizeof(string), "You are aiming at actor id %d", actorid);
    SendClientMessage(playerid, -1, string);
    return 1;
}
```

## บันทึก

:::warning

Does not work for joypads/controllers, and after a certain distance. Does not work for the sniper rifle, as it doesn't lock on to anything and as such can't and won't return a player.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GetPlayerCameraTargetActor: Get the ID of the actor (if any) a player is looking at.
- GetPlayerCameraFrontVector: Get the player's camera front vector
- OnPlayerGiveDamageActor: This callback is called when a player gives damage to an actor.
