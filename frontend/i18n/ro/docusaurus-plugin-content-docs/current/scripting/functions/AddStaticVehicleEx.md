---
title: AddStaticVehicleEx
sidebar_label: AddStaticVehicleEx
description: Adaugă un vehicul 'static' (modelele sunt preîncărcate pentru jucători) la modul de joc.
tags: ["vehicle"]
---

## Descriere

Adaugă un vehicul 'static' (modelele sunt preîncărcate pentru jucători) la modul de joc. Diferă de la AddStaticVehicle într-un singur mod: permite setarea unui timp de respawn pentru când vehiculul este lăsat neocupat de șofer.

| Nume                                     | Descriere                                                                                                                                                                |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| modelid                                  | ID-ul modelului vehiculului.                                                                                                                                             |
| Float:spawn_X                            | Coordonata X pentru vehicul.                                                                                                                                             |
| Float:spawn_Y                            | Coordonata Y pentru vehicul.                                                                                                                                             |
| Float:spawn_Z                            | Coordonata Z pentru vehicul.                                                                                                                                             |
| Float:z_angle                            | Unghiul de orientare pentru vehicul.                                                                                                                                     |
| [color1](../resources/vehiclecolorid.md) | ID-ul culorii primare.                                                                                                                                                   |
| [color2](../resources/vehiclecolorid.md) | Codul secundar de culoare.                                                                                                                                               |
| respawn_delay                            | Întârzierea până la respingerea mașinii fără șofer în câteva secunde.                                                                                                    |
| addsiren                                 | Adăugat în 0.3.7; nu va funcționa în versiunile anterioare. Are o valoare implicită 0. Permite vehiculului să aibă o sirenă, cu condiția ca vehiculul să aibă un claxon. |

## Se intoarce

Codul vehiculului vehiculului creat (1 - MAX_VEHICLES).

INVALID_VEHICLE_ID (65535) dacă vehiculul nu a fost creat (limita vehiculului a fost atinsă sau ID-ul modelului vehiculului nevalid a fost trecut).

## Exemple

```c
public OnGameModeInit()
{
    // Add a Hydra (520) to the game that will respawn 15 seconds after being left
    AddStaticVehicleEx (520, 2109.1763, 1503.0453, 32.2887, 82.2873, -1, -1, 15);

    return 1;
}
```

## Funcții conexe

- [AddStaticVehicle](AddStaticVehicle.md): Adăugați un vehicul static.
- [CreateVehicle](CreateVehicle.md): Creați un vehicul.
