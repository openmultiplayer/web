---
title: IsActorInvulnerable
sidebar_label: IsActorInvulnerable
description: Check if an actor is invulnerable.
tags: []
---

:::warning

ฟังก์ชั่นนี้ถูกเพิ่มใน SA-MP 0.3.7 และจะไม่ทำงานในเวอร์ชั่นก่อนหน้านี้!

:::

## คำอธิบาย

Check if an actor is invulnerable.

| Name    | Description                   |
| ------- | ----------------------------- |
| actorid | The ID of the actor to check. |

## ส่งคืน

1: The actor is invulnerable.

0: The actor is vulnerable.

## ตัวอย่าง

```c
new MyActor;

public OnGameModeInit()
{
    MyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor as a salesperson in Ammunation.
    if (IsActorInvulnerable(MyActor))
    {
        print("Actor is invulnerable.");
    }
    else
    {
        print("Actor is vulnerable.");
    }
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [CreateActor](../../scripting/functions/CreateActor.md): Create an actor (static NPC).
- [SetActorInvulnerable](../../scripting/functions/SetActorInvulnerable.md): Set actor invulnerable.
- [SetActorHealth](../../scripting/functions/SetActorHealth.md): Set the health of an actor.
