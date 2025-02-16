---
title: OnPlayerObjectMoved
description: Acest callback este apelat atunci când un obiect player este mutat după MovePlayerObject (când se oprește din mișcare).
tags: ["player"]
---

## Descriere

Acest callback este apelat atunci când un obiect player este mutat după MovePlayerObject (când se oprește din mișcare).

| Name     | Descriere                                  |
| -------- | ------------------------------------------ |
| playerid | Playerul căruia i este alocat obiectul     |
| objectid | ID-ul obiectului jucător care a fost mutat |

## Returnări

Este întotdeauna numit primul în filterscript-uri.

## Exemple

```c
public OnPlayerObjectMoved(playerid, objectid)
{
    printf("Obiect de jucător mutat: id obiect: %d id jucator: %d", objectid, playerid);
    return 1;
}
```

## Note

:::tip

Acest callback poate fi apelat și pentru NPC.

:::

## Funcții similare

- [MovePlayerObject](../functions/MovePlayerObject): Move a player object.
- [IsPlayerObjectMoving](../functions/IsPlayerObjectMoving): Check if the player object is moving.
- [StopPlayerObject](../functions/StopPlayerObject): Stop a player object from moving.
- [CreatePlayerObject](../functions/CreatePlayerObject): Create an object for only one player.
- [DestroyPlayerObject](../functions/DestroyPlayerObject): Destroy a player object.