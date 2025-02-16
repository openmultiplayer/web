---
title: OnPlayerObjectMoved
description: Cette callback est appelée quand l'objet d'un joueur a été déplacé après un MovePlayerObject (quand l'objet s'arrête de bouger).
tags: ["player"]
---

## Paramètres

Cette callback est appelée quand l'objet d'un joueur a été déplacé après un MovePlayerObject _(quand l'objet s'arrête de bouger)_.

| Nom            | Description                                  |
| -------------- | -------------------------------------------- |
| `int` playerid | L'ID du joueur auquel l'objet est assigné    |
| `int` objectid | L'ID de l'objet du joueur qui a été déplacé  |

## Valeur de retour

Cette callback ne retourne pas de valeur spécifique, mais doit retourner quelque chose. Autrement dit, `return callback();` ne fonctionnera pas car la callback ne retourne rien, mais un return _(`return 1;` ou `return 0;`)_ doit être effectué dans la callback.

## Exemple

```c
public OnPlayerObjectMoved(playerid, objectid)
{
    printf("Objet d'un joueur déplacé : objectid: %d playerid: %d", objectid, playerid);
    return 1;
}
```

## Astuces

:::tip

Cette callback peut aussi être utilisée pour les NPC.

:::

## Fonctions connexes

- [MovePlayerObject](../functions/MovePlayerObject): Déplace l'objet d'un joueur.
- [IsPlayerObjectMoving](../functions/IsPlayerObjectMoving): Vérfiie si l'objet d'un joueur se déplace.
- [StopPlayerObject](../functions/StopPlayerObject): Arrête le mouvement de l'objet d'un joueur.
- [CreatePlayerObject](../functions/CreatePlayerObject): Créer un objet seulement pour un joueur.
- [DestroyPlayerObject](../functions/DestroyPlayerObject): Détruit l'objet d'un joueur.
