---
title: SetPlayerObjectRot
sidebar_label: SetPlayerObjectRot
description: "Defina a rotação de um objeto nos eixos X, Y e Z."
tags: ["player", "object", "playerobject"]
---


## Descrição

Defina a rotação de um objeto nos eixos X, Y e Z.

| Nome | Descrição |
| --------------- | --------------------------------------------------- |
| playerid | O ID do jogador cujo objeto de jogador será girado. |
| objectid | O ID do objeto do jogador a ser girado.              |
| Float:rotationX | A rotação X a ser definida.                              |
| Float:rotationY | A rotação Y a ser definida.                              |
| Float:rotationZ | A rotação Z a ser definida.                              |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função.

## Exemplos

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    SetPlayerObjectRot(playerid, gPlayerObject[playerid], 0.0, 0.0, 180.0);
    return 1;
}
```
## Notas

:::tip

Para girar suavemente um objeto, consulte [MovePlayerObject](MovePlayerObject).

:::

## Funções Relacionadas

- [CreatePlayerObject](CreatePlayerObject): Crie um objeto para apenas um jogador.
- [DestroyPlayerObject](DestroyPlayerObject): Destrua um objeto de jogador.
- [IsValidPlayerObject](IsValidPlayerObject): Verifica se determinado objeto do jogador é válido.
- [MovePlayerObject](MovePlayerObject): Mova um objeto de jogador.
- [StopPlayerObject](StopPlayerObject): Impede o movimento de um objeto do jogador.
- [SetPlayerObjectPos](SetPlayerObjectPos): Define a posição de um objeto do jogador.
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
