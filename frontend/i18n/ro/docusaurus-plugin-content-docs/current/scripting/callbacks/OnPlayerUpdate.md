---
title: OnPlayerUpdate
description: Acest callback este apelat de fiecare dată când un client/jucător actualizează serverul cu starea lor.
tags: ["player"]
---

## Descriere

Acest callback este apelat de fiecare dată când un client/jucător actualizează serverul cu starea lor. Este adesea folosit pentru a crea apeluri personalizate pentru actualizările clientului care nu sunt urmărite activ de server, cum ar fi actualizările de sănătate sau armuri sau jucătorii care schimbă arme.

| Name     | Descriere                                  |
| -------- | ------------------------------------------ |
| playerid | ID-ul jucătorului care trimite un pachet de actualizare. |

## Returnări

0 - Actualizarea de la acest player nu va fi replicată altor clienți.

1 - Indică faptul că această actualizare poate fi procesată normal și trimisă altor jucători.

Este întotdeauna numit primul în filterscript-uri.

## Exemple

```c
public OnPlayerUpdate(playerid)
{
    nou iCurWeap = GetPlayerWeapon(playerid); // Returnează arma curentă a jucătorului
    if (iCurWeap != GetPVarInt(playerid, "iCurrentWeapon")) // Dacă a schimbat armele de la ultima actualizare
    {
        // Să apelăm un apel invers numit OnPlayerChangeWeapon
        OnPlayerChangeWeapon(playerid, GetPVarInt(playerid, "iCurrentWeapon"), iCurWeap);
        SetPVarInt(playerid, "iCurrentWeapon", iCurWeap);//Actualizează variabila armă
    }
    return 1; // Trimite această actualizare altor jucători.
}

stock OnPlayerChangeWeapon(playerid, oldweapon, newweapon)
{
    new     s[128],
        oWeapon[24],
        nWeapon[24];

    GetWeaponName(oldweapon, oWeapon, sizeof(oWeapon));
    GetWeaponName(newweapon, nWeapon, sizeof(nWeapon));

    format(s, sizeof(s), "Ai schimbat arma din %s în %s!", oWeapon, nWeapon);

    SendClientMessage(playerid, 0xFFFFFFFF, s);
}
public OnPlayerUpdate(playerid)
{
    nou Float:fHealth;

    GetPlayerHealth(playerid, fHealth);

    if (fHealth != GetPVarFloat(playerid, "faPlayerHealth"))
    {
        // Sănătatea jucătorului s-a schimbat de la ultima actualizare -> server, așa că, evident, acesta este lucrul actualizat.
        // Să facem verificări suplimentare să vedem dacă și-a pierdut sau a câștigat sănătatea, trișare anti-sănătate? ;)

        if (fHealth > GetPVarFloat(playerid, "faPlayerHealth"))
        {
            /* A căpătat sănătate! Înșelăciune? Scrie-ți propriile scripturi aici pentru a-ți da seama cum este un jucător
            a castigat sanatate! */
        }
        else
        {
            /* A pierdut sănătatea! */
        }

        SetPVarFloat(playerid, "faPlayerHealth", fHealth);
    }
}
```

## Note

<TipNPCCallbacks />

:::warning

Acest callback este apelat, în medie, de 30 de ori pe secundă, per jucător; folosește-l doar atunci când știi la ce este destinat (sau mai important pentru ce NU este destinat). Frecvența cu care acest apel invers este apelat pentru fiecare jucător variază, în funcție de ceea ce face jucătorul. Conducerea sau fotografierea va declanșa mult mai multe actualizări decât la ralanti.

:::

## Funcții similare