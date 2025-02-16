---
title: DisableInteriorEnterExits
description: Disable all the interior entrances and exits in the game (the yellow arrows at doors).
tags: []
---

## คำอธิบาย

Disable all the interior entrances and exits in the game (the yellow arrows at doors).

| Name | Description |
| ---- | ----------- |


## ตัวอย่าง

```c
public OnGameModeInit()
{
    DisableInteriorEnterExits();
    return 1;
}
```

## บันทึก

:::tip

This function will only work if it has been used BEFORE a player connects (it is recommended to use it in OnGameModeInit). It will not remove a connected player's markers.

:::

:::warning

If the gamemode is changed after this function has been used, and the new gamemode doesn't disable markers, the markers will NOT reappear for already-connected players (but will for newly connected players).

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [AllowInteriorWeapons](../../scripting/functions/AllowInteriorWeapons.md): Determine if weapons can be used in interiors.
