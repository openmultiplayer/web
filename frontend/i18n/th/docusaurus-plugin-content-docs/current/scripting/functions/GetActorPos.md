---
title: GetActorPos
sidebar_label: GetActorPos
description: Get the position of an actor.
tags: []
---

:::warning

ฟังก์ชั่นนี้ถูกเพิ่มใน SA-MP 0.3.7 และจะไม่ทำงานในเวอร์ชั่นก่อนหน้านี้!

:::

## คำอธิบาย

Get the position of an actor.

| Name    | Description                                                                             |
| ------- | --------------------------------------------------------------------------------------- |
| actorid | The ID of the actor to get the position of. Returned by CreateActor.                    |
| X       | A float variable, passed by reference, in which to store the X coordinate of the actor. |
| Y       | A float variable, passed by reference, in which to store the Y coordinate of the actor. |
| Z       | A float variable, passed by reference, in which to store the Z coordinate of the actor. |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. The actor specified does not exist.

The actor's position is stored in the specified variables.

## ตัวอย่าง

```c
new Float:x, Float:y, Float:z;
GetActorPos(actorid, x, y, z);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SetActorPos](../functions/SetActorPos): Set the position of an actor.
