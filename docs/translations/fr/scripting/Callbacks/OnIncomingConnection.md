---
title: OnIncomingConnection
description: Cette callback est appelée quand une adresse IP tente de se connecter au serveur.
tags: [IP, connexion, joueur]
---

<VersionWarn name='callback' version='SA-MP 0.3z R2-2' />

## Paramètres

Cette callback est appelée quand une adresse IP tente de se connecter au serveur. Pour bloquer une connexion, utilisez BlockIpAddress

| Nom                   | Description                                        |
| --------------------- | -------------------------------------------------- |
| `int` playerid        | ID du joueur qui tente de se connecter             |
| `string` ip_address[] | Adresse IP qui tente de se connecter               |
| `int` port            | Port de la connexion tentée                        |

## Valeur de retour

**0** - Empêche les autres filterscripts de recevoir cette callback.

**1** - Indique que cette callback doit passer au filterscript suivant.

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
