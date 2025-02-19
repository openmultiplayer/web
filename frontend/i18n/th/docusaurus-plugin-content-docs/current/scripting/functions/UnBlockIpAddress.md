---
title: UnBlockIpAddress
sidebar_label: UnBlockIpAddress
description: Unblock an IP address that was previously blocked using BlockIpAddress.
tags: []
---

## คำอธิบาย

Unblock an IP address that was previously blocked using BlockIpAddress.

| Name       | Description                |
| ---------- | -------------------------- |
| ip_address | The IP address to unblock. |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
public OnGameModeInit()
{
    UnBlockIpAddress("127.0.0.1");
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [BlockIpAddress](../functions/BlockIpAddress.md): Block an IP address from connecting to the server for a set amount of time.
- [OnIncomingConnection](../callbacks/OnIncomingConnection.md): Called when a player is attempting to connect to the server.
