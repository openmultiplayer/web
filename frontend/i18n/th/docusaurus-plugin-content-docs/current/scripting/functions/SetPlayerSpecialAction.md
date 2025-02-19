---
title: SetPlayerSpecialAction
sidebar_label: SetPlayerSpecialAction
description: This function allows to set players special action.
tags: ["player"]
---

## คำอธิบาย

This function allows to set players special action.

| Name     | Description                                                            |
| -------- | ---------------------------------------------------------------------- |
| playerid | The player that should perform the action                              |
| actionid | The [action](../resources/specialactions.md) that should be performed. |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. This means the player is not connected.

## ตัวอย่าง

```c
if (strcmp(cmd, "/handsup", true) == 0)
{
    SetPlayerSpecialAction(playerid,SPECIAL_ACTION_HANDSUP);
    return 1;
}
```

## บันทึก

:::tip

Removing jetpacks from players by setting their special action to 0 causes the sound to stay until death.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GetPlayerSpecialAction: Get a player's current special action.
- ApplyAnimation: Apply an animation to a player.
