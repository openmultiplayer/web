---
title: AddStaticVehicleEx
description: Dodaje „statyczny” pojazd (pojazdy są wstępnie ładowane dla graczy) do gamemodu.
tags: ["vehicle"]
---

## Opis

Dodaje „statyczny” pojazd (pojazdy są wstępnie ładowane dla graczy) do gamemodu. Różnica pomiędzy [AddStaticVehicle](AddStaticVehicle) polega na tym, że ta funkcja umożliwia ustawienie czasu respawnu pojazdu, gdy kierowca go porzuci.

| Nazwa         | Opis                                                                                                                                                 |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| modelid       | ID modelu pojazdu.                                                                                                                                   |
| Float:spawn_X | Koordynat X pojazdu.                                                                                                                                 |
| Float:spawn_Y | Koordynat Y pojazdu.                                                                                                                                 |
| Float:spawn_Z | Koordynat Z pojazdu.                                                                                                                                 |
| Float:z_angle | Kierunek pojazdu (kąt).                                                                                                                              |
| color1        | ID pierwszego [koloru](../resources/vehiclecolorid). -1 to losowy.                                                                                   |
| color2        | ID drugiego [koloru](../resources/vehiclecolorid). -1 to losowy.                                                                                     |
| respawn_delay | Czas, po którym pojazd bez kierowcy zostanie zrespawnowany (w sekundach).                                                                            |
| addsiren      | Dodane w 0.3.7; nie będzie działać w starszych wersjach. Domyślna wartość to 0. Umożliwia włączenie syren w każdym pojeździe, który posiada klakson. |

## Zwracane wartości

ID stworzonego pojazdu (pomiędzy 1, a MAX_VEHICLES).

INVALID_VEHICLE_ID (65535) jeżeli pojazd nie został utworzony (osiągnięto limit pojazdów lub podano nieprawidłowe ID modelu).

## Przykłady

```c
public OnGameModeInit()
{
    // Dodaje Hydrę (520) do gry, która będzie respawnowana po 15 sekundach od porzucenia
    AddStaticVehicleEx (520, 2109.1763, 1503.0453, 32.2887, 82.2873, -1, -1, 15);

    return 1;
}
```

## Powiązane funkcje

- [AddStaticVehicle](AddStaticVehicle): Dodaje statyczny pojazd.
- [CreateVehicle](CreateVehicle): Tworzy pojazd.
