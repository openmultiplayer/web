---
title: GetMenuItem
sidebar_label: GetMenuItem
description: Get the text in the specified cell - addressed by column and row.
tags: ["menu"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the text in the specified cell - addressed by column and row.

| Name      | Description                                                       |
| --------- | ----------------------------------------------------------------- |
| Menu:menuid  | The ID of the menu.  |
| column | The column. |
| row | The row to get the text of. |
| cell[] | An array into which to store the text, passed by reference. |
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

- [GetMenuItems](GetMenuItems): Get the menu items.
- [GetMenuColumns](GetMenuColumns): Get the number of active columns.
