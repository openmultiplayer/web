---
title: GetMenuItems
description: Get the number of rows in the given column.
tags: ["menu"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the number of rows in the given column.

| Name        | Description         |
| ----------- | ------------------- |
| Menu:menuid | The ID of the menu. |
| column      | The column.         |

## Returns

Returns the number of rows.

## Examples

```c
// Get the menu number of rows in the column 1
new items = GetMenuItems(menuid, 1);
```

## Related Functions

- [GetMenuColumns](GetMenuColumns): Get the number of active columns.
- [GetMenuItem](GetMenuItem): Get the text in the specified cell - addressed by column and row.
