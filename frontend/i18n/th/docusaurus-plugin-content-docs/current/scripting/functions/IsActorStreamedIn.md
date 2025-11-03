---
title: IsActorStreamedIn
sidebar_label: IsActorStreamedIn
description: Checks if an actor is streamed in for a player.
tags: []
---

:::warning

ฟังก์ชั่นนี้ถูกเพิ่มใน SA-MP 0.3.7 และจะไม่ทำงานในเวอร์ชั่นก่อนหน้านี้!

:::

## คำอธิบาย

Checks if an actor is streamed in for a player.

| Name        | Description           |
| ----------- | --------------------- |
| actorid     | The ID of the actor.  |
| forplayerid | The ID of the player. |

## ส่งคืน

This function returns 1 if the actor is streamed in for the player, or 0 if it is not.

## ตัวอย่าง

```c
new MyActor;

public OnGameModeInit()
{
    MyActor = CreateActor(...);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    if (IsActorStreamedIn(MyActor, playerid))
    {
        // Do something
    }
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [CreateActor](CreateActor): Create an actor (static NPC).
- [IsPlayerStreamedIn](IsPlayerStreamedIn): Checks if a player is streamed in for another player.
