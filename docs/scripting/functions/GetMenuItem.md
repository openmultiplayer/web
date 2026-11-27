---
title: "GetMenuItem | open.mp"
description: "Get the text in the specified cell - addressed by column and row."
canonical: https://open.mp/docs/scripting/functions/GetMenuItem
language: en
---

# GetMenuItem

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Get the text in the specified cell - addressed by column and row.

| Name | Description |
| --- | --- |
| Menu:menuid | The ID of the menu. |
| column | The column. |
| row | The row to get the text of. |
| cell\[\] | An array into which to store the text, passed by reference. |
| len | The length of the string that should be stored. |

## Returns

This function always returns true.

## Examples

```c
new text[32];

// Get the menu item text in the column 1 and row 2
GetMenuItem(menuid, 1, 2, text, sizeof(text));
```

## Related Functions

-   [GetMenuItems](https://open.mp/docs/scripting/functions/GetMenuItems): Get the menu items.
-   [GetMenuColumns](https://open.mp/docs/scripting/functions/GetMenuColumns): Get the number of active columns.
