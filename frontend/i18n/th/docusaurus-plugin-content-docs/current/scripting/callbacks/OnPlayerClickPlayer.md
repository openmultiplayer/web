---
title: OnPlayerClickPlayer
sidebar_label: OnPlayerClickPlayer
description: Callback นี้ถูกเรียกเมื่อผู้เล่นดับเบิลคลิกบนผู้เล่นที่กระดานคะแนน
tags: ["player"]
---

## คำอธิบาย

Callback นี้ถูกเรียกเมื่อผู้เล่นดับเบิลคลิกบนผู้เล่นที่กระดานคะแนน

| ชื่อ            | คำอธิบาย                                    |
| --------------- | ------------------------------------------- |
| playerid        | ไอดีของผู้เล่นที่คลิกบนผู้เล่นบนกระดานคะแนน |
| clickedplayerid | ไอดีของผู้เล่นที่ถูกคลิก                    |
| source          | แหล่งที่มาของการคลิกของผู้เล่น              |

## ส่งคืน

1 - จะป้องกันไม่ให้ฟิลเตอร์สคริปต์อื่นถูกเรียกโดย Callback นี้

0 - บอกให้ Callback นี้ส่งต่อไปยังฟิลเตอร์สคริปต์ถัดไป

มันถูกเรียกในฟิลเตอร์สคริปต์ก่อนเสมอ

## ตัวอย่าง

```c
public OnPlayerClickPlayer(playerid, clickedplayerid, CLICK_SOURCE:source)
{
    new message[32];
    format(message, sizeof(message), "คุณได้คลิกบนผู้เล่น %d", clickedplayerid);
    SendClientMessage(playerid, 0xFFFFFFFF, message);
    return 1;
}
```

## บันทึก

:::tip

ตอนนี้ 'source' มีเพียงแค่ค่าเดียว (0 - CLICK_SOURCE_SCOREBOARD) ส่วนขยายนี้แสดงให้เห็นว่าอาจมีการรองรับข้อมูลเพิ่มเติมในอนาคต

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [OnPlayerClickTextDraw](../../scripting/callbacks/OnPlayerClickTextDraw.md): ถูกเรียกเมื่อผู้เล่นคลิกบน Textdraw
