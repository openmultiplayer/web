---
title: "GetMenuColumns | open.mp"
description: "Get the number of active columns."
canonical: https://open.mp/docs/scripting/functions/GetMenuColumns
language: en
---

# GetMenuColumns

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Get the number of active columns.

| Name | Description |
| --- | --- |
| Menu:menuid | The ID of the menu to get the columns from. |

## Returns

Returns the number of active columns.

## Examples

```c
new columns = GetMenuColumns(menuid);
```

## Related Functions

-   [GetMenuItems](https://open.mp/docs/scripting/functions/GetMenuItems): Get the menu items.
-   [GetMenuItem](https://open.mp/docs/scripting/functions/GetMenuItem): Get the text in the specified cell - addressed by column and row.
