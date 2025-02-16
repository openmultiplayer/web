---
title: SetObjectsDefaultCameraCollision
description: Omogućuje da se kolizije kamere s novostvorenim objektima onemoguće prema zadanim postavkama.
tags: ["object", "camera"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Deskripcija

Omogućuje da se sudari kamere s novostvorenim objektima onemoguće prema zadanim postavkama.

| Ime          | Deskripcija                                                                                                                              |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------|
| bool:disable | `true` za onemogućavanje koliziju kamere za novostvorene objekte i `false` za njihovo omogućavanje (omogućeno prema zadanim postavkama). |

## Returnovi

Zabilješka

Ova funkcija utječe samo na kolizije kamere objekata stvorenih NAKON njezine upotrebe - ne mijenja kolizije kamera postojećih objekata.

## Primjeri

```c
public OnGameModeInit()
{
    // Onemogući koliziju kamere
    SetObjectsDefaultCameraCollision(true);

    // Kreira mapane objekte
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);

    // Gore navedeni objekti NEĆE imati kolizije kamera

    // Ponovo omogući kolizije kamere
    SetObjectsDefaultCameraCollision(false);

    // Kreira mapane objekte
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);
    CreateObject(...);

    // Gornji objekti ĆE IMATI koliziju kamere

    // ALI, prvi set još uvijek NEĆE imati kolizije kamera

    return 1;
}
```

## Zabilješke

:::tip

Ova funkcija utječe samo na kolizije kamere objekata stvorenih NAKON njezine upotrebe - ne mijenja kolizije kamera postojećih objekata.

:::

:::warning

Ova funkcija SAMO radi izvan granica normalne SA mape (preko 3000 jedinica).

:::

## Srodne Funkcije

- [SetObjectNoCameraCollision](SetObjectNoCameraCollision): Onemogućuje kolizije između kamere i objekta.
- [SetPlayerObjectNoCameraCollision](SetPlayerObjectNoCameraCollision): Onemogućuje kolizije između kamere i player objekta.
