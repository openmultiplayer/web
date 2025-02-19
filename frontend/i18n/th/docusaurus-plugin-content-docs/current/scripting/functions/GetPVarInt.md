---
title: GetPVarInt
sidebar_label: GetPVarInt
description: Gets an integer player variable's value.
tags: ["pvar"]
---

## คำอธิบาย

Gets an integer player variable's value.

| Name     | Description                                                                 |
| -------- | --------------------------------------------------------------------------- |
| playerid | The ID of the player whose player variable to get.                          |
| varname  | The name of the player variable (case-insensitive). Assigned in SetPVarInt. |

## ส่งคืน

The integer value of the specified player variable. It will still return 0 if the variable is not set, or the player does not exist.

## ตัวอย่าง

```c
public OnPlayerDisconnect(playerid,reason)
{
    printf("money: %d", GetPVarInt(playerid, "money")); // get the saved value ('money')
    // will print 'money: amount'
    return 1;
}
```

## บันทึก

:::tip

Variables aren't reset until after OnPlayerDisconnect is called, so the values are still accessible in OnPlayerDisconnect.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- SetPVarInt: Set an integer for a player variable.
- SetPVarString: Set a string for a player variable.
- GetPVarString: Get the previously set string from a player variable.
- SetPVarFloat: Set a float for a player variable.
- GetPVarFloat: Get the previously set float from a player variable.
- DeletePVar: Delete a player variable.
