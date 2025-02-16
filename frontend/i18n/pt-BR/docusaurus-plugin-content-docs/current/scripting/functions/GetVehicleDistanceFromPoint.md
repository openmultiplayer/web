---
title: GetVehicleDistanceFromPoint
description: Esta função pode ser usada para calcular a distância (como um float) entre um veículo e outra coordenada do mapa.
tags: ["vehicle"]
---

## Descrição

Esta função pode ser usada para calcular a distância (como um float) entre um veículo e outra coordenada do mapa. Isso pode ser útil para detectar quão longe um veículo está de um local.

| Nome      | Descrição                                          |
| --------- | -------------------------------------------------- |
| vehicleid | O ID do veículo para calcular a distância.        |
| Float:x   | A coordenada X do mapa.                           |
| Float:y   | A coordenada Y do mapa.                           |
| Float:z   | A coordenada Z do mapa.                           |

## Retornos

Um float contendo a distância do ponto especificado nas coordenadas.

## Exemplos

```c
/* quando o jogador digitar 'vendingmachine' na caixa de chat, ele verá isso.*/
public OnPlayerText(playerid, text[])
{
    if (strcmp(text, "vendingmachine", true) == 0)
    {
        new
            string[64],
            vehicleid = GetPlayerVehicleID(playerid);
        
        new
            Float:distance = GetVehicleDistanceFromPoint(vehicleid, 237.9, 115.6, 1010.2);

        format(string, sizeof(string), "Você está a %.2f de nossa máquina de vendas.", distance);
        SendClientMessage(playerid, 0xA9C4E4FF, string);
    }
    return 0;
}
```

## Funções Relacionadas

- [GetPlayerDistanceFromPoint](GetPlayerDistanceFromPoint): Obtém a distância entre um jogador e um ponto.
- [GetVehiclePos](GetVehiclePos): Obtém a posição de um veículo.
