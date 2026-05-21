---
title: MovePlayerObject
sidebar_label: MovePlayerObject
description: "Mova um objeto do jogador com uma velocidade definida."
tags: ["player"]
---


## Descrição

Mova um objeto do jogador com uma velocidade definida. Também suporta rotação. Jogadores/veículos navegarão em objetos em movimento.

| Nome | Descrição |
| --------------- | ------------------------------------------------- |
| playerid | O ID do jogador cujo objeto de jogador será movido. |
| objectid | O ID do objeto a ser movido.                     |
| Float:targetX | A coordenada X para a qual mover o objeto.           |
| Float:targetY | A coordenada Y para a qual mover o objeto.           |
| Float:targetZ | A coordenada Z para a qual mover o objeto.           |
| Float:speed | A velocidade na qual mover o objeto.            |
| Float:rotationX | A rotação X final (opcional).                  |
| Float:rotationY | A rotação Y final (opcional).                  |
| Float:rotationZ | A rotação Z final (opcional).                  |

## Retornos

O tempo que o objeto levará para se mover em milissegundos.

## Exemplos

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    MovePlayerObject(playerid, gPlayerObject[playerid], 2001.195679, 1547.113892, 10.000000, 2.0);
    return 1;
}
```
## Notas

:::tip

Se utilizar os parâmetros de rotação, o objeto deve ser movido (X/Y/Z). O objeto irá interpolar a rotação desde quando os objetos começam a se mover e quando param.

:::

## Funções Relacionadas

- [CreatePlayerObject](CreatePlayerObject): Crie um objeto para apenas um jogador.
- [DestroyPlayerObject](DestroyPlayerObject): Destrua um objeto de jogador.
- [IsValidPlayerObject](IsValidPlayerObject): Verifica se determinado objeto do jogador é válido.
- [StopPlayerObject](StopPlayerObject): Impede o movimento de um objeto do jogador.
- [IsObjectMoving](IsObjectMoving): Verifique se o objeto está se movendo.
- [SetPlayerObjectPos](SetPlayerObjectPos): Define a posição de um objeto do jogador.
- [SetPlayerObjectRot](SetPlayerObjectRot): Define a rotação de um objeto do jogador.
- [GetPlayerObjectPos](GetPlayerObjectPos): Localize um objeto de jogador.
- [GetPlayerObjectRot](GetPlayerObjectRot): Verifica a rotação de um objeto do jogador.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Anexe um objeto de jogador a um jogador.
- [CreateObject](CreateObject): Crie um objeto.
- [DestroyObject](DestroyObject): Destrua um objeto.
- [IsValidObject](IsValidObject): Verifica se determinado objeto é válido.
- [MoveObject](MoveObject): Mova um objeto.
- [StopObject](StopObject): Impede o movimento de um objeto.
- [IsPlayerObjectMoving](IsPlayerObjectMoving): Verifique se o objeto do jogador está se movendo.
- [SetObjectPos](SetObjectPos): Define a posição de um objeto.
- [SetObjectRot](SetObjectRot): Define a rotação de um objeto.
- [GetObjectPos](GetObjectPos): Localize um objeto.
- [GetObjectRot](GetObjectRot): Verifica a rotação de um objeto.
- [AttachObjectToPlayer](AttachObjectToPlayer): Anexe um objeto a um jogador.
