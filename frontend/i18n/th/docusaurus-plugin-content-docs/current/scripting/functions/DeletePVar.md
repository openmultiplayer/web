---
title: DeletePVar
sidebar_label: DeletePVar
description: Deletes a previously set player variable.
tags: ["pvar"]
---

## คำอธิบาย

Deletes a previously set player variable.

| Name     | Description                                           |
| -------- | ----------------------------------------------------- |
| playerid | The ID of the player whose player variable to delete. |
| varname  | The name of the player variable to delete.            |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. Either the player specified isn't connected or there is no variable set with the given name.

## ตัวอย่าง

```c
SetPVarInt(playerid, "SomeVarName", 69);

// Later on, when the variable is no longer needed...

DeletePVar(playerid, "SomeVarName");
```

## บันทึก

:::tip

Once a variable is deleted, attempts to retrieve the value will return 0 (for integers and floats and NULL for strings.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [SetPVarInt](../../scripting/functions/SetPVarInt.md): Set an integer for a player variable.
- [GetPVarInt](../../scripting/functions/GetPVarInt.md): Get the previously set integer from a player variable.
- [SetPVarString](../../scripting/functions/SetPVarString.md): Set a string for a player variable.
- [GetPVarString](../../scripting/functions/GetPVarString.md): Get the previously set string from a player variable.
- [SetPVarFloat](../../scripting/functions/SetPVarFloat.md): Set a float for a player variable.
- [GetPVarFloat](../../scripting/functions/GetPVarFloat.md): Get the previously set float from a player variable.
