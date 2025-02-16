---
title: OnPlayerDeath
description: Cette callback est appelée quand le joueur est mort. Il peut s'agir aussi bien d'une mort par kill qu'une mort par suicide.
tags: ["player"]
---

## Paramètres

Cette callback est appelée quand le joueur est mort. Il peut s'agir aussi bien d'une mort par kill qu'une mort par suicide.

| Nom                 | Description                                                        |
|---------------------|--------------------------------------------------------------------|
| `int` playerid      | ID du joueur mort                                                  |
| `int` killerid      | ID du joueur qui kill le `playerid`, ou INVALID_PLAYER_ID à défaut |
| `int` WEAPON:reason | ID de la raison de la mort                                         |

## Valeur de retour

Cette callback ne retourne rien, mais doit retourner quelque chose. Autrement dit, `return callback();` ne fonctionnera pas car la callback ne retourne rien, mais un return _(`return 1;` ou `return 0;`)_ doit être effectué dans la callback.

## Exemple

```c
new PlayerDeaths[MAX_PLAYERS];
new PlayerKills[MAX_PLAYERS];

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    SendDeathMessage(killerid, playerid, reason); // Notification dans le killfeed

    // Vérifie si le killerid est valide
    if (killerid != INVALID_PLAYER_ID)
    {
        PlayerKills[killerid] ++;
    }

    // Ajoute une mort au playerid
    PlayerDeaths[playerid] ++;
    return 1;
}
```

## Astuces

:::tip

Les morts à raison d'une source de feu seront caractérisées par l'ID 37 (lance-flammes) ;
La raison pour les explosions avec une arme (RPG, grenade, ...) seront caractérisées par l'ID.

Il faut toujours vérifier que le `killerid` est valide avant d'utiliser SendDeathMessage. `INVALID_PLAYER_ID` est un `playerid` valide.

`playerid` est le seul à pouvoir appeler cette callback _(bon à savoir pour un anti fake death par exemple)_.

:::

:::warning

Vous DEVEZ vérifier que `killerid` est valide (pas INVALID_PLAYER_ID) avant de l'utiliser dans un array _(n'importe où en réalité)_, sinon le script OnPlayerDeath est susceptible de crash. 

C'est parce que INVALID_PLAYER_ID est défini comme ayant la valeur '65535' que si un array a seulement MAX_PLAYERS comme élément le script OnPlayerDeath va crash _(vous tentez d'indexer au-delà de la limite MAX_PLAYERS)_.

:::

## Fonctions connexes

- [SendDeathMessage](../functions/SendDeathMessage): Ajoute un kill dans le killfeed.
- [SetPlayerHealth](../functions/SetPlayerHealth): Heal un joueur.
