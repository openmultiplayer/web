---
title: GetMenuColumns
description: Get the number of active columns.
tags: ["menu"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the number of active columns.

| Name        | Description                                 |
| ----------- | ------------------------------------------- |
| Menu:menuid | The ID of the menu to get the columns from. |

## Returns

Returns the number of active columns.

## Examples

```c
new columns = GetMenuColumns(menuid);
```

## Related Functions

- [GetMenuItems](GetMenuItems): Get the menu items.
- [GetMenuItem](GetMenuItem): Get the text in the specified cell - addressed by column and row.
