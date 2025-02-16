---
title: OnClientMessage
sidebar_label: OnClientMessage
description: Cette callback est appelée chaque fois qu'un NPC voit un ClientMessage.
tags: [NPC, ClientMessage, SendClientMessageToAll, ]
---

## Paramètres

Cette callback est appelée chaque fois qu'un NPC voit un ClientMessage. Ce sera le cas à chaque fois qu’une fonction SendClientMessageToAll est utilisée et à chaque fois qu’une fonction SendClientMessage est envoyée vers le NPC. Cette callback ne sera pas appelée quand un joueur dit quelque chose (voir NPC:OnPlayerText pour une version avec les joueurs).

| Nom             | Description                     |
| ------          | ------------------------------- |
| `int` color     | Couleur du ClientMessage.       |
| `string` text[] | Le message.                     |

## Valeur de retour

Aucun return.

## Exemple

```c
public OnClientMessage(color, text[])
{
    if (strfind(text,"Solde bancaire : $0") != -1)
    {
        SendClientMessage(playerid, -1, "Je suis pauvre :(");
    }
}
```

## Fonctions connexes
