---
title: AllowInteriorWeapons
sidebar_label: AllowInteriorWeapons
description: Toggle whether the usage of weapons in interiors is allowed or not.
tags: []
---

## คำอธิบาย

Toggle whether the usage of weapons in interiors is allowed or not.

| Name  | Description                                                                               |
| ----- | ----------------------------------------------------------------------------------------- |
| allow | 1 to enable weapons in interiors (enabled by default), 0 to disable weapons in interiors. |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
public OnGameModeInit()
{
    // This will allow weapons inside interiors.
    AllowInteriorWeapons(1);
    return 1;
}
```

## บันทึก

:::warning

This function does not work in the current SA:MP version!

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SetPlayerInterior](../../scripting/functions/SetPlayerInterior.md): Set a player's interior.
- [GetPlayerInterior](../../scripting/functions/GetPlayerInterior.md): Get the current interior of a player.
- [OnPlayerInteriorChange](../../scripting/callbacks/OnPlayerInteriorChange.md): Called when a player changes interior.
