---
title: OnPlayerTakeDamage
sidebar_label: OnPlayerTakeDamage
description: Cette callback est appelée lorsqu'un joueur prends des degats.
tags: ["player"]
---

## Paramètres

Cette callback est appelée lorsqu'un joueur prends des degats..

| Nom                   | Description                                                                                                                                            |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| `int` playerid        | L'ID du joueur qui prends les dégats.                                                                                                                  |
| `int` issuerid        | L'ID du joueur qui cause les dégats. Si il vaut INVALID_PLAYER_ID, le joueur les a infligés lui même.                                                  |
| `float` Float:amount  | Le montant des dégats reçus _(vie et armure combinés)_.                                                                                                |
| `int` WEAPON:weaponid | L'ID de l'arme/la raison qui a causé les dégats.                                                                                                       |
| `int` bodypart        | La partie du corps qui s'est faite touchée. |

## Valeur de retour

**1** - Autorise la callback à être utilisée dans un autre script

**0** - La callback ne sera pas appelée dans les autres scripts

Elle est toujours appelée en premier dans le gamemode donc retourner **0** dans le gamemode bloquera la callback dans les filterscripts.

## Exemples

```c
public OnPlayerTakeDamage(playerid, issuerid, Float:amount, WEAPON:weaponid, bodypart)
{
    if(issuerid != INVALID_PLAYER_ID) // Si il ne se les inflige pas lui même
    {
        new
            infoString[128],
            weaponName[24],
            victimName[MAX_PLAYER_NAME],
            attackerName[MAX_PLAYER_NAME];
 
        GetPlayerName(playerid, victimName, sizeof (victimName));
        GetPlayerName(issuerid, attackerName, sizeof (attackerName));
 
        GetWeaponName(weaponid, weaponName, sizeof (weaponName));
 
        format(infoString, sizeof(infoString), "%s a proféré %.0f dégats à %s, arme: %s", attackerName, amount, victimName, weaponName);
        SendClientMessageToAll(-1, infoString);
    }
    return 1;
}
```

```c
public OnPlayerTakeDamage(playerid, issuerid, Float:amount, WEAPON:weaponid, bodypart)
{
    if(issuerid != INVALID_PLAYER_ID && weaponid == 34 && bodypart == 9)
    {
        //Tirez une fois dans la tête au sniper tue instantanément
        SetPlayerHealth(playerid, 0.0);
    }
    return 1;
}
```

## Astuces

:::tip

Le weaponid retournera la raison 37 _(lance-flammes)_ de n'importe quelle source de feu _(par exemple molotov, 18)_.

Le weaponid retournera la raison 51 de n'importe quelle arme qui crée une explosion _(par exemple RPG, grenade)_.

Le montant est toujours le maximum de dégâts que l'arme peut faire, même si la santé restante est inférieure à ce maximum de dégâts. Ainsi, lorsqu'un joueur a 100,0 points de vie et se fait tirer dessus avec un Desert Eagle qui a une valeur de dégâts de 46,2, il faut 3 coups pour tuer ce joueur. Les 3 tirs montreront au final un montant de 46,2, même si lorsque le dernier coup frappe, le joueur n'a plus que 7,6 points de vie.

:::

:::warning

GetPlayerHealth et GetPlayerArmour renverront les anciens montants du joueur avant cette callback. 

Vérifiez toujours si `issuerid` est valide avant de l'utiliser comme index de tableau.

:::
