---
title: GetActorVirtualWorld
sidebar_label: GetActorVirtualWorld
description: Get the virtual world of an actor.
tags: []
---

:::warning

ฟังก์ชั่นนี้ถูกเพิ่มใน SA-MP 0.3.7 และจะไม่ทำงานในเวอร์ชั่นก่อนหน้านี้!

:::

## คำอธิบาย

Get the virtual world of an actor.

| Name    | Description                                      |
| ------- | ------------------------------------------------ |
| actorid | The ID of the actor to get the virtual world of. |

## ส่งคืน

The virtual world of the actor. By default this is 0. Also returns 0 if actor specified does not exist.

## ตัวอย่าง

```c
new MyActor;

public OnGameModeInit()
{
    MyActor = CreateActor(...);
    SetActorVirtualWorld(MyActor, 69);
    return 1;
}

// Somewhere else
if (GetActorVirtualWorld(MyActor) == 69)
{
    // Do something
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SetActorVirtualWorld](../functions/SetActorVirtualWorld): Set the virtual world of an actor.
