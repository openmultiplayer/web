---
title: SetObjectsDefaultCameraCol
sidebar_label: SetObjectsDefaultCameraCol
description: Allows camera collisions with newly created objects to be disabled by default.
tags: []
---

:::warning

ฟังก์ชั่นนี้ถูกเพิ่มใน SA-MP 0.3.7 และจะไม่ทำงานในเวอร์ชั่นก่อนหน้านี้!

:::

## คำอธิบาย

Allows camera collisions with newly created objects to be disabled by default.

| Name    | Description                                                                                         |
| ------- | --------------------------------------------------------------------------------------------------- |
| disable | 1 to disable camera collisions for newly created objects and 0 to enable them (enabled by default). |

## ส่งคืน

Note

This function only affects the camera collision of objects created AFTER its use - it does not toggle existing objects' camera collisions.

## ตัวอย่าง

```c
public OnGameModeInit()
{
    // Disable camera collision
    SetObjectsDefaultCameraCol(1);

    // Create mapped objects
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);

    // The above objects will NOT have camera collisions

    // Re-enable camera collisions
    SetObjectsDefaultCameraCol(0);

    // Create mapped objects
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);

    // The above objects WILL have camera collision

    // BUT, the first set will still NOT have camera collisions

    return 1;
}
```

## บันทึก

:::tip

This function only affects the camera collision of objects created AFTER its use - it does not toggle existing objects' camera collisions.

:::

:::warning

This function ONLY works outside the normal SA map boundaries (past 3000 units).

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SetObjectNoCameraCol: Disables collisions between camera and object.
- SetPlayerObjectNoCameraCol: Disables collisions between camera and player object.
