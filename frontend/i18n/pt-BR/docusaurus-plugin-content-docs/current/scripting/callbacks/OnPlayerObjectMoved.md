---
title: OnPlayerObjectMoved
sidebar_label: OnPlayerObjectMoved
description: Esta callback é chamada quando o objeto de um jogador é movido após o MovePlayerObject (quando para de se mover).
tags: ["player"]
---

## Descrição

Esta callback é chamada quando o objeto de um jogador é movido após o MovePlayerObject (quando para de se mover).

| Nome     | Descrição                                      |
| -------- | ---------------------------------------------- |
| playerid | O ID do jogador a qual o objeto está associado |
| objectid | O ID do objeto do jogador que foi movido       |

## Retorno

É sempre chamado primeiro nos filterscripts.

## Exemplos

```c
public OnPlayerObjectMoved(playerid, objectid)
{
    printf("Objeto de ogador movido: objectid: %d playerid: %d", objectid, playerid);
    return 1;
}
```

## Notas

:::tip

<TipNPCCallbacksPT />

:::

## Funções Relacionadas

- [MovePlayerObject](../functions/MovePlayerObject): Move o objeto de um jogador.
- [IsPlayerObjectMoving](../functions/IsPlayerObjectMoving): Verifica se um objeto de jogador está se movendo.
- [StopPlayerObject](../functions/StopPlayerObject): Faz um objeto de jogador parar de se mover.
- [CreatePlayerObject](../functions/CreatePlayerObject): Cria um objeto apenas para um jogador.
- [DestroyPlayerObject](../functions/DestroyPlayerObject): Destrói o objeto de um jogador.
