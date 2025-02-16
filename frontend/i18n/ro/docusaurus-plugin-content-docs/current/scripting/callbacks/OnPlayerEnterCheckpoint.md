---
title: OnPlayerEnterCheckpoint
description: Acest callback este apelat atunci când un jucător intră în punctul de control setat pentru acel jucător.
tags: ["player", "checkpoint"]
---

## Descriere

Acest callback este apelat atunci când un jucător intră în punctul de control setat pentru acel jucător.

| Name     | Descriere                              |
| -------- | -------------------------------------- |
| playerid | Jucătorul care a intrat în checkpoint. |

## Returnări

Este întotdeauna numit primul în filterscript-uri.

## Exemple

```c
//În acest exemplu, un checkpoint este creat pentru jucător când apare,
//care creează un vehicul și dezactivează checkpoint-ul.

public OnPlayerSpawn(playerid)
{
    SetPlayerCheckpoint(playerid, 1982.6150, -220.6680, -0.2432, 3.0);
    return 1;
}

public OnPlayerEnterCheckpoint(playerid)
{
    CreateVehicle(520, 1982.6150, -221.0145, -0.2432, 82.2873, -1, -1, 60000);
    DisablePlayerCheckpoint(playerid);
    return 1;
}
```

## Note

<TipNPCCallbacks />

## Funcții similare

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Creați un checkpoint pentru un jucător.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Dezactivează checkpoint-ul curent al jucătorului.
- [IsPlayerInCheckpoint](../functions/IsPlayerInRaceCheckpoint): Verificați dacă un jucător se află într-un checkpoint.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Creați un checkpoint al cursei pentru un jucător.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Dezactivează checkpoint-ul cursei curente al jucătorului.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Verificați dacă un jucător se află într-un checkpoint al unei cursei.