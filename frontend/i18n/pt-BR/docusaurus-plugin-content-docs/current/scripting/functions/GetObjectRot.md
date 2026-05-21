---
title: GetObjectRot
sidebar_label: GetObjectRot
description: "Use esta função para obter a rotação atual dos objetos."
tags: ["object"]
---


## Descrição

Use esta função para obter a rotação atual dos objetos. A rotação é salva por referência em três variáveis ​​de rotaçãoX/rotaçãoY/rotaçãoZ.

| Nome | Descrição |
| ---------------- | ------------------------------------------------------------- |
| objectid | O objectid do objeto do qual você deseja obter a rotação. |
| &Float:rotationX | A variável para armazenar a rotação X, passada por referência.    |
| &Float:rotationY | A variável para armazenar a rotação Y, passada por referência.    |
| &Float:rotationZ | A variável para armazenar a rotação Z, passada por referência.    |

## Retornos

A rotação do objeto é armazenada nas variáveis referenciadas, não no valor de retorno.

## Exemplos

```c
public OnGameModeInit()
{
    new objectid = CreateObject(652, 732.32690, 1940.21289, 4.27340, 357.00000, 0.00000, -76.00000);

    new Float:rotationX, Float:rotationY, Float:rotationZ;
    GetObjectRot(objectid, rotationX, rotationY, rotationZ);
    // rotaçãoX = 357,00000
    // rotaçãoY = 0,00000
    // rotaçãoZ = -76,00000
    return 1;
}
```
## Funções Relacionadas

- [GetObjectPos](GetObjectPos): Localize um objeto.
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
