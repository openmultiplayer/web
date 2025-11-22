---
title: OnPlayerGiveDamageActor
sidebar_label: OnPlayerGiveDamageActor
description: Cette callback est appelée quand un joueur inflige des dégâts à un actor.
tags: ["player"]
---

## Paramètres

Cette callback est appelée quand un joueur inflige des dégâts à un actor.

| Nom                   | Description                                  |
|-----------------------|----------------------------------------------|
| `int` playerid        | ID du joueur qui inflige le dégât            |
| `int` damaged_actorid | ID de l'actor qui reçoit le dégât            |
| `float` Float:amount  | Montant de la perte en armure/vie (combinés) |
| `int` WEAPON:weaponid | Cause du dommage                             |
| `int` bodypart        | Partie du corps qui a été touchée            |

## Valeur de retour

**1** - Autorise la callback à être appelée par un autre script.

**0** - Refuser que la callback soit appelée ailleurs.

## Exemple

```c
public OnPlayerGiveDamageActor(playerid, damaged_actorid, Float:amount, WEAPON:weaponid, bodypart)
{
    new 
      string[128], 
      attacker[MAX_PLAYER_NAME];
      weaponname[24];
    
    GetPlayerName(playerid, attacker, sizeof (attacker));
    GetWeaponName(weaponid, weaponname, sizeof (weaponname));

    format(string, sizeof(string), "%s a infligé %.0f à l'actor id %d, arme: %s", attacker, amount, damaged_actorid, weaponname);
    
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Astuce

:::tip

Cette callback ne peut pas être appelée si l'actor est invulnérable _(il l'est par défaut)_. Voir [SetActorInvulnerable](../functions/SetActorInvulnerable).

:::

## Fonctions connexes

- [CreateActor](../functions/CreateActor): Créer un actor (NPC statique).
- [SetActorInvulnerable](../functions/SetActorInvulnerable): Met un actor invulnérable.
- [SetActorHealth](../functions/SetActorHealth): Permet de heal l'actor.
- [GetActorHealth](../functions/GetActorHealth): Permet d'obtenir le heal de l'actor.
- [IsActorInvulnerable](../functions/IsActorInvulnerable): Permet de vérifier si un actor est invulnérable.
- [IsValidActor](../functions/IsValidActor): Vérifie si un actore st valide.

## Callbacks connexes

- [OnActorStreamOut](OnActorStreamOut): Appelé quand un actor n'est plus stream par un joueur. 
- [OnPlayerStreamIn](OnPlayerStreamIn): Appelé quand un actor est stream par un joueur.

