---
title: GetActorHealth
description: Get the health of an actor.
tags: []
---

:::warning

ฟังก์ชั่นนี้ถูกเพิ่มใน SA-MP 0.3.7 และจะไม่ทำงานในเวอร์ชั่นก่อนหน้านี้!

:::

## คำอธิบาย

Get the health of an actor.

| Name          | Description                                                                     |
| ------------- | ------------------------------------------------------------------------------- |
| actorid       | The ID of the actor to get the health of.                                       |
| &Float:health | A float variable, passed by reference, in to which to store the actor's health. |

## ส่งคืน

1 - success

0 - failure (i.e. actor is not created).

NOTE: The actor's health is stored in the specified variable, not in the return value.

## ตัวอย่าง

```c
new MyActor;

public OnGameModeInit()
{
    MyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor as salesperson in Ammunation
    SetActorHealth(MyActor, 100);

    new Float:actorHealth;
    GetActorHealth(MyActor, actorHealth);
    printf("Actor ID %d has %.2f health.", MyActor, actorHealth);
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน
