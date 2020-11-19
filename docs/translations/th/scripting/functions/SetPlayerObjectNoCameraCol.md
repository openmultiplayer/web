---
title: SetPlayerObjectNoCameraCol
description: Toggles a player object camera collision.
tags: ["player"]
---

:::warning

ฟังก์ชั่นนี้ถูกเพิ่มใน SA-MP 0.3.7 และจะไม่ทำงานในเวอร์ชั่นก่อนหน้านี้!

:::

## คำอธิบาย

Toggles a player object camera collision.

| Name     | Description                              |
| -------- | ---------------------------------------- |
| playerid | The playerID the object belongs to.      |
| objectid | The ID of the object you want to toggle. |

## ส่งคืน

1 - Regardless of if the object exists or not.

## ตัวอย่าง

```c
public OnPlayerObjectMoved(playerid, objectid)
{
    new Float:objX, Float:objY, Float:objZ;
    GetPlayerObjectPos(playerid, objectid, objX, objY, objZ);
    if (objX >= 3000.0 && objY >= 3000.0)
    {
        SetPlayerObjectNoCameraCol(playerid, objectid);
    }
    return 1;
}
```

## บันทึก

:::tip

This does not work inside the normal SA map boundaries.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SetObjectNoCameraCol: Disables collisions between camera and object.
