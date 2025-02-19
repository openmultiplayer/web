---
title: OnVehicleDamageStatusUpdate
sidebar_label: OnVehicleDamageStatusUpdate
description: Acest callback este apelat atunci când un element al vehiculului, cum ar fi ușile, anvelopele, panourile sau luminile își schimbă starea de deteriorare.
tags: ["vehicle"]
---

:::tip

Pentru câteva funcții utile pentru lucrul cu valorile daunelor vehiculului, consultați [aici](../resources/damagestatus).

:::

## Descriere

This callback is called when a vehicle element such as doors, tires, panels, or lights change their damage status.

| Nume      | Descriere                                                                                              |
| --------- | ------------------------------------------------------------------------------------------------------ |
| vehicleid | ID-ul vehiculului căruia i-a fost schimbat starea de deteriorare.                                                |
| playerid  | ID-ul jucătorului care a sincronizat modificarea stării deteriorării (care a avut mașina avariată sau reparată). |

## Returnări

1 - Va împiedica alte filterscript-uri să primească acest apel invers.

0 - Indică faptul că acest apel invers va fi transmis următorului filterscript.

Este întotdeauna numit primul în filterscript-uri.

## Exemple

```c
public OnVehicleDamageStatusUpdate(vehicleid, playerid)
{
    // Obține starea de deteriorare a tuturor componentelor
    new panels, doors, lights, tires;
    GetVehicleDamageStatus(vehicleid, panels, doors, lights, tires);

    // Setați anvelopele la 0, ceea ce înseamnă că niciunul nu este spart
    tires = 0;

    // Actualizați starea de deteriorare a vehiculului cu anvelope nescăpate
    UpdateVehicleDamageStatus(vehicleid, panels, doors, lights, tires);
    return 1;
}
```

## Note

:::tip

Aceasta nu include modificările de sănătate a vehiculului.

:::

## Funcții similare

- [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus): Obțineți starea de deteriorare a vehiculului pentru fiecare parte individual.
- [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus): Actualizați daunele vehiculului.