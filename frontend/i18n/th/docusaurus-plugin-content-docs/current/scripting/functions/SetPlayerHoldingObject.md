---
title: SetPlayerHoldingObject
sidebar_label: SetPlayerHoldingObject
description: Attaches an object to a bone.
tags: ["player"]
---

## คำอธิบาย

Attaches an object to a bone.

| Name     | Description                                        |
| -------- | -------------------------------------------------- |
| playerid | ID of the player you want to attach the object to. |
| modelid  | The model you want to use.                         |
| bone     | The bone you want to attach the object to.         |
| fOffsetX | (optional) X axis offset for the object position.  |
| fOffsetY | (optional) Y axis offset for the object position.  |
| fOffsetZ | (optional) Z axis offset for the object position.  |
| fRotX    | (optional) X axis rotation of the object.          |
| fRotY    | (optional) Y axis rotation of the object.          |
| fRotZ    | (optional) Z axis rotation of the object.          |

## ส่งคืน

1 on success, 0 on failure

## ตัวอย่าง

```c
public OnPlayerSpawn(playerid)
{
    SetPlayerHoldingObject(playerid, 1609, 2); //Attach a turtle to the playerid's head!
    return 1;
}
```

## บันทึก

:::tip

Only one object may be attached per player. This function is seperate from the CreateObject / CreatePlayerObject pools.

:::

:::warning

This function was removed in SA-MP 0.3c. check SetPlayerAttachedObject

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน
