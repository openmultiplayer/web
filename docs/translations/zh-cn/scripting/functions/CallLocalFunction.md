---
title: CallLocalFunction
description: Calls a public function from the script in which it is used.
tags: ["core"]
---

## Description

Calls a public function from the script in which it is used.

| Name                 | Description                                 |
| -------------------- | ------------------------------------------- |
| const functionName[] | Public function's name.                     |
| const specifiers[]   | Tag/format of each variable                 |
| OPEN_MP_TAGS:...     | 'Indefinite' number of arguments of any tag |

## Returns

If the function exists, returns the same as the called function.

If the function does not exist, returns 0.

## Format Specifiers

| **Placeholder** | **Meaning**                                                                                                                                                                                                                                                                                   |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `a`             | Passes an array (the next placeholder should be d or i for the array size, so the function will be aware of it).<br/><br/>**NOTE**: It accepts only one dimension, so a trick like sizeof (array) + sizeof (array) \* sizeof (array[]) for the array size would be needed to pass a 2D array. |
| `c`             | Passes a single character.                                                                                                                                                                                                                                                                    |
| `d`,`i`         | Passes an integer (whole) number.                                                                                                                                                                                                                                                             |
| `x`             | Passes a number in hexadecimal notation.                                                                                                                                                                                                                                                      |
| `f`             | Passes a floating point number.                                                                                                                                                                                                                                                               |
| `s`             | Passes a string.                                                                                                                                                                                                                                                                              |

## Examples

```c
forward publicFunc(number, Float:flt, const string[]);
public publicFunc(number, Float:flt, const string[])
{
    printf("Received integer %i, float %f, string %s", number, flt, string);
    return 1;
}

CallLocalFunction("publicFunc", "ifs", 420, 68.999999999, "Hello world");
```

## Notes

:::warning

CallLocalFunction crashes the server if it's passing an empty string. (Fixed in open.mp)

:::

## Related Functions

- [CallRemoteFunction](CallRemoteFunction): Call a function in any loaded script.
