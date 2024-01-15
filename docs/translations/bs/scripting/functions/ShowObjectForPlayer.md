---
title: ShowObjectForPlayer
description: Prikaže objekat igraču.
tags: ["player", "object"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Deskripcija

Prikazuje objekat igraču koji je sakriven sa [HideObjectForPlayer](HideObjectForPlayer) funkcijom. 

## Parametri

| Ime      | Deskripcija                              |
|----------|------------------------------------------|
| playerid | ID igrača.                               |
| objectid | ID objekta da se prikaže igraču.         |

## Returnovi

`true` - Funkcija uspješno izvršena.

`false` - Funkcija neuspješno izvršena. Navedeni playerid ili objectid ne postoji.

## Primjeri

```c
new gObject;

public OnGameModeInit()
{
    gObject = CreateObject(1431, 921.12201, -1206.78613, 16.52670,   0.00000, 0.00000, 90.00000);
    return 1;
}

public OnPlayerConnect(playerid)
{
    HideObjectForPlayer(playerid, gObject);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    ShowObjectForPlayer(playerid, gObject);
    return 1;
}
```

## Srodne Funkcije

- [HideObjectForPlayer](HideObjectForPlayer): Sakrije objekat igraču.
- [IsObjectHiddenForPlayer](IsObjectHiddenForPlayer): Provjerava da li je objekat sakriven za igrača.
- [CreateObject](CreateObject): Kreira objekat.
