---
title: AddStaticVehicle
description: Adiciona um veículo 'fixo' (modelos são pré-carregados para os jogadores) ao gamemode.
tags: ["vehicle"]
---

## Descrição

Adiciona um veículo 'fixo' (modelos são pré-carregados para os jogadores) ao gamemode.

| Name          | Descrição                                                                 |
| ------------- | ------------------------------------------------------------------------- |
| modelid       | O modelo ID para o veículo.                                               |
| Float:spawn_X | A coordenada-X para o veículo.                                            |
| Float:spawn_Y | A coordenada-Y para o veículo.                                            |
| Float:spawn_Z | A coordenada-Z para o veículo.                                            |
| Float:z_angle | Direção do veículo - Ângulo.                                              |
| color1        | O ID da [cor](../resources/vehiclecolorid) primária. -1 para aleatório.   |
| color2        | O ID da [cor](../resources/vehiclecolorid) secundária. -1 para aleatório. |

## Retorno

O ID do veículo criado (entre 1 e MAX_VEHICLES).

INVALID_VEHICLE_ID (65535) caso o veículo não tenha sido criado (limite de veículos alcançado ou modelo inválido).

## Exemplos

```c
public OnGameModeInit()
{
    // Adiciona um Hydra ao jogo
    AddStaticVehicle(520, 2109.1763, 1503.0453, 32.2887, 82.2873, 0, 1);

    return 1;
}
```

## Funções Relacionadas

- [AddStaticVehicleEx](AddStaticVehicleEx): Adiciona um veículo fixo com tempo de respawn específico.
- [CreateVehicle](CreateVehicle): Cria um veículo.
- [DestroyVehicle](DestroyVehicle): Destrói um veículo.
