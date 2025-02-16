---
title: OnPlayerText
sidebar_label: OnPlayerText
description: Appelée lorsqu'un joueur envoie un message dans le chat.
tags: ["player"]
---

## Description

Appelée lorsqu'un joueur envoie un message dans le chat.

| Nom             | Description                              |
| --------------- | ---------------------------------------- |
| `int` playerid  | L'ID du joueur qui envoie le message     |
| `string` text[] | Le texte du message envoyé               |

## Valeur de retour

Retourner **0** dans cette callback empêchera l'affichage du message.

## Exemple

```c
public OnPlayerText(playerid, text[])
{
    new 
        textv2[145], 
        name[MAX_PLAYER_NAME];
    
    GetPlayerName(playerid, name, sizeof (name));
 
    format(textv2, sizeof (textv2), "%d >> %s: %s", playerid, name, text);
 
    SendPlayerMessageToAll(playerid, textv2);
    return 0;
    //Retourner 0 empêche l'envoi du message par défaut
}

```

## Astuces

<TipNPCCallbacks />

## Fonctions connexes

- [SendPlayerMessageToPlayer](../functions/SendPlayerMessageToPlayer): Force un joueur à envoyer un message à un joueur.
- [SendPlayerMessageToAll](../functions/SendPlayerMessageToAll): Force un joueur à envoyer un message à tous les joueurs.
