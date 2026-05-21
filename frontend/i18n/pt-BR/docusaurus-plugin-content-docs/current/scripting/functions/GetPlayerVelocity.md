---
title: GetPlayerVelocity
sidebar_label: GetPlayerVelocity
description: "Obtenha a velocidade (velocidade) de um jogador nos eixos X, Y e Z."
tags: ["player"]
---


## Descrição

Obtenha a velocidade (velocidade) de um jogador nos eixos X, Y e Z.

| Nome | Descrição |
| -------- | ----------------------------------------------------------------------------------- |
| playerid | O jogador do qual obter a velocidade.                                                   |
| &Float:x | Uma variável flutuante na qual armazenar a velocidade no eixo X, passada por referência. |
| &Float:y | Uma variável flutuante na qual armazenar a velocidade no eixo Y, passada por referência. |
| &Float:z | Uma variável flutuante na qual armazenar a velocidade no eixo Z, passada por referência. |

## Retornos

A função em si não retorna um valor específico. As velocidades X, Y e Z são armazenadas nas variáveis ​​especificadas.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/velocity", true))
    {
        new
            Float:x, Float:y, Float:z,
            string[128];

        GetPlayerVelocity(playerid, x, y, z);

        format(string, sizeof(string), "You are going at a velocity of X: %f, Y: %f, Z: %f", x, y, z);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
        return 1;
    }
}
```
## Funções Relacionadas

- [SetPlayerVelocity](SetPlayerVelocity): Define a velocidade de um jogador.
- [SetVehicleVelocity](SetVehicleVelocity): Defina a velocidade de um veículo.
- [GetVehicleVelocity](GetVehicleVelocity): Obtenha a velocidade de um veículo.
