---
title: OnPlayerEditAttachedObject
sidebar_label: OnPlayerEditAttachedObject
description: Cette callback est appelée quand un joueur en a fini avec le mode édition des attach objects.
tags: ["player"]
---

## Paramètres

Cette callback est appelée quand un joueur en a fini avec le mode édition des attach objects.

| Name                         | Description                                                                       |
|------------------------------|-----------------------------------------------------------------------------------|
| `int` playerid               | ID du joueur en mode édition                                                      |
| `int` EDIT_RESPONSE:response | **0** si annulé (ECHAP) ou **1** si le joueur a cliqué sur l'icône de sauvegarde. |
| `int` index                  | The index of the attached object (0-9)                                            |
| `int` modelid                | Model de l'attach object qui a été édité                                          |
| `int` boneid                 | Bone de l'attach object qui a été édité                                           |
| `float` Float:fOffsetX       | Offset X de l'attach object qui a été édité                                       |
| `float` Float:fOffsetY       | Offset Y de l'attach object qui a été édité                                       |
| `float` Float:fOffsetZ       | Offset Z de l'attach object qui a été édité                                       |
| `float` Float:fRotX          | Rotation X de l'attach object qui a été édité                                     |
| `float` Float:fRotY          | Rotation Y de l'attach object qui a été édité                                     |
| `float` Float:fRotZ          | Rotation Z de l'attach object qui a été édité                                     |
| `float` Float:fScaleX        | Scale _(taille)_ X de l'attach object qui a été édité                             |
| `float` Float:fScaleY        | Scale _(taille)_ X de l'attach object qui a été édité                             |
| `float` Float:fScaleZ        | Scale _(taille)_ X de l'attach object qui a été édité                             |

## Valeur de retour

**1** - Autorise la callback à être appelée par un autre script.

**0** - Refuser que la callback soit appelée ailleurs.

## Exemple

```c
enum attached_object_data
{
    Float:ao_x,
    Float:ao_y,
    Float:ao_z,
    Float:ao_rx,
    Float:ao_ry,
    Float:ao_rz,
    Float:ao_sx,
    Float:ao_sy,
    Float:ao_sz
}

new ao[MAX_PLAYERS][MAX_PLAYER_ATTACHED_OBJECTS][attached_object_data];

// Les données doivent être stockées dans les array ci-dessus quand les attach objects sont ... attachés.

public OnPlayerEditAttachedObject(playerid, EDIT_RESPONSE:response, index, modelid, boneid, Float:fOffsetX, Float:fOffsetY, Float:fOffsetZ, Float:fRotX, Float:fRotY, Float:fRotZ, Float:fScaleX, Float:fScaleY, Float:fScaleZ)
{
    if (response)
    {
        SendClientMessage(playerid, COLOR_GREEN, "Édition sauvegardée.");

        ao[playerid][index][ao_x] = fOffsetX;
        ao[playerid][index][ao_y] = fOffsetY;
        ao[playerid][index][ao_z] = fOffsetZ;
        ao[playerid][index][ao_rx] = fRotX;
        ao[playerid][index][ao_ry] = fRotY;
        ao[playerid][index][ao_rz] = fRotZ;
        ao[playerid][index][ao_sx] = fScaleX;
        ao[playerid][index][ao_sy] = fScaleY;
        ao[playerid][index][ao_sz] = fScaleZ;
    }
    else
    {
        SendClientMessage(playerid, COLOR_RED, "Édition abandonnée.");

        new i = index;
        SetPlayerAttachedObject(playerid, index, modelid, boneid, ao[playerid][i][ao_x], ao[playerid][i][ao_y], ao[playerid][i][ao_z], ao[playerid][i][ao_rx], ao[playerid][i][ao_ry], ao[playerid][i][ao_rz], ao[playerid][i][ao_sx], ao[playerid][i][ao_sy], ao[playerid][i][ao_sz]);
    }
    return 1;
}
```

## Astuces

:::warning

L'édition doit être abandonnée si la réponse est '0' (cancelled). Cela doit être fait par le stockage des offsets au préalable dans un array. 

:::

## Fonctions connexes

- [EditAttachedObject](../functions/EditAttachedObject): Édition d'un attach object.
- [SetPlayerAttachedObject](../functions/SetPlayerAttachedObject): Attache un objet à un joueur.
