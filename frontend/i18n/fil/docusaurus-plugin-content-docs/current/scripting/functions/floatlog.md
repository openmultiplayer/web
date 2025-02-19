---
title: floatlog
sidebar_label: floatlog
description: Binibigyang-daan ka ng function na ito na makuha ang logarithm ng isang float value.
tags: ["math", "floating-point"]
---

<LowercaseNote />

## Description

Binibigyang-daan ka ng function na ito na makuha ang logarithm ng isang float value.

| Name        | Description                              |
| ----------- | ---------------------------------------- |
| Float:value | Ang value kung saan makukuha ang logarithm. |
| Float:base  | Ang logarithm base.                      |

## Returns

Ang logarithm bilang isang float value.

## Examples

```c
public OnGameModeInit()
{
    printf("The logarithm of 15.0 with the base 10.0 is %f", floatlog( 15.0, 10.0 ));
    return 1;
}
```

## Related Functions

- [floatsqroot](floatsqroot): Kalkulahin ang square root ng isang floating point value.
- [floatpower](floatpower): Nagtataas ng ibinigay na halaga sa isang kapangyarihan ng exponent.