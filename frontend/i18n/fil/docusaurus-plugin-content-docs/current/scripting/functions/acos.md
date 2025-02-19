---
title: acos
sidebar_label: acos
description: Kunin ang inverse value ng isang cosine sa degrees.
tags: ["math"]
---

<LowercaseNote />

## Description

Kunin ang inverse value ng isang cosine sa degrees. Sa trigonometriko, ang arc cosine ay ang kabaligtaran na operasyon ng cosine.

| Name        | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| Float:value | halaga na ang arc cosine ay nakalkula, sa pagitan [-1, +1].  |

## Returns

Ang anggulo sa degrees, sa pagitan [0.0,180.0].

## Examples

```c
//Ang arc cosine ng 0.500000 ay 60.000000 degrees.

public OnGameModeInit()
{
    new Float:param, Float:result;
    param = 0.5;
    result = acos(param);
    printf("The arc cosine of %f is %f degrees.", param, result);
    return 1;
}
```

## Related Functions

- [floatsin](floatsin): Kunin ang sine mula sa isang tiyak na anggulo.
- [floatcos](floatcos): Kunin ang cosine mula sa isang tiyak na anggulo.
- [floattan](floattan): Kunin ang tangent mula sa isang tiyak na anggulo.
- [asin](asin): Kunin ang kabaligtaran na halaga ng isang sine sa mga degree.
- [atan](atan): Kunin ang kabaligtaran na halaga ng isang tangent sa mga degree.
- [atan2](atan2): Kunin ang multi-valued inversed value ng isang tangent sa degrees.
