---
title: "floatround | open.mp"
description: "Round a floating point number to an integer value."
canonical: https://open.mp/docs/scripting/functions/floatround
language: en
---

# floatround

## Description

Round a floating point number to an integer value.

| Name | Description |
| --- | --- |
| Float:value | The value to round. |
| floatround\_method:method | The [floatround mode](https://open.mp/docs/scripting/resources/floatroundmodes) to use.  
By default: `floatround_round` |

## Returns

The rounded value as an integer.

## Examples

```c
new value = floatround(3.3, floatround_ceil);
printf("3.3 rounded to %d", value); // 3.3 rounded to 4
```

  

```c
new value = floatround(50.996229);
printf("50.996229 rounded to %d", value); // 50.996229 rounded to 51
```

  

```c
new value = floatround(270.0034);
printf("270.0034 rounded to %d", value); // 270.0034 rounded to 270
```

## Related Functions

-   [float](https://open.mp/docs/scripting/functions/float): Convert an integer to a float.
-   [floatstr](https://open.mp/docs/scripting/functions/floatstr): Convert an string to a float.

## Related Resources

-   [Floatround Modes](https://open.mp/docs/scripting/resources/floatroundmodes)
