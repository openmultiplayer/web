---
title: OnTrailerUpdate
description: Acest callback este apelat atunci când un jucător a trimis o actualizare a trailerului.
tags: []
---

## Descriere

Acest callback este apelat atunci când un jucător a trimis o actualizare a trailerului.

| Nume      | Descriere                                      |
| --------- | ---------------------------------------------- |
| playerid  | ID-ul jucătorului care a trimis o actualizare a trailerului |
| vehicleid | Trailerul în curs de actualizare                            |

## Returnări

0 - Anulează orice actualizări ale trailerului pentru a fi trimise altor jucători. Actualizarea este încă trimisă jucătorului de actualizare.

1 - Procesează actualizarea trailerului ca de obicei și o sincronizează între toți jucătorii.

Este întotdeauna numit primul în filterscript-uri.

## Examples

```c
public OnTrailerUpdate(playerid, vehicleid)
{
    DetachTrailerFromVehicle(GetPlayerVehicleID(playerid));
    return 0;
}
```

## Note

:::warning

Acest apel invers este apelat foarte frecvent pe secundă pe remorcă. Ar trebui să vă abțineți de la implementarea unor calcule intensive sau operațiuni intensive de scriere/citire a fișierelor în acest apel invers.

:::

## Funcții similare

- [GetVehicleTrailer](../functions/GetVehicleTrailer): Verificați ce remorcă trage un vehicul.
- [IsTrailerAttachedToVehicle](../functions/IsTrailerAttachedToVehicle): Verificați dacă o remorcă este atașată la un vehicul.
- [AttachTrailerToVehicle](../functions/AttachTrailerToVehicle): Atașați o remorcă la un vehicul.
- [DetachTrailerFromVehicle](../functions/DetachTrailerFromVehicle): Detașați o remorcă de pe un vehicul.