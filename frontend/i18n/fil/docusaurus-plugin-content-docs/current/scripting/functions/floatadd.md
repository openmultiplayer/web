---
title: floatadd
sidebar_label: floatadd
description: Nagdaragdag ng dalawang float nang magkasama.
tags: ["math", "floating-point"]
---

<LowercaseNote />

## Description

Nagdaragdag ng dalawang float nang magkasama. Ang function na ito ay kalabisan dahil ang karaniwang operator (+) ay gumagawa ng parehong bagay.

| Name          | Description   |
| ------------- | ------------- |
| Float:Number1 | Unang float.  |
| Float:Number2 | Pangalawang float. |

## Returns

Ang kabuuan ng dalawang binigay na float.

## Examples

```c
public OnGameModeInit()
{
    new Float:Number1 = 2, Float:Number2 = 3; //Nagdedeklara ng dalawang float, Number1 (2) at Number2 (3)
    new Float:Sum;
    Sum = floatadd(Number1, Number2);       //Sine-save ang Sum(=2+3 = 5) ng Number1 at Number2 sa float na "Sum"
    return 1;
}
```

## Related Functions

- [floatsub](floatsub): Nag su-subtract ng dalawang floats.
- [floatmul](floatmul): Nag mu-multiply ng dalawang floats.
- [floatdiv](floatdiv): Nag di-dive ng isang float sa isa pa.