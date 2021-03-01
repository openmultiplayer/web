---
title: PlayCrimeReportForPlayer
description: Ova funkcija će pokrenuti izvještaj o zločinu za igrača - kao i u single-player-u kada CJ počin zločin.
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3a i ne radi u nižim verzijama!

:::

## Deskripcija

Ova funkcija pokreće izvještaj o zločinu za igrača - kao i u single-player-u kada CJ počini zločin.

| Ime       | Deskripcija                                                                                                               |
| --------- | ------------------------------------------------------------------------------------------------------------------------- |
| playerid  | ID igrača koji će čuti izvještaj o zločinu                                                                                |
| suspectid | ID osumljičenog igrača koji će biti opisan u izvještaju o zločinu                                                         |
| crimeid   | [crime ID](../resources/crimelist), koji će biti prijavljen kao 10-code (to jeste 10-16 ako je 16 prošao kao crimeid)     |

## Returns

1: Funckija je uspješno izvršena.

0: Funkcija neuspješno izvršena. To znači da određeni igrač ne postoji.

## Primjeri

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/suspect"))
    {
        PlayCrimeReportForPlayer(playerid, 0, 16);
        SendClientMessage(playerid, 0xFFFFFFFF, "ID 0 je počinio zločin (10-16).");
        return 1;
    }
    return 0;
}
```

## Srodne Funkcije

- [PlayerPlaySound](PlayerPlaySound): Puštanje zvuka za igrača.
