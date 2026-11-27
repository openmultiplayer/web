---
title: "floatabs | open.mp"
description: "This function returns the absolute value of float."
canonical: https://open.mp/docs/scripting/functions/floatabs
language: en
---

# floatabs

## Description

This function returns the [absolute value](https://en.wikipedia.org/wiki/Absolute_value) of float.

| Name | Description |
| --- | --- |
| Float:value | The float value to get the absolute value of. |

## Returns

The absolute value of the float (as a float value).

## Examples

```c
new Float:value;

value = floatabs(47.0); // This will return 47.0

value = floatabs(-47.0); // This will return the same.
```
