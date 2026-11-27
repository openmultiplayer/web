---
title: "tolower | open.mp"
description: "This function changes a single character to lowercase."
canonical: https://open.mp/docs/scripting/functions/tolower
language: en
---

# tolower

## Description

This function changes a single character to lowercase.

| Name | Description |
| --- | --- |
| c | The character to change to lowercase. |

## Returns

The ASCII value of the character provided as lowercase.

## Examples

```c
public OnPlayerText(playerid, text[])
{
    text[0] = tolower(text[0]);
    //This sets the first character to lowercase.
    return 1;
}
```

## Related Functions

-   [toupper](https://open.mp/docs/scripting/functions/toupper): This function changes a single character to uppercase.
