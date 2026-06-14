---
title: PlayerSpectateVehicle
sidebar_label: PlayerSpectateVehicle
description: "Define um jogador para assistir outro veículo."
tags: ["player", "vehicle"]
---


## Descrição

Define um jogador para assistir outro veículo. A câmera deles será acoplada ao veículo como se eles estivessem dirigindo.

| Nome | Descrição |
| ------------------ | -------------------------------------------------------------------------------------------------------- |
| playerid | O ID do jogador que deverá assistir um veículo.                                                      |
| targetvehicleid | O ID do veículo que o jogador deverá assistir.                                                        |
| SPECTATE_MODE:mode | O [modo] de espectador(../resources/spectatemodes). Geralmente pode ser deixado em branco, pois o padrão é 'normal'. |

## Retornos

**true** – A função foi executada com sucesso. Observe que o sucesso é relatado se o jogador não estiver no modo espectador (TogglePlayerSpectating), mas nada acontecerá. TogglePlayerSpectating MUST seja usado primeiro.

**false** - Falha na execução da função. O jogador, o veículo ou ambos não existem.

## Exemplos

```c
TogglePlayerSpectating(playerid, 1);
PlayerSpectateVehicle(playerid, vehicleid);
```
## Notas

:::warning

- O pedido é CRITICAL! Certifique-se de usar TogglePlayerSpectating antes de PlayerSpectateVehicle.
- O playerid e o veículo devem estar no mesmo mundo interior e virtual para que esta função funcione corretamente.

:::

## Funções Relacionadas

- [PlayerSpectatePlayer](PlayerSpectatePlayer): Espectar um jogador.
- [TogglePlayerSpectating](TogglePlayerSpectating): Iniciar ou parar de assistir.
- [GetPlayerSpectateID](GetPlayerSpectateID): Obtém o ID do jogador ou veículo que o jogador está assistindo (assistindo).
- [GetPlayerSpectateType](GetPlayerSpectateType): Obtém o tipo de espectador do jogador.

## Recursos relacionados

- [Modos de espectador](../resources/spectatemodes)
