---
title: GetPlayerKeys
description: Provjerava koje tipke igrač stišče.
tags: ["player"]
---

## Deskripcija

Provjerava koje tipke igrač stišče.

| Ime       | Deskripcija                                                                                                                       |
| --------- | --------------------------------------------------------------------------------------------------------------------------------- |
| playerid  | ID igrača za dobiti tipke.                                                                                                        |
| keys      | Skup bitova koji sadrže ključna stanja igrača. Ova vrijednost je ono što se naziva bitna maska. Kliknite ovdje za listu ključeva. |
| updown    | Gore/dolje stanje.                                                                                                                |
| leftright | Lijevo/desno stanje.                                                                                                              |

## Returns

Tipke su pohranjene u navedenim varijablama.

## Primjeri

```c
public OnPlayerUpdate(playerid)
{
    new
        Keys, ud, lr;
    GetPlayerKeys(playerid, Keys, ud, lr);

    if (ud == KEY_UP)
    {
        SendClientMessage(playerid, -1, "UP");
    }
    else if (ud == KEY_DOWN)
    {
        SendClientMessage(playerid, -1, "DOWN");
    }

    if (lr == KEY_LEFT)
    {
        SendClientMessage(playerid, -1, "LEFT");
    }
    else if (lr == KEY_RIGHT)
    {
        SendClientMessage(playerid, -1, "RIGHT");
    }

    return 1;
}
```

## Zabilješke

:::warning

Može se otkriti samo FUNKCIJA tipki; nisu stvarni ključevi. Na primjer, nije moguće otkriti pritiska li igrač PROSTOR, ali možete otkriti pritisne li SPRINT (koji se može preslikati (dodijeliti / vezati) u BILO KOJU tipku (ali je prema zadanim postavkama razmak). Od ažuriranja 0.3.7, tipke "A" i "D" nisu prepoznate u vozilu. Međutim, tipke "W" i "S" mogu se otkriti pomoću parametra "tipke".

:::

## Srodne Funkcije
