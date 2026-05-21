---
title: GetPlayerObjectRot
sidebar_label: GetPlayerObjectRot
description: "Use esta função para obter a rotação atual do objeto."
tags: ["player"]
---


## Descrição

Use esta função para obter a rotação atual do objeto. A rotação é salva por referência em três variáveis ​​de rotaçãoX/rotaçãoY/rotaçãoZ.

| Nome | Descrição |
| ---------------- | ------------------------------------------------------------- |
| playerid | O jogador ao qual você associou este objeto.                     |
| objectid | O objectid do objeto do qual você deseja obter a rotação. |
| &Float:rotationX | A variável para armazenar a rotação X, passada por referência.    |
| &Float:rotationY | A variável para armazenar a rotação Y, passada por referência.    |
| &Float:rotationZ | A variável para armazenar a rotação Z, passada por referência.    |

## Retornos

A rotação do objeto é armazenada nas variáveis especificadas.

## Exemplos

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    new Float:rotationX, Float:rotationY, Float:rotationZ;
    GetPlayerObjectRot(playerid, objectid, rotationX, rotationY, rotationZ);
    // rotaçãoX = 0,0
    // rotaçãoY = 0,0
    // rotaçãoZ = 96,0
    return 1;
}
```
## Funções Relacionadas

- [CreatePlayerObject](CreatePlayerObject): Crie um objeto para apenas um jogador.
- [DestroyPlayerObject](DestroyPlayerObject): Destrua um objeto de jogador.
- [IsValidPlayerObject](IsValidPlayerObject): Verifica se determinado objeto do jogador é válido.
- [MovePlayerObject](MovePlayerObject): Mova um objeto de jogador.
- [StopPlayerObject](StopPlayerObject): Impede o movimento de um objeto do jogador.
- [SetPlayerObjectPos](SetPlayerObjectPos): Define a posição de um objeto do jogador.
- [SetPlayerObjectRot](SetPlayerObjectRot): Define a rotação de um objeto de jogador.
- [GetPlayerObjectPos](GetPlayerObjectPos): Localize um objeto de jogador.
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
