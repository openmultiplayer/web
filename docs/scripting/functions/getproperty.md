---
title: "getproperty | open.mp"
description: "Get a specific property from the memory, the string is returned as a packed string!"
canonical: https://open.mp/docs/scripting/functions/getproperty
language: en
---

# getproperty

## Description

Get a specific property from the memory, the string is returned as a packed string!

| Name | Description |
| --- | --- |
| id | The [virtual machine](https://en.wikipedia.org/wiki/Virtual_machine) to use, you should keep this zero. _(optional=0)_ |
| name\[\] | The property's name, you should keep this "". |
| value | The property's unique ID, Use the hash-function to calculate it from a string. _(optional=cellmin)_ |
| string\[\] | The variable to store the result in, passed by reference. |

## Returns

The value of a property when the name is passed in; fills in the string argument when the value is passed in. If the property does not exist, this function returns zero.

## Examples

```c
new value[16];

getproperty(0, "", 123984334, value);

strunpack(value, value, sizeof(value));

print(value);
```

## Notes

tip

It is recommended to use the PVars/SVars or GVar plugin instead of these natives for being very slow.

## Related Functions

-   [setproperty](https://open.mp/docs/scripting/functions/setproperty): Set a property.
-   [deleteproperty](https://open.mp/docs/scripting/functions/deleteproperty): Delete a property.
-   [existproperty](https://open.mp/docs/scripting/functions/existproperty): Check if a property exists.
