---
id: StopPlayerHoldingObject
title: StopPlayerHoldingObject
description: Removes attached objects.
tags: ["player"]
---

:::warning

This function was added in SA-MP 0.3b and will not work in earlier versions!

:::

## คำอธิบาย

Removes attached objects.

| Name     | Description                                          |
| -------- | ---------------------------------------------------- |
| playerid | ID of the player you want to remove the object from. |

## ส่งคืน

1 on success, 0 on failure

## ตัวอย่าง

```c
public OnPlayerDeath(playerid, killerid, reason)
{
    if(IsPlayerHoldingObject(playerid)) StopPlayerHoldingObject(playerid);
    return 1;
}
```

## บันทึก

:::warning

This function was removed in SA-MP 0.3c. check RemovePlayerAttachedObject

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน
