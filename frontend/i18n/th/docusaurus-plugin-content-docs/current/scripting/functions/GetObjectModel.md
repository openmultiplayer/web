---
title: GetObjectModel
sidebar_label: GetObjectModel
description: Get the model ID of an object (CreateObject).
tags: []
---

:::warning

ฟังก์ชั่นนี้ถูกเพิ่มใน SA-MP 0.3.7 และจะไม่ทำงานในเวอร์ชั่นก่อนหน้านี้!

:::

## คำอธิบาย

Get the model ID of an object (CreateObject).

| Name     | Description                              |
| -------- | ---------------------------------------- |
| objectid | The ID of the object to get the model of |

## ส่งคืน

The model ID of the object. -1 if object does not exist.

## ตัวอย่าง

```c
new objectid = CreateObject(1234, 0, 0, 0, 0, 0, 0);
new modelid = GetObjectModel(objectid);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [GetPlayerObjectModel](GetPlayerObjectModel): Get the model ID of a player-object.
