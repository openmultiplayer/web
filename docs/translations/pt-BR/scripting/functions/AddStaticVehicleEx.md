---
title: AddStaticVehicleEx
description: Adiciona um veículo 'fixo' (modelos são pré-carregados para os jogadores) ao gamemode.
tags: ["vehicle"]
---

## Descrição

Adiciona um veículo 'fixo' (modelos são pré-carregados para os jogadores) ao gamemode. Diferente do [AddStaticVehicle](AddStaticVehicle) numa única maneira: permite re-spawnar após um tempo, quando o veículo estiver sem condutor.

| Nome          | Descrição                                                                                                                                                         |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| modelid       | O modelo ID para o veículo.                                                                                                                                       |
| Float:spawn_X | A coordenada-X para o veículo.                                                                                                                                    |
| Float:spawn_Y | A coordenada-Y para o veículo.                                                                                                                                    |
| Float:spawn_Z | A coordenada-Z para o veículo.                                                                                                                                    |
| Float:z_angle | Direção do veículo - Ângulo.                                                                                                                                      |
| color1        | O ID da [cor](../resources/vehiclecolorid) primária.                                                                                                              |
| color2        | O ID da [cor](../resources/vehiclecolorid) secundária.                                                                                                            |
| respawn_delay | O delay em segundos, em que o carro pode permanecer sem condutor antes de re-spawnar.                                                                             |
| addsiren      | Adicionado na 0.3.7; Não irá funcionar em versões anteriores. Tem um valor padrão de 0. Permite que o veículo tenha uma sirene, desde que o veículo tenha buzina. |

## Retorno

O ID do veículo criado (1 - MAX_VEHICLES).

INVALID_VEHICLE_ID (65535) caso o veículo não tenha sido criado (limite de veículos alcançado ou modelo inválido).

## Exemplos

```c
public OnGameModeInit()
{
    // Adiciona um Hydra (520) ao jogo, que irá re-spawnar 15 segundos após ser deixado.
    AddStaticVehicleEx (520, 2109.1763, 1503.0453, 32.2887, 82.2873, -1, -1, 15);

    return 1;
}
```

## Funções Relacionadas

- [AddStaticVehicle](AddStaticVehicle): Adiciona um veículo fixo.
- [CreateVehicle](CreateVehicle): Cria um veículo.
