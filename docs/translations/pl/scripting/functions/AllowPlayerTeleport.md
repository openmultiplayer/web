---
title: AllowPlayerTeleport
description: Włącza/wyłącza graczom możliwość teleportacji przez klikanie prawym przyciskiem myszy na mapie.
tags: ["player"]
---

:::warning

Ta funkcja od wersji 0.3d jest przestarzała. Sprawdź OnPlayerClickMap.

:::

## Opis

Włącza/wyłącza graczom możliwość teleportacji przez klikanie prawym przyciskiem myszy na mapie.

| Nazwa    | Opis                                                         |
| -------- | ------------------------------------------------------------ |
| playerid | ID gracza, który ma mieć przełączoną możliwość teleportacji. |
| allow    | 1 - włącza, 0 - wyłącza.                                     |

## Zwracane wartości

Ta funkcja nie zwraca żadnych konkretnych wartości.

## Przykłady

```c
public OnPlayerConnect( playerid )
{
    // Pozwala graczowi na teleportację przez kliknięcie prawym przyciskiem myszy na mapie,
    // ponieważ jest to w OnPlayerConnect, wykona się to dla KAŻDEGO gracza
    AllowPlayerTeleport( playerid, 1 );
}
```

## Uwagi

:::warning

Ta funkcja będzie działać tylko jeżeli AllowAdminTeleport jest włączone, musisz być również administratorem.

:::

## Powiązane funkcje

- [AllowAdminTeleport](AllowAdminTeleport.md): Przełącza teleportowanie do punktu docelowego dla administratorów RCON.
