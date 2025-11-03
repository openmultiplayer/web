---
title: OnObjectMoved
sidebar_label: OnObjectMoved
description: Esta callback é chamada quando um objeto é movido após o MoveObject (quando para de se mover).
tags: []
---

## Descrição

Esta callback é chamada quando um objeto é movido após o MoveObject (quando para de se mover).

| Nome     | Descrição                     |
| -------- | ----------------------------- |
| objectid | O ID do objeto que foi movido |

## Retorno

Sempre é chamada primeiro em filterscripts.

## Exemplos

```c
public OnObjectMoved(objectid)
{
    printf("Objeto %d terminou de se mover.", objectid);
    return 1;
}
```

## Notas

:::tip

SetObjectPos não funciona quando usado nesta callback. Para consertar isso, recrie o objeto.

:::

## Funções Relacionadas

- [MoveObject](../functions/MoveObject): Move um objeto.
- [MovePlayerObject](../functions/MovePlayerObject): Move o objeto de um jogador.
- [IsObjectMoving](../functions/IsObjectMoving): Verifica se um objeto está se movendo.
- [StopObject](../functions/StopObject): Para um objeto de se mover.
- [OnPlayerObjectMoved](OnPlayerObjectMoved): Chamado quando um objeto de jogador para de se mover.
