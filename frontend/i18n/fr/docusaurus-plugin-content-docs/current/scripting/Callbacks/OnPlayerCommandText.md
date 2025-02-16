---
title: OnPlayerCommandText
description: Cette callback est appelée quand un joueur tape une commande.
tags: ["player"]
---

## Paramètres

Cette callback est appelée quand un joueur tape une commande. Les commandes débutent avec un slash _(/aide, ...)_.

| Nom                | Description                                                  |
| ------------------ | ----------------------------------------------------------- |
| `id` playerid      | ID du joueur qui envoie la commande                    |
| `string` cmdtext[] | Commande envoyée (nécessite un slash devant)       |

## Valeur de retour

La callback est toujours appelée en premier dans les filterscripts, donc return 1, faute de quoi les autres scripts ne pourront pas communiquer avec cette callback.

## Exemple

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/aide", true))
    {
        SendClientMessage(playerid, -1, "SERVER: Ceci est la commande d'aide !");
        return 1;
        // Return 1 = informe le serveur que la commande a bien été exécutée.
        // OnPlayerCommandText ne sera donc plus appelé dans les autres scripts.
    }
    return 0;
    // Return 0 = informe le serveur que la commande n'a pas été exécutée.
    // OnPlayerCommandText sera appelé dans les autres scripts jusqu'à se heurter à un return 1.
    // Si aucun autre script ne return 1, le message "SERVER: Uknown Command" sera envoyé dans le chat.
}
```

## Astuces

<TipNPCCallbacks />

## Fonctions connexes

- [SendRconCommand](../functions/SendRconCommand): Envoie un commande RCON via le script en jeu.
