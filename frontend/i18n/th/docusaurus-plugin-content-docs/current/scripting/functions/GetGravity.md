---
title: GetGravity
description: Get the currently set gravity.
tags: []
---

## คำอธิบาย

Get the currently set gravity.

| Name | Description |
| ---- | ----------- |


## ตัวอย่าง

```c
#if !defined GetGravity
    native Float:GetGravity();
#endif

printf("Current gravity: %f", GetGravity());
```

## บันทึก

:::warning

This function is not defined by default. Add 'native Float:GetGravity();' under the inclusion of a_samp.inc to use it.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SetGravity](../functions/SetGravity): Set the global gravity.
