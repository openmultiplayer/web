---
title: floatstr
description: Kino-convert ang isang string sa isang float.
tags: ["string", "floating-point"]
---

<LowercaseNote />

## Description

Converts a string to a float.

| Name   | Description                         |
| ------ | ----------------------------------- |
| string | Ang string na i-convert sa isang float. |

## Returns

Ang hiniling na value ng float.

## Examples

```c
new before[4] = "6.9"; // ISANG STRING na may hawak na FLOAT.
SetPlayerPos(playerid, 0, 0, floatstr(before));
```

## Related Functions

- [floatround](floatround): I-convert ang float sa isang integer (rounding).
- [float](float): I-convert ang isang integer sa isang float.