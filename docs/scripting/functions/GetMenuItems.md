---
title: "GetMenuItems | open.mp"
description: "Get the number of rows in the given column."
canonical: https://open.mp/docs/scripting/functions/GetMenuItems
language: en
---

# GetMenuItems

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Get the number of rows in the given column.

| Name | Description |
| --- | --- |
| Menu:menuid | The ID of the menu. |
| column | The column. |

## Returns

Returns the number of rows.

## Examples

```c
// Get the menu number of rows in the column 1
new items = GetMenuItems(menuid, 1);
```

## Related Functions

-   [GetMenuColumns](https://open.mp/docs/scripting/functions/GetMenuColumns): Get the number of active columns.
-   [GetMenuItem](https://open.mp/docs/scripting/functions/GetMenuItem): Get the text in the specified cell - addressed by column and row.
