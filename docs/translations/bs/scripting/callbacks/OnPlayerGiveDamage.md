---
title: OnPlayerGiveDamage
description: Ovaj callback je pozvan kada igrač zadaje povredu drugom igraču.
tags: ["player"]
---

## Deskripcija

Ovaj callback je pozvan kada igrač zadaje povredu drugom igraču.

| Ime             | Deskripcija                                                                                                                 |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------|
| playerid        | ID igrača koji tadaje povredu.                                                                                              |
| damagedid       | ID igrača koji prima povredu.                                                                                               |
| Float:amount    | Količina healtha i armora kojeg je izgubio (kombinirano).                                                                   |
| WEAPON:weaponid | Razlog zbog kojeg je zadobio povredu.                                                                                       |
| bodypart        | Dio tijela koji je udaren. |

## Returns

1 - Spriječiti će da druge filterskripte primaju ovaj callback.

0 - Označava da će ovaj callback biti proslijeđen narednoj filterskripti.

Uvijek je pozvana prva u filterskripti.

## Primjeri

```c
public OnPlayerGiveDamage(playerid, damagedid, Float:amount, WEAPON:weaponid, bodypart)
{
    new string[128], victim[MAX_PLAYER_NAME], attacker[MAX_PLAYER_NAME];
    new weaponname[24];
    GetPlayerName(playerid, attacker, sizeof (attacker));
    GetPlayerName(damagedid, victim, sizeof (victim));

    GetWeaponName(weaponid, weaponname, sizeof (weaponname));
    format(string, sizeof(string), "%s has made %.0f damage to %s, weapon: %s, bodypart: %d", attacker, amount, victim, weaponname, bodypart);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Zabilješke

:::tip

Imajte na umu da ova funkcija može biti neprecizna u nekim slučajevima. Ako želite spriječiti da određeni igrači povrjeđuju, koristite `SetPlayerTeam`. ID oružja (weaponid) će return-ovati 37 (flame thrower) od bilo kojeg izvora vatre (npr. molotov, 18) ID oružja (weaponid) će return-ovati 51 od bilo koje vrste eksplozije (npe. RPG, granata) playerid je jedini koji može pozvati ovaj callback. Količina je uvijek maksimalna povreda koju taj ID oružja (weaponid) može da dadne, iako je nivo healtha manji od maksimalne povrede. Tako da kada igrač ima 100.0 healtha i biva pogođen sa Desert Eagle-om koji daje damage vrijednosti 46.2, potrebna su 3 hica da se taj igrač ubije. Sva tri hica će priakzati količinu 46.2, iako zadnji kada zadnji hitac biva ispaljen, igrač ima samo 7.6 preostalog healtha.

:::
