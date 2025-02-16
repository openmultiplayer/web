---
title: OnVehicleSpawn
sidebar_label: OnVehicleSpawn
description: Acest callback este apelat atunci când un vehicul reapare.
tags: ["vehicle"]
---

:::warning

Acest callback se numește **doar** când vehiculul **re**apare! CreateVehicle și AddStaticVehicle(Ex) **nu** vor declanșa acest apel invers.

:::

## Descriere

Acest callback este apelat atunci când un vehicul reapare.

| Nume      | Descriere                           |
| --------- | ----------------------------------- |
| vehicleid | ID-ul vehiculului care a apărut.    |

## Returnări

0 - Va împiedica alte filterscript-uri să primească acest apel invers.

1 - Indică faptul că acest callback va fi transmis următorului filterscript.

Este întotdeauna numit primul în filterscript-uri.

## Exemple

```c
public OnVehicleSpawn(vehicleid)
{
    printf("Vehiculul %i a apărut!",vehicleid);
    return 1;
}
```

## Funcții similare

- [SetVehicleToRespawn](../functions/SetVehicleToRespawn): Readuceți un vehicul.
- [CreateVehicle](../functions/CreateVehicle): creează un vehicul.