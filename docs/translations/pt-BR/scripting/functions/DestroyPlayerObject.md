---
title: DestroyPlayerObject
description: Destrói um objeto de jogador (player-object) criado usando CreatePlayerObject.
tags: ["player"]
---

## Descrição

Destrói um objeto de jogador (player-object) criado usando CreatePlayerObject.

| Nome     | Descrição                                                               |
| -------- | ----------------------------------------------------------------------- |
| playerid | The ID of the player whose player-object to destroy.                    |
| objectid | The ID of the player-object to destroy. Returned by CreatePlayerObject. |

## Retorno

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnPlayerObjectMoved(playerid, objectid)
{
    DestroyPlayerObject(playerid, objectid);
    return 1;
}
```

## Funções Relacionadas

- [CreatePlayerObject](CreatePlayerObject): Cria um objeto para apenas um jogador.
- [IsValidPlayerObject](IsValidPlayerObject): Verifica se determinado objeto de jogador (player-object) é válido.
- [MovePlayerObject](MovePlayerObject): Move um objeto de jogador (player-object).
- [StopPlayerObject](StopPlayerObject): Impede um objeto de jogador (player-object) de se mover.
- [SetPlayerObjectPos](SetPlayerObjectPos): Define a posição de um objeto de jogador (player-object).
- [SetPlayerObjectRot](SetPlayerObjectRot): Define a rotação de um objeto de jogador (player-object).
- [GetPlayerObjectPos](GetPlayerObjectPos): Localiza um objeto de jogador (player-object).
- [GetPlayerObjectRot](GetPlayerObjectRot): Verifica a rotação de um objeto de jogador (player-object).
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Anexa um objeto de jogador (player-object) a um jogador.
- [CreateObject](CreateObject): Cria um objeto.
- [DestroyObject](DestroyObject): Destrói um objeto.
- [IsValidObject](IsValidObject): Verifica se um determinado objeto é válido.
- [MoveObject](MoveObject): Move um objeto.
- [StopObject](StopObject): Impede um objeto de se mover.
- [SetObjectPos](SetObjectPos): Define a posição de um objeto.
- [SetObjectRot](SetObjectRot): Define a rotação de um objeto.
- [GetObjectPos](GetObjectPos): Localiza um objeto.
- [GetObjectRot](GetObjectRot): Verifica a rotação de um objeto.
- [AttachObjectToPlayer](AttachObjectToPlayer): Anexa um objeto a um jogador.
