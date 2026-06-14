---
title: SetPlayerGravity
sidebar_label: SetPlayerGravity
description: "Defina a gravidade de um jogador."
tags: ["player"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Defina a gravidade de um jogador.

| Nome | Descrição |
| ------------- | ----------------------------------------------------------------- |
| playerid | O ID do jogador para definir a gravidade.                          |
| Float:gravity | O valor em que a gravidade deve ser definida (entre -50 e 50). |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. O jogador especificado não existe.

## Exemplos

```c
public OnPlayerConnect(playerid)
{
    // Definir gravidade semelhante à da lua
    SetPlayerGravity(playerid, 0.001);

    return 1;
}
```
## Notas

:::warning

A gravidade padrão é 0,008.

:::

## Funções Relacionadas

- [GetPlayerGravity](GetPlayerGravity): Obtenha a gravidade de um jogador.
- [SetGravity](SetGravity): Defina a gravidade para todos os jogadores.
- [GetGravity](GetGravity): Obtenha a gravidade global atual.
