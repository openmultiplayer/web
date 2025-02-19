---
title: OnPlayerDeath
sidebar_label: OnPlayerDeath
description: Acest callback este apelat atunci când un jucător moare, fie prin sinucidere, fie ucis de un alt jucător.
tags: ["player"]
---

## Descriere

Acest callback este apelat atunci când un jucător moare, fie prin sinucidere, fie ucis de un alt jucător.

| Nume          | Descriere                                                                                                   |
|---------------|-------------------------------------------------------------------------------------------------------------|
| playerid      | ID-ul jucătorului care a murit.                                                                             |
| killerid      | ID-ul jucătorului care l-a ucis pe jucătorul care a murit sau INVALID_PLAYER_ID dacă nu a existat niciunul. |
| WEAPON:reason | ID-ul motivului ([weaponid](../resources/weaponids)) pentru moartea jucătorului.                            |

## Returnări

0 - Va împiedica alte filterscript-uri să primească acest callback.

1 - Indică faptul că acest callback va fi transmis următorului filterscript.

Este întotdeauna numit primul în filterscript-uri.

## Example

```c
new PlayerDeaths[MAX_PLAYERS];
new PlayerKills[MAX_PLAYERS];

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    SendDeathMessage(killerid, playerid, reason); // Afișează uciderea în killfeed

    // Verificați dacă killerid-ul este valid înainte de a face ceva cu el
    if (killerid != INVALID_PLAYER_ID)
    {
        PlayerKills[killerid] ++;
    }

    // În afara verificării, gestionați chestii pentru playerid (este întotdeauna valabil)
    PlayerDeaths[playerid] ++;
    return 1;
}
```

## Note

:::tip

Motivul va returna 37 (aruncător de flăcări) din orice sursă de foc (de ex. molotov, 18) Motivul va returna 51 de la orice armă care creează o explozie (de ex. RPG, grenadă) Nu trebuie să verificați dacă Killerid este valid înainte de ao folosi în [SendDeathMessage](../functions/SendDeathMessage). INVALID_PLAYER_ID este un parametru valid ID killerid în acea funcție. playerid este singurul care poate apela înapoi. (Bine de știut pentru anti moartea falsă)

:::

:::warning

TREBUIE să verificați dacă „killerid” este valid (nu INVALID_PLAYER_ID) înainte de a-l folosi într-o matrice (sau chiar oriunde), deoarece va cauza blocarea scriptului OnPlayerDeath (nu a întregului script). Acest lucru se datorează faptului că INVALID_PLAYER_ID este definit ca 65535, iar dacă o matrice are doar elemente „MAX_PLAYERS”, de ex. 500, încercați să accesați un index care este peste 499, care este în afara limitelor.

:::

## Funcții similare

- [SendDeathMessage](../functions/SendDeathMessage): Adăugați o ucidere pe lista morților.
- [SetPlayerHealth](../functions/SetPlayerHealth): Setați viata unui jucător.
