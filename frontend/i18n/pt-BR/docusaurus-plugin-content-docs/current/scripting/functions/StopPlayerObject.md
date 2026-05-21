---
title: StopPlayerObject
sidebar_label: StopPlayerObject
description: "Pare um objeto de jogador em movimento após MovePlayerObject ter sido usado."
tags: ["player"]
---


## Descrição

Pare um objeto de jogador em movimento após MovePlayerObject ter sido usado.

| Nome | Descrição |
| -------- | ------------------------------------------------- |
| playerid | O ID do jogador cujo objeto de jogador será interrompido. |
| objectid | O ID do objeto do jogador a ser interrompido.              |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    MovePlayerObject(playerid, gPlayerObject[playerid], 2001.195679, 1547.113892, 10.000000, 2.0);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/stopobject", true) == 0)
    {
        StopPlayerObject(playerid, gPlayerObject[playerid]);
        return 1;
    }
    return 0;
}
```
## Funções Relacionadas

- [MovePlayerObject](MovePlayerObject): Mova um objeto de jogador.
- [CreatePlayerObject](CreatePlayerObject): Crie um objeto para apenas um jogador.
- [DestroyPlayerObject](DestroyPlayerObject): Destrua um objeto de jogador.
- [IsValidPlayerObject](IsValidPlayerObject): Verifica se determinado objeto do jogador é válido.
- [IsPlayerObjectMoving](IsPlayerObjectMoving): Verifique se o objeto do jogador está se movendo.
- [SetPlayerObjectPos](SetPlayerObjectPos): Define a posição de um objeto do jogador.
- [SetPlayerObjectRot](SetPlayerObjectRot): Define a rotação de um objeto do jogador.
- [GetPlayerObjectPos](GetPlayerObjectPos): Localize um objeto de jogador.
- [GetPlayerObjectRot](GetPlayerObjectRot): Verifica a rotação de um objeto do jogador.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Anexe um objeto de jogador a um jogador.
- [CreateObject](CreateObject): Crie um objeto.
- [DestroyObject](DestroyObject): Destrua um objeto.
- [IsValidObject](IsValidObject): Verifica se determinado objeto é válido.
- [MoveObject](MoveObject): Mova um objeto.
- [IsObjectMoving](IsObjectMoving): Verifique se o objeto está se movendo.
- [StopObject](StopObject): Impede o movimento de um objeto.
- [SetObjectPos](SetObjectPos): Define a posição de um objeto.
- [SetObjectRot](SetObjectRot): Define a rotação de um objeto.
- [GetObjectPos](GetObjectPos): Localize um objeto.
- [GetObjectRot](GetObjectRot): Verifica a rotação de um objeto.
- [AttachObjectToPlayer](AttachObjectToPlayer): Anexe um objeto a um jogador.
