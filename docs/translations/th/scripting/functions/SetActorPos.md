---
title: SetActorPos
description: Set the position of an actor.
tags: []
---

:::warning

ฟังก์ชั่นนี้ถูกเพิ่มใน SA-MP 0.3.7 และจะไม่ทำงานในเวอร์ชั่นก่อนหน้านี้!

:::

## คำอธิบาย

Set the position of an actor.

| Name    | Description                                                          |
| ------- | -------------------------------------------------------------------- |
| actorid | The ID of the actor to set the position of. Returned by CreateActor. |
| X       | The X coordinate to position the actor at.                           |
| Y       | The Y coordinate to position the actor at.                           |
| Z       | The Z coordinate to position the actor at.                           |

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
SetActorPos(MyActor, 1.0, 2.0, 3.0);
```

## บันทึก

:::tip

When creating an actor with CreateActor, you specify it's position. You do not need to use this function unless you want to change its position later.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GetActorPos: Get the position of an actor.
- CreateActor: Create an actor (static NPC).
