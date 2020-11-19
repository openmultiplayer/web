---
title: SetObjectNoCameraCol
description: Disable collisions between players' cameras and the specified object.
tags: []
---

:::warning

ฟังก์ชั่นนี้ถูกเพิ่มใน SA-MP 0.3.7 และจะไม่ทำงานในเวอร์ชั่นก่อนหน้านี้!

:::

## คำอธิบาย

Disable collisions between players' cameras and the specified object.

| Name     | Description                                           |
| -------- | ----------------------------------------------------- |
| objectid | The ID of the object to disable camera collisions on. |

## ส่งคืน

1: The function was executed successfully.

0: The function failed to execute. The object specified does not exist.

## ตัวอย่าง

```c
public OnObjectMoved(objectid)
{
    new Float:objX, Float:objY, Float:objZ;
    GetObjectPos(objectid, objX, objY, objZ);
    if (objX >= 3000.0 || objY >= 3000.0 || objX <= -3000.0 || objY <= -3000.0)
    {
        SetObjectNoCameraCol(objectid);
    }
    return 1;
}
```

## บันทึก

:::tip

This only works outside the map boundaries (past -3000/3000 units on the x and/or y axis).

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SetPlayerObjectNoCameraCol: Disables collisions between camera and player object.
