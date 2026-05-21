---
title: IsPlayerInRangeOfPoint
sidebar_label: IsPlayerInRangeOfPoint
description: "Verifica se um jogador está ao alcance de um ponto."
tags: ["player"]
---


## Descrição

Verifica se um jogador está ao alcance de um ponto. Esta função nativa é mais rápida que a implementação PAWN usando a fórmula de distância.

| Nome | Descrição |
| ----------- | ---------------------------------------------------------------------- |
| playerid | O ID do jogador.                                                  |
| Float:range | A maior distância que o jogador pode estar do ponto ao alcance. |
| Float:x | A coordenada X do ponto para o qual verificar o intervalo.                   |
| Float:y | A coordenada Y do ponto para o qual verificar o intervalo.                   |
| Float:z | A coordenada Z do ponto para o qual verificar o intervalo.                   |

## Retornos

**true** – O jogador está ao alcance do ponto.

**false** - O jogador não está ao alcance do ponto.

## Exemplos

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/stadium", true))
    {
        if (IsPlayerInRangeOfPoint(playerid, 7.0, 2695.6880, -1704.6300, 11.8438))
        {
            SendClientMessage(playerid, 0xFFFFFFFF, "You are near the stadium entrance!");
        }
        return 1;
    }
    return 0;
}
```
## Funções Relacionadas

- [GetPlayerDistanceFromPoint](GetPlayerDistanceFromPoint): Obtenha a distância entre um jogador e um ponto.
- [GetVehicleDistanceFromPoint](GetVehicleDistanceFromPoint): Obtenha a distância entre um veículo e um ponto.
- [GetPlayerPos](GetPlayerPos): Obtenha a posição de um jogador.
