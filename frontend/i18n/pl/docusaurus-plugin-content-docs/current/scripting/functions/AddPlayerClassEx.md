---
title: AddPlayerClassEx
sidebar_label: AddPlayerClassEx
description: Ta funkcja jest dokładnie taka sama, jak funkcja AddPlayerClass, z wyjątkiem dodatkowego parametru na drużynę.
tags: ["player"]
---

## Opis

Ta funkcja jest dokładnie taka sama, jak funkcja AddPlayerClass, z wyjątkiem dodatkowego parametru na drużynę.

| Nazwa         | Opis                                                        |
| ------------- | ----------------------------------------------------------- |
| teamid        | Drużyna, w której gracz ma się spawnować.                   |
| modelid       | Skin, z którym gracze będą się spawnować.                   |
| Float:spawn_x | Koordynat X miejsca spawnu tej klasy.                       |
| Float:spawn_y | Koordynat Y miejsca spawnu tej klasy.                       |
| Float:spawn_z | Koordynat Z miejsca spawnu tej klasy.                       |
| Float:z_angle | Kierunek, w który skierowany będzie gracz po zespawnowaniu. |
| weapon1       | Pierwsza broń, którą gracz otrzyma po zespawnowaniu.        |
| weapon1_ammo  | Liczba sztuk amunicji dla pierwszej broni.                  |
| weapon2       | Druga broń, którą gracz otrzyma po zespawnowaniu.           |
| weapon2_ammo  | Liczba sztuk amunicji dla drugiej broni.                    |
| weapon3       | Trzecia broń, którą gracz otrzyma po zespawnowaniu.         |
| weapon3_ammo  | Liczba sztuk amunicji dla trzeciej broni.                   |

## Zwracane wartości

ID klasy, która właśnie została dodana.

319, jeżeli limit klas (320) został osiągnięty. Najwyższe możliwe ID klasy to 319.

## Przykłady

```c
public OnGameModeInit()
{
    // Gracze mogą się zespawnować:
    // Skinem CJ (ID 0) w drużynie 1.
    // Skinem The Trutha (ID 1) w drużynie 2.
    AddPlayerClassEx(1, 0, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // CJ
    AddPlayerClassEx(2, 1, 1958.33, 1343.12, 15.36, 269.15, 26, 36, 28, 150, 0, 0); // The Truth
    return 1;
}
```

## Uwagi

:::tip

Maksymalne ID klasy to 319 (zaczynając od 0, czyli łącznie 320 klas). Po osiągnięciu tego limitu, każda następna dodana klasa będzie zastępować ID 319.

:::

## Powiązane funkcje

- [AddPlayerClass](AddPlayerClass): Dodaje klasę.
- [SetSpawnInfo](SetSpawnInfo): Konfiguruje ustawienia spawnu dla gracza.
- [SetPlayerTeam](SetPlayerTeam): Ustawia drużynę gracza.
- [SetPlayerSkin](SetPlayerSkin): Ustawia skin gracza.
