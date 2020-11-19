---
title: GetSVarNameAtIndex
description: Retrieve the name of a sVar via the index.
tags: []
---

## คำอธิบาย

Retrieve the name of a sVar via the index.

| Name          | Description                                                |
| ------------- | ---------------------------------------------------------- |
| index         | The index of the sVar.                                     |
| ret_varname[] | A string to store the sVar's name in, passed by reference. |
| ret_len       | The max length of the returned string, use sizeof().       |

## ส่งคืน

This function does not return any specific values.

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- GetSVarType: Get the type of the server variable.
- GetSVarInt: Get a player server as an integer.
- GetSVarFloat: Get the previously set float from a server variable.
- GetSVarString: Get the previously set string from a server variable.
