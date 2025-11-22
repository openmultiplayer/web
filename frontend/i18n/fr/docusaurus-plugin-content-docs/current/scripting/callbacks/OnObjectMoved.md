---
title: OnObjectMoved
sidebar_label: OnObjectMoved
description: Cette callback est appelée quand un objet s'est arrêté de bouger après un MoveObject
tags: [OnObjectMoved, SetObjectPos, objectid, object, objet, mouvement, moved, IsObjectMoving, MoveObject]
---

## Paramètres

Cette callback est appelée quand un objet s'est arrêté de bouger après un MoveObject.

| Nom            | Description                                |
| -------------- | ------------------------------------------ |
| `int` objectid | ID de l'objet qui était en mouvement       |

## Valeur de retour

Cette callback ne retourne rien, mais doit retourner quelque chose. Autrement dit, `return callback();` ne fonctionnera pas car la callback ne retourne rien, mais un return _(`return 1;` ou `return 0;`)_ doit être effectué dans la callback.

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

## Callback connexe

- [OnPlayerObjectMoved](OnPlayerObjectMoved): Callback appelée lorsque l'objet d'un joueur arrête de bouger.
