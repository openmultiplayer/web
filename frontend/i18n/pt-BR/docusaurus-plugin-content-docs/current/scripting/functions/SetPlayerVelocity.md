---
title: SetPlayerVelocity
sidebar_label: SetPlayerVelocity
description: "Defina a velocidade de um jogador nos eixos X, Y e Z."
tags: ["player"]
---


## Descrição

Defina a velocidade de um jogador nos eixos X, Y e Z.

| Nome | Descrição |
| -------- | ----------------------------------- |
| playerid | O jogador ao qual aplicar a velocidade.   |
| Float:x | A velocidade (velocidade) no eixo X. |
| Float:y | A velocidade (velocidade) no eixo Y. |
| Float:z | A velocidade (velocidade) no eixo Z. |

## Retornos

**true** – A função foi executada com sucesso.

**false** - Falha na execução da função. Isso significa que o jogador não está conectado.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/jump", cmdtext))
    {
        SetPlayerVelocity(playerid, 0.0, 0.0, 0.2); // Força o jogador a pular (velocidade Z + 0.2)
        return 1;
    }
    return 0;
}
```
## Funções Relacionadas

- [GetPlayerVelocity](GetPlayerVelocity): Obtenha a velocidade de um jogador.
- [SetVehicleVelocity](SetVehicleVelocity): Defina a velocidade de um veículo.
- [GetVehicleVelocity](GetVehicleVelocity): Obtenha a velocidade de um veículo.
