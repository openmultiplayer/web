---
title: floatcos
description: Kunin ang cosine mula sa isang naibigay na anggulo.
tags: ["math", "floating-point"]
---

<LowercaseNote />

## Description

Kunin ang cosine mula sa isang naibigay na anggulo. Ang input angle ay maaaring nasa radians, degrees o grades.

| Name        | Description                                            |
| ----------- | ------------------------------------------------------ |
| Float:value | Ang anggulo kung saan makukuha ang cosine.             |
| anglemode   | Ang [angle mode](../resources/anglemodes) na gagamitin, depende sa value na ipinasok. |

## Returns

Ang cosine ng value na ipinasok.

## Examples

```c
public OnGameModeInit()
{
    printf("The cosine from 90° is %f", floatcos(90.0, degrees));
    // Output: 0
    return 1;
}
```

## Notes

:::warning

Gumagamit ang GTA/SA-MP ng mga degree para sa mga anggulo sa karamihan ng mga pangyayari, halimbawa [GetPlayerFacingAngle](GetPlayerFacingAngle). Samakatuwid, malamang na gugustuhin mong gamitin ang 'degrees' angle mode, hindi radians. Tandaan din na ang mga anggulo sa GTA ay counterclockwise; 270° ay Silangan at 90° ay Kanluran. Ang timog ay 180° pa rin at ang Hilaga ay 0°/360° pa rin.

:::

## Related Functions

- [floatsin](floatsin): Kunin ang sine mula sa isang tiyak na anggulo.
- [floattan](floattan): Kunin ang tangent mula sa isang tiyak na anggulo.