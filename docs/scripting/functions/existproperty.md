---
title: "existproperty | open.mp"
description: "Check if a property exist."
canonical: https://open.mp/docs/scripting/functions/existproperty
language: en
---

# existproperty

## Description

Check if a property exist.

| Name | Description |
| --- | --- |
| id | The [virtual machine](https://en.wikipedia.org/wiki/Virtual_machine) to use, you should keep this zero. _(optional=0)_ |
| name\[\] | The property's name, you should keep this "". |
| value | The property's unique ID. Use the hash-function to calculate it from a string. _(optional=cellmin)_ |

## Returns

True if the property exists and false otherwise.

## Examples

```c
if (existproperty(0, "", 123984334))
{
    //the property exists, do something
}
```

## Notes

tip

It is recommended to use the PVars/SVars or GVar plugin instead of these natives for being very slow.

## Related Functions

-   [setproperty](https://open.mp/docs/scripting/functions/setproperty): Set a property.
-   [getproperty](https://open.mp/docs/scripting/functions/getproperty): Get the value of a property.
-   [deleteproperty](https://open.mp/docs/scripting/functions/deleteproperty): Delete a property.
