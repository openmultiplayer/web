---
title: DestroyObject
sidebar_label: DestroyObject
description: Destrói (remove) um objeto que foi criado usando CreateObject.
tags: []
---

## Descrição

Destrói (remove) um objeto que foi criado usando CreateObject.

| Nome     | Descrição                                                   |
| -------- | ----------------------------------------------------------- |
| objectid | O ID do objeto a ser destruído. Retornado por CreateObject. |

## Retorno

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnObjectMoved(objectid)
{
    DestroyObject(objectid);
    return 1;
}
```

## Funções relacionadas

- [CreateObject](CreateObject): Cria um objeto.
- [IsValidObject](IsValidObject): Verifica se um determinado objeto é válido.
- [MoveObject](MoveObject): Move um objeto.
- [StopObject](StopObject): Pare a movimentação de um objeto.
- [SetObjectPos](SetObjectPos): Define a posição de um objeto.
- [SetObjectRot](SetObjectRot): Define a rotação de um objeto.
- [GetObjectPos](GetObjectPos): Localize a posição de um objeto.
- [GetObjectRot](GetObjectRot): Localize a rotação de um objeto.
- [AttachObjectToPlayer](AttachObjectToPlayer): Anexa um objeto a um jogador.
- [CreatePlayerObject](CreatePlayerObject): Cria um objeto para apenas um jogador.
- [DestroyPlayerObject](DestroyPlayerObject): Destrua um objeto do jogador.
- [IsValidPlayerObject](IsValidPlayerObject): Verifica se um determinado objeto player é válido.
- [MovePlayerObject](MovePlayerObject): Move um objeto do jogador.
- [StopPlayerObject](StopPlayerObject): Pare a movimentação de um objeto do jogador.
- [SetPlayerObjectPos](SetPlayerObjectPos): Define a posição de um objeto do jogador.
- [SetPlayerObjectRot](SetPlayerObjectRot): Defina a rotação de um objeto do jogador.
- [GetPlayerObjectPos](GetPlayerObjectPos): Localize a posição de um objeto do jogador.
- [GetPlayerObjectRot](GetPlayerObjectRot): Localize a rotação de um objeto do jogador.
- [AttachPlayerObjectToPlayer](AttachPlayerObjectToPlayer): Anexa um objeto de jogador a um jogador.