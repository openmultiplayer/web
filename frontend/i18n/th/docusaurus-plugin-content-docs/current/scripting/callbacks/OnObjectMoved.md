---
title: OnObjectMoved
sidebar_label: OnObjectMoved
description: Callback นี้ถูกเรียกเมื่อวัตถุถูกย้ายหลังจาก MoveObject (เมื่อมันหยุดเคลื่อนย้าย)
tags: []
---

## คำอธิบาย

Callback นี้ถูกเรียกเมื่อวัตถุถูกย้ายหลังจาก MoveObject (เมื่อมันหยุดเคลื่อนย้าย)

| ชื่อ     | คำอธิบาย            |
| -------- | ------------------- |
| objectid | ไอดีวัตถุที่ถูกย้าย |

## ส่งคืน

มันถูกเรียกในฟิลเตอร์สคริปต์ก่อนเสมอ

## ตัวอย่าง

```c
public OnObjectMoved(objectid)
{
    printf("วัตถุ %d ถูกย้ายสำเร็จแล้ว", objectid);
    return 1;
}
```

## บันทึก

:::tip

SetObjectPos จะไม่ทำงานถ้าใช้ใน Callback นี้ วิธีแก้ให้สร้างวัตถุขึ้นใหม่

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [MoveObject](../../scripting/functions/MoveObject.md): เคลื่อนย้ายวัตถุ
- [MovePlayerObject](../../scripting/functions/MovePlayerObject.md): เคลื่อนย้ายวัตถุผู้เล่น
- [IsObjectMoving](../../scripting/functions/IsObjectMoving.md): ตรวจสอบว่าวัตถุกำลังเคลื่อนที่หรือไม่
- [StopObject](../../scripting/functions/StopObject.md): หยุดวัตถุไม่ให้เคลื่อนที่
- [OnPlayerObjectMoved](../../scripting/callbacks/OnPlayerObjectMoved.md): ถูกเรียกเมื่อวัตถุผู้เล่นหยุดเคลื่อนที่
