---
title: GetGravity
sidebar_label: GetGravity
description: Kunin ang kasalukuyang naka set na gravity.
tags: []
---

## Description

Kunin ang kasalukuyang naka set na gravity.

## Examples

```c
#if !defined GetGravity
    native Float:GetGravity();
#endif

printf("Current gravity: %f", GetGravity());
```

## Notes

:::warning

Ang function na ito ay hindi tinukoy bilang default. Magdagdag ng 'native Float:GetGravity();' sa ilalim ng inclusion ng a_samp.inc para gamitin ito.

:::

## Related Functions

- [SetGravity](SetGravity): I-set ang global gravity.