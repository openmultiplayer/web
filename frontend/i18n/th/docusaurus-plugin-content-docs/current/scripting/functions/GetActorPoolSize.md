---
title: GetActorPoolSize
sidebar_label: GetActorPoolSize
description: Gets the highest actorid created on the server.
tags: []
---

:::warning

ฟังก์ชั่นนี้ถูกเพิ่มใน SA-MP 0.3.7 และจะไม่ทำงานในเวอร์ชั่นก่อนหน้านี้!

:::

## คำอธิบาย

Gets the highest actorid created on the server.

| Name | Description |
| ---- | ----------- |


## ตัวอย่าง

```c
SetAllActorsHealth(Float:health)
{
    for(new i = 0, j = GetActorPoolSize(); i <= j; i++)
    {
        if (IsValidActor(i))
        {
            SetActorHealth(i, health);
        }
    }
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [CreateActor](../functions/CreateActor): Create an actor (static NPC).
- [IsValidActor](../functions/isValidActor): Check if actor id is valid.
- [SetActorHealth](../functions/SetActorHealth): Set the health of an actor.
