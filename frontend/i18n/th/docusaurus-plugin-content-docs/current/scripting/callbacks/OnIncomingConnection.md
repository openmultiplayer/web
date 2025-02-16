---
title: OnIncomingConnection
description: Callback นี้ถูกเรียกเมื่อมี IP พยายามเชื่อมต่อมายังเซิร์ฟเวอร์
tags: []
---

## คำอธิบาย

Callback นี้ถูกเรียกเมื่อมี IP พยายามเชื่อมต่อมายังเซิร์ฟเวอร์ หากต้องการบล็อกการเชื่อมต่อที่กำลังเข้ามาให้ใช้ BlockIpAddress

| ชื่อ         | คำอธิบาย                                |
| ------------ | --------------------------------------- |
| playerid     | ไอดีของผู้เล่นที่พยายามเชื่อมต่อ        |
| ip_address[] | ที่อยู่ IP ของผู้เล่นที่พยายามเชื่อมต่อ |
| port         | พอร์ทของผู้เล่นที่พยายามเชื่อมต่อ       |

## ส่งคืน

1 - จะป้องกันไม่ให้ฟิลเตอร์สคริปต์อื่นถูกเรียกโดย Callback นี้

0 - บอกให้ Callback นี้ส่งต่อไปยังฟิลเตอร์สคริปต์ถัดไป

มันถูกเรียกในฟิลเตอร์สคริปต์ก่อนเสมอ

## ตัวอย่าง

```c
public OnIncomingConnection(playerid, ip_address[], port)
{
    printf("การเชื่อมต่อผู้เล่นไอดี %i [IP/port: %s:%i]", playerid, ip_address, port);
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [BlockIpAddress](../../scripting/functions/BlockIpAddress.md): บล็อกที่อยู่ IP ไม่ให้เชื่อมต่อกับเซิร์ฟเวอร์ตามระยะเวลาที่กำหนด
- [UnBlockIpAddress](../../scripting/functions/UnBlockIpAddress.md): ปลดบล็อกที่อยู่ IP จากการบล็อกก่อนหน้านี้
