---
title: IsObjectMoving
description: Checks if the given objectid is moving.
tags: []
---

:::warning

This function was added in SA-MP 0.3d and will not work in earlier versions!

:::

## คำอธิบาย

Checks if the given objectid is moving.

| Name     | Description                                  |
| -------- | -------------------------------------------- |
| objectid | The objectid you want to check if is moving. |

## ส่งคืน

1 if the object is moving, 0 if not.

## ตัวอย่าง

```c
if (IsObjectMoving(objectid))
{
	StopObject(objectid);
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [MoveObject](MoveObject): Move an object.
- [StopObject](StopObject): Stop an object from moving.
- [OnObjectMoved](../callbacks/OnObjectMoved): Called when an object stops moving.
