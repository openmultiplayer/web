---
title: GetObjectPos
sidebar_label: GetObjectPos
description: "Obtenha a posição de um objeto."
tags: ["object"]
---


## Descrição

Obtenha a posição de um objeto.

| Nome | Descrição |
| -------- | ------------------------------------------------------------------- |
| objectid | O ID do objeto para obter a posição de.. |
| &Float:x | Uma variável na qual armazenar a coordenada X, passada por referência. |
| &Float:y | Uma variável na qual armazenar a coordenada Y, passada por referência. |
| &Float:z | Uma variável na qual armazenar a coordenada Z, passada por referência. |

## Retornos

**true** - A função foi executada com sucesso.

**false** - Falha na execução da função. O objeto especificado não existe.

## Exemplos

```c
public OnGameModeInit()
{
    new objectid = CreateObject(2587, 2001.195679, 1547.113892, 14.283400, 0.0, 0.0, 96.0);

    new Float:x, Float:y, Float:z;
    GetObjectPos(objectid, x, y, z);
    // x = 2001.195679
    // y = 1547.113892
    // z = 14.283400
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
- [SetObjectRot](SetObjectRot): Define a rotação de um objeto.
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
