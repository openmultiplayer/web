---
title: OnGameModeInit
description: Ovaj callback se aktivira kada se gamemode pokrene.
tags: []
---

## Deskripcija

Ovaj callback se aktivira kada se gamemode pokrene.

## Primjeri

```c
public OnGameModeInit()
{
    print("Gamemode pokrenut!");
    return 1;
}
```

## Zabilješke

:::tip

Ova funkcija se također može koristiti unutar filterskripte da detektuje ukoliko se gamemode promijeni pomoću neke od RCON komandi poput changemode ili gmx, s obzirom da promjena gamemode-a ne pokreće ponovno filterskriptu.

:::

## Srodne Funkcije
