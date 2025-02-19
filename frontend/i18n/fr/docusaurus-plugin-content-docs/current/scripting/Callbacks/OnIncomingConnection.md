---
title: OnIncomingConnection
sidebar_label: OnIncomingConnection
description: Cette callback est appelée quand une adresse IP tente de se connecter au serveur.
tags: [IP, connexion, joueur]
---

## Paramètres

Cette callback est appelée quand une adresse IP tente de se connecter au serveur. Pour bloquer une connexion, utilisez BlockIpAddress

| Nom                   | Description                                        |
| --------------------- | -------------------------------------------------- |
| `int` playerid        | ID du joueur qui tente de se connecter             |
| `string` ip_address[] | Adresse IP qui tente de se connecter               |
| `int` port            | Port de la connexion tentée                        |

## Valeur de retour

Cette callback ne retourne rien, mais doit retourner quelque chose. Autrement dit, `return callback();` ne fonctionnera pas car la callback ne retourne rien, mais un return _(`return 1;` ou `return 0;`)_ doit être effectué dans la callback.

## Exemple

```c
public OnIncomingConnection(playerid, ip_address[], port)
{
    printf("Tentative de connexion du joueur ID %i [IP/port: %s:%i]", playerid, ip_address, port);
    return 1;
}
```

## Fonctions connexes

- [BlockIpAddress](../functions/BlockIpAddress): bloque les tentatives de connexion d'une adresse IP pour un temps déterminé
- [UnBlockIpAddress](../functions/UnBlockIpAddress): débloque une adresse IP préalablement bloquée
