---
title: AllowAdminTeleport
description: Ta funkcja określa, czy administratorzy RCON będą teleportowani do punktu docelowego, kiedy tylko go zaznaczą na mapie.
tags: []
---

:::warning

Ta funkcja od wersji 0.3d jest przestarzała. Sprawdź OnPlayerClickMap.

:::

## Opis

Ta funkcja określa, czy administratorzy RCON będą teleportowani do punktu docelowego, kiedy tylko go zaznaczą na mapie.

| Nazwa | Opis                         |
| ----- | ---------------------------- |
| allow | 0 - wyłączone, 1 - włączone. |

## Zwracane wartości

Ta funkcja nie zwraca żadnych konkretnych wartości.

## Przykłady

```c
public OnGameModeInit()
{
    AllowAdminTeleport(1);
    // Pozostałe rzeczy
    return 1;
}
```

## Powiązane funkcje

- [IsPlayerAdmin](IsPlayerAdmin): Sprawdza, czy gracz jest zalogowany jako RCON.
- [AllowPlayerTeleport](AllowPlayerTeleport): Włącza graczom teleportowanie do punktów docelowych.
