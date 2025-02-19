---
title: GetMenuColumnHeader
sidebar_label: GetMenuColumnHeader
description: Get the text in the header of the specified column.
tags: ["menu"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the text in the header of the specified column.

| Name                  | Description                                                 |
| --------------------- | ----------------------------------------------------------- |
| Menu:menuid           | The ID of the menu.                                         |
| column                | The column.                                                 |
| header[]              | An array into which to store the text, passed by reference. |
| len = sizeof (header) | The length of the text that should be stored.               |

## Returns

This function always returns **true**.

## Examples

```c
new text[32];

// Get the menu header text in the column 1
GetMenuColumnHeader(menuid, 1, text, sizeof(text));
```

## Related Functions

- [CreateMenu](CreateMenu): Creates a menu.
