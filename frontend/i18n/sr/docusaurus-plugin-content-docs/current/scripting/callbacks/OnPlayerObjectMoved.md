---
title: OnPlayerObjectMoved
sidebar_label: OnPlayerObjectMoved
description: Овај повратни позив се позива када се играчев објекат помери након MovePlayerObject (када престане да се помера).
tags: ["player", "object", "playerobject"]
---

## Опис

Овај повратни позив се позива када се играчев објекат помери након [MovePlayerObject](../functions/MovePlayerObject) (када престане да се помера).

| Име      | Опис                                       |
| -------- | ------------------------------------------ |
| playerid | ID играча којем је објекат додељен.        |
| objectid | ID играчевог објекта који је померен.      |

## Враћа

Увек се прво позива у филтерскриптама.

## Пример

```c
public OnPlayerObjectMoved(playerid, objectid)
{
    printf("Player object moved: objectid: %d playerid: %d", objectid, playerid);
    return 1;
}
```

## Белешке

<TipNPCCallbacksSR />

## Повезане повратне функције

Следеће повратне функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [OnObjectMoved](OnObjectMoved): Овај повратни позив се позива када објекат престане да се помера.

## Повезане функције

Следеће функције могу бити корисне, јер су на један или други начин повезане са овим позивом.

- [MovePlayerObject](../functions/MovePlayerObject): Померите играчев објекат.
- [IsPlayerObjectMoving](../functions/IsPlayerObjectMoving): Проверите да ли се играчев објекат помера.
- [StopPlayerObject](../functions/StopPlayerObject): Престаните са померањем играчевог објекта.
- [CreatePlayerObject](../functions/CreatePlayerObject): Креирајте објекат само за једног играча.
- [DestroyPlayerObject](../functions/DestroyPlayerObject): Уништите играчев објекат.
