---
title: OnGameModeExit
description: Ovaj callback se poziva kada se gamemode završava, bilo to preko 'gmx', kada god se server ugasi, ili pod GameModeExit.
tags: []
---

## Deskripcija

Ovaj callback se poziva kada se gamemode završava, bilo to preko 'gmx', kada god se server ugasi, ili pod [GameModeExit](../functions/GameModeExit).

## Primjeri

```c
public OnGameModeExit()
{
    print("Gamemode se ugasio.");
    return 1;
}
```

## Zabilješke

:::tip

Ova funkcija također može biti korištena unutar filterskripte da detektuje ukoliko se gamemode promijeni koristeći RCON komande kao npr. changemode ili gmx, jer promjena gamemode-a ne pokreće ponovno filterskriptu. Kada se koristi OnGameModeExit u vezi sa 'rcon gmx' komandom u konzoli imajte na umu da može doći do potencijalnih bagova u klijentu, kao primjer ovoga je pretjerano pozivanje `RemoveBuildingForPlayer` tokom `OnGameModeInit` što može rezultirati da klijent crashuje. Ovaj callback se NEĆE pozvati ukoliko server crashuje ili ako ubijete proces drugim sredstvima kao npr Linux kill komandom ili pritiskom na close dugme u Windows konzoli.

:::

## Srodne funkcije

- [GameModeExit](../functions/GameModeExit): Ugasi trenutni GameMode.
