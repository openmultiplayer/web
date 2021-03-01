---
title: GetMaxPlayers
description: Vraća maksimalan broj igrača koji se mogu pridružiti serverz, kako je postavljena varijablom poslužitelja 'maxplayers' na serveru.
tags: ["player"]
---

## Deskripcija

Vraća maksimalan broj igrača koji se mogu pridružiti serveru, kako je postavljena varijablom poslužitelja 'maxplayers' u server.cfg.

## Primjeri

```c
new str[128];
format(str, sizeof(str), "Na ovom serveru ima %i slotova!", GetMaxPlayers());
SendClientMessage(playerid, 0xFFFFFFFF, str);
```

## Zabilješke

:::warning

Ova se funkcija ne može koristiti umjesto MAX_PLAYERS. Ne može se koristiti u vrijeme kompajliranja (npr. Za veličine polja). MAX_PLAYERS uvijek treba redefinirati na vrijednost 'maxplayers' ili više. Pogledajte MAX_PLAYERS za više informacija.

:::

## Srodne Funkcije

- [GetPlayerPoolSize](GetPlayerPoolSize): Dobija najviši playerid povezan na server.
- [IsPlayerConnected](IsPlayerConnected): Provjerava da li je igrač konektovan na server.
