---
title: GetActorFacingAngle
description: Get the facing angle of an actor.
tags: []
---

:::warning

ฟังก์ชั่นนี้ถูกเพิ่มใน SA-MP 0.3.7 และจะไม่ทำงานในเวอร์ชั่นก่อนหน้านี้!

:::

## คำอธิบาย

Get the facing angle of an actor.

| Name       | Description                                                                                 |
| ---------- | ------------------------------------------------------------------------------------------- |
| actorid    | The ID of the actor to get the facing angle of. Returned by CreateActor.                    |
| &Float:ang | A float variable, passed by reference, in to which the actor's facing angle will be stored. |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. The actor specified does not exist.

The actor's facing angle is stored in the specified variable.

## ตัวอย่าง

```c
new Float:angle;
GetActorFacingAngle(actorid, angle);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SetActorFacingAngle](SetActorFacingAngle): Set the facing angle of an actor.
- [GetActorPos](GetActorPos): Get the position of an actor.
