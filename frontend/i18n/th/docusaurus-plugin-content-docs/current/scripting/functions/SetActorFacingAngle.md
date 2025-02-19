---
title: SetActorFacingAngle
sidebar_label: SetActorFacingAngle
description: Set the facing angle of an actor.
tags: []
---

:::warning

ฟังก์ชั่นนี้ถูกเพิ่มใน SA-MP 0.3.7 และจะไม่ทำงานในเวอร์ชั่นก่อนหน้านี้!

:::

## คำอธิบาย

Set the facing angle of an actor.

| Name    | Description                                                              |
| ------- | ------------------------------------------------------------------------ |
| actorid | The ID of the actor to set the facing angle of. Returned by CreateActor. |
| ang     | The facing angle to set for the actor.                                   |

## ส่งคืน

1: The function was executed successfully.

0: The function failed to execute. The actor specified does not exist.

## ตัวอย่าง

```c
new MyActor;

public OnGameModeInit()
{
    MyActor = CreateActor(...);
    return 1;
}

// Somewhere else
SetActorFacingAngle(MyActor, 180.0);
```

## บันทึก

:::tip

When creating an actor with CreateActor, you specify it's facing angle. You do not need to use this function unless you want to change its facing angle later.

:::

:::warning

Players will see actor's facing angle changed only when it is restreamed to them.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GetActorFacingAngle: Get the facing angle of an actor.
- SetActorPos: Set the position of an actor.
