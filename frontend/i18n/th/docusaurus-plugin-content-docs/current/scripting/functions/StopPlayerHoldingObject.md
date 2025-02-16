---
title: StopPlayerHoldingObject
sidebar_label: StopPlayerHoldingObject
description: Removes attached objects.
tags: ["player"]
---

## คำอธิบาย

Removes attached objects.

| Name     | Description                                          |
| -------- | ---------------------------------------------------- |
| playerid | ID of the player you want to remove the object from. |

## ส่งคืน

1 on success, 0 on failure

## ตัวอย่าง

```c
public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    if (IsPlayerHoldingObject(playerid))
    {
        StopPlayerHoldingObject(playerid);
    }
    return 1;
}
```

## บันทึก

:::warning

This function was removed in SA-MP 0.3c. See [RemovePlayerAttachedObject](RemovePlayerAttachedObject)

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน
