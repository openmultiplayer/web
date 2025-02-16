---
title: OnUnoccupiedVehicleUpdate
sidebar_label: OnUnoccupiedVehicleUpdate
description: Essa callback é executada quando o cliente do jogador faz o update/sincroniza a posição de um veículo no qual o mesmo não está dirigindo.
tags: ["vehicle"]
---

## Descrição

Essa callback é executada quando o cliente do jogador faz o update/sincroniza a posição de um veículo no qual o mesmo não está dirigindo.

| Nome           | Descrição                                                                                                                                                                                                     |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| vehicleid      | ID do veículo que teve sua posição atualizada/sincronizada.                                                                                                                                                   |
| playerid       | ID do jogador que fez o pedido para atualizar/sincronizar o veículo.                                                                                                                                          |
| passenger_seat | ID dos assentos, caso o jogador seja um passageiro. 0=não está no veículo, 1=passageiro frontal, 2=traseiro esquerda, 3=traseiro direita, 4+ caso o veículo seja um ônibus etc. com a quantidade de assentos. |
| new_x          | Nova coordenada X do veículo.                                                                                              |
| new_y          | Nova coordenada Y do veículo.                                                                                              |
| new_z          | Nova coordenada Z do veículo.                                                                                               |
| vel_x          | Nova velocidade X do veículo.                                                                                             |
| vel_y          | Nova velocidade Y do veículo.                                                                                             |
| vel_z          | Nova velocidade Z do veículo.                                                                                             |

## Retornos

Sempre execurada primeiro nos filterscripts, retorne 0 para impedir que outros scripts a vejam.

## Exemplos

```c
public OnUnoccupiedVehicleUpdate(vehicleid, playerid, passenger_seat, Float:new_x, Float:new_y, Float:new_z, Float:vel_x, Float:vel_y, Float:vel_z)
{
    // Verifica se o veículo está se movendo para longe
    if (GetVehicleDistanceFromPoint(vehicleid, new_x, new_y, new_z) > 50.0)
    {
        // Rejeita o update
        return 0;
    }

    return 1;
}
```

## Notas

:::warning

Essa callback é executada com frequência a cada segundo, por veículo não ocupado. Você deve evitar realizar grandes operações de gravação e leitura de arquivos. A função GetVehiclePos irá retornar coordenadas antigas da posição do veículo (antes do update).

:::
