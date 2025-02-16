---
title: OnFilterScriptExit
sidebar_label: OnFilterScriptExit
description: Callback นี้ถูกเรียกเมื่อฟิลเตอร์สคริปต์ยกเลิกการโหลด
tags: []
---

## คำอธิบาย

Callback นี้ถูกเรียกเมื่อฟิลเตอร์สคริปต์ยกเลิกการโหลด

| ชื่อ | คำอธิบาย |
| ---- | -------- |


## ตัวอย่าง

```c
public OnFilterScriptExit()
{
    print("\n--------------------------------------");
    print(" ยกลิกการโหลด Filterscript ของฉันแล้ว");
    print("--------------------------------------\n");
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน
