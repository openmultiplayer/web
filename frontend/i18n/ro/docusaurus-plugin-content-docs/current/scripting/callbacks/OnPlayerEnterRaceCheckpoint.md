---
title: OnPlayerEnterRaceCheckpoint
description: Acest callback este apelat atunci când un jucător intră într-un checkpoint al unei curse.
tags: ["player", "checkpoint", "racecheckpoint"]
---

## Descriere

Acest callback este apelat atunci când un jucător intră într-un checkpoint al unei curse.

| Name     | Descriere                                                |
| -------- | -------------------------------------------------------- |
| playerid | ID-ul jucătorului care a intrat în checkpoint-ul cursei. |

## Returnări

Este întotdeauna numit primul în filterscript-uri.

## Exemple

```c
public OnPlayerEnterRaceCheckpoint(playerid)
{
    printf("Jucatorul %d a intrat intr-un checkpoint de cursa!", playerid);
    return 1;
}
```

## Note

<TipNPCCallbacks />

## Funcții similare

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Creați un checkpoint pentru un jucător.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Dezactivează checkpoint-ul curent al jucătorului.
- [IsPlayerInCheckpoint](../functions/IsPlayerInRaceCheckpoint): Verificați dacă un jucător se află într-un checkpoint.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Creați un checkpoint de cursei pentru un jucător.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Dezactivează checkpoint-ul cursei curente a jucătorului.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Verificați dacă un jucător se află într-un checkpoint al unei curse.