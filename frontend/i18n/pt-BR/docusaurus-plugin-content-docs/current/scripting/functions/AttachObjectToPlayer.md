---
title: AttachObjectToPlayer
sidebar_label: AttachObjectToPlayer
description: Anexa um objeto a um jogador.
tags: ["object", "player"]
---

## Descrição

Anexa um objeto a um jogador.

| Nome            | Descrição                                                          |
| --------------- | ------------------------------------------------------------------ |
| objectid        | O ID do objeto a ser anexado ao jogador.                          |
| parentid        | O ID do jogador ao qual anexar o objeto.                          |
| Float:offsetX   | A distância entre o jogador e o objeto na direção X.              |
| Float:offsetY   | A distância entre o jogador e o objeto na direção Y.              |
| Float:offsetZ   | A distância entre o jogador e o objeto na direção Z.              |
| Float:rotationX | A rotação X entre o objeto e o jogador.                           |
| Float:rotationY | A rotação Y entre o objeto e o jogador.                           |
| Float:rotationZ | A rotação Z entre o objeto e o jogador.                           |

## Retorno

Esta função sempre retorna **false**.

## Exemplos

```c
new gMyObject;
gMyObject = CreateObject(19341, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
AttachObjectToPlayer(gMyObject, playerid, 1.5, 0.5, 0.0, 0.0, 1.5, 2);
```

## Funções Relacionadas

- [AttachObjectToVehicle](AttachObjectToVehicle): Anexa um objeto a um veículo.
- [AttachObjectToObject](AttachObjectToObject): Anexa um objeto a outro objeto.
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
- [CreatePlayerObject](CreatePlayerObject): Cria um objeto apenas para um jogador.
- [DestroyPlayerObject](DestroyPlayerObject): Destrói um objeto de jogador.
- [IsValidPlayerObject](IsValidPlayerObject): Verifica se um determinado objeto de jogador é válido.
- [MovePlayerObject](MovePlayerObject): Move um objeto de jogador.
- [StopPlayerObject](StopPlayerObject): Para um objeto de jogador de se mover.
- [SetPlayerObjectPos](SetPlayerObjectPos): Define a posição de um objeto de jogador.
- [SetPlayerObjectRot](SetPlayerObjectRot): Define a rotação de um objeto de jogador.
- [GetPlayerObjectPos](GetPlayerObjectPos): Localiza um objeto de jogador.
- [GetPlayerObjectRot](GetPlayerObjectRot): Verifica a rotação de um objeto de jogador.