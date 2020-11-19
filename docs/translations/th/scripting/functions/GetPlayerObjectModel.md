---
title: GetPlayerObjectModel
description: Retrieve the model ID of a player-object.
tags: ["player"]
---

:::warning

ฟังก์ชั่นนี้ถูกเพิ่มใน SA-MP 0.3.7 และจะไม่ทำงานในเวอร์ชั่นก่อนหน้านี้!

:::

## คำอธิบาย

Retrieve the model ID of a player-object.

| Name     | Description                                                   |
| -------- | ------------------------------------------------------------- |
| playerid | The ID of the player whose player-object to get the model of  |
| objectid | The ID of the player-object of which to retrieve the model ID |

## ส่งคืน

The model ID of the player object. If the player or object don't exist, it will return -1 or 0 if the player or object does not exist.

## ตัวอย่าง

```c
new objectid = CreatePlayerObject(playerid, 1234, 0, 0, 0, 0, 0, 0);
new modelid = GetPlayerObjectModel(playerid, objectid);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GetObjectModel: Get the model ID of an object.
