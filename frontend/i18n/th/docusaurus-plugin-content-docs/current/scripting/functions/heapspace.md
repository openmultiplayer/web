---
title: heapspace
sidebar_label: heapspace
description: Returns the amount of memory available for the heap/stack in bytes.
tags: []
---

## คำอธิบาย

Returns the amount of memory available for the heap/stack in bytes.

| Name | Description |
| ---- | ----------- |

## ตัวอย่าง

```c
public OnGameModeInit()
{
    printf("Heapspace: %i kilobytes", heapspace() / 1024);
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน
