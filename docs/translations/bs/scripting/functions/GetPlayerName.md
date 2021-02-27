---
title: GetPlayerName
description: Dobij ime igrača.
tags: ["player"]
---

## Deskripcija

Dobij ime igrača.

| Ime      | Deskripcija                                                                                                                      |
| -------- | -------------------------------------------------------------------------------------------------------------------------------- |
| playerid | ID igrača za dobiti ime.                                                                                                         |
| name[]   | Niz za pohraniti ime, proslijeđeno referencom.                                                                                   |
| len      | Dužina niza koji treba pohraniti. Preporučuje se da bude MAX_PLAYER_NAME + 1. Oznaka +1 potrebna je za obračun null terminatora. |

## Returns

Ime igrača pohranjeno je u navedenom nizu.

## Primjeri

```c
public OnPlayerConnect(playerid)
{
    // Dohvatite ime uređaja koji se povezao i prikažite poruku o pridruživanju drugim igračima

    new name[MAX_PLAYER_NAME + 1];
    GetPlayerName(playerid, name, sizeof(name));

    new string[MAX_PLAYER_NAME + 23 + 1];
    format(string, sizeof(string), "%s je ušao na server.", name);
    SendClientMessageToAll(0xC4C4C4FF, string);

    return 1;
}
```

## Zabilješke

:::tip

Ime igrača može imati najviše 24 znaka (od 0,3d R2) pomoću SetPlayerName. Ovo je u a_samp.inc definirano kao MAX_PLAYER_NAME. Međutim, klijent se može pridružiti samo s nadimkom između 3 i 20 znakova, u protivnom će veza biti odbijena i igrač mora odustati da bi odabrao valjano ime.

:::

## Srodne Funkcije

- [SetPlayerName](SetPlayerName): Postavite ime igrača.
- [GetPlayerIp](GetPlayerIp): Dobij IP igrača.
- [GetPlayerPing](GetPlayerPing): Dobij ping igrača.
- [GetPlayerScore](GetPlayerScore): Dobijte rezultat/score igrača.
- [GetPlayerVersion](GetPlayerVersion): Dobij verziju igračevog klijenta.
