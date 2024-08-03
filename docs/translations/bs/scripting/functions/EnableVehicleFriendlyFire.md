---
title: EnableVehicleFriendlyFire
description: Omogućite "friendly-fire" za timska vozila.
tags: ["vehicle"]
---

## Deskripcija

Omogućite "friendly-fire" za timska vozila. Igrači neće moći oštetiti vozila suigrača (mora se koristiti SetPlayerTeam!).

## Primjeri

```c
public OnGameModeInit()
{
    EnableVehicleFriendlyFire();
    return 1;
}
```

## Srodne Funkcije

- [SetPlayerTeam](SetPlayerTeam): Postavi tim igrača.
