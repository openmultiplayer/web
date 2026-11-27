---
title: "deleteproperty | open.mp"
description: "Delete an earlier set property (setproperty)."
canonical: https://open.mp/docs/scripting/functions/deleteproperty
language: en
---

# deleteproperty

## Description

Delete an earlier set property ([setproperty](https://open.mp/docs/scripting/functions/setproperty)).

| Name | Description |
| --- | --- |
| id | The [virtual machine](https://en.wikipedia.org/wiki/Virtual_machine) to use. You should keep this as zero. _(optional=0)_ |
| name\[\] | The property's name, you should keep this blank (""). |
| value | The property's unique ID. Use the hash-function to calculate it from a string. _(optional=cellmin)_ |

## Returns

The value of the property. If the property does not exist, the function returns 0.

## Examples

```c
deleteproperty(0, "", 123984334);
```

## Notes

tip

It is recommended to use the PVars/SVars or GVar plugin instead of these natives for being very slow.

## Related Functions

-   [setproperty](https://open.mp/docs/scripting/functions/setproperty): Set a property.
-   [getproperty](https://open.mp/docs/scripting/functions/getproperty): Get the value of a property.
-   [existproperty](https://open.mp/docs/scripting/functions/existproperty): Check if a property exists.
