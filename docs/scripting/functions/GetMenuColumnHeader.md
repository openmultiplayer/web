---
title: "GetMenuColumnHeader | open.mp"
description: "Get the text in the header of the specified column."
canonical: https://open.mp/docs/scripting/functions/GetMenuColumnHeader
language: en
---

# GetMenuColumnHeader

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Get the text in the header of the specified column.

| Name | Description |
| --- | --- |
| Menu:menuid | The ID of the menu. |
| column | The column. |
| header\[\] | An array into which to store the text, passed by reference. |
| len = sizeof (header) | The length of the text that should be stored. |

## Returns

This function always returns **true**.

## Examples

```c
new text[32];

// Get the menu header text in the column 1
GetMenuColumnHeader(menuid, 1, text, sizeof(text));
```

## Related Functions

-   [CreateMenu](https://open.mp/docs/scripting/functions/CreateMenu): Creates a menu.
