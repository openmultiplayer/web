---
title: AddStaticVehicle
description: Adaugă un vehicul 'static' (modelele sunt preîncărcate pentru jucători) la modul de joc.
tags: ["vehicle"]
---

## Descriere

Adaugă un vehicul 'static' (modelele sunt preîncărcate pentru jucători) la modul de joc.

| Nume          | Descriere                                                                      |
| ------------- | ------------------------------------------------------------------------------ |
| modelid       | ID-ul modelului vehiculului.                                                   |
| Float:spawn_X | Coordonata X pentru vehicul.                                                   |
| Float:spawn_Y | Coordonata Y pentru vehicul.                                                   |
| Float:spawn_Z | Coordonata Z pentru vehicul.                                                   |
| Float:z_angle | Direcția vehiculului - unghiul.                                                |
| color1        | ID-ul [culorii](../resources/vehiclecolorid) primare. -1 pentru aleatoriu.     |
| color2        | Codul secundar de [culoare](../resources/vehiclecolorid). -1 pentru aleatoare. |

## Se intoarce

Codul vehiculului vehiculului creat (între 1 și MAX_VEHICLES).

INVALID_VEHICLE_ID (65535) dacă vehiculul nu a fost creat (limita vehiculului a fost atinsă sau ID-ul modelului vehiculului nevalid a fost trecut).

## Exemple

```c
public OnGameModeInit()
{
    // Add a Hydra to the game
    AddStaticVehicle(520, 2109.1763, 1503.0453, 32.2887, 82.2873, 0, 1);

    return 1;
}
```

## Funcții conexe

- [AddStaticVehicleEx](AddStaticVehicleEx): Adăugați un vehicul static cu timp de respawn personalizat.
- [CreateVehicle](CreateVehicle): Creați un vehicul.
- [DestroyVehicle](DestroyVehicle): Distrugeți un vehicul.
