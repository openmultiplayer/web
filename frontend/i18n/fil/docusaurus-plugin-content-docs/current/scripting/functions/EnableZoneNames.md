---
title: EnableZoneNames
sidebar_label: EnableZoneNames
description: Binibigyang-daan ng function na ito na i-on ang mga pangalan ng zone / area gaya ng text na "Vinewood" o "Doherty" sa kanang ibaba ng screen habang papasok ang mga ito sa lugar.
tags: []
---

## Description

Binibigyang-daan ng function na ito na i-on ang mga pangalan ng zone / area gaya ng text na "Vinewood" o "Doherty" sa kanang ibaba ng screen habang papasok ang mga ito sa lugar. Isa itong opsyon sa gamemode at dapat itakda sa callback na OnGameModeInit.

| Name   | Description                                                                               |
| ------ | ----------------------------------------------------------------------------------------- |
| enable | Isang toggle na opsyon para sa kung gusto mo o hindi ang mga pangalan ng zone na i-on o i-off. Naka-off ang 0 at naka-on ang 1. |

## Returns

Ang function na ito ay hindi nagbabalik ng anumang value.

## Examples

```c
public OnGameModeInit()
{
    EnableZoneNames(1);
    return 1;
}
```

## Notes

:::warning

Inalis ang function na ito sa SA-MP 0.3. Ito ay dahil sa mga pag-crash na dulot nito.

:::