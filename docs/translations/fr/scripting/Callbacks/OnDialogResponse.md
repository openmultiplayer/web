---
title: OnDialogResponse
description: Cette callback est appelée lorsqu'un joueur lorsqu'un joueur répond à une boîte de dialogue affichée à l'aide de ShowPlayerDialog en cliquant sur un bouton, en appuyant sur ENTRÉE / ÉCHAP ou en double-cliquant sur un élément de liste (si vous utilisez un `DIALOG_STYLE_LIST`).
tags: [Dialog, DIALOG_STYLE_LIST, OnDialogReponse, listitem, dialogid]
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## Paramètres

Cette callback est appelée lorsqu'un joueur lorsqu'un joueur répond à une boîte de dialogue affichée à l'aide de ShowPlayerDialog en cliquant sur un bouton, en appuyant sur ENTRÉE / ÉCHAP ou en double-cliquant sur un élément de liste (si vous utilisez un `DIALOG_STYLE_LIST`).

| Nom                  | Description                                                                                                             |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `int` playerid       | ID du joueur qui a répondu au dialog                                                                                    |
| `int` dialogid       | ID du dialog auquel le joueur répond, assigné dans ShowPlayerDialog                                                     |
| `int` response       | 1 pour le bouton de gauche, 0 pour celui de droite (s'il n'y a qu'un bouton apparent = toujours 1)                      |
| `int` listitem       | ID de l'item sélectionné par le joueur _(commence à 0, seulement dans les `DIALOG_STYLE_LIST`, pour le reste c'est -1)  |
| `string` inputtext[] | Texte inséré dans la boîte de saisie par le joueur, ou le texte de l'élément de l'item sélectionné                      |

## Valeur de retour

Return 1 à la fin de chaque boîte de dialogue manipulée.
En revanche, return 0 à la fin de la callback.

## Exemple

```c
// Dans un premier temps, définir l'ID du dialog concerné.
#define DIALOG_REGLES 1

// À mettre à la suite d'une commande, par exemple. Dans notre cas, il s'agit d'un style de dialog MSGBOX (n'affiche qu'un message).
ShowPlayerDialog(playerid, DIALOG_REGLES, DIALOG_STYLE_MSGBOX, "Serveur / Règlement", "- Pas de cheat\n- Pas de spam\n- Respect d'autrui\n\nAcceptez-vous ces règles ?", "Oui", "Non !");

public OnDialogResponse(playerid, dialogid, response, listitem, inputtext[])
{
    if (dialogid == DIALOG_REGLES)
    {
        if (response) // Si le joueur a cliqué sur "Oui"
        {
            SendClientMessage(playerid, COLOR_GREEN, "Merci d'avoir accepté les règles du serveur ! :)");
        }
        else // Si le joueur a fait ECHAP ou a cliqué sur "Non !"
        {
            Kick(playerid);
        }
        return 1; // Nous avons manipulé un dialog, donc return 1. Tout comme dans OnPlayerCommandText.
    }

    return 0; // Vous DEVEZ faire un return 0! Comme dans OnPlayerCommandText.
}
```

## Notes

:::tip

Les paramètres peuvent changer selon le style de dialog ([voir plus de styles de dialog](../resources/dialogstyles)).

:::

:::tip

Il est important d'avoir plusieurs dialogids, surtout si vous en faites plusieurs.

:::

:::warning

Le dialog ouvert par un joueur ne se cache pas quand le serveur redémarre, le serveur va afficher "Warning: PlayerDialogResponse PlayerId: 0 dialog ID doesn't match last sent dialog ID" si un joueur répond à ce dialog après le redémarrage.

:::

## Fonctions connexes

- [ShowPlayerDialog](../functions/ShowPlayerDialog): affiche le Dialog à un joueur.
