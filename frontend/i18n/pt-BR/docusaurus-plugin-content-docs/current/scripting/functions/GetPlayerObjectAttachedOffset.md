---
title: GetPlayerObjectAttachedOffset
sidebar_label: GetPlayerObjectAttachedOffset
description: "Obtenha o deslocamento do anexo e a rotação de um objeto de jogador."
tags: ["player", "object", "playerobject"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha o deslocamento do anexo e a rotação de um objeto de jogador.

| Nome | Descrição |
| ---------------- | --------------------------------------------------------------------------------- |
| playerid | O ID do jogador.                                                             |
| objectid | O ID do objeto do jogador do qual obter o deslocamento e a rotação.                    |
| &Float:offsetX | Uma variável float na qual armazenar a coordenada offsetX, passada por referência.   |
| &Float:offsetY | Uma variável float na qual armazenar a coordenada offsetY, passada por referência.   |
| &Float:offsetZ | Uma variável float na qual armazenar a coordenada offsetZ, passada por referência.   |
| &Float:rotationX | Uma variável flutuante na qual armazenar a coordenada rotaçãoX, passada por referência. |
| &Float:rotationY | Uma variável flutuante na qual armazenar a coordenada de rotaçãoY, passada por referência. |
| &Float:rotationZ | Uma variável flutuante na qual armazenar a coordenada rotaçãoZ, passada por referência. |

## Retornos

`true` – A função foi executada com sucesso.

`false` - Falha na execução da função. O objeto especificado não existe.

## Exemplos

```c
new
    Float:offsetX,
    Float:offsetY,
    Float:offsetZ,
    Float:rotationX,
    Float:rotationY,
    Float:rotationZ;

GetPlayerObjectAttachedOffset(playerid, playerobjectid, offsetX, offsetY, offsetZ, rotationX, rotationY, rotationZ);
```
## Funções Relacionadas

- [GetPlayerObjectAttachedData](GetPlayerObjectAttachedData): Obtenha os dados de anexo de um objeto de jogador.
- [GetObjectAttachedOffset](GetObjectAttachedOffset): Obtenha o deslocamento do anexo e a rotação de um objeto.
