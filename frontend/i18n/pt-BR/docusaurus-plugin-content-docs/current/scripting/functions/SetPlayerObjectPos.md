---
title: SetPlayerObjectPos
sidebar_label: SetPlayerObjectPos
description: "Define a posição de um objeto do jogador nas coordenadas especificadas."
tags: ["player", "object", "playerobject"]
---


## Descrição

Define a posição de um objeto do jogador nas coordenadas especificadas.

| Nome | Descrição |
| -------- | ----------------------------------------------------------------------------------- |
| playerid | O ID do jogador cujo objeto de jogador deseja definir a posição.                    |
| objectid | O ID do objeto do jogador para definir a posição. Retornado por CreatePlayerObject. |
| Float:x | A coordenada X na qual colocar o objeto.                                              |
| Float:y | A coordenada Y na qual colocar o objeto.                                              |
| Float:z | A coordenada Z na qual colocar o objeto.                                              |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. Jogador e/ou objeto não existem.

## Exemplos

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);
    return 1;
}

// Mais tarde
SetPlayerObjectPos(playerid, gPlayerObject[playerid], 2001.195679, 1547.113892, 14.283400);
```
## Funções Relacionadas

- [CreatePlayerObject](CreatePlayerObject): Crie um objeto para apenas um jogador.
- [DestroyPlayerObject](DestroyPlayerObject): Destrua um objeto de jogador.
- [IsValidPlayerObject](IsValidPlayerObject): Verifica se determinado objeto do jogador é válido.
- [MovePlayerObject](MovePlayerObject): Mova um objeto de jogador.
- [StopPlayerObject](StopPlayerObject): Impede o movimento de um objeto do jogador.
- [SetPlayerObjectRot](SetPlayerObjectRot): Define a rotação de um objeto de jogador.
- [GetPlayerObjectPos](GetPlayerObjectPos): Localize um objeto de jogador.
- [GetPlayerObjectRot](GetPlayerObjectRot): Verifica a rotação de um objeto do jogador.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Anexe um objeto de jogador a um jogador.
- [CreateObject](CreateObject): Crie um objeto.
- [DestroyObject](DestroyObject): Destrua um objeto.
- [IsValidObject](IsValidObject): Verifica se determinado objeto é válido.
- [MoveObject](MoveObject): Mova um objeto.
- [StopObject](StopObject): Impede o movimento de um objeto.
- [SetObjectPos](SetObjectPos): Define a posição de um objeto.
- [SetObjectRot](SetObjectRot): Define a rotação de um objeto.
- [GetObjectPos](GetObjectPos): Localize um objeto.
- [GetObjectRot](GetObjectRot): Verifica a rotação de um objeto.
- [AttachObjectToPlayer](AttachObjectToPlayer): Anexe um objeto a um jogador.
