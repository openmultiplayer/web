---
title: GetMenuColumnWidth
description: Get the width of the one or two columns.
tags: ["menu"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the width of the one or two columns.

| Name                | Description                                                                   |
| ------------------- | ----------------------------------------------------------------------------- |
| Menu:menuid         | The ID of the menu.                                                           |
| &Float:column1Width | A float variable in which to store the column1 width in, passed by reference. |
| &Float:column2Width | A float variable in which to store the column2 width in, passed by reference. |

## Returns

This function always returns **true**.

## Examples

```c
new Float:column1Width, Float:column2Width;
GetMenuColumnWidth(menuid, column1Width, column2Width);

// Or you can only get column1 width
new Float:column1Width;
GetMenuColumnWidth(menuid, column1Width);
```

## Related Functions

- [GetMenuPos](GetMenuPos): Get the x/y screen position of the menu.
