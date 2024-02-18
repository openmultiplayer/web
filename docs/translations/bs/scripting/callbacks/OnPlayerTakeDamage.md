---
title: OnPlayerTakeDamage
description: Ovaj callback je pozvan kada igrač prvimi povredu (damage).
tags: ["player"]
---

:::warning

Ova funkcija je dodana u SA-MP 0.3d i ne radi u nižim verzijama!

:::

## Deskripcija

Ovaj callback je pozvan kada igrač prvimi povredu (damage).

| Ime             | Deskripcija                                                                                                                    |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------|
| playerid        | ID igrača koji je primio povredu (damage).                                                                                     |
| issuerid        | ID igrača koji je uzrokovao povredu. INVALID_PLAYER_ID ako je sam sebe povrijedio.                                             |
| Float:amount    | Količina povrede (damage-a) koje je igrač primio (health i armor kombinirano).                                                 |
| WEAPON:weaponid | ID oružja/razlog zbog kojeg je primio povredu (damage).                                                                        |
| bodypart        | Dio tijela u koji je igrač pogođen. (NOTE: Ovaj parametar je dodan u 0.3z. Ostavite ga praznog ako koristite starije verzije!) |

## Returns

1 - Callback se neće pozvati u drugim filterskriptama.

0 - Dozvoljava da se ovaj callback pozove u narednoj filterskripti.

Uvijek je pozvan prvo u filterskripti tako da će return-ovanje 1 ovdje blokirati da ga ostale filterskripte vide.

## Primjeri

```c
public OnPlayerTakeDamage(playerid, issuerid, Float:amount, WEAPON:weaponid, bodypart)
{
    if (issuerid != INVALID_PLAYER_ID) // If not self-inflicted
    {
        new
            infoString[128],
            weaponName[24],
            victimName[MAX_PLAYER_NAME],
            attackerName[MAX_PLAYER_NAME];

        GetPlayerName(playerid, victimName, sizeof (victimName));
        GetPlayerName(issuerid, attackerName, sizeof (attackerName));

        GetWeaponName(weaponid, weaponName, sizeof (weaponName));

        format(infoString, sizeof(infoString), "%s has made %.0f damage to %s, weapon: %s, bodypart: %d", attackerName, amount, victimName, weaponName, bodypart);
        SendClientMessageToAll(-1, infoString);
    }
    return 1;
}

public OnPlayerTakeDamage(playerid, issuerid, Float:amount, WEAPON:weaponid, bodypart)
{
    if (issuerid != INVALID_PLAYER_ID && weaponid == 34 && bodypart == 9)
    {
        // Jedan metak u glavu sa sniperom da ga odmah ubije
        SetPlayerHealth(playerid, 0.0);
    }
    return 1;
}
```

## Zabilješke

:::tip

ID oružja (weaponid) će return-ovati 37 (flame thrower) od bilo kojeg izvora vatre (npr. molotov, 18) ID oružja (weaponid) će return-ovati 51 od bilo koje vrste eksplozije (npe. RPG, granata) playerid je jedini koji može pozvati ovaj callback. Količina je uvijek maksimalna povreda koju taj ID oružja (weaponid) može da dadne, iako je nivo healtha manji od maksimalne povrede. Tako da kada igrač ima 100.0 healtha i biva pogođen sa Desert Eagle-om koji daje damage vrijednosti 46.2, potrebna su 3 hica da se taj igrač ubije. Sva tri hica će priakzati količinu 46.2, iako zadnji kada zadnji hitac biva ispaljen, igrač ima samo 7.6 preostalog healtha.

:::

:::warning

GetPlayerHealth i GetPlayerArmour će return-ovati stare vrijednosti igračevog healtha i armora prije ovog callbacka. Uvijek provjerite da li je issuerid validan prije nego ga koristite u array indexu.

:::

## Srodne Callbacks

- [OnPlayerGiveDamage](OnPlayerGiveDamage): This callback is called when a player gives damage.
- [OnPlayerWeaponShot](OnPlayerWeaponShot): This callback is called when a player fires a weapon.
