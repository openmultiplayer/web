---
title: floatdiv
sidebar_label: floatdiv
description: Hatiin ang isang float sa isa pa.
tags: ["math", "floating-point"]
---

<LowercaseNote />

## Description

Hatiin ang isang float sa isa pa. Redundant bilang ang operator ng dibisyon (/) ay gumagawa ng parehong bagay.

| Name           | Description                               |
| -------------- | ----------------------------------------- |
| Float:dividend | Unang float.                              |
| Float:divisor  | Pangalawang float (hinahati ang unang float.) |

## Returns

Ang quotient ng dalawang binigay na floats.

## Examples

```c
public OnGameModeInit()
{
    new Float:Number1 = 8.05, Float:Number2 = 3.5; //Nagdedeklara ng dalawang float, Number1 (8.05) at Number2 (3.5)
    new Float:Quotient;
    Quotient = floatdiv(Number1, Number2);       //Sine-save ang quotient(=8.05/3.5 = 2.3) ng Number1 at Number2 sa float na "Quotient"
    return 1;
}
```

## Related Functions

- [floatadd](floatadd): Mag add ng dalawang float nang magkasama.
- [floatsub](floatsub): Mag subtract ng float mula sa isa pang float.
- [floatmul](floatmul): Mag multiply ang dalawang float.