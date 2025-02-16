---
title: OnEnterExitModShop
description: Callback นี้ถูกเรียกเมื่อผู้เล่นเข้าหรือออกจากร้านแต่งรถยนต์
tags: []
---

## คำอธิบาย

Callback นี้ถูกเรียกเมื่อผู้เล่นเข้าหรือออกจากร้านแต่งรถยนต์

| ชื่อ       | คำอธิบาย                                                     |
| ---------- | ------------------------------------------------------------ |
| playerid   | ไอดีของผู้เล่นที่เข้าหรือออกจากร้านแต่งรถยนต์                |
| enterexit  | 1 ถ้าผู้เล่นเข้าร้านหรือ 0 ถ้าพวกเขาออก                      |
| interiorid | ไอดีภายในของร้านแต่งรถยนต์ที่ผู้เล่นเข้ามา (หรือ 0 ถ้าออกไป) |

## ส่งคืน

มันถูกเรียกในฟิลเตอร์สคริปต์ก่อนเสมอ

## ตัวอย่าง

```c
public OnEnterExitModShop(playerid, enterexit, interiorid)
{
    if (enterexit == 0) // หาก enterexit มีค่าเป็น 0 นั้นหมายถึงพวกเขากำลังจะออก
    {
        SendClientMessage(playerid, COLOR_WHITE, "รถสวยมาก! คุณถูกหักภาษีแล้ว $100");
        GivePlayerMoney(playerid, -100);
    }
    return 1;
}
```

## บันทึก

:::warning

บั๊กที่รู้กัน: ผู้เล่นจะชนกันเมื่อพวกเขาเข้าไปในร้านแต่งรถยนต์เดียวกัน

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [AddVehicleComponent](../../scripting/functions/AddVehicleComponent.md): เพิ่ม Component ให้กับยานพาหนะ
