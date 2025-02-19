---
title: floatfract
sidebar_label: floatfract
description: Kunin ang fractional na bahagi ng float.
tags: ["math", "floating-point"]
---

<LowercaseNote />

## Description

Kunin ang fractional na bahagi ng float. Nangangahulugan ito ng halaga ng mga numero pagkatapos ng decimal point.

| Name  | Description                              |
| ----- | ---------------------------------------- |
| value | Ang float para makuha ang fractional na bahagi ng. |

## Returns

Ang fractional na bahagi ng float, bilang float value.

## Examples

```c
new Float:fFract = floatfract(3.14159); // Magbabalik nang 0.14159
```

## Related Functions

- [floatround](floatround): I-convert ang isang float sa isang integer (rounding).