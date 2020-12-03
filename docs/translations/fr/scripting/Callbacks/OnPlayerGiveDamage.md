---
title: OnPlayerGiveDamage
description: Cette callback est appelée quand un joueur inflige des dégâts à un autre joueur.
tags: ["player"]
---

<VersionWarn name='callback' version='SA-MP 0.3d' />

## Paramètres

Cette callback est appelée quand un joueur inflige des dégâts à un autre joueur.

| Nom             | Description                                                              |
| --------------- | ------------------------------------------------------------------------ |
| `int` playerid  | ID du joueur qui inflige le dégât                                        |
| `int` damagedid | ID du joueur qui reçoit le dégât                                         |
| `int` amount    | Montant de la perte en armure/vie (combinés)                             |
| `int` weaponid  | Cause du dommage                                                         |
| `int` bodypart  | Partie du corps qui a été touchée (NOTE: Disponible à partir de la 0.3z) |

## Valeur de retour

**1** - La callback ne sera pas appelée dans un autre filterscript.

**0** - Autorise la callback à être appelée dans d'autres filterscripts.

Cette callback est toujours appelée en premier dans les filterscripts, donc return 1 empêche les autres filterscripts de communiquer avec.

## Exemple

```c
public OnPlayerGiveDamage(playerid, damagedid, Float:amount, weaponid, bodypart)
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

Cette fonction peut être imprécise dans certains cas. Si vous voulez empêcher des joueurs à s'infliger mutuellement des dégâts, utilisez SetPlayerTeam.

Le montant est toujours le maximum de dommage que l'arme peut faire, même si la vie restante au joueur est moins importante que le maximum du dégât. 

:::

## Fonctions connexes
