---
title: GetPVarNameAtIndex
description: Retrieve the name of a player's pVar via the index.
tags: ["pvar"]
---

## คำอธิบาย

Retrieve the name of a player's pVar via the index.

| Name          | Description                                                    |
| ------------- | -------------------------------------------------------------- |
| playerid      | The ID of the player whose player variable to get the name of. |
| index         | The index of the player's pVar.                                |
| ret_varname[] | A string to store the pVar's name in, passed by reference.     |
| ret_len       | The max length of the returned string, use sizeof().           |

## ส่งคืน

This function does not return any specific values.

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GetPVarType: Get the type of the player variable.
- GetPVarInt: Get the previously set integer from a player variable.
- GetPVarFloat: Get the previously set float from a player variable.
- GetPVarString: Get the previously set string from a player variable.
