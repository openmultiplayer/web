---
id: getproperty
title: getproperty
description: Get a specific property from the memory, the string is returned as a packed string!.
tags: []
---

:::warning

This function starts with lowercase letter.

:::

## Description

Get a specific property from the memory, the string is returned as a packed string!

| Name     | Description                                                                    |
| -------- | ------------------------------------------------------------------------------ |
| id       | The virtual machine to use, you should keep this zero.                         |
| name[]   | The property's name, you should keep this "".                                  |
| value    | The property's unique ID, Use the hash-function to calculate it from a string. |
| string[] | The variable to store the result in, passed by reference.                      |

## Returns

The value of a property when the name is passed in; fills in the string argument when the value is passed in. If the property does not exist, this function returns zero.

## Examples

```c
new value[16];

getproperty(0, "", 123984334, value);

strunpack(value, value, sizeof(value));

print(value);
```

## Related Functions

- [Setproperty](Setproperty.md): Set a property.
- [Deleteproperty](Deleteproperty.md): Delete a property.
- [Existproperty](Existproperty.md): Check if a property exists.
