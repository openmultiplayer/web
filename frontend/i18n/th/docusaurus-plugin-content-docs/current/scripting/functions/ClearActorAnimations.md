---
title: ClearActorAnimations
sidebar_label: ClearActorAnimations
description: Clear any animations applied to an actor.
tags: []
---

:::warning

ฟังก์ชั่นนี้ถูกเพิ่มใน SA-MP 0.3.7 และจะไม่ทำงานในเวอร์ชั่นก่อนหน้านี้!

:::

## คำอธิบาย

Clear any animations applied to an actor.

| Name    | Description                                                                |
| ------- | -------------------------------------------------------------------------- |
| actorid | The ID of the actor (returned by CreateActor) to clear the animations for. |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. The actor specified does not exist.

## ตัวอย่าง

```c
new MyActor;

public OnGameModeInit()
{
    MyActor = CreateActor(...);
}

// Somewhere else
ApplyActorAnimation(MyActor, ...);

// Somewhere else
ClearActorAnimations(MyActor);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [ApplyActorAnimation](../../scripting/functions/ApplyActorAnimation.md): Apply an animation to an actor.
