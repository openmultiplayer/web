---
title: SetObjectPos
sidebar_label: SetObjectPos
description: "Alterar a posição de um objeto."
tags: ["object"]
---


## Descrição

Alterar a posição de um objeto.

| Nome | Descrição |
| -------- | ---------------------------------------------------------------------- |
| objectid | O ID do objeto cuja posição será definida. Retornado por CreateObject. |
| Float:x | A coordenada X na qual posicionar o objeto.                            |
| Float:y | A coordenada Y na qual posicionar o objeto.                            |
| Float:z | A coordenada Z na qual posicionar o objeto.                            |

## Retornos

Esta função sempre retorna **true**, mesmo que o objeto especificado não exista.

## Exemplos

```c
SetObjectPos(objectid, 2001.195679, 1547.113892, 14.283400);
```
## Funções Relacionadas

- [CreateObject](CreateObject): Crie um objeto.
- [DestroyObject](DestroyObject): Destrua um objeto.
- [IsValidObject](IsValidObject): Verifica se determinado objeto é válido.
- [MoveObject](MoveObject): Mova um objeto.
- [StopObject](StopObject): Impede o movimento de um objeto.
- [SetObjectRot](SetObjectRot): Define a rotação de um objeto.
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
