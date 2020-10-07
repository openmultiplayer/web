---
id: existproperty
title: existproperty
description: Check if a property exist.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## Description

Check if a property exist.

| Name   | Description                                                                    |
| ------ | ------------------------------------------------------------------------------ |
| id     | The virtual machine to use, you should keep this zero.                         |
| name[] | The property's name, you should keep this "".                                  |
| value  | The property's unique ID. Use the hash-function to calculate it from a string. |

## Returns

True if the property exists and false otherwise.

## Examples

```c
if ( existproperty(0, "", 123984334) )
{
    //the property exists, do something
}
```

## Notes

:::tip

It is recommended to use the PVars/ SVars or GVar plugin instead of these natives for being very slow.

## Related Functions

- [SetProperty](SetProperty): Set a property.
- [GetProperty](GetProperty): Get the value of a property.
- [DeleteProperty](DeleteProperty): Delete a property.
