---
title: OnActorStreamOut
description: Callback นี้ถูกเรียกเมื่อแอคเตอร์ถูกสตรีมออกโดยไคลเอนต์ของผู้เล่น
tags: []
---

:::warning

Callback นี้ถูกเพิ่มใน SA-MP 0.3.7 และจะไม่ทำงานในเวอร์ชั่นก่อนหน้านี้!

:::

## คำอธิบาย

Callback นี้ถูกเรียกเมื่อแอคเตอร์ถูกสตรีมออกโดยไคลเอนต์ของผู้เล่น

| ชื่อ        | คำอธิบาย                             |
| ----------- | ------------------------------------ |
| actorid     | ไอดีของแอคเตอร์ที่สตรีมออกจากผู้เล่น |
| forplayerid | ไอดีของผู้เล่นที่แอคเตอร์สตรีมออกไป  |

## ส่งคืน

จะถูกเรียกใน Filterscripts ก่อนเป็นอันดับแรกเสมอ

## ตัวอย่าง

```c
public OnActorStreamOut(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "ตอนนี้แอคเตอร์ %d ได้สตรีมออกจากคุณ", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## บันทึก

:::tip

NPC สามารถเรียก Callback นี้ได้

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน
