---
title: AddStaticVehicle
sidebar_label: AddStaticVehicle
description: Fügt ein 'static' vehicle (models werden für den Spieler vorgeladen) zum Gamemode hinzu.
tags: ["vehicle"]
---

## Beschreibung

Fügt ein 'static' vehicle (models werden für den Spieler vorgeladen) zum Gamemode hinzu.

| Name                                     | Beschreibung                            |
| ---------------------------------------- | -------------------------------------- |
| modelid                                  | Die Model ID des Fahrzeugs.          |
| Float:spawn_X                            | Die X-Koordinate des Fahrzeugs.      |
| Float:spawn_Y                            | Die Y-Koordinate des Fahrzeugs.      |
| Float:spawn_Z                            | Die Z-Koordinate des Fahrzeugs.      |
| Float:z_angle                            | Direction of vehicle - angle.          |
| [color1](../resources/vehiclecolorid) | Die ID der Primärfarbe. -1 für zufällige Farbe.   |
| [color2](../resources/vehiclecolorid) | Die ID der Sekundärfarbe. -1 für zufällige Farbe. |

## Rückgabe(return value)

Die vehicleID des erstellten Fahrzeug (zwischen 1 und MAX_VEHICLES).

INVALID_VEHICLE_ID (65535) wenn das Fahrzeug nicht erstellt werden konnte (Fahrzeug-Limit ist erreicht oder fehlerhafte model ID).

## Beispiele

```c
public OnGameModeInit()
{
    // Fügt einen Sultan zum Spiel hinzu
    AddStaticVehicle(560, 2109.1763, 1503.0453, 32.2887, 82.2873, 0, 1);

    return 1;
}
```

## Ähnliche Funktionen

- [AddStaticVehicleEx](AddStaticVehicleEx): Erstelle ein static Fahrzeug mit bestimmter Respawnzeit.
- [CreateVehicle](CreateVehicle): Erstelle ein Fahrzeug.
- [DestroyVehicle](DestroyVehicle): Lösche ein Fahrzeug.
