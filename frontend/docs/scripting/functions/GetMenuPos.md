---
title: GetMenuPos
description: Get the x/y screen position of the menu.
tags: ["menu"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the x/y screen position of the menu.

| Name        | Description                                                                |
| ----------- | -------------------------------------------------------------------------- |
| Menu:menuid | The ID of the menu.                                                        |
| &Float:x    | A float variable in which to store the X position in, passed by reference. |
| &Float:y    | A float variable in which to store the Y position in, passed by reference. |

## Returns

This function always returns true.

## Examples

```c
new Float:x, Float:y;
GetMenuPos(menuid, x, y);
```

## Related Functions

- [GetMenuColumnWidth](GetMenuColumnWidth): Get the width of columns.
