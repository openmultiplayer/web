---
title: GetMaxPlayers
sidebar_label: GetMaxPlayers
description: Returna maksimalni broj igrača koji se mogu pridružiti serveru, određeno varijablom servera 'maxplayers'
tags: ["player"]
---

## Deskripcija

Returna maksimalni broj igrača koji se mogu pridružiti serveru, postavljeno varijablom servera 'maxplayers' u server.cfg.

## Primjeri

```c
new str[128];
format(str, sizeof(str), "Na ovom serveru ima %i slotova!", GetMaxPlayers());
SendClientMessage(playerid, 0xFFFFFFFF, str);
```

## Bilješke

:::warning

Ova funkcija se ne može koristiti umjesto MAX_PLAYERS. Ne može se koristiti u vrijeme kompajlovanja (npr. za array sizes). MAX_PLAYERS uvijek treba redefinirati na ono što će biti var 'maxplayers' ili više. Pogledajte funkciju MAX_PLAYERS za više informacija.

:::

## Srodne Funkcije

- [GetPlayerPoolSize](GetPlayerPoolSize): Dobij najveći ID igrača koji je povezan na server.
- [IsPlayerConnected](IsPlayerConnected): Provjeri da li je igrač povezan na server.
