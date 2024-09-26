---
title: CreateVehicle
description: Cria um veículo no mundo.
tags: ["vehicle"]
---

## Descrição

Cria um veículo no mundo. Pode ser usado no lugar de AddStaticVehicleEx a qualquer momento no script.

| Nome                                   | Descrição                                                                                                          |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| [modelid](../resources/vehicleid)      | O modelo do veículo.                                                                                           |
| Float:spawnX                           | A coordenada X do veículo.                                                                                    |
| Float:spawnY                           | A coordenada Y do veículo.                                                                                    |
| Float:spawnZ                           | A coordenada Z do veículo.                                                                                    |
| Float:angle                            | O ângulo de direçao do veículo.                                                                                    |
| [colour1](../resources/vehiclecolorid) | O ID da cor primária.                                                                                                |
| [colour2](../resources/vehiclecolorid) | O ID da cor secundária.                                                                                              |
| respawnDelay                           | O tempo de espera até que o veículo reapareça sem um motorista, em segundos. Usar -1 impedirá que o veículo reapareça. |
| bool:addSiren                          | Possui um valor padrão 'falso'. Permite que o veículo tenha uma sirene, desde que o veículo possua uma buzina.                  |

## Retornos

O ID do veículo criado (1 até MAX_VEHICLES).

INVALID_VEHICLE_ID (65535) se o veículo não for criado (limite de veículos atingido ou modelo de veículo inválido).

0 se o veículo não for criado (IDs 538 ou 537 passado, que são trens).

## Exemplos

```c
public OnGameModeInit()
{
    // Adiciona um Hydra (520) ao jogo com um tempo de reaparecimento de 60 segundos
    CreateVehicle(520, 2109.1763, 1503.0453, 32.2887, 82.2873, -1, -1, 60);
    return 1;
}
```

## Notas

:::warning

Trens só podem ser adicionados com [AddStaticVehicle](AddStaticVehicle) e [AddStaticVehicleEx](AddStaticVehicleEx).

:::

## Funções Relacionadas

- [DestroyVehicle](DestroyVehicle): Destrói o veículo.
- [AddStaticVehicle](AddStaticVehicle): Adiciona um veículo estático.
- [AddStaticVehicleEx](AddStaticVehicleEx): Adiciona um veículo estático com tempo de reaparecimento customizado.
- [GetVehicleParamsSirenState](GetVehicleParamsSirenState): Verifique se a sirene de um veículo está ligada ou desligada.
- [SetVehicleSpawnInfo](SetVehicleSpawnInfo): Ajusta o modelo, local de aparecimento, cores, tempo de reaparecimento e interior de um veículo.
- [GetVehicleSpawnInfo](GetVehicleSpawnInfo): Obtém local de aparecimento e cores de um veículo. 
- [ChangeVehicleColours](ChangeVehicleColours): Altera as cores primária e secundária de um veículo.
- [GetVehicleColours](GetVehicleColours): Obtém as cores de um veículo.
- [SetVehicleRespawnDelay](SetVehicleRespawnDelay): Define o tempo de reaparecimento de um veículo.
- [GetVehicleRespawnDelay](GetVehicleRespawnDelay): Obtém o tempo de reaparecimento de um veículo.

## Callbacks Relacionadas

- [OnVehicleSpawn](../callbacks/OnVehicleSpawn): Chamada quando um veículo reaparece.
- [OnVehicleSirenStateChange](../callbacks/OnVehicleSirenStateChange): Chamando quando um veículo alterna a sirene ligada/desligada.

## Recursos Relacionados

- [Vehicle Models](../resources/vehicleid): Lista abrangente de todos os modelos de veículos disponíveis no jogo.
- [Vehicle Colour IDs](../resources/vehiclecolorid): Lista de todos os IDs de cores de veículos.
