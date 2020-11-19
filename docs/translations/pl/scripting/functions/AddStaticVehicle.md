---
title: AddStaticVehicle
description: Dodaje „statyczny” pojazd (pojazdy są wstępnie ładowane dla graczy) do gamemodu.
tags: ["vehicle"]
---

## Opis

Dodaje „statyczny” pojazd (pojazdy są wstępnie ładowane dla graczy) do gamemodu.

| Nazwa                                    | Opis                                |
| ---------------------------------------- | ----------------------------------- |
| modelid                                  | ID modelu pojazdu.                  |
| Float:spawn_X                            | Koordynat X pojazdu.                |
| Float:spawn_Y                            | Koordynat Y pojazdu.                |
| Float:spawn_Z                            | Koordynat Z pojazdu.                |
| Float:z_angle                            | Kierunek pojazdu (kąt).             |
| [color1](../resources/vehiclecolorid.md) | ID pierwszego koloru. -1 to losowy. |
| [color2](../resources/vehiclecolorid.md) | ID drugiego koloru. -1 to losowy.   |

## Zwracane wartości

ID stworzonego pojazdu (pomiędzy 1, a MAX_VEHICLES).

INVALID_VEHICLE_ID (65535) jeżeli pojazd nie został utworzony (osiągnięto limit pojazdów lub podano nieprawidłowe ID modelu).

## Przykłady

```c
public OnGameModeInit()
{
    // Dodaje Hydrę do gry
    AddStaticVehicle(520, 2109.1763, 1503.0453, 32.2887, 82.2873, 0, 1);

    return 1;
}
```

## Powiązane funkcje

- [AddStaticVehicleEx](AddStaticVehicleEx.md): Dodaje statyczny pojazd z niestandardowym czasem respawnu.
- [CreateVehicle](CreateVehicle.md): Tworzy pojazd.
- [DestroyVehicle](DestroyVehicle.md): Kasuje pojazd.
