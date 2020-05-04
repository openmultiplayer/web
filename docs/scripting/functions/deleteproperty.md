---
id: deleteproperty
title: deleteproperty
description: Delete an earlier set property (setproperty).
tags: []
---

<TagLinks />

## Description

Delete an earlier set property (setproperty).

| Name   | Description                                                                    |
| ------ | ------------------------------------------------------------------------------ |
| id     | The virtual machine to use. You should keep this as zero.                      |
| name[] | The property's name, you should keep this blank ("").                          |
| value  | The property's unique ID. Use the hash-function to calculate it from a string. |

## Returns

The value of the property. If the property does not exist, the function returns 0.

## Examples

```c
deleteproperty(0, "", 123984334);
```

## Related Functions

- Setproperty: Set a property.
- Getproperty: Get the value of a property.
- Existproperty: Check if a property exists.
