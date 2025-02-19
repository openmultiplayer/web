---
title: Floatround Modes
sidebar_label: Floatround Modes
description: The rounding modes used with floatround.
---

:::info

A list of possible floatround modes which can be used by [floatround](../functions/floatround).

:::

| Mode                | Description                                                                                         |
| ------------------- | --------------------------------------------------------------------------------------------------- |
| floatround_round    | Round to the nearest integer. A fractional part of exactly 0.5 rounds upwards (this is the default) |
| floatround_floor    | Round downwards                                                                                     |
| floatround_ceil     | Round upwards                                                                                       |
| floatround_tozero   | Round downwards for positive values and upwards for negative values ("truncate")                    |
| floatround_unbiased | The same as floatround_round                                                                        |
