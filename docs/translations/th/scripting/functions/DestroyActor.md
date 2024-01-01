---
title: DestroyActor
description: Destroy an actor which was created with CreateActor.
tags: []
---

:::warning

ฟังก์ชั่นนี้ถูกเพิ่มใน SA-MP 0.3.7 และจะไม่ทำงานในเวอร์ชั่นก่อนหน้านี้!

:::

## คำอธิบาย

Destroy an actor which was created with CreateActor.

| Name    | Description                                              |
| ------- | -------------------------------------------------------- |
| actorid | The ID of the actor to destroy. Returned by CreateActor. |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. The actor with the ID specified does not exist.

## ตัวอย่าง

```c
new MyActor;

public OnFilterScriptInit()
{
    MyActor = CreateActor(...);
    return 1;
}

public OnFilterScriptExit()
{
    DestroyActor(MyActor);
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [CreateActor](CreateActor): Create an actor (static NPC).
