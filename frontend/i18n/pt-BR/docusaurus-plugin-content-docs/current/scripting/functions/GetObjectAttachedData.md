---
title: GetObjectAttachedData
sidebar_label: GetObjectAttachedData
description: "Obtenha os dados de anexo de um objeto."
tags: ["object"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha os dados de anexo de um objeto.

| Nome | Descrição |
| -------------- | ----------------------------------------------------------------------- |
| objectid | O ID do objeto para obter os dados de anexo de |
| &parentVehicle | Uma variável na qual armazenar o parentVehicle ID, passado por referência. |
| &parentObject | Uma variável na qual armazenar o parentObject ID, passado por referência.  |
| &parentPlayer | Uma variável na qual armazenar o parentPlayer ID, passado por referência.  |

## Retornos

`true` – A função foi executada com sucesso.

`false` - Falha na execução da função. O objeto especificado não existe.

## Exemplos

```c
new
    parentVehicle,
    parentObject,
    parentPlayer;

GetObjectAttachedData(objectid, parentVehicle, parentObject, parentPlayer);
```
## Funções Relacionadas

- [GetObjectAttachedOffset](GetObjectAttachedOffset): Obtenha o deslocamento do anexo e a rotação de um objeto.
- [GetPlayerObjectAttachedData](GetPlayerObjectAttachedData): Obtenha os dados de anexo de um objeto de jogador.
