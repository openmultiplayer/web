---
title: IsValidActor
description: Checks if an actor ID is valid.
tags: []
---

:::warning

ฟังก์ชั่นนี้ถูกเพิ่มใน SA-MP 0.3.7 และจะไม่ทำงานในเวอร์ชั่นก่อนหน้านี้!

:::

## คำอธิบาย

Checks if an actor ID is valid.

| Name    | Description                   |
| ------- | ----------------------------- |
| actorid | The ID of the actor to check. |

## ส่งคืน

1 - The actor is valid.

0 - The actor is not valid.

## ตัวอย่าง

```c
new MyActor;

public OnGameModeInit()
{
    MyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor as a salesperson in Ammunation.
    if (IsValidActor(MyActor))
    {
        SetActorHealth(MyActor, 100);
    }
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [CreateActor](CreateActor): Create an actor.
- [GetActorPoolSize](GetActorPoolSize): Gets the highest actorid created on the server.
- [SetActorHealth](SetActorHealth): Set the health of an actor.
