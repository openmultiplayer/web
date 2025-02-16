---
title: OnPlayerGiveDamage
sidebar_label: OnPlayerGiveDamage
description: Acest callback este apelat atunci când un jucător dă daune altui jucător.
tags: ["player"]
---

## Descriere

Acest callback este apelat atunci când un jucător dă daune altui jucător.

| Nume            | Descriere                                                         |
|-----------------|-------------------------------------------------------------------|
| playerid        | ID-ul jucătorului care a provocat daune.                          |
| damagedid       | ID-ul jucătorului care a primit daune.                            |
| Float:amount    | Cantitatea de sănătate/armură deteriorată s-a pierdut (combinat). |
| WEAPON:weaponid | Motivul care a cauzat dauna.                                      |
| bodypart        | [partea corpului](../resources/bodyparts) care a fost lovită.     |

## Returnări

1 - Callback-ul nu va fi apelat în alte filterscript-uri.

0 - Permite apelarea acestui callback în alte filterscript-uri.

Este întotdeauna numit primul în filterscript-uri, astfel încât returnarea 1 acolo blochează alte filterscript-uri să-l vadă.

## Exemple

```c
public OnPlayerGiveDamage(playerid, damagedid, Float:amount, WEAPON:weaponid, bodypart)
{
    new string[128], victim[MAX_PLAYER_NAME], attacker[MAX_PLAYER_NAME];
    new weaponname[24];
    GetPlayerName(playerid, attacker, sizeof (attacker));
    GetPlayerName(damagedid, victim, sizeof (victim));

    GetWeaponName(weaponid, weaponname, sizeof (weaponname));
    format(string, sizeof(string), "%s a provocat %.0f daune lui %s, armă: %s, partea corpului: %d", attacker, amount, victim, weaponname, bodypart);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Note

:::tip

Rețineți că această funcție poate fi inexactă în unele cazuri. Dacă doriți să împiedicați anumiți jucători să-și deterioreze unii pe alții, utilizați SetPlayerTeam. Armă va returna 37 (aruncător de flăcări) din orice sursă de foc (de exemplu, molotov, 18) Armă va returna 51 de la orice armă care creează o explozie (de exemplu, RPG, grenadă) playerid este singurul care poate apela înapoi. Suma este întotdeauna dauna maximă pe care o poate face armele, chiar și atunci când sănătatea rămasă este mai mică decât dauna maximă. Deci, atunci când un jucător are 100,0 de sănătate și este împușcat cu un Vultur deșert care are o valoare a daunelor de 46,2, este nevoie de 3 lovituri pentru a ucide acel jucător. Toate cele 3 lovituri vor arăta o sumă de 46,2, chiar dacă atunci când lovește ultima lovitură, jucătorului mai are doar 7,6 de sănătate.

:::
