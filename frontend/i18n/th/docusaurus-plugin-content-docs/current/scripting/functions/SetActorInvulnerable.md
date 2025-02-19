---
title: SetActorInvulnerable
sidebar_label: SetActorInvulnerable
description: Toggle an actor's invulnerability.
tags: []
---

:::warning

ฟังก์ชั่นนี้ถูกเพิ่มใน SA-MP 0.3.7 และจะไม่ทำงานในเวอร์ชั่นก่อนหน้านี้!

:::

## คำอธิบาย

Toggle an actor's invulnerability.

| Name         | Description                                             |
| ------------ | ------------------------------------------------------- |
| actorid      | The ID of the actor to set invulnerability.             |
| invulnerable | 0 to make them vulnerable, 1 to make them invulnerable. |

## ส่งคืน

1 - Success

0 - Failure (i.e. Actor is not created).

## ตัวอย่าง

```c
new MyActor;

public OnGameModeInit()
{
    MyActor = CreateActor(179, 316.1, -134.0, 999.6, 90.0); // Actor as a salesperson in Ammunation.
    SetActorInvulnerable(MyActor, true);
    return 1;
}
```

## บันทึก

:::warning

Once set invulnerable, the actor does not call OnPlayerGiveDamageActor. Players will have actor's invulnerability state changed only when it is restreamed to them.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน
