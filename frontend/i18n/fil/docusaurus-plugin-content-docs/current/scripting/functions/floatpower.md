---
title: floatpower
sidebar_label: floatpower
description: Itinataas ang ibinigay na halaga sa kapangyarihan ng exponent.
tags: ["math", "floating-point"]
---

<LowercaseNote />

## Description

Itinataas ang ibinigay na halaga sa kapangyarihan ng exponent.

| Name     | Description                                                               |
| -------- | ------------------------------------------------------------------------- |
| value    | Ang halaga na itataas sa isang power, bilang isang floating-point na numero. |
| exponent | Ang exponent ay isa ring floating-point na numero. Maaaring ito ay zero o negatibo. |

## Returns

Ang resulta ng 'value' sa power ng 'exponent'.

## Examples

```c
printf("2 to the power of 8 is %f", floatpower(2.0, 8.0));
// Result: 256.0
```

## Related Functions

- [floatsqroot](floatsqroot): Kalkulahin ang square root ng isang floating point value.
- [floatlog](floatlog): Kunin ang logarithm ng float value.