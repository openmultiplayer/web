---
title: AddPlayerClass
description: Fügt eine Klasse zur Klassen-Auswahl(class-selection) hinzu.
tags: ["player"]
---

## Beschreibung

Fügt eine Klasse zur Klassen-Auswahl(class-selection) hinzu. Klassen ermöglichen dem Spieler mit einem Skin ihrer Wahl zu spawnen.

| Name          | Beschreibung                                                   |
| ------------- | ------------------------------------------------------------- |
| modelid       | Der Skin(SkinID) mit dem der Spieler spawnt.                    |
| Float:spawn_x | Die X Koordinate des Spawnpunkts der Klasse.             |
| Float:spawn_y | Die Y Koordinate des Spawnpunkts der Klasse.             |
| Float:spawn_z | Die Z Koordinate des Spawnpunkts der Klasse.             |
| Float:z_angle | Die Blickrichtung des Spawnpunktes. |
| weapon1       | Die erste Spawn-Waffe des Spielers.                        |
| weapon1_ammo  | Die Menge der Munition der ersten Waffe.        |
| weapon2       | Die zweite Spawn-Waffe des Spielers.                       |
| weapon2_ammo  | Die Menge der Munition der zweiten Waffe.         |
| weapon3       | Die dritte Spawn-Waffe des Spielers.                        |
| weapon3_ammo  | Die Menge der Munition der dritten Waffe.          |

## Rückgabe(return value)

Die ID der Klasse die erstellt wurde.

319 wenn das Class-Limit (320) erreicht ist. Höchstmögliche Class ID: 319.

## Beispiele

```c
public OnGameModeInit()
{
    // Spieler können entweder mit dem CJ Skin (0) oder The Truth skin (1) spawnen.
    AddPlayerClass(0, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // CJ
    AddPlayerClass(1, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // The Truth
    return 1;
}
```

## Anmerkungen

:::tip

Die maximale Class ID ist 319 (Start bei 0, also insgesamt 320 Klassen). Wenn das Limit erreicht ist ersetzen alle weiteren Klassen die Klasse mit class ID 319.

:::

## Ähnliche Funktionen

- [AddPlayerClassEx](AddPlayerClassEx): Erstelle einen Klasse mit einem zugewiesenen Team.
- [SetSpawnInfo](SetSpawnInfo): Setze die Spawneinstellungen eines Spielers.
- [SetPlayerSkin](SetPlayerSkin): Ändere den Skin eines Spielers.
