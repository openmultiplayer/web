---
title: IsObjectMoving
sidebar_label: IsObjectMoving
description: Checks if the given objectid is moving.
tags: []
---

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

- [MoveObject](../../scripting/functions/MoveObject.md): Move an object.
- [StopObject](../../scripting/functions/StopObject.md): Stop an object from moving.
- [OnObjectMoved](../../scripting/callbacks/OnObjectMoved.md): Called when an object stops moving.
