---
id: OnClientMessage
title: OnClientMessage
description: Callback นี้ถูกเรียกเมื่อ NPC เห็น ClientMessage

tags: []
---

:::warning

NPC callback ถูกเพิ่มใน SA-MP 0.3a และจะไม่ทำงานในเวอร์ชั่นก่อนหน้านี้!

:::

## คำอธิบาย

Callback นี้ถูกเรียกเมื่อ NPC เห็น ClientMessage และจะเกิดขึ้นทุกครั้งที่มีการใช้ฟังก์ชั่น SendClientMessageToAll และทุกครั้งที่ฟังก์ชั่น SendClientMessage ถูกส่งไปยัง NPC และ Callback นี้จะไม่ถูกเรียกเมื่อใครบางคนพูดอะไรบางอย่าง เวอร์ชั่นสำหรับผู้เล่นดูได้ที่ NPC:OnPlayerText

| ชื่อ   | คำอธิบาย            |
| ------ | ------------------- |
| color  | สีจาก ClientMessage |
| text[] | ข้อความ             |

## ส่งคืน

Callback นี้ไม่มีการส่งค่ากลับ

## ตัวอย่าง

```c
public OnClientMessage(color, text[])
{
    if(strfind(text,"ยอดเงินในธนาคาร: $0") != -1) SendChat("ฉันจน :(");
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน
