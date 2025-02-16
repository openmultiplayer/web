---
title: floatround
sidebar_label: floatround
description: Round a floating point number to an integer value.
tags: ["math", "floating-point"]
---

<LowercaseNote />

## Description

Round a floating point number to an integer value.

| Name                     | Description                                                                                     |
|--------------------------|-------------------------------------------------------------------------------------------------|
| Float:value              | The value to round.                                                                             |
| floatround_method:method | The [floatround mode](../resources/floatroundmodes) to use.<br />By default: `floatround_round` |

## Returns

The rounded value as an integer.

## Examples

```c
new value = floatround(3.3, floatround_ceil);
printf("3.3 rounded to %d", value); // 3.3 rounded to 4
```

<br />

```c
new value = floatround(50.996229);
printf("50.996229 rounded to %d", value); // 50.996229 rounded to 51
```

<br />

```c
new value = floatround(270.0034);
printf("270.0034 rounded to %d", value); // 270.0034 rounded to 270
```

## Related Functions

- [float](float): Convert an integer to a float.
- [floatstr](floatstr): Convert an string to a float.

## Related Resources

- [Floatround Modes](../resources/floatroundmodes)
