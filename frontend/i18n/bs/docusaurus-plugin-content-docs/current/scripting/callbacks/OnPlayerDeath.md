---
title: OnPlayerDeath
sidebar_label: OnPlayerDeath
description: Ovaj callback je pozvan kada igrač umre, bilo to samoubistvo ili ubistvo od strane drugog igrača.
tags: ["player"]
---

## Deskripcija

Ovaj callback je pozvan kada igrač umre, bilo to samoubistvo ili ubistvo od strane drugog igrača.

| Ime           | Deskripcija                                                                                          |
|---------------|------------------------------------------------------------------------------------------------------|
| playerid      | ID igrača koji je umro.                                                                              |
| killerid      | ID igrača koji je ubio igrača koji je umro, ili INVALID_PLAYER_ID ako ga nema (igrač sam sebe ubio). |
| WEAPON:reason | ID razloga zbog kojeg je igrač umro.                                                                 |

## Returns

0 - Spriječiti će da druge filterskripte primaju ovaj callback.

1 - Označava da će ovaj callback biti proslijeđen do sljedeće filterskripte.

Uvijek je pozvana prva u filterskripti.

## Primjeri

```c
new PlayerDeaths[MAX_PLAYERS];
new PlayerKills[MAX_PLAYERS];

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    SendDeathMessage(killerid, playerid, reason); // Prikazuje ubistvo u listi ubistava

    // Provjerava da li je killerid validan prije nego što uradi nešto sa njim
    if (killerid != INVALID_PLAYER_ID)
    {
        PlayerKills[killerid] ++;
    }

    // Izvan provjere upravljamo stvarima za playerid (uvijek je validan)
    PlayerDeaths[playerid] ++;
    return 1;
}
```

## Zabilješke

:::tip

Razlog će return-ovati 37 (flame thrower/bacač plamena) ako je igrač umro od bilo kojeg izvora vatre (npr. molotov, 18). Razlog će return-ovati 51 ako je igrač umro od bilo koje vrste eksplozije (npr. RPG, granata). Ne moraš provjeravati da li je killerid validan prije nego što ga koristite u `SendDeathMessage`. INVALID_PLAYER_ID je validan killerid ID parametar u toj funkciji. playerid je jedini koji može pozvati ovaj callback. (dobro za znati za sprječavanje lažne smrti 'anti fake death').

:::

:::warning

MORAŠ provjeriti da li je 'killerid' validan (ako nije: INVALID_PLAYER_ID) prije nego ga koristiš u array-u (ili prosto svuda) ili će uzrokovati da OnPlayerDeath izazove skriptu da crasha (ne cijelu skriptu). Ovo ja zbog toga što je INVALID_PLAYER_ID definiran kao 65535, i ako array ima samo 'MAX_PLAYERS' elemente, npr. 500, ti pokušavaš pristupiti indexu koji je iznad 499, što je izvan granica.

:::

## Srodne Funkcije

- [SendDeathMessage](../functions/SendDeathMessage): Dodaj smrt na listu smrti.
- [SetPlayerHealth](../functions/SetPlayerHealth): Postavi health(zdravlje) igraču.
