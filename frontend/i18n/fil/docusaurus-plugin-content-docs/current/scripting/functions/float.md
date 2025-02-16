---
title: float
sidebar_label: float
description: Kino-convert ang isang integer sa isang float.
tags: ["floating-point"]
---

<LowercaseNote />

## Description

Kino-convert ang isang integer sa isang float.

| Name  | Description                         |
| ----- | ----------------------------------- |
| value | Integer value na i-convert sa isang float|

## Returns

Ang ibinigay na integer bilang isang float

## Examples

```c
new Float:FloatValue;
new Value = 52;
FloatValue = float(Value);   // Kino-convert ang Value(52) sa isang float at iniimbak ito sa 'FloatValue' (52.0)
```

## Related Functions

- [floatround](floatround): I-convert ang isang float sa isang integer (rounding).
- [floatstr](floatstr): I-convert ang isang string sa isang float.