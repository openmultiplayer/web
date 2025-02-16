---
title: print
sidebar_label: print
description: Prints a string to the server console (not in-game chat) and logs (server_log.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## คำอธิบาย

Prints a string to the server console (not in-game chat) and logs (server_log.txt).

| Name     | Description          |
| -------- | -------------------- |
| string[] | The string to print. |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
public OnGameModeInit( )
{
    print("Gamemode started.");
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- printf: Print a formatted message into the server logs and console.
