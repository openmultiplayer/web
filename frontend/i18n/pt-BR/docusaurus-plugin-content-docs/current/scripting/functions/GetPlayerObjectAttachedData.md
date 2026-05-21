---
title: GetPlayerObjectAttachedData
sidebar_label: GetPlayerObjectAttachedData
description: "Obtenha os dados de anexo de um objeto de jogador."
tags: ["player", "object", "playerobject"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha os dados de anexo de um objeto de jogador.

| Nome | Descrição |
| -------------- | ----------------------------------------------------------------------- |
| playerid | O ID do jogador |
| objectid | O ID do objeto player para obter os dados do anexo de |
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

GetPlayerObjectAttachedData(playerid, playerobjectid, parentVehicle, parentObject, parentPlayer);
```
## Funções Relacionadas

- [GetPlayerObjectAttachedOffset](GetPlayerObjectAttachedOffset): Obtenha o deslocamento do anexo e a rotação de um objeto do jogador.
- [GetObjectAttachedData](GetObjectAttachedData): Obtenha os dados de anexo de um objeto de jogador.
