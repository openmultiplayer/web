---
title: GetPVarFloat
sidebar_label: GetPVarFloat
description: Gets a player variable as a float.
tags: ["pvar"]
---

## คำอธิบาย

Gets a player variable as a float.

| Name     | Description                                                 |
| -------- | ----------------------------------------------------------- |
| playerid | The ID of the player whose player variable you want to get. |
| varname  | The name of the player variable.                            |

## ส่งคืน

The float from the specified player variable

## ตัวอย่าง

```c
forward LoadPos(playerid);
public LoadPos(playerid)
{
    SetPlayerPos(playerid, GetPVarFloat(playerid,"xpos"), GetPVarFloat(playerid,"ypos"), GetPVarFloat(playerid,"zpos"));
    return 1;
}
```

## บันทึก

:::tip

Variables aren't reset until after OnPlayerDisconnect is called, so the values are still accessible in OnPlayerDisconnect.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SetPVarInt: Set an integer for a player variable.
- GetPVarInt: Get the previously set integer from a player variable.
- SetPVarString: Set a string for a player variable.
- GetPVarString: Get the previously set string from a player variable.
- SetPVarFloat: Set a float for a player variable.
- DeletePVar: Delete a player variable.
