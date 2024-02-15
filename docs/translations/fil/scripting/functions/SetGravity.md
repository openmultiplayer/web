---
title: SetGravity
description: I-set ang gravity para sa lahat ng player.
tags: []
---

## Description

I-set ang gravity para sa lahat ng player.

| Name          | Description                                                       |
| ------------- | ----------------------------------------------------------------- |
| Float:gravity | Ang value ng gravity na i-seset (pagitan ng -50 and 50).          |

## Returns

Ang function na ito ay palaging rereturn ng 1, kahit na nabigo itong isagawa kung ang gravity ay wala sa mga limitasyon (mas mababa sa -50 o mataas sa +50).

## Examples

```c
public OnGameModeInit()
{
    // I-set ang gravity na parang buwan
    SetGravity(0.001);

    return 1;
}
```

## Notes

:::warning

Ang default na gravity ay 0.008.

:::

## Related Functions

- [GetGravity](GetGravity): Kunin ang kasalukuyang naka set na gravity.
- [SetWeather](SetWeather): I-set ang pandaigdigang panahon.
- [SetWorldTime](SetWorldTime): I-set ang pandaigdigang oras ng server.