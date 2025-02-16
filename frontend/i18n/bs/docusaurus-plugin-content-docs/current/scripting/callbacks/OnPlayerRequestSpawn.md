---
title: OnPlayerRequestSpawn
sidebar_label: OnPlayerRequestSpawn
description: Pozvano kada igrač pokuša da se spawnuje (stvori) preko selekcije klase bilo pritiskom SHIFT tipke ili klikom na 'Spawn' dugme.
tags: ["player"]
---

## Deskripcija

Pozvano kada igrač pokuša da se spawnuje (stvori) preko selekcije klase bilo pritiskom SHIFT tipke ili klikom na 'Spawn' dugme.

| Ime      | Deskripcija                                         |
| -------- | --------------------------------------------------- |
| playerid | ID igrača koji je zatražio da se spawnuje (stvori). |

## Returns

UVijek je pozvan prvi u filterskripti tako da return-ovanje 0 ovdje će blokirati da ga ostale skripte vide.

## Primjeri

```c
public OnPlayerRequestSpawn(playerid)
{
    if (!IsPlayerAdmin(playerid))
    {
        SendClientMessage(playerid, -1, "You may not spawn.");
        return 0;
    }
    return 1;
}
```

## Zabilješke

:::tip

Ovaj callback pozvat će i NPC.

:::

:::tip

Kako biste spriječili da se igrači spawnaju (stvore) sa određenim klasama, zadnja viđena klasa mora biti sačuvana u varijabli u OnPlayerRequestClass.

:::

## Srodne Funkcije
