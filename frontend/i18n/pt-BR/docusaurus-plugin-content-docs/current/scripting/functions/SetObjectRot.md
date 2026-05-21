---
title: SetObjectRot
sidebar_label: SetObjectRot
description: "Defina a rotação de um objeto nos três eixos (X, Y e Z)."
tags: ["object"]
---


## Descrição

Defina a rotação de um objeto nos três eixos (X, Y e Z).

| Nome | Descrição |
| --------------- | -------------------------------------------- |
| objectid | O ID do objeto do qual definir a rotação. |
| Float:rotationX | A rotação X.                              |
| Float:rotationY | A rotação Y.                              |
| Float:rotationZ | A rotação Z.                              |

## Retornos

Esta função sempre retorna 1, mesmo que o objeto não exista.

## Exemplos

```c
public OnGameModeInit()
{
    new objectid = CreateObject(2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    SetObjectRot(objectid, 0.0, 0.0, 180.0);
    return 1;
}
```
## Funções Relacionadas

- [CreateObject](CreateObject): Crie um objeto.
- [DestroyObject](DestroyObject): Destrua um objeto.
- [IsValidObject](IsValidObject): Verifica se determinado objeto é válido.
- [MoveObject](MoveObject): Mova um objeto.
- [StopObject](StopObject): Impede o movimento de um objeto.
- [SetObjectPos](SetObjectPos): Define a posição de um objeto.
- [GetObjectPos](GetObjectPos): Localize um objeto.
- [GetObjectRot](GetObjectRot): Verifica a rotação de um objeto.
- [AttachObjectToPlayer](AttachObjectToPlayer): Anexe um objeto a um jogador.
- [CreatePlayerObject](CreatePlayerObject): Crie um objeto para apenas um jogador.
- [DestroyPlayerObject](DestroyPlayerObject): Destrua um objeto de jogador.
- [IsValidPlayerObject](IsValidPlayerObject): Verifica se determinado objeto do jogador é válido.
- [MovePlayerObject](MovePlayerObject): Mova um objeto de jogador.
- [StopPlayerObject](StopPlayerObject): Impede o movimento de um objeto do jogador.
- [SetPlayerObjectPos](SetPlayerObjectPos): Define a posição de um objeto do jogador.
- [SetPlayerObjectRot](SetPlayerObjectRot): Define a rotação de um objeto do jogador.
- [GetPlayerObjectPos](GetPlayerObjectPos): Localize um objeto de jogador.
- [GetPlayerObjectRot](GetPlayerObjectRot): Verifica a rotação de um objeto do jogador.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Anexe um objeto de jogador a um jogador.
