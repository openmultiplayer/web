---
title: OnPlayerExitedMenu
description: Called when a player exits a menu.
tags: ["player", "menu"]
---

## คำอธิบาย

Called when a player exits a menu.

| Name     | Description                               |
| -------- | ----------------------------------------- |
| playerid | The ID of the player that exited the menu |

## ส่งคืน

มันถูกเรียกในเกมโหมดก่อนเสมอ

## ตัวอย่าง

```c
public OnPlayerExitedMenu(playerid)
{
    TogglePlayerControllable(playerid,1); // unfreeze the player when they exit a menu
    return 1;
}
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [CreateMenu](../functions/CreateMenu): Create a menu.
- [DestroyMenu](../functions/DestroyMenu): Destroy a menu.
