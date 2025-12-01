---
title: ForceClassSelection
sidebar_label: ForceClassSelection
description: Forces a player to go back to class selection.
tags: []
---

## คำอธิบาย

Forces a player to go back to class selection.

| Name     | Description                                 |
| -------- | ------------------------------------------- |
| playerid | The player to send back to class selection. |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
if (!strcmp(cmdtext, "/class", true))
{
    ForceClassSelection(playerid);
    TogglePlayerSpectating(playerid, true);
    TogglePlayerSpectating(playerid, false);
    return 1;
}
```

## บันทึก

:::warning

This function does not perform a state change to PLAYER_STATE_WASTED when combined with TogglePlayerSpectating (see example below), as is listed here.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [AddPlayerClass](AddPlayerClass): Add a class.
- [SetPlayerSkin](SetPlayerSkin): Set a player's skin.
- [GetPlayerSkin](GetPlayerSkin): Get a player's current skin.
- [OnPlayerRequestClass](../callbacks/OnPlayerRequestClass): Called when a player changes class at class selection.
