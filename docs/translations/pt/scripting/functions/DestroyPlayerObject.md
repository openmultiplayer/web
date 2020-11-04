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

- [CreatePlayerObject](CreatePlayerObject.md): Cria um objeto para apenas um jogador.
- [IsValidPlayerObject](IsValidPlayerObject.md): Verifica se determinado objeto de jogador (player-object) é válido.
- [MovePlayerObject](MovePlayerObject.md): Move um objeto de jogador (player-object).
- [StopPlayerObject](StopPlayerObject.md): Impede um objeto de jogador (player-object) de se mover.
- [SetPlayerObjectPos](SetPlayerObjectPos.md): Define a posição de um objeto de jogador (player-object).
- [SetPlayerObjectRot](SetPlayerObjectRot.md): Define a rotação de um objeto de jogador (player-object).
- [GetPlayerObjectPos](GetPlayerObjectPos.md): Localiza um objeto de jogador (player-object).
- [GetPlayerObjectRot](GetPlayerObjectRot.md): Verifica a rotação de um objeto de jogador (player-object).
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer.md): Anexa um objeto de jogador (player-object) a um jogador.
- [CreateObject](CreateObject.md): Cria um objeto.
- [DestroyObject](DestroyObject.md): Destrói um objeto.
- [IsValidObject](IsValidObject.md): Verifica se um determinado objeto é válido.
- [MoveObject](MoveObject.md): Move um objeto.
- [StopObject](StopObject.md): Impede um objeto de se mover.
- [SetObjectPos](SetObjectPos.md): Define a posição de um objeto.
- [SetObjectRot](SetObjectRot.md): Define a rotação de um objeto.
- [GetObjectPos](GetObjectPos.md): Localiza um objeto.
- [GetObjectRot](GetObjectRot.md): Verifica a rotação de um objeto.
- [AttachObjectToPlayer](AttachObjectToPlayer.md): Anexa um objeto a um jogador.
