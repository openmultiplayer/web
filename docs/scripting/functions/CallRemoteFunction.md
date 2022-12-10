---
title: CallRemoteFunction
description: Calls a public function in any script that is loaded.
tags: []
---

## Description

Calls a public function in any script that is loaded.

| Name           | Description                                 |
| -------------- | ------------------------------------------- |
| function[]     | Public function's name.                     |
| format[]       | Tag/format of each variable                 |
| {Float,\_}:... | 'Indefinite' number of arguments of any tag |

## Returns

The value that the last public function returned.

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
forward CallMe(number, const string[]);
public CallMe(number, const string[])
{
    printf("CallMe called. Int: %i  String: %s.", number, string);
    return 1;
}

// Somewhere... in another file perhaps?
CallRemoteFunction("CallMe", "is", 69, "this is a string");
```

## Notes

:::warning

CallRemoteFunction crashes the server if it's passing an empty string.

:::

## Related Functions

- [CallLocalFunction](CallLocalFunction): Call a function in the script.
