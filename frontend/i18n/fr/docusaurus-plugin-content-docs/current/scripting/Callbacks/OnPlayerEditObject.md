---
title: OnPlayerEditObject
sidebar_label: OnPlayerEditObject
description: Cette callback est appelée quand un joueur a fini d'éditer un objet (EditObject/EditPlayerObject).
tags: ["player"]
---

## Paramètres

Cette callback est appelée quand un joueur a fini d'éditer un objet (EditObject/EditPlayerObject).

| Nom                            | Description                                                     |
|--------------------------------|-----------------------------------------------------------------|
| `int`   playerid               | ID du joueur qui a édité l'objet                                |
| `int`   playerobject           | **0** si c'est un global object, **1** si c'est un playerobject |
| `int`   objectid               | ID de l'objet édité                                             |
| `int`   EDIT_RESPONSE:response | Le [type de réponse](../resources/objecteditionresponsetypes)   |
| `float` Float:fX               | Offset X de l'objet qui a été édité                             |
| `float` Float:fY               | Offset Y de l'objet qui a été édité                             |
| `float` Float:fZ               | Offset Z de l'objet qui a été édité                             |
| `float` Float:fRotX            | Rotation X de l'objet qui a été édité                           |
| `float` Float:fRotY            | Rotation Y de l'objet qui a été édité                           |
| `float` Float:fRotZ            | Rotation Z de l'objet qui a été édité                           |

## Valeur de retour

**1** - Autorise la callback à être appelée par un autre script.

**0** - Refuser que la callback soit appelée ailleurs.

## Exemple

```c
public OnPlayerEditObject(playerid, playerobject, objectid, EDIT_RESPONSE:response, Float:fX, Float:fY, Float:fZ, Float:fRotX, Float:fRotY, Float:fRotZ)
{
    new
        Float: oldX,
        Float: oldY,
        Float: oldZ,
        Float: oldRotX,
        Float: oldRotY,
        Float: oldRotZ;

    GetObjectPos(objectid, oldX, oldY, oldZ);
    GetObjectRot(objectid, oldRotX, oldRotY, oldRotZ);
    if (!playerobject) // Si c'est un global object = synchronise la position pour les autres joueurs
    {
        if (!IsValidObject(objectid))
        {
            return 1;
        }
        SetObjectPos(objectid, fX, fY, fZ);
        SetObjectRot(objectid, fRotX, fRotY, fRotZ);
    }

    switch (response)
    {
        case EDIT_RESPONSE_FINAL:
        {
            // Le joueur clique sur l'icône de sauvegarde
            // C'est ici que vous sauvegardez, par exemple, la nouvelle Rotation, etc.
        }

        case EDIT_RESPONSE_CANCEL:
        {
            // Le joueur a abandonné, donc l'objet regagne sa position d'avant l'édition.
            if (!playerobject) //Object is not a playerobject
            {
                SetObjectPos(objectid, oldX, oldY, oldZ);
                SetObjectRot(objectid, oldRotX, oldRotY, oldRotZ);
            }
            else
            {
                SetPlayerObjectPos(playerid, objectid, oldX, oldY, oldZ);
                SetPlayerObjectRot(playerid, objectid, oldRotX, oldRotY, oldRotZ);
            }
        }
    }
    return 1;
}
```

## Astuces

:::warning

Lorsque vous utilisez 'EDIT_RESPONSE_UPDATE', sachez que la callback ne sera pas appelée lors de la publication d'une édition en cours entraînant une désynchronisation de la dernière édition de 'EDIT_RESPONSE_UPDATE' par rapport à la position actuelle des objets.

:::

## Fonctions connexes

- [EditObject](../functions/EditObject): Édite un objet.
- [CreateObject](../functions/CreateObject): Créer un objet.
- [DestroyObject](../functions/DestroyObject): Détruit un objet.
- [MoveObject](../functions/MoveObject): Déplace un objet.
