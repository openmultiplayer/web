---
title: GetPlayerDistanceFromPoint
sidebar_label: GetPlayerDistanceFromPoint
description: "Calcule a distância entre um jogador e uma coordenada do mapa."
tags: ["player"]
---


## Descrição

Calcule a distância entre um jogador e uma coordenada do mapa.

| Nome | Descrição |
| -------- | ---------------------------------------------------- |
| playerid | O ID do jogador para calcular a distância. |
| Float:x | A coordenada do mapa X.                                |
| Float:y | A coordenada do mapa Y.                                |
| Float:z | A coordenada do mapa Z.                                |

## Retornos

A distância entre o jogador e o ponto como um flutuador.

## Exemplos

```c
/* quando o jogador digitar '/vend' na caixa de bate-papo, ele verá isso. */
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/vend", true) == 0)
    {
        new
            Float:distance = GetPlayerDistanceFromPoint(playerid, 237.9, 115.6, 1010.2),
            string[64];

        format(string, sizeof(string), "You're %0.2f meters away from the vending machine.", distance);
        SendClientMessage(playerid, 0xA9C4E4FF, string);
        return 1;
    }
    return 0;
}
```
## Funções Relacionadas

- [IsPlayerInRangeOfPoint](IsPlayerInRangeOfPoint): Verifica se um jogador está ao alcance de um ponto.
- [GetVehicleDistanceFromPoint](GetVehicleDistanceFromPoint): Obtenha a distância entre um veículo e um ponto.
- [GetPlayerPos](GetPlayerPos): Obtenha a posição de um jogador.
