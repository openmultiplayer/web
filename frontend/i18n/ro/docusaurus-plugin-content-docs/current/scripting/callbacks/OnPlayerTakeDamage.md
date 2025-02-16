---
title: OnPlayerTakeDamage
description: Acest callback este apelat atunci când un jucător primește daune.
tags: ["player"]
---

## Descriere

Acest callback este apelat atunci când un jucător primește daune.

| Nume            | Descriere                                                                                                                                                         |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| playerid        | ID-ul jucătorului care a suferit daune.                                                                                                                           |
| issuerid        | ID-ul jucătorului care a cauzat prejudiciul. INVALID_PLAYER_ID dacă este autoprovocat.                                                                            |
| Float:amount    | Cantitatea de daune suferite de jucător (sănătate și armură combinate).                                                                                           |
| WEAPON:weaponid | ID-ul armei/motivul pagubei.                                                                                                                                      |
| bodypart        | [partea corpului](../resources/bodyparts) care a fost lovită. |

## Returnări

1 - Callback-ul nu va fi apelat în alte filterscript-uri.

0 - Permite apelarea acestui apel invers în alte filterscript-uri.

Este întotdeauna numit primul în filterscript-uri, astfel încât returnarea 1 acolo blochează alte filterscript-uri să-l vadă.

## Exemple

```c
public OnPlayerTakeDamage(playerid, issuerid, Float:amount, WEAPON:weaponid, bodypart)
{
    if (issuerid != INVALID_PLAYER_ID) // Dacă nu se autoprovoca
    {
        new
            infoString[128],
            weaponName[24],
            victimName[MAX_PLAYER_NAME],
            attackerName[MAX_PLAYER_NAME];

        GetPlayerName(playerid, victimName, sizeof (victimName));
        GetPlayerName(issuerid, attackerName, sizeof (attackerName));

        GetWeaponName(weaponid, weaponName, sizeof (weaponName));

        format(infoString, sizeof(infoString), "%s a provocat %.0f daune lui %s, armă: %s, partea corpului: %d", attackerName, amount, victimName, weaponName, bodypart);
        SendClientMessageToAll(-1, infoString);
    }
    return 1;
}
```

```c
public OnPlayerTakeDamage(playerid, issuerid, Float:amount, WEAPON:weaponid, bodypart)
{
    if (issuerid != INVALID_PLAYER_ID && weaponid == 34 && bodypart == 9)
    {
       // O lovitură în cap pentru a ucide cu pușca de lunetist
        SetPlayerHealth(playerid, 0.0);
    }
    return 1;
}
```

## Note

:::tip

Armă va returna 37 (aruncător de flăcări) din orice sursă de foc (de exemplu, molotov, 18). Armă va returna 51 de la orice armă care creează o explozie (de exemplu, RPG, grenadă) playerid este singurul care poate apela înapoi. Suma este întotdeauna dauna maximă pe care o poate face armele, chiar și atunci când sănătatea rămasă este mai mică decât dauna maximă. Deci, atunci când un jucător are 100,0 de sănătate și este împușcat cu un Vultur deșert care are o valoare a daunelor de 46,2, este nevoie de 3 lovituri pentru a ucide acel jucător. Toate cele 3 lovituri vor arăta o sumă de 46,2, chiar dacă atunci când lovește ultima lovitură, jucătorului mai are doar 7,6 de sănătate.

:::

:::warning

GetPlayerHealth și GetPlayerArmour vor returna vechile sume ale jucătorului înainte de acest apel invers. Verificați întotdeauna dacă issuerid este valid înainte de a-l folosi ca index de matrice.

:::
