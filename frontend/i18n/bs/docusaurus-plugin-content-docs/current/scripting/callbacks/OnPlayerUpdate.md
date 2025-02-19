---
title: OnPlayerUpdate
sidebar_label: OnPlayerUpdate
description: Ovaj callback je pozvan svaki put kada klijent/igrač ažurira server sa svojim statusom.
tags: ["player"]
---

## Deskripcija

Ovaj callback je pozvan svaki put kada klijent/igrač ažurira server sa svojim statusom. Često se koristi za kreiranje custom callbackova za ažuriranja klijenta koje server ne prati, kao npr. health ili armor ažuriranja ili odabir oružja igrača.

| Ime      | Deskripcija                            |
| -------- | -------------------------------------- |
| playerid | ID igrača koji šalje paket ažuriranja. |

## Returns

0 - Ažuriranje od ovog igrača neće biti replicirano drugim klijentima.

1 - Označava da će ovo ažuriranje biti obrađeno normalno i poslano ostalim igračima.

Uvijek je pozvan prvo u filterskripti.

## Primjeri

```c
public OnPlayerUpdate(playerid)
{
    new iCurWeap = GetPlayerWeapon(playerid); // return-uje igračevo trenutno oružje
    if (iCurWeap != GetPVarInt(playerid, "iCurrentWeapon")) // ako je promijenio oružje nakon posljednjeg ažuriranja
    {
        // pozovimo callback OnPlayerChangeWeapon
        OnPlayerChangeWeapon(playerid, GetPVarInt(playerid, "iCurrentWeapon"), iCurWeap);
        SetPVarInt(playerid, "iCurrentWeapon", iCurWeap);//Ažuriraj trenutni weapon
    }
    return 1; // pošalji ažuriranje drugim igračima
}

stock OnPlayerChangeWeapon(playerid, oldweapon, newweapon)
{
    new     s[128],
        oWeapon[24],
        nWeapon[24];

    GetWeaponName(oldweapon, oWeapon, sizeof(oWeapon));
    GetWeaponName(newweapon, nWeapon, sizeof(nWeapon));

    format(s, sizeof(s), "promijenio si oružje sa %s u %s!", oWeapon, nWeapon);

    SendClientMessage(playerid, 0xFFFFFFFF, s);
}
public OnPlayerUpdate(playerid)
{
    new Float:fHealth;

    GetPlayerHealth(playerid, fHealth);

    if (fHealth != GetPVarFloat(playerid, "faPlayerHealth"))
    {
        // Zdravlje igrača se promijenilo od zadnjeg ažuriranja -> servera, pa je očito da je to stvar ažurirano.
        // Dalje provjeravamo je li izgubio ili stekao zdravlje, anti-health cheat? ;)

        if (fHealth > GetPVarFloat(playerid, "faPlayerHealth"))
        {
            /* Dobio je healthe! Cheating? Ovdje napišite svoje skripte da biste shvatili kako je igrač stekao zdravlje! */
        }
        else
        {
            /* izgubio health! */
        }

        SetPVarFloat(playerid, "faPlayerHealth", fHealth);
    }
}
```

## Zabilješke

:::tip

Ovaj callback pozvat će i NPC.

:::

:::warning

Ovaj callback je pozvan, otprilike, 30 puta po sekundi, po igraču; koristite ga samo kada znate za šta znači (ili mnogo bitnije, za šta NE znači).Učestalost pozivanja ovog povratnog poziva za svakog igrača varira, ovisno o tome što igrač radi. Vožnja ili pucanje izazvat će puno više ažuriranja nego u praznom hodu.

:::

## Srodne Funkcije
