---
title: OnPlayerLeaveCheckpoint
description: Acest callback este apelat atunci când un jucător părăsește punctul de control setat pentru el de SetPlayerCheckpoint.
tags: ["player", "checkpoint"]
---

## Descriere

Acest callback este apelat atunci când un jucător părăsește punctul de control setat pentru el de SetPlayerCheckpoint. Numai un singur punct de control poate fi setat la un moment dat.

| Nume     | Descriere                                            |
| -------- | ---------------------------------------------------- |
| playerid | ID-ul jucătorului care a părăsit punctul de control. |

## Returnări

Este întotdeauna numit primul în filterscript-uri.

## Exemple

```c
public OnPlayerLeaveCheckpoint(playerid)
{
    printf("Jucătorul %i a părăsit un punct de control!", playerid);
    return 1;
}
```

## Note

<TipNPCCallbacks />

## Funcții similare

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Creați un punct de control pentru un jucător.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Dezactivează punctul de control curent al jucătorului.
- [IsPlayerInCheckpoint](../functions/IsPlayerInCheckpoint): Verificați dacă un jucător se află într-un punct de control.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Creați un punct de control al cursei pentru un jucător.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Dezactivează punctul de control al cursei curent al jucătorului.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Verificați dacă un jucător se află într-un punct de control al cursei.