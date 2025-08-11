---
title: CreatePlayerObject
sidebar_label: CreatePlayerObject
description: Cria um objeto que será visível apenas para um jogador.
tags: ["player", "object", "playerobject"]
---

## Descrição

Cria um objeto que será visível apenas para um jogador.

| Nome               | Descrição                                                                                                                                                                                                   |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid           | O ID do jogador para criar o objeto.                                                                                                                                                                       |
| modelid            | O modelo a ser criado.                                                                                                                                                                                      |
| Float:x            | A coordenada X onde criar o objeto.                                                                                                                                                                        |
| Float:y            | A coordenada Y onde criar o objeto.                                                                                                                                                                        |
| Float:z            | A coordenada Z onde criar o objeto.                                                                                                                                                                        |
| Float:rotationX    | A rotação X do objeto.                                                                                                                                                                                     |
| Float:rotationY    | A rotação Y do objeto.                                                                                                                                                                                     |
| Float:rotationZ    | A rotação Z do objeto.                                                                                                                                                                                     |
| Float:drawDistance | A distância a partir da qual os objetos aparecerão para os jogadores. 0.0 fará com que um objeto seja renderizado em sua distância padrão. Deixar este parâmetro de fora fará com que os objetos sejam renderizados em sua distância padrão. |

## Retorno

O ID do objeto que foi criado, ou INVALID_OBJECT_ID se o limite de objetos (MAX_OBJECTS) foi atingido.

## Exemplos

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    // Ou alternativamente, usando o parâmetro DrawDistance para mostrá-lo de o mais longe possível:
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0, 300.0);
    return 1;
}

public OnPlayerDisconnect(playerid, reason)
{
    DestroyPlayerObject(playerid, gPlayerObject[playerid]);
    return 1;
}
```

## Funções Relacionadas

- [DestroyPlayerObject](DestroyPlayerObject): Destrói um objeto de jogador.
- [IsValidPlayerObject](IsValidPlayerObject): Verifica se um determinado objeto de jogador é válido.
- [MovePlayerObject](MovePlayerObject): Move um objeto de jogador.
- [StopPlayerObject](StopPlayerObject): Para um objeto de jogador de se mover.
- [SetPlayerObjectPos](SetPlayerObjectPos): Define a posição de um objeto de jogador.
- [SetPlayerObjectRot](SetPlayerObjectRot): Define a rotação de um objeto de jogador.
- [GetPlayerObjectPos](GetPlayerObjectPos): Localiza um objeto de jogador.
- [GetPlayerObjectRot](GetPlayerObjectRot): Verifica a rotação de um objeto de jogador.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Anexa um objeto de jogador a um jogador.
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