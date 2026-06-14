---
title: GetObjectAttachedOffset
sidebar_label: GetObjectAttachedOffset
description: "Obtenha o deslocamento e a rotação do anexo de um objeto."
tags: ["object"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha o deslocamento e a rotação do anexo de um objeto.

| Nome | Descrição |
| ---------------- | --------------------------------------------------------------------------------- |
| objectid | O ID do objeto do qual obter o deslocamento e a rotação.                           |
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

GetObjectAttachedOffset(objectid, offsetX, offsetY, offsetZ, rotationX, rotationY, rotationZ);
```
## Funções Relacionadas

- [GetObjectAttachedData](GetObjectAttachedData): Obtenha os dados de anexo de um objeto.
- [GetPlayerObjectAttachedOffset](GetPlayerObjectAttachedOffset): Obtenha o deslocamento do anexo e a rotação de um objeto do jogador.
