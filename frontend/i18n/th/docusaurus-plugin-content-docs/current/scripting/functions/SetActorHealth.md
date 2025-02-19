---
title: SetActorHealth
sidebar_label: SetActorHealth
description: Set the health of an actor.
tags: []
---

:::warning

ฟังก์ชั่นนี้ถูกเพิ่มใน SA-MP 0.3.7 และจะไม่ทำงานในเวอร์ชั่นก่อนหน้านี้!

:::

## คำอธิบาย

Set the health of an actor.

| Name         | Description                               |
| ------------ | ----------------------------------------- |
| actorid      | The ID of the actor to set the health of. |
| Float:health | The value to set the actors's health to.  |

## ส่งคืน

1 - success

0 - failure (i.e. actor is not created).

## ตัวอย่าง

```c
new MyActor;

public OnGameModeInit()
{
    MyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor as salesperson in Ammunation
    SetActorHealth(MyActor, 100);
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน
