---
title: AllowInteriorWeapons
description: Przełącza możliwość używania broni we wnętrzach.
tags: []
---

## Opis

Przełącza możliwość używania broni we wnętrzach.

| Nazwa | Opis                                                                         |
| ----- | ---------------------------------------------------------------------------- |
| allow | 1 - włącza bronie we wnętrzach (domyślnie), 0 - wyłącza bronie we wnętrzach. |

## Zwracane wartości

Ta funkcja nie zwraca żadnych konkretnych wartości.

## Przykłady

```c
public OnGameModeInit()
{
    // To zezwoli na bronie we wnętrzach.
    AllowInteriorWeapons(1);
    return 1;
}
```

## Uwagi

:::warning

Ta funkcja nie działa w aktualnej wersji SA:MP!

:::

## Powiązane funkcje

- [SetPlayerInterior](SetPlayerInterior.md): Ustawia graczowi wnętrze.
- [GetPlayerInterior](GetPlayerInterior.md): Pobiera aktualne wnętrze gracza.
- [OnPlayerInteriorChange](../callbacks/OnPlayerInteriorChange.md): Wywoływane, gdy gracz zmienia wnętrze.
