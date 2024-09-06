---
title: IsObjectHiddenForPlayer
description: Provjerava da li je objekat sakriven za igrača.
tags: ["player", "object"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Deskripcija

Provjerava da li je objekat sakriven za igrača.

## Parametri

| Ime      | Deskripcija                    |
|----------|--------------------------------|
| playerid | ID igrača.                     |
| objectid | ID objekta za provjeriti.      |

## Returnovi

`true` -  Objekat je sakriven za igrača.

`false` - Objekat nije sakriven za igrača.

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
    if (IsObjectHiddenForPlayer(playerid, gObject))
    {
        printf("Objekat %d je sakriven za igrača %d", gObject, playerid);
    }
    return 1;
}
```

## Zabilješke

:::tip

Možeš sakriti objekte za određenog igrača pomoću [HideObjectForPlayer](HideObjectForPlayer) funkcije.

:::

## Srodne Funkcije

- [HideObjectForPlayer](HideObjectForPlayer): Sakriva objekat igraču.
- [ShowObjectForPlayer](ShowObjectForPlayer): Prikaže objekat igraču.
- [CreateObject](CreateObject): Kreira objekat.
