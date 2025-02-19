---
title: SetPVarFloat
sidebar_label: SetPVarFloat
description: Set a float player variable's value.
tags: ["pvar"]
---

## คำอธิบาย

Set a float player variable's value.

| Name        | Description                                             |
| ----------- | ------------------------------------------------------- |
| playerid    | The ID of the player whose player variable will be set. |
| varname     | The name of the player variable.                        |
| float_value | The float you want to save in the player variable.      |

## ส่งคืน

1: The function was executed successfully.

0: The function failed to execute. Either the player specified is not connected, or the variable name is null or over 40 characters.

## ตัวอย่าง

```c
forward SavePos(playerid);
public SavePos(playerid)
{
    new Float:x,Float:y,Float:z;
    GetPlayerPos(playerid,x,y,z); // Get the players position
    SetPVarFloat(playerid,"xpos",x); // Save the float into a player variable
    SetPVarFloat(playerid,"ypos",y); // Save the float into a player variable
    SetPVarFloat(playerid,"zpos",z); // Save the float into a player variable
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
- GetPVarFloat: Get the previously set float from a player variable.
- DeletePVar: Delete a player variable.
