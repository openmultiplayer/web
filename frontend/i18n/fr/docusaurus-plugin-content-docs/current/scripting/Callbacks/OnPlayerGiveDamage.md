---
title: OnPlayerGiveDamage
description: Cette callback est appelée quand un joueur inflige des dégâts à un autre joueur.
tags: ["player"]
---

## Paramètres

Cette callback est appelée quand un joueur inflige des dégâts à un autre joueur.

| Nom                   | Description                                                              |
|-----------------------|--------------------------------------------------------------------------|
| `int` playerid        | ID du joueur qui inflige le dégât                                        |
| `int` damagedid       | ID du joueur qui reçoit le dégât                                         |
| `float` Float:amount  | Montant de la perte en armure/vie (combinés)                             |
| `int` WEAPON:weaponid | Cause du dommage                                                         |
| `int` bodypart        | Partie du corps qui a été touchée |

## Valeur de retour

**1** - Autorise la callback à être appelée par un autre script.

**0** - Refuser que la callback soit appelée ailleurs.

## Exemple

```c
public OnPlayerGiveDamage(playerid, damagedid, Float:amount, WEAPON:weaponid, bodypart)
{
    new 
      string[128], 
      victim[MAX_PLAYER_NAME], 
      attacker[MAX_PLAYER_NAME],
      weaponname[24];
    
    GetPlayerName(playerid, attacker, sizeof (attacker));
    GetPlayerName(damagedid, victim, sizeof (victim));
    GetWeaponName(weaponid, weaponname, sizeof (weaponname));
    
    format(string, sizeof(string), "%s a infligé %.0f de dégâts à %s, arme: %s, bodypart: %d", attacker, amount, victim, weaponname, bodypart);
    
    SendClientMessageToAll(0xFFFFFFFF, string);
    
    return 1;
}
```

## Astuce

:::tip

Gardez à l'esprit que cette fonction peut être inexacte dans certains cas.

Si vous voulez empêcher certains joueurs de s'endommager, utilisez SetPlayerTeam.

Le weaponid retournera la raison 37 _(lance-flammes)_ de n'importe quelle source de feu _(par exemple molotov, 18)_.

Le weaponid retournera la raison 51 de n'importe quelle arme qui crée une explosion _(par exemple RPG, grenade)_.

`playerid` est le seul à pouvoir appeler le callback.

Le montant est toujours le maximum de dégâts que l'arme peut faire, même si la santé restante est inférieure à ce maximum de dégâts. Ainsi, lorsqu'un joueur a 100,0 points de vie et se fait tirer dessus avec un Desert Eagle qui a une valeur de dégâts de 46,2, il faut 3 coups pour tuer ce joueur. Les 3 tirs montreront au final un montant de 46,2, même si lorsque le dernier coup frappe, le joueur n'a plus que 7,6 points de vie.

:::
