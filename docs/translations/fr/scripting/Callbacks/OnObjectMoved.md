---
title: OnObjectMoved
description: Cette callback est appelée quand un objet s'est arrêté de bouger après un MoveObject
tags: [OnObjectMoved, SetObjectPos, objectid, object, objet, mouvement, moved, IsObjectMoving, MoveObject]
---

## Paramètres

Cette callback est appelée quand un objet s'est arrêté de bouger après un MoveObject.

| Nom            | Description                                |
| -------------- | ------------------------------------------ |
| `int` objectid | ID de l'objet qui était en mouvement       |

## Valeur de retour

Cette callback est toujours appelée en premier dans les filterscripts.

## Exemple

```c
public OnObjectMoved(objectid)
{
    printf("L'objet %d a fini son mouvement.", objectid);
    return 1;
}
```

## Astuces

:::tip

SetObjectPos ne fonctionne pas dans cette callback. Il faut recréer l'objet pour éviter ce problème.

:::

## Fonctions connexes

- [MoveObject](../functions/MoveObject): Déplace un objet.
- [MovePlayerObject](../functions/MovePlayerObject): Déplace l'objet d'un joueur.
- [IsObjectMoving](../functions/IsObjectMoving): Vérifie si l'objet se déplace.
- [StopObject](../functions/StopObject): Arrête le mouvement d'un objet.
- [OnPlayerObjectMoved](OnPlayerObjectMoved): Callback appelée lorsque l'objet d'un joueur arrête de bouger.
