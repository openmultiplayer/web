---
title: OnVehicleSirenStateChange
description: Acest callback este apelat atunci când sirena unui vehicul este declansata.
tags: ["vehicle"]
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## Descriere

Acest callback este apelat atunci când sirena unui vehicul este declansata.

| Nume      | Descriere                                                 |
| --------- | --------------------------------------------------------- |
| playerid  | ID-ul jucătorului care a activat sirena (șofer).          |
| vehicleid | ID-ul vehiculului pentru care a fost activată sirena.     |
| newstate  | 0 dacă sirena a fost oprită, 1 dacă sirena a fost pornită. |

## Returnări

1 - Va împiedica modul de joc să primească acest apel invers.

0 - Indică faptul că acest apel invers va fi trecut în modul de joc.

Este întotdeauna numit primul în filterscript-uri.

## Exemple

```c
public OnVehicleSirenStateChange(playerid, vehicleid, newstate)
{
    if (newstate)
    {
        GameTextForPlayer(playerid, "~W~Sirenă ~G~pornita", 1000, 3);
    }
    else
    {
        GameTextForPlayer(playerid, "~W~Sirenă ~r~oprita", 1000, 3);
    }
    return 1;
}
```

## Note

:::tip

Acest callback este apelat numai atunci când sirena unui vehicul este activată sau dezactivată, NU atunci când este utilizată sirena alternativă (claxon de menținere).

:::

## Funcții similare

- [GetVehicleParamsSirenState](../functions/GetVehicleParamsSirenState): verificați dacă sirena unui vehicul este activată sau oprită.