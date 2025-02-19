---
title: floatround
sidebar_label: floatround
description: I-round ang isang floating point number sa isang integer value.
tags: ["math", "floating-point"]
---

<LowercaseNote />

## Description

I-round ang isang floating point number sa isang integer value.

| Name                                    | Description                  |
| --------------------------------------- | ---------------------------- |
| value                                   | Ang value na i-round          |
| [mode](../resources/floatroundmodes)    | Ang mga floatround mode na gagamitin. |

## Returns

Ang bilugan na halaga bilang isang integer.

## Examples

```c
floatround(3.3, floatround_ceil);
```

## Related Functions

- [float](float): I-convert ang isang integer sa isang float.
- [floatstr](floatstr): I-convert ang isang string sa isang float.