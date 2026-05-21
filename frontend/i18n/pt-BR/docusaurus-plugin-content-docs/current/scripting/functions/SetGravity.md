---
title: SetGravity
sidebar_label: SetGravity
description: "Defina a gravidade para todos os jogadores."
tags: []
---


## Descrição

Defina a gravidade para todos os jogadores.

| Nome | Descrição |
| ------------- | --------------------------------------------------------------------- |
| Float:gravity | O valor em que a gravidade deve ser definida (entre -50,0 e 50,0). |

## Retornos

Esta função sempre retorna 1, mesmo quando falha na execução se a gravidade estiver fora dos limites (menor que -50,0 ou maior que +50,0).

## Exemplos

```c
public OnGameModeInit()
{
    // Definir gravidade semelhante à da lua
    SetGravity(0.001);

    return 1;
}
```
## Notas

:::warning

A gravidade padrão é 0,008.

:::

## Funções Relacionadas

- [GetGravity](GetGravity): Obtenha a gravidade atualmente definida.
- [SetPlayerGravity](SetPlayerGravity): Define a gravidade de um jogador.
- [SetWeather](SetWeather): Defina o clima global.
- [SetWorldTime](SetWorldTime): Defina a hora global do servidor.
