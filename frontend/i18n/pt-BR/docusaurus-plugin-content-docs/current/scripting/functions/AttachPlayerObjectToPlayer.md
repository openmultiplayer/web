---
title: AttachPlayerObjectToPlayer
sidebar_label: AttachPlayerObjectToPlayer
description: O mesmo que AttachObjectToPlayer mas para objetos que foram criados para jogador.
tags: ["player", "object", "playerobject"]
---

## Descrição

O mesmo que [AttachObjectToPlayer](AttachObjectToPlayer) mas para objetos que foram criados para jogador.

| Nome            | Descrição                                                          |
| --------------- | ------------------------------------------------------------------ |
| playerid        | O ID do jogador que está vinculado ao objeto.                     |
| objectid        | O ID do objeto que você quer anexar ao jogador.                   |
| parentid        | O ID do jogador ao qual você quer anexar o objeto.                |
| Float:offsetX   | A distância entre o jogador e o objeto na direção X.              |
| Float:offsetY   | A distância entre o jogador e o objeto na direção Y.              |
| Float:offsetZ   | A distância entre o jogador e o objeto na direção Z.              |
| Float:rotationX | A rotação X.                                                       |
| Float:rotationY | A rotação Y.                                                       |
| Float:rotationZ | A rotação Z.                                                       |

## Retorno

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerSpawn(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    AttachPlayerObjectToPlayer(playerid, gPlayerObject[playerid], other_playerid, 1.5, 0.5, 0.0, 0.0, 1.5, 2.0);
    return 1;
}
```

## Notas

:::warning

Esta função foi removida no SA-MP 0.3.

:::

## Funções Relacionadas

- [CreatePlayerObject](CreatePlayerObject): Cria um objeto apenas para um jogador.
- [DestroyPlayerObject](DestroyPlayerObject): Destrói um objeto de jogador.
- [IsValidPlayerObject](IsValidPlayerObject): Verifica se um determinado objeto de jogador é válido.
- [MovePlayerObject](MovePlayerObject): Move um objeto de jogador.
- [StopPlayerObject](StopPlayerObject): Para um objeto de jogador de se mover.
- [SetPlayerObjectRot](SetPlayerObjectRot): Define a rotação de um objeto de jogador.
- [GetPlayerObjectPos](GetPlayerObjectPos): Localiza um objeto de jogador.
- [SetPlayerObjectPos](SetPlayerObjectPos): Define a posição de um objeto de jogador.
- [GetPlayerObjectRot](GetPlayerObjectRot): Verifica a rotação de um objeto de jogador.
- [SetPlayerAttachedObject](SetPlayerAttachedObject): Anexa um objeto a um jogador
- [RemovePlayerAttachedObject](RemovePlayerAttachedObject): Remove um objeto anexado de um jogador
- [IsPlayerAttachedObjectSlotUsed](IsPlayerAttachedObjectSlotUsed): Verifica se um objeto está anexado a um jogador em um índice específico
- [CreateObject](CreateObject): Cria um objeto.
- [DestroyObject](DestroyObject): Destrói um objeto.
- [IsValidObject](IsValidObject): Verifica se um determinado objeto é válido.
- [MoveObject](MoveObject): Move um objeto.
- [StopObject](StopObject): Para um objeto de se mover.
- [SetObjectPos](SetObjectPos): Define a posição de um objeto.
- [SetObjectRot](SetObjectRot): Define a rotação de um objeto.
- [GetObjectPos](GetObjectPos): Localiza um objeto.
- [GetObjectRot](GetObjectRot): Verifica a rotação de um objeto.
- [AttachObjectToPlayer](AttachObjectToPlayer): Anexa um objeto a um jogador.